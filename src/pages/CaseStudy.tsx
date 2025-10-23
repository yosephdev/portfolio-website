/**
 * Case Study Page
 * Detailed project case study template
 */

import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import SEO from '@/components/SEO';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Code,
  Trophy,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';

// Case study data structure
interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  client: string;
  role: string;
  duration: string;
  team: string;
  tech: string[];
  image: string;
  screenshots: string[];
  github?: string;
  liveUrl?: string;
  overview: {
    background: string;
    problem: string;
    solution: string;
  };
  process: {
    title: string;
    description: string;
    steps: string[];
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  technicalDetails: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  learnings: string[];
  futureImprovements: string[];
}

// Sample case study - MT Skrädderi & Butik
const caseStudies: Record<string, CaseStudy> = {
  'mt-butik': {
    slug: 'mt-butik',
    title: 'MT Skrädderi & Butik',
    subtitle: 'Professional Tailoring & Cultural Commerce Platform',
    description:
      'A modern web platform combining traditional tailoring services, men\'s barbering, and authentic Habesha products.',
    client: 'MT Skrädderi & Butik',
    role: 'Lead Full-Stack Developer',
    duration: '3 months (May 2024 - August 2024)',
    team: 'Solo Developer + Business Owner Collaboration',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React'],
    image: '/images/mt-butik.png',
    screenshots: ['/images/mt-butik.png'],
    github: 'https://github.com/yosephdev/mt-butik',
    liveUrl: 'https://mt-butik.vercel.app/',
    overview: {
      background:
        'MT Skrädderi & Butik is a local business in Eskilstuna, Sweden, offering professional tailoring, men\'s barbering services, and authentic Habesha (Ethiopian/Eritrean) products. The business needed a professional online presence to reach more customers and showcase their unique combination of services.',
      problem:
        'The business had no online presence, making it difficult for potential customers to discover their services. They needed a platform that could effectively communicate their three main service areas while being easy to maintain and mobile-friendly.',
      solution:
        'I designed and developed a modern, responsive website that showcases all three business areas with clear navigation, professional imagery, and detailed service descriptions. The site was built with performance and user experience as top priorities.',
    },
    process: [
      {
        title: 'Discovery & Planning',
        description: 'Understanding business needs and target audience',
        steps: [
          'Conducted stakeholder interviews with business owner',
          'Analyzed competitor websites in the local area',
          'Identified key user personas: local residents, Habesha community, fashion-conscious individuals',
          'Created wireframes and site structure',
          'Defined technical requirements and technology stack',
        ],
      },
      {
        title: 'Design & Prototyping',
        description: 'Creating a visual identity that reflects the business',
        steps: [
          'Designed a clean, professional UI with cultural elements',
          'Created a color scheme reflecting traditional Ethiopian aesthetics',
          'Developed responsive layouts for mobile, tablet, and desktop',
          'Gathered feedback and iterated on designs',
        ],
      },
      {
        title: 'Development',
        description: 'Building the platform with modern technologies',
        steps: [
          'Set up Vite + React + TypeScript project structure',
          'Implemented component-based architecture',
          'Integrated Tailwind CSS for responsive styling',
          'Added Lucide React icons for consistent UI',
          'Optimized images and assets for performance',
          'Implemented SEO best practices',
        ],
      },
      {
        title: 'Testing & Launch',
        description: 'Ensuring quality and deploying to production',
        steps: [
          'Conducted cross-browser testing',
          'Performed mobile responsiveness testing',
          'Optimized performance (Lighthouse score 95+)',
          'Deployed to Vercel with continuous deployment',
          'Set up analytics and monitoring',
        ],
      },
    ],
    challenges: [
      {
        challenge:
          'Balancing three distinct service areas without overwhelming the user',
        solution:
          'Created a clear navigation structure with dedicated sections for each service. Used visual hierarchy and spacing to guide users through the content naturally.',
      },
      {
        challenge: 'Making cultural products appealing to a broader audience',
        solution:
          'Combined authentic cultural imagery with modern web design principles. Used professional photography and clear product descriptions to bridge cultural understanding.',
      },
      {
        challenge: 'Ensuring fast load times with high-quality images',
        solution:
          'Implemented image optimization techniques, lazy loading, and used modern image formats (WebP). Achieved sub-2-second load times even with rich visual content.',
      },
    ],
    technicalDetails: [
      {
        title: 'Frontend Architecture',
        description:
          'Built with React 18 and TypeScript for type safety and modern development practices. Used Vite for ultra-fast hot module replacement during development and optimized production builds.',
      },
      {
        title: 'Styling Approach',
        description:
          'Utilized Tailwind CSS utility-first approach for rapid development and consistent design. Customized the theme to match brand colors and created reusable component patterns.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Implemented code splitting, lazy loading of components, and optimized asset delivery. Achieved Lighthouse scores of 95+ across all metrics.',
      },
      {
        title: 'Deployment & CI/CD',
        description:
          'Deployed to Vercel with automatic deployments from GitHub. Set up preview deployments for branches and implemented proper caching strategies.',
      },
    ],
    results: [
      {
        metric: 'Performance',
        value: '95+ Lighthouse Score',
        description: 'Excellent performance across all metrics',
      },
      {
        metric: 'Load Time',
        value: '<2 seconds',
        description: 'Fast initial page load on 3G networks',
      },
      {
        metric: 'Mobile Traffic',
        value: '60%',
        description: 'Majority of users on mobile devices',
      },
      {
        metric: 'User Feedback',
        value: 'Positive',
        description: 'Client reported increased customer inquiries',
      },
    ],
    learnings: [
      'Importance of understanding client\'s business and target audience before starting development',
      'Value of iterative design process with regular client feedback',
      'Performance optimization techniques for image-heavy websites',
      'Benefits of using modern build tools like Vite for rapid development',
      'Effective ways to showcase multiple business services on a single platform',
      'Cultural sensitivity in design and content presentation',
    ],
    futureImprovements: [
      'Add online booking system for tailoring appointments',
      'Implement e-commerce functionality for Habesha products',
      'Add multilingual support (Swedish, Amharic, Tigrinya)',
      'Create a blog section for fashion tips and cultural insights',
      'Add customer testimonials and portfolio gallery',
      'Implement chatbot for common customer questions',
    ],
  },
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudies[slug] : null;

  if (!caseStudy) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The case study you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title={`${caseStudy.title} - Case Study | Yoseph Berhane`}
        description={caseStudy.description}
        keywords={[...caseStudy.tech, 'case study', 'web development', 'project']}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {caseStudy.subtitle}
                </p>
                <p className="text-lg mb-6">{caseStudy.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {caseStudy.liveUrl && (
                    <Button asChild>
                      <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Site
                      </a>
                    </Button>
                  )}
                  {caseStudy.github && (
                    <Button asChild variant="outline">
                      <a href={caseStudy.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Meta */}
        <section className="py-12 border-y">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <MetaCard
                icon={<Users className="h-5 w-5" />}
                label="Role"
                value={caseStudy.role}
              />
              <MetaCard
                icon={<Calendar className="h-5 w-5" />}
                label="Duration"
                value={caseStudy.duration}
              />
              <MetaCard
                icon={<Users className="h-5 w-5" />}
                label="Team"
                value={caseStudy.team}
              />
              <MetaCard
                icon={<Target className="h-5 w-5" />}
                label="Client"
                value={caseStudy.client}
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12">Project Overview</h2>
            <div className="space-y-8">
              <OverviewCard
                icon={<Target className="h-6 w-6" />}
                title="Background"
                content={caseStudy.overview.background}
              />
              <OverviewCard
                icon={<AlertCircle className="h-6 w-6" />}
                title="The Problem"
                content={caseStudy.overview.problem}
                variant="warning"
              />
              <OverviewCard
                icon={<Lightbulb className="h-6 w-6" />}
                title="The Solution"
                content={caseStudy.overview.solution}
                variant="success"
              />
            </div>
          </div>
        </section>

        <Separator />

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12">Design & Development Process</h2>
            <div className="space-y-8">
              {caseStudy.process.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle>{phase.title}</CardTitle>
                        <CardDescription>{phase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Challenges */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12">Challenges & Solutions</h2>
            <div className="space-y-6">
              {caseStudy.challenges.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{item.challenge}</p>
                    <div className="flex items-start gap-2 p-4 bg-muted rounded-lg">
                      <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Solution</p>
                        <p className="text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Technical Details */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Code className="h-8 w-8" />
              Technical Implementation
            </h2>
            <p className="text-muted-foreground mb-12">
              Deep dive into the technical aspects and architecture decisions
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudy.technicalDetails.map((detail, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Results */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="h-8 w-8 text-amber-500" />
              Results & Impact
            </h2>
            <p className="text-muted-foreground mb-12">
              Measurable outcomes and achievements from the project
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">
                      {result.value}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold">
                      {result.metric}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Learnings */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {caseStudy.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Future Improvements
                </h2>
                <ul className="space-y-3">
                  {caseStudy.futureImprovements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1">→</span>
                      <span className="text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-8">
              I'd love to hear about your project and discuss how I can help bring your vision to
              life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
interface MetaCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function MetaCard({ icon, label, value }: MetaCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-muted">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  variant?: 'default' | 'warning' | 'success';
}

function OverviewCard({ icon, title, content, variant = 'default' }: OverviewCardProps) {
  const bgColor =
    variant === 'warning'
      ? 'bg-amber-500/10 border-amber-500/20'
      : variant === 'success'
      ? 'bg-green-500/10 border-green-500/20'
      : 'bg-primary/10 border-primary/20';

  return (
    <Card className={bgColor}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
}
