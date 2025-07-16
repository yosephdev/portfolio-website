
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

// Real project data from yoseph.dev and GitHub
const projects = [
    {
        slug: "babys-and-me",
        title: "Baby's & Me",
        description: "A responsive eCommerce store offering handmade baby and toddler products with focus on sustainability and supporting local artisans.",
        tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
        image: "/images/babys-and-me.png",
        github: "https://github.com/yosephdev/babys-and-me",
        url: "https://babysme.com/"
    },
    {
        slug: "anenitigray-development-services",
        title: "Anenitigray Development Services (ADS)",
        description: "A platform for an NGO committed to fostering sustainable development and providing humanitarian support in Tigray through community-driven initiatives.",
        tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
        image: "/images/anenitigray-development-services.png",
        github: "https://github.com/yosephdev/anenitigray-development-services",
        url: "https://anenitigray.org/"
    },
    {
        slug: "ternafit",
        title: "Ternafit",
        description: "A platform for a Sweden-based NGO empowering the Tigrean people through information sharing, raising awareness, and building connections for aid.",
        tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
        image: "/images/ternafit.png",
        github: "https://github.com/yosephdev/ternafit",
        url: "https://ternafit.org/"
    },
    {
        slug: "le-menelik-saly-vibes",
        title: "Le Menelik Saly Vibes",
        description: "A modern restaurant and event venue website showcasing authentic cuisine and vibrant atmosphere.",
        tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        image: "/images/le-menelik-saly-vibes.png",
        github: "https://github.com/yosephdev/le-menelik-saly-vibes",
        url: "https://le-menelik-saly-vibes.vercel.app/"
    },
    {
        slug: "selams-handmade",
        title: "Selam's Handmade",
        description: "An elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
        tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
        image: "/images/selams-handmade.png",
        github: "https://github.com/yosephdev/selams-handmade",
        url: "https://selamshandmade.vercel.app/"
    },
    {
        slug: "supermerra",
        title: "Supermerra",
        description: "A modern, responsive website for Super Merra Frisör – a professional men’s hair salon in Katrineholm, Sweden.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        image: "/images/supermerra.png",
        github: "https://github.com/yosephdev/supermerra",
        url: "https://supermerra.se/"
    },
    {
        slug: "sero-global",
        title: "Sero Global",
        description: "A mental health platform built with Django, Python and AWS for a better access to mental health services.",
        tech: ["Python", "Django", "AWS", "PostgreSQL", "Docker"],
        image: "/images/sero-global.png",
        github: "https://github.com/yosephdev/sero-global",
        url: "hhttps://sero-global-3fbd7256cc0a.herokuapp.com/"
    },
    {
        slug: "isana-facilitation",
        title: "Isana Facilitation",
        description: "A facilitation platform for therapists and counselors to manage their clients and sessions.",
        tech: ["React", "Firebase", "Node.js", "Tailwind CSS"],
        image: "/images/isana-facilitation.png",
        github: "https://github.com/yosephdev/isana-facilitation",
        url: "https://isana-facilitation.vercel.app"
    },
    {
        slug: "markdown-editor",
        title: "Markdown Editor",
        description: "A free writing environment with real-time preview for writing documentation and blog posts.",
        tech: ["JavaScript", "React", "CodeMirror", "marked.js"],
        image: "/images/markdown-editor.png",
        github: "https://github.com/yosephdev/markdown-editor",
        url: "https://instant-markdown-canvas.vercel.app"
    },
    {
        slug: "devfinder",
        title: "DevFinder",
        description: "A developer search tool built with React, TypeScript and the GitHub API.",
        tech: ["React", "TypeScript", "GitHub API", "Tailwind CSS"],
        image: "/images/devfinder.png",
        github: "https://github.com/yosephdev/devfinder",
        url: "https://dev-finder-five-iota.vercel.app/"
    },
    {
        slug: "worldscope",
        title: "Worldscope",
        description: "A web application that displays information about countries using the REST Countries API.",
        tech: ["JavaScript", "React", "REST API", "CSS"],
        image: "/images/worldscope.png",
        github: "https://github.com/yosephdev/worldscope",
        url: "https://worldscope-yoseph-berhanes-projects.vercel.app/"
    },
    {
        slug: "ip-address-tracker",
        title: "IP Address Tracker",
        description: "A web application that allows users to track IP addresses and view their location on a map.",
        tech: ["JavaScript", "Leaflet.js", "IP Geolocation API", "HTML/CSS"],
        image: "/images/ip-address-tracker.png",
        github: "https://github.com/yosephdev/ip-address-tracker",
        url: "https://ip-address-tracker-swart-rho.vercel.app/"
    },
    // {
    //     slug: "react-notes-app",
    //     title: "React Notes App",
    //     description: "A feature-rich note-taking application built with React and Firebase.",
    //     tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    //     image: "/images/react-notes.png",
    //     github: "https://github.com/yosephdev/react-notes",
    //     url: "https://react-notes-five-phi.vercel.app/"
    // },
    {
        slug: "book-dine",
        title: "Book & Dine",
        description: "A full-stack restaurant reservation system with real-time availability, booking logic, and a clean user interface.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        image: "/images/book-dine.png",
        github: "https://github.com/yosephdev/book-dine",
        url: "https://book-dine-c8d9fe1355da.herokuapp.com/"
    },
    {
        slug: "mastery-hub",
        title: "Mastery Hub",
        description: "A platform that connects professionals for mentorship and skill-sharing with responsive design and intuitive navigation.",
        tech: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
        image: "/images/mastery-hub.png",
        github: "https://github.com/yosephdev/mastery-hub",
        url: "https://skill-sharing-446c0336ffb5.herokuapp.com/"
    },
    {
        slug: "boutique-ado",
        title: "Boutique Ado",
        description: "A Django web application for an online clothing store with e-commerce functionality.",
        tech: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
        image: "/images/boutique-ado.png",
        github: "https://github.com/yosephdev/boutique-ado",
        url: "https://boutique-adey-61c58d87c08b.herokuapp.com/"
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
