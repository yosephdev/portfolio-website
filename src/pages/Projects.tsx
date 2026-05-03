import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const CATEGORIES = ["All", "Featured", "Client Work", "E-commerce", "Web App", "AI & Education", "Community"] as const;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Projects</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {projects.length}+ projects shipped — e-commerce platforms, SaaS apps, client websites, and AI tools.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b bg-background sticky top-16 z-10">
          <div className="container">
            <div className="flex flex-wrap gap-2 py-4 overflow-x-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 text-xs opacity-60">
                      ({projects.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container py-12">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No projects in this category yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
