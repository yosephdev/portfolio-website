/**
 * GitHub API Service
 * Handles all GitHub API interactions with caching and rate limiting
 */

import type {
  GitHubRepository,
  GitHubUser,
  GitHubStats,
  GitHubLanguage,
  CachedData,
  GitHubError,
} from '@/types/github';

const GITHUB_API_BASE = 'https://api.github.com';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
const GITHUB_USERNAME = 'yosephdev';

// In-memory cache
const cache = new Map<string, CachedData<any>>();

/**
 * Generic fetch function with error handling
 */
async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const cacheKey = endpoint;
  const cachedData = cache.get(cacheKey);

  // Return cached data if still valid
  if (cachedData && Date.now() < cachedData.expiresAt) {
    return cachedData.data as T;
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        // Add token if available in environment
        ...(import.meta.env.VITE_GITHUB_TOKEN && {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        }),
      },
    });

    if (!response.ok) {
      const error: GitHubError = await response.json();
      throw new Error(error.message || `GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    // Cache the response
    cache.set(cacheKey, {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + CACHE_DURATION,
    });

    return data as T;
  } catch (error) {
    console.error('GitHub API Error:', error);
    throw error;
  }
}

/**
 * Get user information
 */
export async function getGitHubUser(username: string = GITHUB_USERNAME): Promise<GitHubUser> {
  return fetchGitHub<GitHubUser>(`/users/${username}`);
}

/**
 * Get user repositories
 */
export async function getGitHubRepositories(
  username: string = GITHUB_USERNAME,
  options: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    type?: 'all' | 'owner' | 'member';
  } = {}
): Promise<GitHubRepository[]> {
  const { sort = 'updated', direction = 'desc', per_page = 100, type = 'owner' } = options;
  const queryParams = new URLSearchParams({
    sort,
    direction,
    per_page: per_page.toString(),
    type,
  });

  return fetchGitHub<GitHubRepository[]>(`/users/${username}/repos?${queryParams}`);
}

/**
 * Get languages for a repository
 */
export async function getRepositoryLanguages(
  username: string,
  repo: string
): Promise<GitHubLanguage> {
  return fetchGitHub<GitHubLanguage>(`/repos/${username}/${repo}/languages`);
}

/**
 * Calculate comprehensive GitHub stats
 */
export async function getGitHubStats(username: string = GITHUB_USERNAME): Promise<GitHubStats> {
  try {
    const [user, repos] = await Promise.all([
      getGitHubUser(username),
      getGitHubRepositories(username),
    ]);

    // Filter out forked repositories for stats
    const originalRepos = repos.filter((repo) => !repo.fork);

    // Calculate total stars and forks
    const totalStars = originalRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = originalRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

    // Calculate top languages
    const languageCount: { [key: string]: number } = {};
    originalRepos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
    });

    const totalWithLanguage = Object.values(languageCount).reduce((a, b) => a + b, 0);
    const topLanguages = Object.entries(languageCount)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalWithLanguage) * 100),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    // Calculate contribution streak (simplified - based on recent pushes)
    const recentRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
    
    const contributionStreak = calculateStreak(recentRepos);

    return {
      totalRepos: user.public_repos,
      totalStars,
      totalForks,
      topLanguages,
      contributionStreak,
      publicGists: user.public_gists,
      followers: user.followers,
      following: user.following,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
}

/**
 * Calculate contribution streak from repository push dates
 */
function calculateStreak(repos: GitHubRepository[]): number {
  if (repos.length === 0) return 0;

  const pushDates = repos
    .map((repo) => new Date(repo.pushed_at))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 1;
  const today = new Date();
  const dayInMs = 24 * 60 * 60 * 1000;

  for (let i = 0; i < pushDates.length - 1; i++) {
    const diff = Math.abs(pushDates[i].getTime() - pushDates[i + 1].getTime());
    const daysDiff = Math.floor(diff / dayInMs);

    if (daysDiff <= 7) {
      // Consider active if pushed within 7 days
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Get featured repositories (curated best repos)
 */
export async function getFeaturedRepositories(
  username: string = GITHUB_USERNAME
): Promise<GitHubRepository[]> {
  const repos = await getGitHubRepositories(username);

  // List of best repositories to feature (prioritized order)
  const featuredRepoNames = [
    'klyrform',           // Product Hunt launched SaaS
    'ecopaws-harmony',     // Acquisition target
    'afelu-marketplace',     // AI tools marketplace
    'limoflow',             // White-label SaaS
    'portfolio-website',     // Current portfolio
    'tigray-tutor-ai',      // Educational AI platform
  ];

  // Filter for featured repos: prioritize our curated list
  const featuredRepos = repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        repo.description &&
        (featuredRepoNames.includes(repo.name) || 
         (repo.topics.length > 0 && repo.stargazers_count >= 1))
    )
    .sort((a, b) => {
      // Prioritize curated repos first
      const aIndex = featuredRepoNames.indexOf(a.name);
      const bIndex = featuredRepoNames.indexOf(b.name);
      
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      
      // For non-curated repos, sort by stars
      return b.stargazers_count - a.stargazers_count;
    });

  return featuredRepos.slice(0, 6);
}

/**
 * Get pinned repositories using GraphQL (requires token)
 */
export async function getPinnedRepositories(
  username: string = GITHUB_USERNAME
): Promise<GitHubRepository[]> {
  // Fallback to featured repos if no token available
  if (!import.meta.env.VITE_GITHUB_TOKEN) {
    return getFeaturedRepositories(username);
  }

  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
              }
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      return getFeaturedRepositories(username);
    }

    // Transform GraphQL response to match REST API format
    const pinnedRepos = result.data.user.pinnedItems.nodes.map((node: any) => ({
      name: node.name,
      description: node.description,
      html_url: node.url,
      stargazers_count: node.stargazerCount,
      forks_count: node.forkCount,
      language: node.primaryLanguage?.name || null,
      topics: node.repositoryTopics.nodes.map((t: any) => t.topic.name),
    }));

    return pinnedRepos;
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return getFeaturedRepositories(username);
  }
}

/**
 * Clear the cache (useful for testing or forced refresh)
 */
export function clearGitHubCache(): void {
  cache.clear();
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  };
}
