import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { marked } from "marked";

// Define the project details
const projects = {
  "fitgear-clean": {
    title: "FitGear",
    description:
      "A modern e-commerce platform designed for sports equipment enthusiasts, built with a full-stack MERN architecture.",
    longDescription: `FitGear is a comprehensive e-commerce platform designed for sports equipment enthusiasts. Built with a full-stack MERN architecture, it provides a seamless shopping experience for fitness and sports gear.
<br>
## 🌟 Key Features
<br>
- 🛍️ **Product Catalog**: Browse sports equipment by categories
- 🔍 **Search & Filter**: Advanced search and filtering options
- 🛒 **Shopping Cart**: Add products and manage cart with real-time updates
- 💳 **Secure Checkout**: Integrated payment processing
- 👤 **User Accounts**: Registration, login, and profile management
- ⭐ **Product Reviews**: Rate and review products
- 📱 **Responsive Design**: Optimized for all devices
- 🎨 **Modern UI**: Clean and intuitive interface
<br>
## 🛠 Tech Stack
<br>
**Frontend:** React · TypeScript · Tailwind CSS
**Backend:** Python · MongoDB
**Development:** ESLint · Prettier
**Performance:** Optimized assets and lazy loading
<br>
## Technical Highlights
<br>
- Full-stack MERN architecture for scalability
- TypeScript for type safety and better development experience
- MongoDB for flexible data storage
- Tailwind CSS for modern, responsive design
- RESTful API design
- State management for seamless user experience`,
    tech: ["React", "TypeScript", "Python", "MongoDB", "Tailwind CSS"],
    image: "/images/fitgear.png",
    screenshots: ["/images/fitgear.png"],
    github: "https://github.com/yosephdev/FitGear-Clean",
    url: "https://frontend-iota-seven-68.vercel.app/",
  },
  "isaks-store": {
    title: "Isak's Store",
    description:
      "A modern full-stack e-commerce platform built with Next.js, Express, MongoDB, and Stripe for payments.",
    longDescription: `Isak's Store is a modern full-stack e-commerce platform that provides a complete online shopping experience. Built with Next.js for optimal performance and SEO, it features secure payment processing through Stripe integration.
<br>
## 🌟 Key Features
<br>
- 🛍️ **Complete E-commerce Solution**: Product browsing, cart, and checkout
- 💳 **Stripe Integration**: Secure payment processing
- 👤 **User Authentication**: Secure account management
- 📦 **Order Management**: Track orders and purchase history
- 🔍 **Product Search**: Advanced search and filtering
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Modern UI**: Clean interface with Tailwind CSS
- ⚡ **Fast Performance**: Next.js optimization
<br>
## 🛠 Tech Stack
<br>
**Frontend:** Next.js · Tailwind CSS
**Backend:** Express · MongoDB
**Payment:** Stripe
**Authentication:** JWT
**Deployment:** Vercel
<br>
## Technical Highlights
<br>
- Next.js for server-side rendering and optimal SEO
- Express backend for robust API handling
- MongoDB for flexible data storage
- Stripe for secure payment processing
- JWT authentication for security
- Tailwind CSS for responsive design
- RESTful API architecture`,
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/images/isaks-store.png",
    screenshots: ["/images/isaks-store.png"],
    github: "https://github.com/yosephdev/isaks-store",
    url: "https://isaks-store.vercel.app/",
  },
  "tigray-tutor-ai": {
    title: "Tigray Tutor AI",
    description:
      "An AI-powered educational platform designed specifically for Tigrinya-speaking students to provide personalized tutoring.",
    longDescription: `Tigray Tutor AI is an innovative educational platform that leverages artificial intelligence to provide personalized tutoring experiences for Tigrinya-speaking students. The platform adapts to individual learning styles and provides culturally relevant educational content.
<br>
## 🌟 Key Features
<br>
- 🤖 **AI-Powered Tutoring**: Personalized learning experiences
- 🌍 **Tigrinya Language Support**: Native language instruction
- 📚 **Adaptive Learning**: Adjusts to student's pace and level
- 💬 **Interactive Chat**: Real-time AI tutor interaction
- 📊 **Progress Tracking**: Monitor learning achievements
- 🎯 **Targeted Practice**: Focus on areas needing improvement
- 📱 **Mobile Friendly**: Learn anywhere, anytime
- 🎨 **Engaging UI**: Modern and intuitive interface
<br>
## 🛠 Tech Stack
<br>
**Frontend:** Next.js · React · TypeScript
**AI/ML:** Custom AI models for educational content
**Styling:** Tailwind CSS
**Deployment:** Vercel
<br>
## Technical Highlights
<br>
- AI-powered personalized learning algorithms
- Natural language processing for Tigrinya language
- Real-time interactive tutoring sessions
- TypeScript for type-safe development
- Next.js for optimal performance
- Responsive design for all devices
- Progress tracking and analytics`,
    tech: ["AI", "TypeScript", "React", "Next.js"],
    image: "/images/tigray-tutor-ai.png",
    screenshots: ["/images/tigray-tutor-ai.png"],
    github: "https://github.com/yosephdev/tigray-tutor-ai",
    url: "https://tigray-tutor-ai.vercel.app/",
  },
  "phonea": {
    title: "Phonea",
    description:
      "Webbplats för mobilreparation och tillbehör i Katrineholm. Online bokning, prislista, och admin dashboard.",
    longDescription: `Phonea är en webbplats för mobilreparation och tillbehör i Katrineholm. Besök butiken på Kungsgatan 18.

## 🌟 Funktioner
- Prislista med alla iPhone och Samsung reparationspriser
- Online bokning av reparationer med fullständig backend-integration
- Tillbehörsbutik med varukorg
- Instagram-integration
- Mobilanpassad design
- Admin dashboard för bokningshantering
- Automatiska e-post- och SMS-bekräftelser
- Google Calendar-integration för tidsbokningar

## 🛠️ Arkitektur & Teknik
**Frontend:** Next.js 16 med TypeScript
**Styling:** Tailwind CSS med shadcn/ui
**Database:** MongoDB med Mongoose
**Email:** Nodemailer med SendGrid/Mailgun
**SMS:** Twilio
**Calendar:** Google Calendar API

## 📦 Quick Start
1. Installera beroenden: \`npm install\`
2. Starta dev-server: \`npm run dev\`
3. Öppna http://localhost:3000

## Kontakt
Phonea: 072 269 91 46
Utvecklare: contact@yoseph.dev`,
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
    screenshots: ["/images/phonea.png"],
    github: "https://github.com/yosephdev/phonea",
    url: "https://phonea.se/",
  },
  "dungo-energy-solutions": {
    title: "Dungo Energy Solutions",
    description:
      "Powering Tigray With Sustainable Energy. Modern solar solutions for communities in Ethiopia.",
    longDescription: `Dungo Energy Solutions är dedikerade till att modernisera och återuppbygga energiinfrastruktur i Tigray med innovativa solenergilösningar.

## 🌊 Om Dungo
- Sol-drivna brunnsrenoveringar
- Community Solar Charging Stations
- Solprodukter för hem och företag

## 🛠️ Teknikstack
**Frontend:** React 18.3 · TypeScript · Vite · Tailwind CSS · React Router · Lucide React

## 📦 Installation
1. npm install
2. npm run dev
3. npm run build
4. npm run preview

## 🎨 Brand Colors
- Solar Yellow: #FFCC00
- Deep Red: #A30000
- Sky Blue: #2A91F7
- Earth Green: #1B7F37

## 📄 Sidor
- Home
- About Us
- Solutions
- Projects
- Partner & Support
- Contact

## 🌍 Mission
Att återuppbygga och modernisera Tigrays energiinfrastruktur med solenergi, fokus på samhällsresiliens och partnerskap.

## 👥 Founders
- Yoseph – Co-Founder & Technical Lead
- Kbrom – Co-Founder & Operations Director

## 📞 Kontakt
Mekelle Office
📍 Mekelle, Tigray, Ethiopia
📧 info@dungoenergy.org
📱 WhatsApp: +251 91 XXX XXXX`,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Lucide React",
    ],
    image: "/images/dungoenergy.png",
    screenshots: ["/images/dungoenergy.png"],
    github: "https://github.com/yosephdev/dungoenergy",
    url: "https://dungoenergy.org/",
  },
  "limoflow": {
    title: "LimoFlow",
    description:
      "White-label limousine booking system with customer, admin, and driver portals. Built for global edge performance.",
    longDescription: `LimoFlow är en komplett, produktionsklar plattform för limousinebokning med kundportal, admin dashboard och förarportal. Byggd på Cloudflare Workers för global edge-prestanda.

## ✨ Funktioner
### 🚖 Kundportal
- Instant Quote Calculator med Google Maps
- Smart bokningsflöde
- Flera tjänstetyper
- Stripe-betalningar
- Mobilanpassad design

### 📊 Admin Dashboard
- Bokningshantering
- Interaktiv bokningsmodal
- Fordonshantering
- Förarhantering
- Realtidsstatistik
- Mobilanpassad sidebar

### 🚗 Förarportal
- Trip Dashboard
- Google Maps-navigering
- Statusuppdateringar
- Mobilanpassad design

### 💳 Betalningar
- Stripe-integration
- Multi-currency
- Test & live mode

## 🛠️ Teknikstack
- Cloudflare Workers (Edge runtime)
- Hono v4 (Web framework)
- Cloudflare D1 (SQLite database)
- TailwindCSS
- Stripe
- Google Maps API

## 🌐 Live Demo
https://limoflow-demo.pages.dev`,
    tech: [
      "Cloudflare Workers",
      "Hono v4",
      "Cloudflare D1",
      "TailwindCSS",
      "Stripe",
      "Google Maps API",
    ],
    image: "/images/limoflow.png",
    screenshots: ["/images/limoflow.png"],
    github: "https://github.com/yosephdev/limoflow",
    url: "https://limoflow-demo.pages.dev/",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState(
    slug ? projects[slug as keyof typeof projects] : null
  );
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    if (!project) {
      window.location.href = "/projects";
      return;
    }

    // Scroll to top
    window.scrollTo(0, 0);

    if (project.longDescription) {
      const htmlOrPromise = marked(project.longDescription, {
        breaks: true,
        gfm: true,
      });

      if (htmlOrPromise instanceof Promise) {
        htmlOrPromise.then((html) => setHtmlContent(html));
      } else {
        setHtmlContent(htmlOrPromise);
      }
    }
  }, [project, slug]);

  if (!project) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <article className="mx-auto max-w-screen-lg py-8 md:py-12 px-4">
          <div className="mx-auto max-w-[800px]">
            {/* Header */}
            <div className="mb-8">
              <Link
                to="/projects"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to Projects
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                {project.url && (
                  <Button asChild>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="my-8 overflow-hidden rounded-lg border">
                <img
                  src={project.image}
                  alt={`${project.title} main image`}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Markdown Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="my-12">
                <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
