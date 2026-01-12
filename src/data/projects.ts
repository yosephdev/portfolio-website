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
    slug: "phonea",
    title: "Phonea",
    description:
      "Website for mobile repair and accessories in Katrineholm. Online booking, price list, and admin dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "SendGrid",
      "Mailgun",
      "Twilio",
      "Google Calendar API",
    ],
    image: "/images/phonea.png",
    github: "https://github.com/yosephdev/phonea",
    url: "https://phonea.se/",
  },
  {
    slug: "dungo-energy-solutions",
    title: "Dungo Energy Solutions",
    description:
      "Powering Tigray With Sustainable Energy. Modern solar solutions for communities in Ethiopia.",
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
  ,
  {
    slug: "limoflow",
    title: "LimoFlow",
    description:
      "White-label limousine booking system with customer, admin, and driver portals. Built for global edge performance.",
    tech: [
      "Cloudflare Workers",
      "Hono v4",
      "Cloudflare D1",
      "TailwindCSS",
      "Stripe",
      "Google Maps API",
    ],
    image: "/images/limoflow.png",
    github: "https://github.com/yosephdev/limoflow",
    url: "https://limoflow-demo.pages.dev/",
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
    url: "https://yaz-mari-website.vercel.app/",
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
    slug: "isaks-bilar",
    title: "Isaks Bilar",
    description:
      "An e-commerce storefront for toy, model, and RC cars built with a modern Next.js stack.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/isaks-bilar.png",
    github: "https://github.com/yosephdev/isaks-bilar",
    url: "https://isaks-bilar.netlify.app/",
  },
];
