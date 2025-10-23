/**
 * Technical Skills Component
 * Visual representation of technical skills with proficiency indicators
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', level: 85, category: 'Frontend', icon: '▲' },
  { name: 'TypeScript', level: 88, category: 'Frontend', icon: '📘' },
  { name: 'JavaScript', level: 92, category: 'Frontend', icon: '🟨' },
  { name: 'HTML5', level: 95, category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', level: 90, category: 'Frontend', icon: '🎨' },
  { name: 'Tailwind CSS', level: 93, category: 'Frontend', icon: '💨' },
  { name: 'shadcn/ui', level: 87, category: 'Frontend', icon: '🎭' },
  { name: 'Responsive Design', level: 92, category: 'Frontend', icon: '📱' },

  // Backend
  { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢' },
  { name: 'Express', level: 83, category: 'Backend', icon: '🚂' },
  { name: 'REST APIs', level: 88, category: 'Backend', icon: '🔌' },
  { name: 'Python', level: 78, category: 'Backend', icon: '🐍' },
  { name: 'Django', level: 75, category: 'Backend', icon: '🎸' },

  // Databases
  { name: 'PostgreSQL', level: 80, category: 'Databases', icon: '🐘' },
  { name: 'MongoDB', level: 82, category: 'Databases', icon: '🍃' },
  { name: 'SQL', level: 83, category: 'Databases', icon: '💾' },

  // Tools & DevOps
  { name: 'Git', level: 90, category: 'Tools', icon: '📚' },
  { name: 'GitHub', level: 92, category: 'Tools', icon: '🐙' },
  { name: 'VS Code', level: 95, category: 'Tools', icon: '💻' },
  { name: 'Vite', level: 88, category: 'Tools', icon: '⚡' },
  { name: 'npm', level: 90, category: 'Tools', icon: '📦' },
  { name: 'Docker', level: 70, category: 'Tools', icon: '🐳' },

  // Other
  { name: 'Stripe Integration', level: 80, category: 'Other', icon: '💳' },
  { name: 'State Management (Zustand)', level: 85, category: 'Other', icon: '🐻' },
  { name: 'Performance Optimization', level: 82, category: 'Other', icon: '⚡' },
  { name: 'Accessibility (a11y)', level: 80, category: 'Other', icon: '♿' },
  { name: 'SEO', level: 78, category: 'Other', icon: '🔍' },
];

const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Tools', 'Other'];

export function TechnicalSkills() {
  return (
    <Tabs defaultValue="All" className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category} value={category} className="mt-6">
          <SkillsGrid category={category === 'All' ? null : category} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

interface SkillsGridProps {
  category: string | null;
}

function SkillsGrid({ category }: SkillsGridProps) {
  const filteredSkills = category
    ? skills.filter((skill) => skill.category === category)
    : skills;

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([cat, categorySkills]) => (
        <Card key={cat}>
          <CardHeader>
            <CardTitle>{cat}</CardTitle>
            <CardDescription>
              {getCategoryDescription(cat)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {categorySkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

interface SkillItemProps {
  skill: Skill;
}

function SkillItem({ skill }: SkillItemProps) {
  const proficiencyLabel = getProficiencyLabel(skill.level);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {skill.icon && <span className="text-xl">{skill.icon}</span>}
          <span className="font-medium">{skill.name}</span>
        </div>
        <Badge variant={skill.level >= 85 ? 'default' : 'secondary'}>
          {proficiencyLabel}
        </Badge>
      </div>
      <div className="space-y-1">
        <Progress value={skill.level} className="h-2" />
        <p className="text-xs text-muted-foreground text-right">{skill.level}%</p>
      </div>
    </div>
  );
}

function getProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Intermediate';
  if (level >= 50) return 'Proficient';
  return 'Beginner';
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    Frontend: 'Building responsive and interactive user interfaces',
    Backend: 'Server-side development and API creation',
    Databases: 'Data modeling and database management',
    Tools: 'Development tools and version control',
    Other: 'Additional skills and integrations',
  };
  return descriptions[category] || '';
}

// Compact version for homepage
export function TechnicalSkillsCompact() {
  const topSkills = skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 12);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Core Technologies</CardTitle>
        <CardDescription>My primary technology stack</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {topSkills.map((skill) => (
            <Badge
              key={skill.name}
              variant={skill.level >= 85 ? 'default' : 'secondary'}
              className="text-sm py-1 px-3"
            >
              {skill.icon && <span className="mr-1">{skill.icon}</span>}
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Skills Overview for quick glance
export function SkillsOverview() {
  const categoryStats = categories
    .filter((cat) => cat !== 'All')
    .map((category) => {
      const categorySkills = skills.filter((s) => s.category === category);
      const avgLevel =
        categorySkills.reduce((sum, s) => sum + s.level, 0) / categorySkills.length;
      return {
        category,
        count: categorySkills.length,
        avgLevel: Math.round(avgLevel),
      };
    });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {categoryStats.map((stat) => (
        <Card key={stat.category}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">{stat.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.count}</div>
            <Progress value={stat.avgLevel} className="mt-2 h-1" />
            <p className="text-xs text-muted-foreground mt-1">
              {stat.avgLevel}% proficiency
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
