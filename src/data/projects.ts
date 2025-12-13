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
      "A full-stack e-commerce platform for sports equipment, built with a MERN-style architecture and a clean, scalable frontend.",
    tech: ["React", "TypeScript", "Python", "MongoDB", "Tailwind CSS"],
    image: "/images/fitgear.png",
    github: "https://github.com/yosephdev/FitGear-Clean",
    url: "https://frontend-iota-seven-68.vercel.app/",
  },
  {
    slug: "isaks-store",
    title: "Isak's Store",
    description:
      "A production-ready e-commerce system with secure payments, product management, and a modern Next.js frontend.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/images/isaks-store.png",
    github: "https://github.com/yosephdev/isaks-store",
    url: "https://isaks-store.vercel.app/",
  },
  {
    slug: "tigray-tutor-ai",
    title: "Tigray Tutor AI",
    description:
      "An AI-assisted learning platform providing personalized educational support for Tigrinya-speaking students.",
    tech: ["AI", "TypeScript", "React", "Next.js"],
    image: "/images/tigray-tutor-ai.png",
    github: "https://github.com/yosephdev/tigray-tutor-ai",
    url: "https://tigray-tutor-ai.vercel.app/",
  },
  {
    slug: "ecosyn",
    title: "EcoSyn",
    description:
      "A sustainable marketplace platform connecting eco-conscious buyers with verified green vendors.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/ecosyn.png",
    github: "https://github.com/yosephdev/ecosyn",
    url: "https://ecosyn-yoseph-berhanes-projects.vercel.app/",
  },
  {
    slug: "habesha-boutique",
    title: "Habesha Boutique",
    description:
      "A Shopify-based fashion storefront focused on premium women’s apparel and a polished online shopping experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce"],
    image: "/images/Habesha Boutique-preview.png",
    github: "https://github.com/yosephdev/habesha-boutique",
    url: "https://habeshaboutique.com/",
  },
  {
    slug: "stayswift",
    title: "StaySwift",
    description:
      "A hotel discovery and booking application integrating real-time data, maps, and responsive search workflows.",
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
      "A streaming platform frontend built with React and TypeScript, consuming movie data from the TMDB API.",
    tech: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    image: "/images/jusplay.png",
    github: "https://github.com/yosephdev/jusplay-cinema-connect",
    url: "https://jusplay.netlify.app/",
  },
  {
    slug: "yaz-mari-website",
    title: "Yaz Mari Music Website",
    description:
      "A modern music platform showcasing Amharic and reggae content with API-driven media integration.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Spotify API"],
    image: "/images/yaz-mari-website.png",
    github: "https://github.com/yosephdev/yaz-mari-website",
    url: "https://yaz-mari.vercel.app/",
  },
  {
    slug: "mt-butik",
    title: "MT Skrädderi & Butik",
    description:
      "A business website for a local tailoring and grooming shop, focused on clarity, accessibility, and speed.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/mt-butik.png",
    github: "https://github.com/yosephdev/mt-butik",
    url: "https://mt-butik.vercel.app/",
  },
  {
    slug: "habesha-smak-butik",
    title: "Habesha Smak Butik",
    description:
      "A multilingual e-commerce platform for Ethiopian food products with secure checkout and structured catalog management.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/habesha-smak-butik.png",
    github: "https://github.com/yosephdev/habesha-smak-butik",
    url: "https://habesha-smak-butik.vercel.app/",
  },
  {
    slug: "babys-and-me",
    title: "Baby's & Me",
    description:
      "An e-commerce storefront for handmade baby products, built with a component-driven UI and modern tooling.",
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babysme.com",
  },
  {
    slug: "selams-handmade",
    title: "Selam's Handmade",
    description:
      "A production e-commerce site for handcrafted goods with a focus on performance, simplicity, and trust.",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/selams-handmade.png",
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/",
  },
  {
    slug: "cascadia-chauffeur-services",
    title: "Cascadia Chauffeur Services",
    description:
      "A full-stack limousine booking system with instant quotes, role-based access, and an admin management dashboard.",
    tech: [
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "JavaScript (ES6+)",
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
      "An e-commerce storefront for toy, model, and RC cars built with a modern Next.js stack.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/isaks-bilar.png",
    github: "https://github.com/yosephdev/isaks-bilar",
    url: "https://isaks-bilar.vercel.app/",
  },
];
