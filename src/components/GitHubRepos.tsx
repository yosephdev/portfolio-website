/**
 * GitHub Repositories Component
 * Displays GitHub repositories with filtering and detailed information
 */

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, GitFork, Eye, ExternalLink, Github, Calendar } from 'lucide-react';
import { getFeaturedRepositories, getGitHubRepositories } from '@/services/github.service';
import type { GitHubRepository } from '@/types/github';
import { formatDistanceToNow } from 'date-fns';

interface GitHubReposProps {
  filter?: 'all' | 'featured' | 'popular';
  limit?: number;
  showTabs?: boolean;
}

export function GitHubRepos({ filter = 'featured', limit, showTabs = true }: GitHubReposProps) {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState(filter);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

        let reposData: GitHubRepository[];

        if (activeFilter === 'featured') {
          reposData = await getFeaturedRepositories();
        } else if (activeFilter === 'popular') {
          const allRepos = await getGitHubRepositories();
          reposData = allRepos
            .filter((repo) => !repo.fork && !repo.archived)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else {
          reposData = await getGitHubRepositories();
        }

        if (limit) {
          reposData = reposData.slice(0, limit);
        }

        setRepos(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load repositories');
        console.error('Error loading repositories:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [activeFilter, limit]);

  if (loading) {
    return <GitHubReposLoader />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          {error}. GitHub repositories are temporarily unavailable.
        </AlertDescription>
      </Alert>
    );
  }

  if (!repos.length) {
    return (
      <Alert>
        <AlertDescription>No repositories found.</AlertDescription>
      </Alert>
    );
  }

  const content = (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );

  if (!showTabs) {
    return content;
  }

  return (
    <Tabs defaultValue={filter} onValueChange={(value) => setActiveFilter(value as any)}>
      <TabsList className="grid w-full max-w-md grid-cols-3">
        <TabsTrigger value="featured">Featured</TabsTrigger>
        <TabsTrigger value="popular">Popular</TabsTrigger>
        <TabsTrigger value="all">All Repos</TabsTrigger>
      </TabsList>
      <TabsContent value={activeFilter} className="mt-6">
        {content}
      </TabsContent>
    </Tabs>
  );
}

interface RepoCardProps {
  repo: GitHubRepository;
}

function RepoCard({ repo }: RepoCardProps) {
  const lastUpdated = formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true });

  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span className="line-clamp-1">{repo.name}</span>
          <Github className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        </CardTitle>
        <CardDescription className="line-clamp-2 min-h-[40px]">
          {repo.description || 'No description provided'}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        {/* Topics/Tags */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {repo.topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{repo.topics.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {repo.language && (
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span>{repo.language}</span>
            </div>
          )}
          {repo.stargazers_count > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repo.stargazers_count}</span>
            </div>
          )}
          {repo.forks_count > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repo.forks_count}</span>
            </div>
          )}
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-4">
          <Calendar className="h-3 w-3" />
          <span>Updated {lastUpdated}</span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild variant="default" size="sm" className="flex-1">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
        </Button>
        {repo.homepage && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

function GitHubReposLoader() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="flex flex-col">
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-14" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Skeleton className="h-9 flex-1" />
            <Skeleton className="h-9 flex-1" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
