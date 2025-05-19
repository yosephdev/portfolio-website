import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

// In a real implementation, this would be a fetch from the CMS or API
// For now, we'll keep this structure but note this would be replaced
// with a data fetching mechanism from Netlify CMS
const projects = {
  "devfinder": {
    title: "DevFinder",
    description: "A developer search tool built with React, TypeScript and the GitHub API.",
    longDescription: `
      DevFinder is a web application that allows users to search for developers on GitHub and view their profiles, repositories, and other information. The app is built with React and TypeScript, and uses the GitHub API to fetch data.
      
      ## Features
      
      - Search for GitHub users by username
      - View detailed user profiles including repositories, followers, and following
      - Filter repositories by language and sort by stars, forks, or last updated
      - Responsive design that works on mobile, tablet, and desktop
      
      ## Technical Details
      
      The application is built using React with TypeScript for type safety. It uses the GitHub REST API to fetch user data and repositories. State management is handled with React Context API, and styling is done with Tailwind CSS.
      
      The project also features:
      
      - Custom hooks for data fetching and error handling
      - Responsive design with a mobile-first approach
      - Accessibility considerations throughout the UI
      - Comprehensive error handling for API calls
    `,
    tech: ["React", "TypeScript", "GitHub API", "Tailwind CSS", "Context API"],
    image: "https://via.placeholder.com/1200x800",
    screenshots: [
      "https://via.placeholder.com/800x600?text=Screenshot+1",
      "https://via.placeholder.com/800x600?text=Screenshot+2",
      "https://via.placeholder.com/800x600?text=Screenshot+3"
    ],
    github: "https://github.com/yosephdev/DevFinder",
    url: "https://devfinder-yosephdev.vercel.app"
  },
  "markdown-editor": {
    title: "Markdown Editor",
    description: "A real-time markdown editor with preview and export functionality.",
    longDescription: `
      This Markdown Editor provides a clean, distraction-free writing environment with real-time preview. It's perfect for writing documentation, blog posts, or any content that uses Markdown syntax.
      
      ## Features
      
      - Real-time markdown preview
      - Support for GitHub Flavored Markdown
      - Export to HTML, PDF, or plain text
      - Auto-save functionality
      - Customizable themes and editor settings
      
      ## Technical Details
      
      The editor is built with React and uses CodeMirror for the text editing experience. The markdown parsing is handled by marked.js, and the application uses local storage for auto-saving content.
      
      Key technical aspects:
      
      - Custom CodeMirror configuration for markdown syntax highlighting
      - Web Workers for non-blocking markdown parsing
      - Responsive design that adapts to different screen sizes
      - Keyboard shortcuts for common editing operations
    `,
    tech: ["JavaScript", "React", "CodeMirror", "marked.js", "Node.js"],
    image: "https://via.placeholder.com/1200x800",
    screenshots: [
      "https://via.placeholder.com/800x600?text=Screenshot+1",
      "https://via.placeholder.com/800x600?text=Screenshot+2"
    ],
    github: "https://github.com/yosephdev/markdown-editor",
    url: "https://markdown-editor-yosephdev.netlify.app"
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS.",
    longDescription: `
      This project is a personal portfolio website built to showcase my projects, blog posts, and professional information. It features a clean, minimalist design with dark mode support and responsive layouts.
      
      ## Features
      
      - Responsive design that works on all devices
      - Light and dark mode support
      - Blog section with markdown support
      - Projects showcase with detailed project pages
      - Contact form integration
      - Newsletter subscription
      
      ## Technical Details
      
      The portfolio is built using React with TypeScript for type safety. Styling is handled with Tailwind CSS for a utility-first approach. Content is managed through Markdown files, allowing for easy updates and additions.
      
      The website also features:
      
      - Optimized images and assets for fast loading
      - SEO best practices implementation
      - Accessibility considerations throughout the UI
      - Analytics integration for visitor tracking
    `,
    tech: ["React", "TypeScript", "Tailwind CSS", "Netlify CMS"],
    image: "https://via.placeholder.com/1200x800",
    screenshots: [
      "https://via.placeholder.com/800x600?text=Screenshot+1",
      "https://via.placeholder.com/800x600?text=Screenshot+2"
    ],
    github: "https://github.com/yosephdev/portfolio",
    url: "https://yoseph.dev"
  },
  "react-notes-app": {
    title: "React Notes App",
    description: "A feature-rich note-taking application built with React and Firebase.",
    longDescription: `
      A modern note-taking application built with React and Firebase. This app allows users to create, edit, and organize notes with rich text formatting, tags, and categories.
      
      ## Features
      
      - User authentication and account management
      - Rich text editor with markdown support
      - Note organization with tags and categories
      - Search functionality
      - Dark mode support
      - Offline capability with sync when online
      
      ## Technical Details
      
      The application uses React for the frontend UI and Firebase for backend services including authentication, database, and storage. State management is handled with Redux, and the app implements a responsive design that works well on mobile devices.
      
      Key technical aspects include:
      
      - Firebase Firestore for real-time database
      - Firebase Authentication for user management
      - Redux for global state management
      - Service workers for offline functionality
      - Responsive design with Tailwind CSS
    `,
    tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    image: "https://via.placeholder.com/1200x800",
    screenshots: [
      "https://via.placeholder.com/800x600?text=Screenshot+1",
      "https://via.placeholder.com/800x600?text=Screenshot+2"
    ],
    github: "https://github.com/yosephdev/react-notes",
    url: "https://react-notes-yosephdev.web.app"
  },
  // Add more project details in a similar format
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState(slug ? projects[slug as keyof typeof projects] : null);

  useEffect(() => {
    if (!project) {
      window.location.href = "/projects";
    }
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [project, slug]);

  if (!project) {
    return null;
  }

  // Convert markdown content to HTML
  // In a real app you would use a library like marked or remark
  const formatContent = (content: string) => {
    // Very basic markdown formatting
    return content
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\n\n/g, '<br /><br />');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container py-8 md:py-12">
          <div className="mx-auto max-w-[800px]">
            {/* Project Header */}
            <div className="mb-8">
              <Link to="/projects" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to Projects
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              
              <p className="mt-4 text-lg text-muted-foreground">
                {project.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6 flex gap-4">
                {project.url && (
                  <Button asChild>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            {/* Project Image */}
            {project.image && (
              <div className="my-8 overflow-hidden rounded-lg border">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            {/* Project Content */}
            <div 
              className="prose dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(project.longDescription) }}
            />
            
            {/* Project Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border">
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
