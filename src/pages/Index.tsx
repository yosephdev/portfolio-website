
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import SEO from "@/components/SEO";

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
  },
  {
    slug: "ternafit",
    title: "Ternafit",
    description: "A platform for a Sweden-based NGO empowering the Tigrean people through information sharing, raising awareness, and building connections for aid.",
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/ternafit.png",
    github: "https://github.com/yosephdev/ternafit",
    url: "https://ternafit.vercel.app/"
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
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I'm <span className="text-primary">Yoseph</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Full Stack Developer & AI Enthusiast. With years of experience, I'm passionate about building innovative solutions and helping others navigate the world of web development and AI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="https://www.linkedin.com/in/yoseph-berhane/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  Connect on LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/yosephdev" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-2 1-1.2-0.34-2.4-0.34-3.6 0-1-1-2-1-2-1a4.8 4.8 0 0 0-1 3.5c-3 0-6 2-6 5.5s3 5.5 6 5.5c.39 0 .79-.06 1.2-.18 0 0 0 0 0 0V22"/><path d="M18.36 17.36A9 9 0 0 0 5.64 6.64L15 22Z"/></svg>
                  View GitHub
                </a>
              </Button>
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
