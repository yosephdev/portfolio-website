/**
 * GitHub API Types
 * Type definitions for GitHub REST API v3 responses
 */

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  open_issues_count: number;
  default_branch: string;
  private: boolean;
  fork: boolean;
  archived: boolean;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubContributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface GitHubLanguage {
  [language: string]: number;
}

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { name: string; count: number; percentage: number }[];
  contributionStreak: number;
  publicGists: number;
  followers: number;
  following: number;
}

export interface GitHubContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubError {
  message: string;
  documentation_url?: string;
  status?: number;
}

export interface CachedData<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

export type GitHubRepoFilter = 'all' | 'pinned' | 'featured' | 'popular';

export interface ProjectMetadata {
  featured?: boolean;
  pinnedOrder?: number;
  liveUrl?: string;
  screenshots?: string[];
  challenges?: string[];
  learnings?: string[];
  duration?: string;
  role?: string;
}
