
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

// Sample data - in a real app this would come from a CMS or API
const projects = [
  {
    slug: "devfinder",
    title: "DevFinder",
    description: "A developer search tool built with React, TypeScript and the GitHub API.",
    tech: ["React", "TypeScript", "GitHub API"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com",
    url: "https://demo.com"
  },
  {
    slug: "markdown-editor",
    title: "Markdown Editor",
    description: "A real-time markdown editor with preview and export functionality.",
    tech: ["JavaScript", "React", "Node.js"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com"
  },
  {
    slug: "task-manager",
    title: "Task Manager API",
    description: "A RESTful API for task management built with Node.js, Express and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com"
  },
  {
    slug: "weather-app",
    title: "Weather Dashboard",
    description: "A weather application with location search and 5-day forecast.",
    tech: ["JavaScript", "React", "OpenWeather API"],
    image: "https://via.placeholder.com/600x400",
    url: "https://demo.com"
  },
  {
    slug: "ecommerce-store",
    title: "E-commerce Store",
    description: "A full-featured e-commerce platform with product catalog and shopping cart.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: "https://via.placeholder.com/600x400",
    url: "https://demo.com"
  },
  {
    slug: "chat-application",
    title: "Real-time Chat App",
    description: "A real-time chat application with private messaging and chat rooms.",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com"
  }
];

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Projects Header */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Projects</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                A showcase of my web development work and side projects.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="container py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
