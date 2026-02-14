/**
 * Defines the structure for a project object.
 * Using an interface ensures all projects in the array
 * have the same shape, preventing errors.
 */
export interface Project {
  slug: string;
  title: string;
  description: string;
  summary: string; // 1-2 sentence problem + solution
  role: string; // "Full stack developer", "Founding engineer", or "Lead developer"
  impact: string[]; // bullet list of metrics/outcomes
  tech: string[];
  image: string;
  github: string;
  url: string;
  caseStudy?: string; // link to case study blog post
  featured?: boolean; // for highlighting key projects
}

/**
 * List of projects
 */
export const projects: Project[] = [
  {
    slug: "afelu-marketplace",
    title: "Afelu.com",
    description:
      "AI tools marketplace connecting creators with users seeking AI-powered solutions.",
    summary: "Built and launched an AI tools marketplace from scratch, including listings, payments, and admin tools.",
    role: "Founding Software Developer / Co‑Founder",
    impact: [
      "Launched marketplace MVP with complete payment integration",
      "Built admin dashboard for vendor management",
      "Implemented search and filtering for AI tools"
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/images/afelu-marketplace.png",
    github: "https://github.com/yosephdev/afelu-marketplace",
    url: "https://afelu.com",
    featured: true,
  },
  {
    slug: "babys-and-me",
    title: "Baby's & Me",
    description:
      "Responsive eCommerce store offering handmade baby and toddler products with focus on sustainability.",
    summary: "Developed a modern e-commerce platform for handmade baby products with seamless shopping experience.",
    role: "Full Stack Developer",
    impact: [
      "Built responsive storefront with mobile-first design",
      "Integrated secure payment processing",
      "Optimized for performance and SEO"
    ],
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babysme.com",
    featured: true,
  },
  {
    slug: "selams-handmade",
    title: "Selam's Handmade",
    description:
      "Elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
    summary: "Migrated store to modern platform and improved SEO, contributing to significant sales increase.",
    role: "Web Developer",
    impact: [
      "Increased sales by 25% after SEO and performance improvements",
      "Integrated Etsy for expanded product reach",
      "Improved site speed and mobile experience"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/selams-handmade.png",
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/",
    featured: true,
  },
  {
    slug: "dungo-energy-solutions",
    title: "Dungo Energy Solutions",
    description:
      "Powering Tigray With Sustainable Energy. Modern solar solutions for communities in Ethiopia.",
    summary: "Created a modern web presence for sustainable energy initiatives in Ethiopian communities.",
    role: "Full Stack Developer",
    impact: [
      "Built responsive platform showcasing solar solutions",
      "Increased digital reach for community projects",
      "Improved accessibility for rural energy initiatives"
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Lucide React",
    ],
    image: "/images/dungoenergy.png",
    github: "https://github.com/yosephdev/dungo-energy",
    url: "https://dungoenergy.org/",
  },
  {
    slug: "tigray-tutor-ai",
    title: "Tigray Tutor AI",
    description:
      "AI-assisted learning platform providing personalized educational support for Tigrinya-speaking students.",
    summary: "Developed AI-powered educational platform to support Tigrinya-speaking students with personalized learning.",
    role: "Full Stack Developer",
    impact: [
      "Created AI-driven personalized learning experience",
      "Supported educational access for Tigrinya speakers",
      "Built scalable platform for student engagement"
    ],
    tech: ["AI", "TypeScript", "React", "Next.js"],
    image: "/images/tigray-tutor-ai.png",
    github: "https://github.com/yosephdev/tigray-tutor-ai",
    url: "https://tigray-tutor-ai.vercel.app/",
  },
  {
    slug: "stayswift",
    title: "StaySwift",
    description:
      "Mobile-ready hotel search and booking application powered by LiteAPI",
    summary: "Built mobile-first hotel booking platform with real-time search and reservation capabilities.",
    role: "Full Stack Developer",
    impact: [
      "Implemented real-time hotel search functionality",
      "Created mobile-optimized booking experience",
      "Integrated payment processing for reservations"
    ],
    tech: [
      "React",
      "TypeScript",
      "LiteAPI",
      "Tailwind CSS",
      "Google Maps API",
      "Responsive Design",
    ],
    image: "/images/stayswift.png",
    github: "https://github.com/yosephdev/stayswift",
    url: "https://stayswift-kappa.vercel.app/",
  },
  {
    slug: "jusplay-cinema-connect",
    title: "JusPlay Cinema Connect",
    description:
      "Streaming platform frontend built with React and TypeScript, consuming movie data from the TMDB API.",
    summary: "Built streaming platform with TMDB API integration for movie discovery and viewing.",
    role: "Full Stack Developer",
    impact: [
      "Integrated TMDB API for movie data",
      "Created responsive streaming interface",
      "Built search and discovery features"
    ],
    tech: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    image: "/images/jusplay.png",
    github: "https://github.com/yosephdev/jusplay-cinema-connect",
    url: "https://jusplay.netlify.app/",
  },
  {
    slug: "yaz-mari-website",
    title: "Yaz Mari Music Website",
    description:
      "Modern music platform showcasing Amharic and reggae content with API-driven media integration.",
    summary: "Built music platform with Spotify integration for Amharic and reggae content showcase.",
    role: "Full Stack Developer",
    impact: [
      "Integrated Spotify API for music streaming",
      "Created responsive media showcase",
      "Built content management system"
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Spotify API"],
    image: "/images/yaz-mari-website.png",
    github: "https://github.com/yosephdev/yaz-mari-website",
    url: "https://yaz-mari-website.vercel.app/",
  },
  {
    slug: "mt-butik",
    title: "MT Skrädderi & Butik",
    description:
      "Business website for a local tailoring and grooming shop, focused on clarity, accessibility, and speed.",
    summary: "Created professional web presence for local tailoring and grooming business.",
    role: "Full Stack Developer",
    impact: [
      "Built responsive business website",
      "Optimized for local SEO and discoverability",
      "Created service showcase and booking system"
    ],
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/mt-butik.png",
    github: "https://github.com/yosephdev/mt-butik",
    url: "https://mtbutik.se/",
  },
  {
    slug: "habesha-smak-butik",
    title: "Habesha Smak Butik",
    description:
      "Multilingual e-commerce platform specializing in authentic Ethiopian food products, spices, and cultural items.",
    summary: "Developed multilingual e-commerce platform for Ethiopian food products with secure payment integration.",
    role: "Full Stack Developer",
    impact: [
      "Built multilingual support for Swedish and Amharic",
      "Integrated secure payment processing",
      "Created inventory management system"
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/habesha-smak-butik.png",
    github: "https://github.com/yosephdev/habesha-smak-butik",
    url: "https://habeshasmak.store/",
  },
  {
    slug: "klyrform",
    title: "Klyrform",
    description:
      "Production-ready SaaS application that converts unstructured data (PDFs, images, URLs, documents) into clean structured data (JSON, CSV, Markdown).",
    summary: "Built and launched data extraction SaaS on Product Hunt that converts unstructured documents into clean, structured data for businesses.",
    role: "Full Stack Developer",
    impact: [
      "Launched on Product Hunt with positive reception",
      "Processes multiple document formats with high accuracy",
      "Saves businesses hours of manual data entry work"
    ],
    tech: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AI/ML APIs"],
    image: "/images/klyrform.png",
    github: "https://github.com/yosephdev/klyrform",
    url: "https://klyrform.com",
    featured: true,
  },
  {
    slug: "ecopaws-harmony",
    title: "EcoPaws Harmony",
    description:
      "Sustainable Pet Products & Digital Guides E-commerce Platform built with Next.js 14, preparing for acquisition on Acquire.com.",
    summary: "Building sustainable pet products platform with advanced features for acquisition - modern tech stack with Three.js, Redis, and PostgreSQL.",
    role: "Full Stack Developer & Founder",
    impact: [
      "Preparing for acquisition on Acquire.com",
      "Built with modern Next.js 14 and advanced features",
      "Sustainable e-commerce with digital product integration"
    ],
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Redis", "Three.js", "Prisma", "Node.js"],
    image: "/images/ecopaws-harmony.png",
    github: "https://github.com/yosephdev/ecopaws-harmony",
    url: "https://ecopaws-harmony.vercel.app/",
    featured: true,
  },
  {
    slug: "limoflow",
    title: "LimoFlow",
    description:
      "Professional White-Label Chauffeur Booking System with Distance Calculation, Stripe Integration, and Admin Dashboard. Ready to deploy.",
    summary: "Built comprehensive white-label chauffeur booking SaaS with real-time distance calculation and complete admin dashboard.",
    role: "Full Stack Developer",
    impact: [
      "Complete white-label solution ready for deployment",
      "Real-time distance calculation with Google Maps",
      "Full Stripe payment integration and admin dashboard"
    ],
    tech: ["JavaScript", "Stripe", "Google Maps", "Cloudflare", "Payment Processing", "Booking System"],
    image: "/images/limoflow.png",
    github: "https://github.com/yosephdev/limoflow",
    url: "https://limoflow.vercel.app",
  },
  {
    slug: "dina-boutique",
    title: "Dina Boutique",
    description:
      "Production-ready, full-featured e-commerce platform built for entrepreneurial journeys.",
    summary: "Launched complete e-commerce platform with inventory management and payment processing.",
    role: "Full Stack Developer",
    impact: [
      "Built complete e-commerce solution from scratch",
      "Implemented inventory and order management",
      "Integrated secure payment processing"
    ],
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    image: "/images/dina-boutique.png",
    github: "https://github.com/yosephdev/dina-boutique",
    url: "https://dina-boutique.vercel.app/",
  },
  {
    slug: "babys-and-me",
    title: "Baby's & Me",
    description:
      "E-commerce storefront for handmade baby products, built with a component-driven UI and modern tooling.",
    summary: "Developed modern e-commerce platform for handmade baby products with seamless shopping experience.",
    role: "Full Stack Developer",
    impact: [
      "Built responsive storefront with mobile-first design",
      "Integrated secure payment processing",
      "Optimized for performance and SEO"
    ],
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babysme.com",
    featured: true,
  },
  {
    slug: "selams-handmade",
    title: "Selam's Handmade",
    description:
      "Production e-commerce site for handcrafted goods with a focus on performance, simplicity, and trust.",
    summary: "Migrated store to modern platform and improved SEO, contributing to significant sales increase.",
    role: "Web Developer",
    impact: [
      "Increased sales by 25% after SEO and performance improvements",
      "Integrated Etsy for expanded product reach",
      "Improved site speed and mobile experience"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/selams-handmade.png",
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/",
    featured: true,
  },
  {
    slug: "isaks-bilar",
    title: "Isaks Bilar",
    description:
      "E-commerce storefront for toy, model, and RC cars built with a modern Next.js stack.",
    summary: "Built specialized e-commerce platform for hobby and toy vehicles with modern features.",
    role: "Full Stack Developer",
    impact: [
      "Created niche e-commerce platform",
      "Implemented advanced product filtering",
      "Built responsive shopping experience"
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/isaks-bilar.png",
    github: "https://github.com/yosephdev/isaks-bilar",
    url: "https://isaks-bilar.netlify.app/",
  },
];
