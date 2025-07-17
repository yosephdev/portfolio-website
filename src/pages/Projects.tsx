
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

// Real project data from yoseph.dev and GitHub
const projects = [
    {
        slug: "habesha-smak-butik",
        title: "Habesha Smak Butik",
        description: "A multilingual e-commerce platform specializing in authentic Ethiopian food products, spices, and cultural items with support for Swedish, Amharic, and Tigrinya languages.",
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
        image: "/images/habesha-smak-butik.png",
        github: "https://github.com/yosephdev/habesha-smak-butik",
        url: "https://habesha-smak.netlify.app/"
    },
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
        url: "https://selamshandmade.vercel.app/"
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
        slug: "ternafit",
        title: "Ternafit",
        description: "A platform for a Sweden-based NGO empowering the Tigrean people through information sharing, raising awareness, and building connections for aid.",
        tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
        image: "/images/ternafit.png",
        github: "https://github.com/yosephdev/ternafit",
        url: "https://ternafit.vercel.app/"
    },
    {
        slug: "anenitigray-development-services",
        title: "Anenitigray Development Services (ADS)",
        description: "A platform for an NGO committed to fostering sustainable development and providing humanitarian support in Tigray through community-driven initiatives.",
        tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
        image: "/images/anenitigray-development-services.png",
        github: "https://github.com/yosephdev/anenitigray-development-services",
        url: "https://anenitigray-development-services.vercel.app/"
    },
    {
        slug: "supermerra",
        title: "Supermerra",
        description: "A modern, responsive website for Super Merra Frisör – a professional men's hair salon in Katrineholm, Sweden.",
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
        url: "https://sero-global-3fbd7256cc0a.herokuapp.com/"
    },
    {
        slug: "devfinder",
        title: "DevFinder",
        description: "A GitHub user search application built with React and TypeScript, featuring user profiles and repository browsing.",
        tech: ["React", "TypeScript", "GitHub API", "Tailwind CSS"],
        image: "/images/devfinder.png",
        github: "https://github.com/yosephdev/DevFinder",
        url: "https://dev-finder-five-iota.vercel.app/"
    },
    {
        slug: "worldscope",
        title: "WorldScope",
        description: "A comprehensive country information app using the REST Countries API with search, filtering, and detailed country views.",
        tech: ["JavaScript", "React", "REST API", "CSS"],
        image: "/images/worldscope.png",
        github: "https://github.com/yosephdev/worldscope",
        url: "https://worldscope-yoseph-berhanes-projects.vercel.app/"
    }
    // Removed: mastery-hub, boutique-ado, react-notes, markdown-editor to keep list focused
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
