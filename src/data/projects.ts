/**
 * Defines the structure for a project object.
 * Using an interface ensures all projects in the array
 * have the same shape, preventing errors.
 */
export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  url: string;
}

/**
 * List of projects
 */
export const projects: Project[] = [  
  {
    slug: "fitgear-clean",
    title: "FitGear",
    description: "A modern e-commerce platform designed for sports equipment enthusiasts, built with a full-stack MERN architecture.",
    tech: ["React", "TypeScript", "Python", "MongoDB", "Tailwind CSS"],
    image: "/images/fitgear.png",
    github: "https://github.com/yosephdev/FitGear-Clean",
    url: "https://frontend-iota-seven-68.vercel.app/"
  },
  {
    slug: "isaks-store",
    title: "Isak's Store",
    description: "A modern full-stack e-commerce platform built with Next.js, Express, MongoDB, and Stripe for payments.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/images/isaks-store.png",
    github: "https://github.com/yosephdev/isaks-store",
    url: "https://isaks-store.vercel.app/"
  },
  {
    slug: "tigray-tutor-ai",
    title: "Tigray Tutor AI",
    description: "An AI-powered educational platform designed specifically for Tigrinya-speaking students to provide personalized tutoring.",
    tech: ["AI", "TypeScript", "React", "Next.js"],
    image: "/images/tigray-tutor-ai.png",
    github: "https://github.com/yosephdev/tigray-tutor-ai",
    url: "https://tigray-tutor-ai.vercel.app/"
  },
  {
    slug: "revolutaging",
    title: "Revolutaging",
    description: "A compassionate AI companion application for seniors, featuring empathetic chat, health monitoring, and caregiver alerts.",
    tech: ["AI", "TypeScript", "React Native", "Voice AI"],
    image: "/images/revolutaging.png",
    github: "https://github.com/yosephdev/revolutaging",
    url: "https://revolutaging.vercel.app/"
  },
  {
    slug: "habesha-boutique",
    title: "Habesha Boutique",
    description: "An online women's fashion boutique selling luxury apparel, accessories, and outerwear including fur coats, dresses, and yoga sets.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce"],
    image: "/images/Habesha Boutique-preview.png",
    github: "https://github.com/yosephdev/habesha-boutique",
    url: "https://habeshaboutique.com/"
  },
  {
    slug: "stayswift",
    title: "StaySwift",
    description: "A modern hotel search and booking application powered by LiteAPI, featuring interactive maps, real-time hotel data, and seamless booking experiences across web and mobile platforms.",
    tech: ["React", "TypeScript", "LiteAPI", "Tailwind CSS", "Google Maps API", "Responsive Design"],
    image: "/images/stayswift.png",
    github: "https://github.com/yosephdev/stayswift",
    url: "https://stayswift-kappa.vercel.app/"
  },
  {
    slug: "jusplay-cinema-connect",
    title: "JusPlay Cinema Connect",
    description: "A modern streaming platform front-end built with React and TypeScript, integrating with the TMDB API.",
    tech: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    image: "/images/jusplay.png",
    github: "https://github.com/yosephdev/jusplay-cinema-connect",
    url: "https://jusplay.netlify.app/"
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
    slug: "mt-butik",
    title: "MT Skrädderi & Butik",
    description: "Professional tailoring, men's barbering, and authentic Habesha products in the heart of Eskilstuna.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/mt-butik.png",
    github: "https://github.com/yosephdev/mt-butik",
    url: "https://mt-butik.vercel.app/"
  },
  {
    slug: "habesha-smak-butik",
    title: "Habesha Smak Butik",
    description: "A multilingual e-commerce platform specializing in authentic Ethiopian food products, spices, and cultural items.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/habesha-smak-butik.png",
    github: "https://github.com/yosephdev/habesha-smak-butik",
    url: "https://habesha-smak-butik.vercel.app/"
  },
  {
    slug: "babys-and-me",
    title: "Baby's & Me",
    description: "A responsive eCommerce store offering handmade baby and toddler products with focus on sustainability.",
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babysme.com"
  },
  {
    slug: "selams-handmade",
    title: "Selam's Handmade",
    description: "An elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/selams-handmade.png",
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/"
  },
  {
    slug: "cascadia-chauffeur-services",
    title: "Cascadia Chauffeur Services",
    description: "A modern booking platform for Cascadia Transports, designed to streamline the process of booking chauffeur services.",
    tech: ["Bootstrap 5", "JavaScript", "Django", "PostgreSQL"],
    image: "/images/cascadia.png",
    github: "https://github.com/yosephdev/chauffeur-booking-system",
    url: "https:/www.cascadiatransports.com/"
  },
  {
    slug: "ternafit",
    title: "Ternafit",
    description: "A platform for a Sweden-based NGO empowering the Tigrean people through information sharing and raising awareness.",
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/ternafit.png",
    github: "https://github.com/yosephdev/ternafit",
    url: "https://ternafit.org/"
  },  
];