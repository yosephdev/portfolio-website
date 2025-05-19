import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

// Sample data - in a real app this would be fetched from Netlify CMS
const projects = [
  {
    slug: "devfinder",
    title: "DevFinder",
    description: "A developer search tool built with React, TypeScript and the GitHub API.",
    tech: ["React", "TypeScript", "GitHub API", "Tailwind CSS", "Context API"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yosephdev/DevFinder",
    url: "https://devfinder-yosephdev.vercel.app"
  },
  {
    slug: "markdown-editor",
    title: "Markdown Editor",
    description: "A real-time markdown editor with preview and export functionality.",
    tech: ["JavaScript", "React", "CodeMirror", "marked.js", "Node.js"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yosephdev/markdown-editor",
    url: "https://markdown-editor-yosephdev.netlify.app"
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Netlify CMS"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yosephdev/portfolio",
    url: "https://yoseph.dev"
  },
  {
    slug: "react-notes-app",
    title: "React Notes App",
    description: "A feature-rich note-taking application built with React and Firebase.",
    tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yosephdev/react-notes",
    url: "https://react-notes-yosephdev.web.app"
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
