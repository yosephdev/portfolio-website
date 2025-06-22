
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsletterForm } from "@/components/NewsletterForm";

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
    slug: "devfinder",
    title: "DevFinder",
    description: "A developer search tool built with React, TypeScript and the GitHub API.",
    tech: ["React", "TypeScript", "GitHub API"],
    image: "/images/devfinder.png",
    github: "https://github.com/yosephdev/devfinder",
    url: "https://devfinder-yosephdev.vercel.app"
  },
  {
    slug: "markdown-editor",
    title: "Markdown Editor",
    description: "A real-time markdown editor with preview and export functionality.",
    tech: ["JavaScript", "React", "CodeMirror"],
    image: "/images/markdown-editor.png",
    github: "https://github.com/yosephdev/markdown-editor",
    url: "https://instant-markdown-canvas.vercel.app"
  },
  {
    slug: "worldscope",
    title: "Worldscope",
    description: "A web application that displays information about countries using the REST Countries API.",
    tech: ["JavaScript", "React", "REST API"],
    image: "/images/worldscope.png",
    github: "https://github.com/yosephdev/worldscope",
    url: "https://worldscope-yoseph-berhanes-projects.vercel.app/"
  }
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I'm <span className="text-primary">Yoseph</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Developer, writer, and open-source enthusiast. I write about web development, 
              design patterns, and developer tools.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/blog">Read the Blog</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Me</Link>
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
