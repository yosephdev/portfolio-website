/**
 * GitHub Stats Component
 * Displays GitHub statistics including repos, stars, and contribution activity
 */

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Github, Star, GitFork, Code2, TrendingUp, Users, BookOpen } from 'lucide-react';
import { getGitHubStats, getGitHubUser } from '@/services/github.service';
import type { GitHubStats as GitHubStatsType, GitHubUser } from '@/types/github';

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsType | null>(null);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        setError(null);
        const [statsData, userData] = await Promise.all([
          getGitHubStats(),
          getGitHubUser(),
        ]);
        setStats(statsData);
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load GitHub stats');
        console.error('Error loading GitHub stats:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <GitHubStatsLoader />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          {error}. GitHub stats are temporarily unavailable.
        </AlertDescription>
      </Alert>
    );
  }

  if (!stats || !user) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* User Profile Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.name || user.login}
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
            <div>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                {user.name || user.login}
              </CardTitle>
              <CardDescription>@{user.login}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {user.bio && <p className="text-muted-foreground mb-4">{user.bio}</p>}
          <div className="flex flex-wrap gap-2">
            {user.location && (
              <Badge variant="secondary">📍 {user.location}</Badge>
            )}
            {user.company && (
              <Badge variant="secondary">🏢 {user.company}</Badge>
            )}
            {user.blog && (
              <Badge variant="secondary">
                <a href={user.blog} target="_blank" rel="noopener noreferrer">
                  🔗 Website
                </a>
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          icon={<Code2 className="h-4 w-4" />}
          title="Public Repositories"
          value={stats.totalRepos}
          description="Open source projects"
        />
        <StatsCard
          icon={<Star className="h-4 w-4" />}
          title="Total Stars"
          value={stats.totalStars}
          description="Across all repositories"
        />
        <StatsCard
          icon={<GitFork className="h-4 w-4" />}
          title="Total Forks"
          value={stats.totalForks}
          description="By the community"
        />
        <StatsCard
          icon={<TrendingUp className="h-4 w-4" />}
          title="Contribution Streak"
          value={stats.contributionStreak}
          description="Recent activity"
        />
      </div>

      {/* Additional Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          icon={<Users className="h-4 w-4" />}
          title="Followers"
          value={stats.followers}
          description="GitHub followers"
        />
        <StatsCard
          icon={<Users className="h-4 w-4" />}
          title="Following"
          value={stats.following}
          description="Following developers"
        />
        <StatsCard
          icon={<BookOpen className="h-4 w-4" />}
          title="Gists"
          value={stats.publicGists}
          description="Code snippets shared"
        />
      </div>

      {/* Top Languages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Languages</CardTitle>
          <CardDescription>Most used programming languages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.topLanguages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">
                    {lang.count} repos ({lang.percentage}%)
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  description: string;
}

function StatsCard({ icon, title, value, description }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function GitHubStatsLoader() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-12 w-full mb-4" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-24" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-2 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
