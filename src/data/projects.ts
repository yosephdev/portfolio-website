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
  category?: "Featured" | "Client Work" | "E-commerce" | "Web App" | "AI & Education" | "Community"; // project category for organization
  caseStudy?: string; // link to case study blog post
  featured?: boolean; // for highlighting key projects
}

/**
 * List of projects
 * Organized by category: Featured projects first, then Client Work, then other categories
 */
export const projects: Project[] = [
  // FEATURED PROJECTS
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
    category: "Featured",
    featured: true,
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
    category: "Featured",
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
    image: "/images/eco-paws.png",
    github: "https://github.com/yosephdev/ecopaws-harmony",
    url: "https://ecopaws-harmony.vercel.app/",
    category: "Featured",
    featured: true,
  },

  // CLIENT WORK PROJECTS
  {
    slug: "cascadia-transport",
    title: "Cascadia Transport Services",
    description:
      "Professional website for a transport and logistics company showcasing services and fleet information.",
    summary: "Built modern, responsive website for transport company with service showcasing and contact integration.",
    role: "Web Developer",
    impact: [
      "Created professional business presence online",
      "Responsive design for mobile and desktop users",
      "Integrated inquiry and booking functionality"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/Cascadian-Transportation-preview.png",
    github: "",
    url: "#",
    category: "Client Work",
    featured: false,
  },
  {
    slug: "enjera-restaurant",
    title: "Enjera Restaurant",
    description:
      "Digital presence for an Ethiopian restaurant featuring menu, location, and dining experience showcase.",
    summary: "Developed responsive website for Ethiopian restaurant with menu display and reservation features.",
    role: "Full Stack Developer",
    impact: [
      "Increased online visibility and customer reach",
      "Built interactive menu and reservation system",
      "Mobile-optimized for restaurant customer base"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/enjera-resturang-preview.png",
    github: "",
    url: "#",
    category: "Client Work",
    featured: false,
  },
  {
    slug: "super-merra-frisör",
    title: "Super Merra Frisör",
    description:
      "Modern salon website for a hair and beauty service provider with appointment booking and service gallery.",
    summary: "Created professional salon website with appointment booking system and service portfolio.",
    role: "Full Stack Developer",
    impact: [
      "Built appointment booking system",
      "Showcased services with professional gallery",
      "Improved customer booking experience"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/supermerra.png",
    github: "",
    url: "#",
    category: "Client Work",
    featured: false,
  },
  {
    slug: "mt-butik-eskilstuna",
    title: "MT Butik Eskilstuna",
    description:
      "Retail boutique website for a fashion and style shop located in Eskilstuna with product showcase.",
    summary: "Developed e-commerce platform for retail boutique with product catalog and shopping features.",
    role: "Full Stack Developer",
    impact: [
      "Built online product catalog and shopping cart",
      "Optimized for local customer discovery",
      "Integrated inventory management"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/mt-butik-eskilstuna.png",
    github: "",
    url: "#",
    category: "Client Work",
    featured: false,
  },
  {
    slug: "lynqo",
    title: "Lynqo",
    description:
      "Modern platform connecting and managing professional networks and collaborations.",
    summary: "Built collaborative web application for professional networking with advanced connection features.",
    role: "Full Stack Developer",
    impact: [
      "Created professional networking platform",
      "Built messaging and collaboration tools",
      "Implemented user profile and connection management"
    ],
    tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/images/lynqo-preview.png",
    github: "",
    url: "#",
    category: "Client Work",
    featured: false,
  },
  {
    slug: "tigriconnect",
    title: "TigriConnect",
    description:
      "Community platform designed for Tigrinya speakers to connect, share, and preserve cultural heritage.",
    summary: "Developed community platform for Tigrinya speakers with content sharing and cultural connection features.",
    role: "Full Stack Developer",
    impact: [
      "Built community-focused platform for cultural connection",
      "Implemented content sharing and messaging",
      "Created spaces for language preservation initiatives"
    ],
    tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/images/tigriconnect-preview.png",
    github: "",
    url: "#",
    category: "Community",
    featured: false,
  },
  {
    slug: "koll",
    title: "Koll",
    description:
      "Collaborative web application for teams to organize, plan, and execute projects together.",
    summary: "Built team collaboration tool with project management and real-time updates.",
    role: "Full Stack Developer",
    impact: [
      "Created collaborative workspace for teams",
      "Built real-time project updates and notifications",
      "Implemented task assignment and progress tracking"
    ],
    tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/images/Koll-preview.png",
    github: "",
    url: "#",
    category: "Web App",
    featured: false,
  },
  {
    slug: "ternafit",
    title: "TernaFit",
    description:
      "Fitness and wellness platform offering personalized workout plans, nutrition guidance, and progress tracking.",
    summary: "Developed comprehensive fitness platform with personalized workout and nutrition guidance.",
    role: "Full Stack Developer",
    impact: [
      "Built personalized fitness tracking system",
      "Implemented nutrition and workout planning features",
      "Created progress monitoring and goal-setting tools"
    ],
    tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/images/ternafit-preview.png",
    github: "",
    url: "#",
    category: "Web App",
    featured: false,
  },

  // E-COMMERCE PROJECTS
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
    category: "E-commerce",
    featured: false,
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
    category: "E-commerce",
    featured: false,
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
    category: "E-commerce",
    featured: false,
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
    category: "E-commerce",
    featured: false,
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
    category: "E-commerce",
    featured: false,
  },
  {
    slug: "isaks-store",
    title: "Isaks Store",
    description:
      "Online retail store for hobby and collectible items with secure checkout and inventory management.",
    summary: "Built online store with shopping cart, payment processing, and inventory tracking.",
    role: "Full Stack Developer",
    impact: [
      "Created functional e-commerce storefront",
      "Integrated payment processing",
      "Implemented inventory management system"
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/isaks-store.png",
    github: "https://github.com/yosephdev/isaks-store",
    url: "https://isaks-store.vercel.app/",
    category: "E-commerce",
    featured: false,
  },
  {
    slug: "fitgear",
    title: "FitGear",
    description:
      "E-commerce platform specializing in sports equipment and fitness gear with comprehensive product catalog.",
    summary: "Developed sports equipment e-commerce platform with filtering, reviews, and secure checkout.",
    role: "Full Stack Developer",
    impact: [
      "Built sports equipment marketplace",
      "Implemented product reviews and ratings",
      "Created advanced filtering and search"
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/fitgear.png",
    github: "https://github.com/yosephdev/fitgear",
    url: "https://fitgear.vercel.app/",
    category: "E-commerce",
    featured: false,
  },
  {
    slug: "knowledge-base",
    title: "Knowledge Base",
    description:
      "Comprehensive documentation and knowledge management platform for organizing and sharing information.",
    summary: "Built searchable knowledge base with categorized articles and full-text search.",
    role: "Full Stack Developer",
    impact: [
      "Created comprehensive documentation system",
      "Implemented full-text search functionality",
      "Built content categorization and tagging"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "/images/knowledge-base.png",
    github: "https://github.com/yosephdev/knowledge-base",
    url: "https://knowledge-base.vercel.app/",
    category: "Web App",
    featured: false,
  },

  // WEB APPS & SERVICES
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
    category: "Web App",
    featured: false,
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
    category: "Web App",
    featured: false,
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
    category: "Web App",
    featured: false,
  },

  // AI & EDUCATION
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
    category: "AI & Education",
    featured: false,
  },

  // COMMUNITY & SUSTAINABILITY
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
    category: "Community",
    featured: false,
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
    category: "Web App",
    featured: false,
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
    category: "Web App",
    featured: false,
  },
];
