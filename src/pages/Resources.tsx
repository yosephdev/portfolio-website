
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourceCard } from "@/components/ResourceCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Sample data - in a real app this would come from a CMS or API
const resources = [
  {
    title: "Node.js Project Bootstrapper",
    description: "A customizable Node.js CLI tool that scaffolds boilerplate for new projects using your chosen language, framework, and CSS preprocessor.",
    type: "Code Snippets",
    downloadUrl: "/downloads/project-bootstrapper.js"
  },
  {
    title: "React Performance Cheatsheet",
    description: "A comprehensive guide to optimizing React application performance.",
    type: "PDF",
    downloadUrl: "/downloads/react-performance-cheatsheet.pdf"
  },
  {
    title: "TypeScript Type Definitions",
    description: "Common TypeScript type definitions for popular libraries and patterns.",
    type: "Code Snippets",
    downloadUrl: "/downloads/typescript-type-definitions.js"
  },
  {
    title: "CSS Grid Layout Guide",
    description: "A visual guide to CSS Grid with examples and best practices.",
    type: "PDF",
    downloadUrl: "/downloads/css-grid-layout-guide.pdf"
  },
  {
    title: "Git Workflow Templates",
    description: "Templates for different Git workflows including GitHub Flow and GitFlow.",
    type: "Markdown",
    downloadUrl: "/downloads/git-workflow-templates.md"
  },
  {
    title: "VS Code Setup for Web Development",
    description: "My recommended VS Code extensions and settings for web development.",
    type: "JSON",
    downloadUrl: "/downloads/vscode-setup.json"
  },
  {
    title: "Testing React Components",
    description: "A guide to testing React components with Jest and React Testing Library.",
    type: "PDF",
    downloadUrl: "/downloads/testing-react-components.pdf"
  },
  {
    title: "Modern JavaScript Cheatsheet",
    description: "Quick reference for ES6+ features, array methods, and asynchronous JavaScript.",
    type: "PDF",
    downloadUrl: "/downloads/modern-javascript-cheatsheet.pdf"
  },
  {
    title: "Docker for Developers Guide",
    description: "An introduction to Docker for web developers, covering containers, images, and Docker Compose.",
    type: "PDF",
    downloadUrl: "/downloads/docker-for-developers-guide.pdf"
  },
  {
    title: "SQL Joins Explained",
    description: "Visual explanations of different SQL JOIN types with examples.",
    type: "PDF",
    downloadUrl: "/downloads/sql-joins-explained.pdf"
  },
  {
    title: "Frontend Interview Handbook",
    description: "Common frontend interview questions and detailed answers.",
    type: "PDF",
    downloadUrl: "/downloads/frontend-interview-handbook.pdf"
  },
  {
    title: "JSON Schema Reference",
    description: "A quick reference guide for writing and understanding JSON Schemas.",
    type: "JSON",
    downloadUrl: "/downloads/json-schema-reference.json"
  },
  {
    title: "Useful Git Commands",
    description: "A collection of frequently used Git commands for daily development.",
    type: "Code Snippets",
    downloadUrl: "/downloads/useful-git-commands.txt"
  },
  {
    title: "Markdown Cheatsheet",
    description: "A comprehensive cheatsheet for Markdown syntax.",
    type: "Markdown",
    downloadUrl: "/downloads/markdown-cheatsheet.md"
  }
];


const resourceTypes = Array.from(
  new Set(resources.map((resource) => resource.type))
).sort();

const Resources = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Filter resources based on selected type
  const filteredResources = selectedType
    ? resources.filter((resource) => resource.type === selectedType)
    : resources;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Resources Header */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Resources</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Free downloadable resources and tools for developers.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Filters */}
        <section className="container py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              onClick={() => setSelectedType(null)}
            >
              All
            </Button>
            {resourceTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </section>

        {/* Resources Grid */}
        <section className="container py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
