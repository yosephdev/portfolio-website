import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { JobSeekingBanner } from "@/components/JobSeekingBanner";
import { TechnicalSkillsCompact } from "@/components/TechnicalSkills";
import { GitHubRepos } from "@/components/GitHubRepos";
import SEO from "@/components/SEO";
import { FileText } from "lucide-react";
import { projects } from "@/data/projects";

// Featured projects pulled from the single source of truth
const featuredProjects = projects.filter((p) => p.featured);

// Latest blog posts (updated May 2026)
const featuredPosts = [
  {
    slug: "saas-mvp-lessons",
    title: "What I Learned Shipping Klyrform on Product Hunt",
    excerpt:
      "Hard-won lessons from building and launching a data-extraction SaaS — from architecture decisions to the launch day checklist.",
    date: "April 14, 2026",
    readingTime: "9 min read",
    tags: ["SaaS", "Product Hunt", "Next.js"],
  },
  {
    slug: "netlify-forms-react",
    title: "Netlify Forms + React Without a Backend",
    excerpt:
      "How to wire up Netlify's built-in form handling from a React SPA — no serverless function required.",
    date: "March 5, 2026",
    readingTime: "6 min read",
    tags: ["Netlify", "React", "Forms"],
  },
  {
    slug: "nonprofit-platforms-tigray",
    title: "Building Digital Infrastructure for the Tigrayan Diaspora",
    excerpt:
      "The story behind TernaFit's three interconnected platforms — technical choices, trade-offs, and what mission-driven development actually means.",
    date: "February 18, 2026",
    readingTime: "7 min read",
    tags: ["Nonprofit", "Next.js", "Community"],
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Yoseph Berhane Gebremedhin - Full Stack Web Developer – E-commerce & SaaS"
        description="Full stack developer with 5+ years building and shipping production e-commerce, SaaS, and nonprofit platforms using React, Next.js, and Django. Focused on UX, SEO, and measurable business impact (sales, traffic, reach)."
        keywords={[
          "Full Stack Developer",
          "E-commerce Developer",
          "SaaS Developer",
          "React Developer",
          "Next.js Developer",
          "Django Developer",
          "Product Development",
          "UX Design",
          "SEO Expert",
          "Web Performance",
          "Revenue Optimization",
        ]}
      />
      <Header />

      {/* Job Seeking Banner */}
      <div className="container pt-6">
        <JobSeekingBanner />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/hero-image.jpg"
              alt="Hero background"
              className="w-full h-full object-cover opacity-40"
            />

            {/* Enhanced Gradient Overlays - Theme Aware */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/5 to-background/90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/70 to-background"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10 px-4 sm:px-6">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
              {/* Animated Welcome Text */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary">
                  Open to full-time and long-term contract roles
                </span>
              </div>

              {/* Main Heading with Staggered Animation Ready */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                <span className="block">Full Stack Developer</span>
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent mt-2">
                  building production web products
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="max-w-[700px] text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                I've spent 5+ years building e-commerce, SaaS, and community platforms using React, Next.js, and Django. I care about clean UX, fast performance, and shipping features that move metrics like sales, signups, and reach.
              </p>

              {/* Expertise Areas */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Marketplaces & SaaS platforms (Afelu, Klyrform, AI tools)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Modern e-commerce with Stripe/Klarna, SEO, and analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Nonprofit & community platforms that actually reach people</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-muted-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm">Projects Shipped</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Product</div>
                  <div className="text-sm">Focused</div>
                </div>
              </div>

              {/* Improved CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Link to="/projects" className="flex items-center gap-2">
                    <span>View projects</span>
                  </Link>
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
                  >
                    <a
                      href="/Yoseph_Berhane_CV_EN.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      CV 🇬🇧
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
                  >
                    <a
                      href="/Yoseph_Berhane_CV_SV.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      CV 🇸🇪
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Contact me
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Can Help Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                What I Build
              </h2>
              <p className="text-muted-foreground">
                From landing pages and e-commerce stores to SaaS platforms and
                community tools — end-to-end development with a focus on
                shipping things that work.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Client Websites</h3>
                <p className="text-muted-foreground">
                  Fast, professional websites for businesses, restaurants,
                  salons, and service providers. Mobile-first, SEO-ready, and
                  built to convert visitors into customers.
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce &amp; SaaS</h3>
                <p className="text-muted-foreground">
                  Full-featured online stores and web apps with Stripe/Klarna
                  payments, admin dashboards, and the integrations your
                  business actually needs.
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">
                  Community &amp; Nonprofit Platforms
                </h3>
                <p className="text-muted-foreground">
                  Scalable digital platforms for organisations that need to
                  reach people — educational tools, knowledge bases, and
                  community networking sites.
                </p>
              </div>
            </div>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">See My Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Core Technologies
              </h2>
              <p className="text-muted-foreground">
                My primary technology stack and areas of expertise
              </p>
            </div>
            <TechnicalSkillsCompact />
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline">
                <Link to="/about">View All Skills</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* GitHub Repositories Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                GitHub Projects
              </h2>
              <p className="text-muted-foreground">
                Featured repositories from my GitHub profile
              </p>
            </div>
            <GitHubRepos filter="featured" limit={6} showTabs={false} />
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild variant="outline">
                <a
                  href="https://github.com/yosephdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub Profile
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Latest Articles
              </h2>
              <p className="text-muted-foreground">
                Recent posts from my blog about web development and programming.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline">
                <Link to="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Some of my recent work and side projects.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline">
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto max-w-[500px]">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
