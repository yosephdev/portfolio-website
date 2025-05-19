
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

// Real project data from yoseph.dev and GitHub
const projects = [
  {
    slug: "sero-global",
    title: "Sero Global",
    description: "A mental health platform built with Django, Python and AWS for a better access to mental health services.",
    tech: ["Python", "Django", "AWS", "PostgreSQL", "Docker"],
    image: "https://via.placeholder.com/600x400?text=Sero+Global",
    github: "https://github.com/yosephdev/sero-global",
    url: "https://seroglobal.org"
  },
  {
    slug: "isana-facilitation",
    title: "Isana Facilitation",
    description: "A facilitation platform for therapists and counselors to manage their clients and sessions.",
    tech: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    image: "https://via.placeholder.com/600x400?text=Isana+Facilitation",
    github: "https://github.com/yosephdev/isana-facilitation",
    url: "https://isanafacilitation.com"
  },
  {
    slug: "revolutaging",
    title: "Revolutaging",
    description: "An AI-powered platform for elderly care and monitoring built with React, Python and TensorFlow.",
    tech: ["React", "Python", "TensorFlow", "AWS", "MongoDB"],
    image: "https://via.placeholder.com/600x400?text=Revolutaging",
    github: "https://github.com/yosephdev/revolutaging",
    url: "https://revolutaging.com"
  },
  {
    slug: "devfinder",
    title: "DevFinder",
    description: "A developer search tool built with React, TypeScript and the GitHub API.",
    tech: ["React", "TypeScript", "GitHub API", "Tailwind CSS"],
    image: "https://via.placeholder.com/600x400?text=DevFinder",
    github: "https://github.com/yosephdev/devfinder",
    url: "https://devfinder-yosephdev.vercel.app"
  },
  {
    slug: "countries-api",
    title: "REST Countries API",
    description: "A web application that displays information about countries using the REST Countries API.",
    tech: ["JavaScript", "React", "REST API", "CSS"],
    image: "https://via.placeholder.com/600x400?text=Countries+API",
    github: "https://github.com/yosephdev/rest-countries-api",
    url: "https://rest-countries-api-yosephdev.vercel.app"
  },
  {
    slug: "ip-address-tracker",
    title: "IP Address Tracker",
    description: "A web application that allows users to track IP addresses and view their location on a map.",
    tech: ["JavaScript", "Leaflet.js", "IP Geolocation API", "HTML/CSS"],
    image: "https://via.placeholder.com/600x400?text=IP+Address+Tracker",
    github: "https://github.com/yosephdev/ip-address-tracker",
    url: "https://ip-address-tracker-yosephdev.vercel.app"
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
                A showcase of my work in web development, AI, and Python applications.
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
