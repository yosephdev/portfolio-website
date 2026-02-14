import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import SEO from "@/components/SEO";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">
                Sorry, the project you're looking for doesn't exist.
              </p>
              <Link to="/projects">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title={`${project.title} - Yoseph Berhane Gebremedhin`}
        description={project.description}
        keywords={project.tech}
      />
      <Header />

      <main className="flex-1">
        {/* Project Header */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
              
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                  
                  {project.summary && (
                    <div className="bg-background rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-muted-foreground">{project.summary}</p>
                    </div>
                  )}

                  {project.role && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        {project.role}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Image */}
                <div className="lg:col-span-1">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Tech Stack */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Impact */}
              {project.impact && project.impact.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
                  <ul className="space-y-3">
                    {project.impact.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Links */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">View Project</h2>
              <div className="flex gap-4 justify-center">
                {project.url && (
                  <Button asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(p => p.slug !== slug)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    to={`/projects/${relatedProject.slug}`}
                    className="group block"
                  >
                    <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold mb-2 group-hover:text-primary">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
