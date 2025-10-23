
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
import { Download, FileText } from "lucide-react";

// Sample data
const featuredPosts = [
  {
    slug: "modern-react-hooks",
    title: "Understanding Modern React Hooks",
    excerpt: "A deep dive into React's latest hooks and how they can improve your components.",
    date: "May 12, 2023",
    readingTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks"]
  },
  {
    slug: "typescript-tips",
    title: "10 TypeScript Tips for Better Code",
    excerpt: "Practical TypeScript tips that will help you write more maintainable code.",
    date: "April 23, 2023",
    readingTime: "6 min read",
    tags: ["TypeScript", "Best Practices"]
  },
  {
    slug: "tailwind-tricks",
    title: "Advanced Tailwind CSS Techniques",
    excerpt: "Take your Tailwind CSS skills to the next level with these advanced techniques.",
    date: "March 18, 2023",
    readingTime: "5 min read",
    tags: ["CSS", "Tailwind", "Frontend"]
  }
];

const featuredProjects = [
  {
    slug: "mt-butik",
    title: "MT Skrädderi & Butik",
    description: "Professional tailoring, men's barbering, and authentic Habesha products in the heart of Eskilstuna. A modern platform combining traditional craftsmanship with digital presence.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    image: "/images/mt-butik.png",
    github: "https://github.com/yosephdev/mt-butik",
    url: "https://mt-butik.vercel.app/"
  },
  {
    slug: "babys-and-me",
    title: "Baby's & Me",
    description: "A responsive eCommerce store offering handmade baby and toddler products with focus on sustainability and supporting local artisans.",
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babys-and-me.vercel.app/"
  },
  {
    slug: "selams-handmade",
    title: "Selam's Handmade",
    description: "An elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/selams-handmade.png",
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/"
  }
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO 
        title="Yoseph Berhane - Full Stack Developer & AI Enthusiast"
        description="Full Stack Developer specializing in Python, Django, React, and AI-powered web applications. Building innovative solutions with modern technologies."
        keywords={["Full Stack Developer", "Python", "Django", "React", "AI", "Machine Learning", "Web Development", "Mentorship", "Technical Consulting", "Open Source"]}
      />
      <Header />
      
      {/* Job Seeking Banner */}
      <div className="container pt-6">
        <JobSeekingBanner />
      </div>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/Hero_Video_Developer_Portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <div className="container relative z-10">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Hey, I'm <span className="text-primary">Yoseph</span>
              </h1>
              <p className="max-w-[700px] text-lg sm:text-xl text-white/90">
                Full Stack Developer & AI Enthusiast. With years of experience, I'm passionate about building innovative solutions and helping others navigate the world of web development and AI.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/Yoseph_Berhane_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* How I Can Help Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                How I Can Help
              </h2>
              <p className="text-muted-foreground">
                Leveraging my experience in full-stack development and a keen interest in AI, I'm here to share knowledge and support others.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Mentorship & Guidance</h3>
                <p className="text-muted-foreground">Offering personalized guidance for aspiring developers, helping you navigate career paths, master new technologies, and overcome coding challenges.</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Technical Consulting</h3>
                <p className="text-muted-foreground">Providing insights and solutions for your web development projects, from architectural design to performance optimization and AI integration.</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Open Source Contributions</h3>
                <p className="text-muted-foreground">Collaborating on open-source projects, contributing to the community, and sharing reusable code and tools.</p>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild>
                <Link to="/contact">Get in Touch</Link>
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
                <a href="https://github.com/yosephdev" target="_blank" rel="noopener noreferrer">
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
