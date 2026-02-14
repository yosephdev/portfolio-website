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
  { name: 'Vite', level: 88, category: 'Frontend', icon: '⚡' },
  { name: 'Tailwind CSS', level: 93, category: 'Frontend', icon: '💨' },
  { name: 'shadcn/ui', level: 87, category: 'Frontend', icon: '�' },
  { name: 'Framer Motion', level: 75, category: 'Frontend', icon: '🎬' },

  // Backend & APIs
  { name: 'Django', level: 75, category: 'Backend & APIs', icon: '🎸' },
  { name: 'Node.js', level: 85, category: 'Backend & APIs', icon: '🟢' },
  { name: 'Express', level: 83, category: 'Backend & APIs', icon: '🚂' },
  { name: 'REST APIs', level: 88, category: 'Backend & APIs', icon: '🔌' },
  { name: 'Serverless Functions', level: 80, category: 'Backend & APIs', icon: '⚡' },

  // Databases
  { name: 'PostgreSQL', level: 80, category: 'Databases', icon: '🐘' },
  { name: 'MySQL', level: 78, category: 'Databases', icon: '�' },
  { name: 'MongoDB', level: 82, category: 'Databases', icon: '🍃' },
  { name: 'Firebase', level: 70, category: 'Databases', icon: '�' },

  // DevOps & Analytics
  { name: 'Netlify', level: 90, category: 'DevOps & Analytics', icon: '🌐' },
  { name: 'Vercel', level: 85, category: 'DevOps & Analytics', icon: '▲' },
  { name: 'AWS', level: 70, category: 'DevOps & Analytics', icon: '☁️' },
  { name: 'CI/CD (GitHub Actions)', level: 82, category: 'DevOps & Analytics', icon: '🔄' },
  { name: 'Google Analytics', level: 78, category: 'DevOps & Analytics', icon: '�' },

  // Commerce & Growth
  { name: 'Stripe', level: 80, category: 'Commerce & Growth', icon: '💳' },
  { name: 'Klarna', level: 75, category: 'Commerce & Growth', icon: '💰' },
  { name: 'SEO', level: 78, category: 'Commerce & Growth', icon: '🔍' },
  { name: 'Conversion Optimization', level: 75, category: 'Commerce & Growth', icon: '�' },
  { name: 'Email Marketing', level: 70, category: 'Commerce & Growth', icon: '📧' },

  // Tools & Foundation
  { name: 'Git', level: 90, category: 'Tools & Foundation', icon: '📚' },
  { name: 'GitHub', level: 92, category: 'Tools & Foundation', icon: '🐙' },
  { name: 'VS Code', level: 95, category: 'Tools & Foundation', icon: '💻' },
  { name: 'npm', level: 90, category: 'Tools & Foundation', icon: '📦' },
  { name: 'Docker', level: 70, category: 'Tools & Foundation', icon: '🐳' },
];

const categories = ['All', 'Frontend', 'Backend & APIs', 'Databases', 'DevOps & Analytics', 'Commerce & Growth', 'Tools & Foundation'];

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
    Frontend: 'React, Next.js, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion',
    'Backend & APIs': 'Django, Node.js, Express, REST APIs, serverless functions',
    Databases: 'PostgreSQL, MySQL, MongoDB, Firebase',
    'DevOps & Analytics': 'Netlify, Vercel, AWS, CI/CD, Google Analytics',
    'Commerce & Growth': 'Stripe, Klarna, SEO, conversion optimization, email marketing',
    'Tools & Foundation': 'Git, GitHub, VS Code, npm, Docker',
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
