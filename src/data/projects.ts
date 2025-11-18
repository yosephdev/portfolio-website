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
    description:
      "A modern e-commerce platform designed for sports equipment enthusiasts, built with a full-stack MERN architecture.",
    tech: ["React", "TypeScript", "Python", "MongoDB", "Tailwind CSS"],
    image: "/images/fitgear.png",
    github: "https://github.com/yosephdev/FitGear-Clean",
    url: "https://frontend-iota-seven-68.vercel.app/",
  },
  {
    slug: "isaks-store",
    title: "Isak's Store",
    description:
      "A modern full-stack e-commerce platform built with Next.js, Express, MongoDB, and Stripe for payments.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/images/isaks-store.png",
    github: "https://github.com/yosephdev/isaks-store",
    url: "https://isaks-store.vercel.app/",
  },
  {
    slug: "tigray-tutor-ai",
    title: "Tigray Tutor AI",
    description:
      "An AI-powered educational platform designed specifically for Tigrinya-speaking students to provide personalized tutoring.",
    tech: ["AI", "TypeScript", "React", "Next.js"],
    image: "/images/tigray-tutor-ai.png",
    github: "https://github.com/yosephdev/tigray-tutor-ai",
    url: "https://tigray-tutor-ai.vercel.app/",
  },
  {
    slug: "afelu",
    title: "Afelu",
    description:
      "A global sustainable marketplace connecting eco-conscious consumers with verified green vendors.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/afelu.png",
    github: "https://github.com/yosephdev/afelu",
    url: "https://afelu.vercel.app/",
  },
  {
    slug: "habesha-boutique",
    title: "Habesha Boutique",
    description:
      "An online women's fashion boutique selling luxury apparel, accessories, and outerwear including fur coats, dresses, and yoga sets.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce"],
    image: "/images/Habesha Boutique-preview.png",
    github: "https://github.com/yosephdev/habesha-boutique",
    url: "https://habeshaboutique.com/",
  },
  {
    slug: "stayswift",
    title: "StaySwift",
    description:
      "A modern hotel search and booking application powered by LiteAPI, featuring interactive maps, real-time hotel data, and seamless booking experiences across web and mobile platforms.",
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
      "A modern streaming platform front-end built with React and TypeScript, integrating with the TMDB API.",
    tech: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    image: "/images/jusplay.png",
    github: "https://github.com/yosephdev/jusplay-cinema-connect",
    url: "https://jusplay.netlify.app/",
  },
  {
    slug: "yaz-mari-website",
    title: "Yaz Mari Music Website",
    description: "Modern Amharic & Reggae Music Streaming Platform.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Spotify API"],
    image: "/images/yaz-mari-website.png",
    github: "https://github.com/yosephdev/yaz-mari-website",
    url: "https://yaz-mari.vercel.app/",
  },
  {
    slug: "mt-butik",
    title: "MT Skrädderi & Butik",
    description:
      "Professional tailoring, men's barbering, and authentic Habesha products in the heart of Eskilstuna.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/mt-butik.png",
    github: "https://github.com/yosephdev/mt-butik",
    url: "https://mt-butik.vercel.app/",
  },
  {
    slug: "habesha-smak-butik",
    title: "Habesha Smak Butik",
    description:
      "A multilingual e-commerce platform specializing in authentic Ethiopian food products, spices, and cultural items.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/habesha-smak-butik.png",
    github: "https://github.com/yosephdev/habesha-smak-butik",
    url: "https://habesha-smak-butik.vercel.app/",
  },
  {
    slug: "babys-and-me",
    title: "Baby's & Me",
    description:
      "A responsive eCommerce store offering handmade baby and toddler products with focus on sustainability.",
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babysme.com",
  },
  {
    slug: "selams-handmade",
    title: "Selam's Handmade",
    description:
      "An elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/selams-handmade.png",
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/",
  },
  {
    slug: "cascadia-chauffeur-services",
    title: "Cascadia Chauffeur Services",
    description:
      "A modern, full-stack limousine booking system built with Hono and Cloudflare Pages, featuring instant quotes, multi-step reservations, admin dashboard, and driver portal.",
    tech: [
      "JavaScript(ES6+)",
      "Hono",
      "Cloudflare Workers",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
    ],
    image: "/images/cascadia.png",
    github: "https://github.com/yosephdev/cascadia-booking-system",
    url: "https://www.cascadiatransports.com/",
  },
  {
    slug: "isaks-bilar",
    title: "Isaks Bilar",
    description:
      "En modern e-handelsplattform för leksaksbilar, modellbilar och RC-bilar.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/isaks-bilar.png",
    github: "https://github.com/yosephdev/isaks-bilar",
    url: "https://isaks-bilar.vercel.app/",
  },
];
