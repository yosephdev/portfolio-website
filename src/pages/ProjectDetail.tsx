import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { marked } from "marked";

// Define the project details
const projects = {
  "mt-butik": {
    title: "MT Skrädderi & Butik",
    description:
      "Professional tailoring, men's barbering, and authentic Habesha products in the heart of Eskilstuna.",
    longDescription: `
MT Skrädderi & Butik is a professional business combining traditional tailoring, men's barbering services, and authentic Habesha products. Located in the heart of Eskilstuna, the business offers high-quality services with a focus on personal service and cultural authenticity.

<br>

## 🌟 Key Features

<br>

- 👔 **Professional Tailoring**: Custom-made clothing and alterations
- ✂️ **Men's Barbering**: Professional grooming services for men
- 🛍️ **Habesha Products**: Authentic Ethiopian products and clothing
- 📍 **Central Location**: Located in Eskilstuna city center
- 🎨 **Modern Design**: Clean and user-friendly web platform
- 📱 **Responsive Design**: Works perfectly on all devices

<br>

## 🛠 Tech Stack

<br>

**Frontend:** Vite · React 18 · TypeScript · Tailwind CSS
**Icons:** Lucide React
**Development:** ESLint · PostCSS · Autoprefixer
**Build Tool:** Vite for fast development and optimized builds
**Performance:** Optimized assets and fast loading times

<br>

## Technical Details

<br>

The website is built with Vite as the build tool for lightning-fast development and optimized production builds. React 18 with TypeScript ensures type safety and modern development practices, while Tailwind CSS provides utility-first styling.

<br>

Key technical aspects:
<br>

- Vite for ultra-fast hot module replacement and optimized builds
- React 18 with latest features and TypeScript for type safety
- Tailwind CSS for utility-first styling and responsive design
- Lucide React for consistent and scalable icon system
- ESLint with modern configuration for code quality
- PostCSS with Autoprefixer for cross-browser compatibility
- Modular architecture for maintainable codebase
        `,
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    image: "/images/mt-butik.png",
    screenshots: ["/images/mt-butik.png"],
    github: "https://github.com/yosephdev/mt-butik",
    url: "https://mt-butik.vercel.app/",
  },
  "habesha-smak-butik": {
    title: "Habesha Smak Butik",
    description:
      "A multilingual e-commerce platform specializing in authentic Ethiopian food products, spices, and cultural items.",
    longDescription: `
Habesha Smak Butik is a comprehensive multilingual e-commerce platform specializing in authentic Ethiopian food products, spices, and cultural items. The platform supports Swedish, Amharic, and Tigrinya languages, making Ethiopian products accessible to diverse communities.

<br>

## 🌟 Key Features

<br>

- 🌍 **Multilingual Support**: Swedish, Amharic, and Tigrinya languages
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🛍️ **Product Catalog**: Browse Ethiopian products by categories with search functionality
- 🛒 **Shopping Cart**: Add products and manage your shopping cart with real-time updates
- 👤 **User Authentication**: Create an account, login, and manage your profile
- 💳 **Secure Checkout**: Multiple payment options including Stripe integration
- ⭐ **Product Reviews**: Rate and review products
- ❤️ **Wishlist**: Save favorite products for later
- 🚚 **Delivery Information**: Comprehensive delivery options and tracking

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui
**Backend:** Node.js · Express.js · PostgreSQL (Neon Database)
**Payment:** Stripe Integration
**State Management:** React Context API · React Query
**Deployment:** Netlify
**Tools:** React Hook Form · Zod validation · Sonner notifications

<br>

## Technical Details

<br>

The platform is built with modern web technologies to provide a fast, scalable, and multilingual shopping experience. The architecture supports real-time updates, secure payments, and comprehensive user management.

<br>

Key technical aspects:
<br>

- React 18 with TypeScript for type-safe development
- Vite for fast development and optimized builds
- PostgreSQL with Neon Database for reliable data storage
- Stripe integration for secure payment processing
- React Query for efficient data fetching and caching
- Multi-language support with proper internationalization
- Responsive design with Tailwind CSS and shadcn/ui components
- Form validation with React Hook Form and Zod
        `,
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "Vite",
    ],
    image: "/images/habesha-smak-butik.png",
    screenshots: ["/images/habesha-smak-butik.png"],
    github: "https://github.com/yosephdev/habesha-smak-butik",
    url: "https://habesha-smak.netlify.app/",
  },
  "babys-and-me": {
    title: "Baby's & Me",
    description:
      "A responsive eCommerce store offering handmade baby and toddler products with focus on sustainability and supporting local artisans.",
    longDescription: `
Baby's & Me is a responsive eCommerce store offering handmade baby and toddler products. Built for scalability and modern UX, it emphasizes mobile-first design and smooth performance. The platform provides an accessible marketplace supporting local artisans and sustainable babywear.

<br>

## 🌟 Key Features

<br>

- ✅ Responsive product catalog with detailed descriptions
- 🛒 Streamlined shopping cart and checkout experience
- 💳 Secure payment processing integration
- 📱 Mobile-first design approach
- 🧶 Platform for local artisans to showcase handmade products
- ♻️ Focus on sustainable and eco-friendly baby products

<br>

## 🛠 Tech Stack

<br>

**Frontend:** Vite · TypeScript · React · shadcn/ui · Tailwind CSS
**Deployment:** Vercel
**Features:** Modern eCommerce functionality with accessibility focus
**Design:** Clean UI with emphasis on product presentation

<br>

## Technical Details

<br>

The platform is built with Vite for fast development and optimized production builds. TypeScript ensures type safety throughout the codebase, while shadcn/ui components provide a consistent and accessible user interface.

<br>

Key technical aspects:
<br>

- Vite for lightning-fast builds and hot module replacement
- TypeScript for enhanced developer experience and code quality
- Tailwind CSS for utility-first styling and responsive design
- shadcn/ui for accessible, reusable UI components
- Optimized image loading for product catalog performance
        `,
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/babys-and-me.png",
    screenshots: ["/images/babys-and-me.png"],
    github: "https://github.com/yosephdev/babys-and-me",
    url: "https://babys-and-me.vercel.app/",
  },
  "anenitigray-development-services": {
    title: "Anenitigray Development Services (ADS)",
    description:
      "A platform for an NGO committed to fostering sustainable development and providing humanitarian support in Tigray through community-driven initiatives.",
    longDescription: `
Anenitigray Development Services (ADS) is a young Non-Governmental Organization (NGO) committed to fostering sustainable development and providing humanitarian support in Tigray through community-driven initiatives. The website was built to support ADS's mission by offering clarity, accessibility, and scalability.

<br>

## 🌟 Key Features

<br>

- ✅ Clear presentation of the organization's mission and initiatives
- 🌱 Project showcase highlighting community impact
- 💰 Donation and support integration
- 📱 Fully responsive design for all devices
- 📊 Impact metrics and transparency reporting
- 📰 News and updates section for ongoing projects

<br>

## 🛠 Tech Stack

<br>

**Frontend:** Vite · TypeScript · React · shadcn/ui · Tailwind CSS
**Deployment:** Vercel
**Features:** Optimized for NGO needs with donation capabilities
**Design:** Accessible interface with focus on information clarity

<br>

## Technical Details

<br>

The website is built with modern web technologies to ensure fast loading times, accessibility, and ease of maintenance. The use of TypeScript and component-based architecture allows for scalable development as the organization grows.

<br>

Key technical aspects:
<br>

- Component-based architecture for maintainable codebase
- TypeScript for type safety and better development experience
- Tailwind CSS for responsive design implementation
- shadcn/ui for consistent, accessible UI components
- Optimized assets for performance in low-bandwidth environments
        `,
    tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    image: "/images/anenitigray-development-services.png",
    screenshots: ["/images/anenitigray-development-services.png"],
    github: "https://github.com/yosephdev/anenitigray-development-services",
    url: "https://anenitigray-development-services.vercel.app/",
  },
  "isaks-bilar": {
    title: "Isaks Bilar",
    description:
      "En modern e-handelsplattform för leksaksbilar, modellbilar och RC-bilar.",
    longDescription: `
Isaks Bilar är en modern e-handelsplattform specialiserad på leksaksbilar, modellbilar och RC-bilar. Plattformen erbjuder ett brett sortiment av produkter för bilentusiaster i alla åldrar.

<br>

## 🌟 Key Features

<br>

- 🚗 **Omfattande Produktkatalog**: Brett utbud av leksaksbilar, modellbilar och RC-bilar
- 🔍 **Avancerad Sök**: Filtrera produkter efter kategori, pris och varumärke
- 🛒 **Kundvagn**: Lägg till produkter och hantera din varukorg med realtidsuppdateringar
- 💳 **Säker Betalning**: Stripe-integration för säkra transaktioner
- 👤 **Användarkonton**: Registrering, inloggning och profilhantering
- ⭐ **Produktrecensioner**: Betygsätt och recensera produkter
- 📱 **Responsiv Design**: Optimerad för alla enheter
- 🎨 **Modern UI**: Ren och intuitiv gränssnittsdesign

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Next.js · Tailwind CSS
**Backend:** Next.js API Routes
**Payment:** Stripe
**Deployment:** Vercel
**Performance:** Server-side rendering för optimal SEO

<br>

## Technical Highlights

<br>

- Next.js för server-side rendering och optimal prestanda
- TypeScript för typsäker utveckling
- Stripe för säker betalningshantering
- Tailwind CSS för responsiv design
- RESTful API-arkitektur
- Bildoptimering för snabb laddning
        `,
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/isaks-bilar.png",
    screenshots: ["/images/isaks-bilar.png"],
    github: "https://github.com/yosephdev/isaks-bilar",
    url: "https://isaks-bilar.vercel.app/",
  },
  "le-menelik-saly-vibes": {
    title: "Le Menelik Restaurant",
    description:
      "A modern restaurant website showcasing authentic cuisine and vibrant atmosphere.",
    longDescription: `
Le Menelik Restaurant is a sophisticated restaurant website that captures the essence of authentic cuisine and vibrant atmosphere. The site features elegant design, interactive menus, and seamless booking functionality.

<br>

## 🌟 Key Features

<br>

- ✅ Interactive menu with detailed dish descriptions
- 🍽️ Online table reservation system
- 🎉 Event booking and venue rental information
- 📱 Fully responsive design for all devices
- 🌍 Multi-language support
- 📧 Contact forms and location mapping

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · Next.js · TypeScript · Tailwind CSS
**Deployment:** Vercel
**Features:** Server-side rendering for optimal performance
**Design:** Modern UI/UX with smooth animations

<br>

## Technical Details

<br>

The website is built with Next.js for optimal performance and SEO. It features a modern, responsive design that showcases the restaurant's atmosphere and cuisine effectively.

<br>

Key technical aspects:
<br>

- Server-side rendering for fast loading times
- Optimized images and assets for web performance
- Interactive components for menu browsing
- Responsive design that works across all devices
- Clean, semantic HTML structure for accessibility
        `,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/images/le-menelik-saly-vibes.png",
    screenshots: ["/images/le-menelik-saly-vibes.png"],
    github: "https://github.com/yosephdev/le-menelik-saly-vibes",
    url: "https://le-menelik-saly-vibes.vercel.app/",
  },
  "selams-handmade": {
    title: "Selam's Handmade",
    description:
      "An elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
    longDescription: `
Selam's Handmade is an elegant e-commerce platform dedicated to showcasing and selling beautiful handcrafted products. The site combines modern web technologies with thoughtful design to create an exceptional shopping experience.

<br>

## 🌟 Key Features

<br>

- ✅ Product catalog with detailed descriptions and images
- 🛒 Shopping cart and checkout functionality
- 💳 Secure payment processing with Stripe
- 👤 User accounts and order history
- 📱 Mobile-optimized shopping experience
- 🔍 Product search and filtering capabilities

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · Next.js · Tailwind CSS
**Payment:** Stripe Integration
**Deployment:** Vercel
**Features:** E-commerce functionality with modern UI

<br>

## Technical Details

<br>

The platform is built with Next.js and React, providing a fast and responsive shopping experience. Stripe integration ensures secure payment processing for customers.

<br>

Key technical aspects:
<br>

- Next.js for server-side rendering and optimal performance
- Stripe integration for secure payment processing
- Responsive design optimized for mobile commerce
- Product management and inventory tracking
- SEO optimization for better product discoverability
        `,
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    image: "/images/selams-handmade.png",
    screenshots: ["/images/selams-handmade.png"],
    github: "https://github.com/yosephdev/selams-handmade",
    url: "https://selamshandmade.com/",
  },
  supermerra: {
    title: "Supermerra",
    description:
      "A modern, responsive website for Super Merra Frisör – a professional men's hair salon in Katrineholm, Sweden.",
    longDescription: `
Supermerra is a professional website for Super Merra Frisör, a men's hair salon located in Katrineholm, Sweden. The site showcases the salon's services, team, and booking capabilities with a clean, modern design.

<br>

## 🌟 Key Features

<br>

- ✅ Service showcase with pricing information
- 👨‍💼 Team member profiles and specializations
- 📅 Online booking system integration
- 📱 Mobile-first responsive design
- 🌍 Swedish language support
- 📍 Location and contact information

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS · Next.js
**Deployment:** Custom hosting
**Features:** Professional business website with booking integration

<br>

## Technical Details

<br>

The website is built with modern web technologies to provide a professional online presence for the hair salon. It features clean design, fast loading times, and easy navigation.

<br>

Key technical aspects:
<br>

- TypeScript for type safety and better development experience
- Responsive design optimized for mobile users
- Fast loading times with optimized assets
- Professional design that reflects the salon's brand
- Integration with booking systems for appointments
        `,
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    image: "/images/supermerra.png",
    screenshots: ["/images/supermerra.png"],
    github: "https://github.com/yosephdev/supermerra",
    url: "https://supermerra.se/",
  },
  devfinder: {
    title: "DevFinder",
    description:
      "A developer search tool built with React, TypeScript and the GitHub API.",
    longDescription: `
DevFinder is a web application that allows users to search for developers on GitHub and view their profiles, repositories, and other information. The app is built with React and TypeScript, and uses the GitHub API to fetch data.

<br>

## 🌟 Key Features

<br>

- ✅ Search for GitHub users by username
- 🔍 View detailed user profiles including repositories, followers, and following
- 📊 Filter repositories by language and sort by stars, forks, or last updated
- 📱 Responsive design that works on mobile, tablet, and desktop

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS
**API:** GitHub REST API
**State Management:** React Context API
**Deployment:** Vercel

<br>

## Technical Details

<br>

The application is built using React with TypeScript for type safety. It uses the GitHub REST API to fetch user data and repositories. State management is handled with React Context API, and styling is done with Tailwind CSS.

<br>

The project also features:

<br>

- Custom hooks for data fetching and error handling
- Responsive design with a mobile-first approach
- Accessibility considerations throughout the UI
- Comprehensive error handling for API calls
        `,
    tech: [
      "React",
      "TypeScript",
      "GitHub API",
      "Tailwind CSS",
      "Context API",
      "Vercel",
    ],
    image: "/images/devfinder.png",
    screenshots: ["/images/devfinder.png"],
    github: "https://github.com/yosephdev/DevFinder",
    url: "https://dev-finder-five-iota.vercel.app/",
  },
  "markdown-editor": {
    title: "Markdown Editor",
    description:
      "A real-time markdown editor with preview and export functionality.",
    longDescription: `
This Markdown Editor provides a clean, distraction-free writing environment with real-time preview. It's perfect for writing documentation, blog posts, or any content that uses Markdown syntax.

<br>

## 🌟 Key Features

<br>

    ✅ Real-time markdown preview
    📝 Support for GitHub Flavored Markdown
    📤 Export to HTML, PDF, or plain text
    💾 Auto-save functionality
    🎨 Customizable themes and editor settings

<br>

## 🛠 Tech Stack

<br>

**Frontend:** JavaScript · React · CodeMirror
**Parser:** marked.js
**Backend:** Node.js
**Deployment:** Vercel

<br>

## Technical Details
<br>

The editor is built with React and uses CodeMirror for the text editing experience. The markdown parsing is handled by marked.js, and the application uses local storage for auto-saving content.

<br>

Key technical aspects:
<br>

- Custom CodeMirror configuration for markdown syntax highlighting
- Web Workers for non-blocking markdown parsing
- Responsive design that adapts to different screen sizes
- Keyboard shortcuts for common editing operations
        `,
    tech: [
      "JavaScript",
      "React",
      "CodeMirror",
      "marked.js",
      "Node.js",
      "Vercel",
    ],
    image: "/images/markdown-editor.png",
    screenshots: ["/images/markdown-editor.png"],
    github: "https://github.com/yosephdev/markdown-editor",
    url: "https://instant-markdown-canvas.vercel.app",
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React, TypeScript, and Tailwind CSS.",
    longDescription: `
This project is a personal portfolio website built to showcase my projects, blog posts, and professional information. It features a clean, minimalist design with dark mode support and responsive layouts.

<br>

## 🌟 Key Features

<br>

- ✅ Responsive design that works on all devices
- 🌙 Light and dark mode support
- 📝 Blog section with markdown support
- 🚀 Projects showcase with detailed project pages
- 📧 Contact form integration
- 📬 Newsletter subscription

## 🛠 Tech Stack
<br>

**Frontend:** React · TypeScript · Tailwind CSS
**Content Management:** Netlify CMS
**Deployment:** Netlify
**Performance:** Optimized images and assets

## Technical Details
<br>

The portfolio is built using React with TypeScript for type safety. Styling is handled with Tailwind CSS for a utility-first approach. Content is managed through Markdown files, allowing for easy updates and additions.
<br>

The website also features:
<br>

- Optimized images and assets for fast loading
- SEO best practices implementation
- Accessibility considerations throughout the UI
- Analytics integration for visitor tracking
        `,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Netlify CMS",
      "Netlify",
      "SEO Optimization",
    ],
    image: "/images/portfolio-website.png",
    screenshots: [
      "/images/portfolio-website.png",
      "https://via.placeholder.com/800x600?text=Screenshot+2",
    ],
    github: "https://github.com/yosephdev/portfolio",
    url: "https://yoseph.dev",
  },
  "react-notes-app": {
    title: "React Notes App",
    description:
      "A feature-rich note-taking application built with React and Firebase.",
    longDescription: `
A modern note-taking application built with React and Firebase. This app allows users to create, edit, and organize notes with rich text formatting, tags, and categories.<br>

## 🌟 Key Features
<br>

- ✅ User authentication and account management
- 📝 Rich text editor with markdown support
- 🏷️ Note organization with tags and categories
- 🔍 Search functionality
- 🌙 Dark mode support
- 📱 Offline capability with sync when online

## 🛠 Tech Stack
<br>

**Frontend:** React · Redux · Tailwind CSS
**Backend:** Firebase (Firestore, Authentication)
**State Management:** Redux
**Deployment:** Vercel
**Features:** Service Workers for offline functionality

## Technical Details
<br>

The application uses React for the frontend UI and Firebase for backend services including authentication, database, and storage. State management is handled with Redux, and the app implements a responsive design that works well on mobile devices.<br>

Key technical aspects include:
<br>

- Firebase Firestore for real-time database
- Firebase Authentication for user management
- Redux for global state management
- Service workers for offline functionality
- Responsive design with Tailwind CSS
        `,
    tech: [
      "React",
      "Firebase",
      "Redux",
      "Tailwind CSS",
      "Vercel",
      "Service Workers",
    ],
    image: "/images/react-notes.png",
    screenshots: ["/images/react-notes.png"],
    github: "https://github.com/yosephdev/react-notes",
    url: "https://react-notes-five-phi.vercel.app/",
  },
  "countries-api": {
    title: "Worldscope",
    description:
      "A web application that displays information about countries using the REST Countries API.",
    longDescription: `
This project is a web application that allows users to explore information about countries around the world. It uses the REST Countries API to fetch data about countries, including their flags, population, languages, currencies, and more.<br>

## 🌟 Key Features
<br>

- ✅ View all countries with basic information
- 🌍 Filter countries by region
- 🔍 Search for countries by name
- 📊 View detailed information about a specific country
- 🌙 Toggle between light and dark mode
- 📱 Responsive design for all device sizes

## 🛠 Tech Stack
<br>

**Frontend:** JavaScript · React · CSS
**API:** REST Countries API
**Routing:** React Router
**Deployment:** Vercel
**Design:** CSS Grid and Flexbox

## Technical Details

The application is built with React and uses the REST Countries API for data. It implements a responsive design using CSS Grid and Flexbox, and includes a custom theme switcher for light and dark mode.
<br>

Key technical aspects:
<br>

- Fetch API for data retrieval
- React Router for navigation
- Custom hooks for state management
- CSS variables for theming
- Responsive design principles
        `,
    tech: ["JavaScript", "React", "REST API", "CSS", "React Router", "Vercel"],
    image: "/images/worldscope.png",
    screenshots: ["/images/worldscope.png"],
    github: "https://github.com/yosephdev/worldscope",
    url: "https://worldscope-yoseph-berhanes-projects.vercel.app/",
  },
  "ip-address-tracker": {
    title: "IP Address Tracker",
    description:
      "A web application that allows users to track IP addresses and view their location on a map.",
    longDescription: `
This IP Address Tracker application allows users to search for any IP address and view its location on a map, along with additional information such as ISP, timezone, and location.

<br>

## 🌟 Key Features

<br>

- ✅ Search for any IP address or domain
- 🗺️ View the location on an interactive map
- 📊 See detailed information about the IP address
- 📱 Responsive design for all device sizes

<br>

## 🛠 Tech Stack
<br>

**Frontend:** JavaScript · HTML/CSS
**Mapping:** Leaflet.js
**API:** IP Geolocation API
**Deployment:** Vercel
**Features:** Interactive maps with custom markers

<br>

## Technical Details
<br>

The application is built with JavaScript and uses the IP Geolocation API to fetch IP information. It integrates with Leaflet.js for the interactive map functionality.
<br>

Key technical aspects:
<br>

- Fetch API for data retrieval
- Leaflet.js for map rendering
- Custom markers and popups on the map
- Responsive design for mobile and desktop
- Error handling for API requests
        `,
    tech: [
      "JavaScript",
      "Leaflet.js",
      "IP Geolocation API",
      "HTML/CSS",
      "Vercel",
      "Interactive Maps",
    ],
    image: "/images/ip-address-tracker.png",
    screenshots: ["/images/ip-address-tracker.png"],
    github: "https://github.com/yosephdev/ip-address-tracker",
    url: "https://ip-address-tracker-swart-rho.vercel.app/",
  },
  "book-dine": {
    title: "Book & Dine",
    description:
      "A full-stack restaurant reservation system with real-time availability, secure bookings, and a responsive interface powered by Django.",
    longDescription: `
Book & Dine is a full-stack restaurant reservation system built with Python and Django. It includes real-time availability checking, reservation logic, user authentication, and a clean, responsive UI. <br>
The application allows users to search for restaurants, check table availability, and make reservations. It also features an admin dashboard for restaurant management and email notifications for bookings.


<br>

## 🛠 Tech Stack

<br>

**Frontend:** HTML5 · CSS3 · JavaScript · Bootstrap
**Backend:** Python · Django
**Database:** Neon PostgreSQL
**Media Handling:** Cloudinary
**Hosting:** Heroku
**Tools:** GitPod · GitHub

<br>

## 🌟 Key Features

<br>

- ✅ Real-time table availability checking
- 🖥️ User-friendly booking interface
- 🔐 Secure registration and login system
- 📊 Admin dashboard for restaurant management
- 📧 Email confirmation for reservations
- 📱 Mobile-first responsive design

<br>

## Technical Details

<br>

The backend is powered by **Django**, with custom models for restaurants, users, and reservations. A RESTful approach is used for internal APIs, and forms handle user interactions securely.

<br>

Key technical elements include:

<br>

- Django ORM for database queries
- Django authentication with session management
- Integration with Cloudinary for media handling
- Responsive UI built with Bootstrap
- Deployment via Heroku with PostgreSQL from Neon

`,
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Cloudinary",
      "Heroku",
    ],
    image: "/images/book-dine.png",
    screenshots: ["/images/book-dine.png"],
    github: "https://github.com/yosephdev/book-dine",
    url: "",
  },
  "mastery-hub": {
    title: "Mastery Hub",
    description:
      "A platform that connects professionals for mentorship and skill-sharing with responsive design and intuitive navigation.",
    longDescription: `
Mastery Hub connects professionals for mentorship and skill-sharing. The app emphasizes responsive design, intuitive navigation, and clean UI.

<br>

## 🌟 Key Features
<br>

- ✅ Mentor-mentee matching system
- 🔍 Skill categorization and search
- 💬 In-app messaging and scheduling
- 👤 User profiles with skill verification
- ⭐ Rating and review system

<br>

## 🛠 Tech Stack
<br>

**Backend:** Python · Django · PostgreSQL
**Frontend:** HTML · CSS · Bootstrap · JavaScript
**Authentication:** Django Authentication
**Deployment:** Heroku
**Database:** PostgreSQL with Django ORM

## Technical Details
<br>

The platform is built with Django for the backend and server-rendered HTML templates for the frontend. PostgreSQL is used for data storage, and Bootstrap ensures a responsive, mobile-friendly UI.
<br>

Key technical aspects:

- Django for backend logic and RESTful APIs
- Django ORM for database interactions with PostgreSQL
- Django authentication for user management
- Bootstrap for responsive UI and layout
- Custom context processors for dynamic content
- Deployment on Heroku
        `,
    tech: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap", "Heroku"],
    image: "/images/mastery-hub.png",
    screenshots: ["/images/mastery-hub.png"],
    github: "https://github.com/yosephdev/mastery-hub",
    url: "https://skill-sharing-446c0336ffb5.herokuapp.com/",
  },
  "boutique-ado": {
    title: "Boutique Ado",
    description:
      "A Django web application for an online clothing store with e-commerce functionality.",
    longDescription: `
Boutique Ado is a fully-featured e-commerce platform built with Django. It offers a complete online shopping experience with product management, user accounts, and secure checkout.

<br>

## 🌟 Key Features

<br>

- ✅ Product catalog with categories and filtering
- 👤 User authentication and profiles
- 🛒 Shopping cart functionality
- 💳 Secure payment processing
- 📦 Order history and tracking

<br>

## 📷 Screenshots

<br>

- ✅ Product catalog with categories and filtering
- 👤 User authentication and profiles
- 🛒 Shopping cart functionality
- 💳 Secure payment processing
- 📦 Order history and tracking

<br>

## 🛠 Tech Stack

<br>

**Backend:** Python · Django · PostgreSQL
**Frontend:** HTML · CSS · Bootstrap
**Payment:** Stripe Integration
**Storage:** AWS S3
**Authentication:** Django Authentication

<br>

## Technical Details

<br>

The application is built with Django and uses PostgreSQL for data storage. It implements Django's built-in authentication system and integrates with Stripe for payment processing.

<br>

Key technical aspects:
<br>

- Django ORM for database interactions
- Class-based views for clean code organization
- Custom context processors for cart functionality
- Responsive design with Bootstrap
- AWS S3 for media storage
        `,
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML/CSS",
      "Bootstrap",
      "Stripe",
      "AWS S3",
    ],
    image: "/images/boutique-ado.png",
    screenshots: ["/images/boutique-ado.png"],
    github: "https://github.com/yosephdev/boutique-ado",
    url: "",
  },
  "yaz-mari-website": {
    title: "Yaz Mari Music Website",
    description: "Modern Amharic & Reggae Music Streaming Platform.",
    longDescription: `
Yaz Mari Music Website is a modern streaming platform dedicated to Amharic and Reggae music. The platform provides music lovers with access to a curated collection of songs, artist information, and seamless streaming experience.

<br>

## 🌟 Key Features

<br>

- 🎵 **Music Streaming**: High-quality audio streaming
- 🎤 **Artist Profiles**: Detailed information about artists and their work
- 📱 **Responsive Design**: Seamless experience across all devices
- 🎧 **Playlists**: Curated playlists for different moods and occasions
- 🔍 **Search**: Find your favorite songs and artists quickly
- ♥️ **Favorites**: Save and organize your favorite tracks
- 🎨 **Modern UI**: Clean, intuitive interface inspired by modern streaming platforms
- 🌍 **Multi-language**: Support for Amharic and English

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Next.js · Tailwind CSS
**API Integration:** Spotify API for music data
**Deployment:** Vercel
**Styling:** Tailwind CSS for modern, responsive design
**Performance:** Optimized for fast loading and smooth playback

<br>

## Technical Highlights

<br>

- Next.js for server-side rendering and optimal performance
- TypeScript for type-safe development
- Spotify API integration for comprehensive music library
- Tailwind CSS for responsive, modern UI
- Audio player with custom controls
- Real-time search and filtering
- Optimized image and asset loading
        `,
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Spotify API"],
    image: "/images/yaz-mari-website.png",
    screenshots: ["/images/yaz-mari-website.png"],
    github: "https://github.com/yosephdev/yaz-mari-website",
    url: "https://yaz-mari.vercel.app/",
  },
  "isana-facilitation": {
    title: "Isana Facilitation Platform",
    description:
      "A secure, full-stack mental health platform built with Django, React, and AWS — empowering therapists with modern tools for client and session management.",
    longDescription: `
Isana Facilitation Platform is a comprehensive mental health web application designed for therapists and counselors. It blends the reliability of Django on the backend with a professional, modern React frontend to deliver a seamless experience for managing clients, therapy sessions, and mental wellness resources.

<br>

The platform ensures high performance, security, and accessibility — suitable for individual therapists or small practices seeking digital tools for mental health support.

<br>

## 🌟 Key Features

<br>

- ✅ Secure user authentication & profile management
- 🧠 Therapist and client dashboards with role-based access
- 📅 Drag-and-drop calendar scheduling with reminders
- 📝 Session notes system with PDF export and autosave
- 📈 Dashboard analytics and progress tracking
- 📚 Educational mental health resources
- 📹 Encrypted video conferencing for virtual therapy
- 🛠️ Admin panel for managing users and content

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS · Zustand · Headless UI
**Backend:** Django · Python
**Database:** PostgreSQL (via AWS RDS)
**DevOps & Infra:** AWS (EC2, S3, RDS, CloudFront) · Docker · GitHub Actions (CI/CD)
**Additional Tools:** Cloudinary (for media) · WCAG/ARIA accessibility standards

<br>

## Technical Highlights

<br>

- Type-safe, component-driven UI with TypeScript and React
- Zustand for fast and lightweight global state management
- Lazy-loaded routes and components for performance
- Secure API endpoints with Django Rest Framework
- Full mobile responsiveness and accessibility compliance
- Dockerized environment for scalability and portability
- Continuous deployment pipeline via GitHub Actions
- Hosted on AWS with scalable cloud infrastructure

  `,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Django",
      "Python",
      "PostgreSQL",
      "AWS (EC2, S3, RDS, CloudFront)",
      "Docker",
      "GitHub Actions",
      "Cloudinary",
    ],
    image: "/images/isana-facilitation.png",
    screenshots: ["/images/isana-facilitation.png"],
    github: "https://github.com/yosephdev/isana-facilitation",
    url: "",
  },
  worldscope: {
    title: "Worldscope",
    description:
      "A web application that displays information about countries using the REST Countries API.",
    longDescription: `
This project is a web application that allows users to explore information about countries around the world. It uses the REST Countries API to fetch data about countries, including their flags, population, languages, currencies, and more.<br>

<br>

## 🌟 Key Features

<br>

- ✅ Country search and filtering
- 🌍 Detailed country information
- 📊 Visualizations of country data
- 🌙 Light and dark mode toggle
- 🔍 Search functionality
- 📱 Responsive design

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS
**Backend:** REST Countries API
**DevOps:** GitHub Actions (CI/CD)
**Infrastructure:** AWS (EC2, S3, RDS, CloudFront)
**Additional Tools:** Cloudinary (for media)

<br>

## Technical Highlights

<br>

- Type-safe, component-driven UI with TypeScript and React
- Lazy-loaded routes and components for performance
- Full mobile responsiveness and accessibility compliance
- Dockerized environment for scalability and portability
- Continuous deployment pipeline via GitHub Actions
- Hosted on AWS with scalable cloud infrastructure
        `,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST Countries API",
      "GitHub Actions",
      "AWS (EC2, S3, RDS, CloudFront)",
      "Docker",
      "Cloudinary",
    ],
    image: "/images/worldscope.png",
    screenshots: ["/images/worldscope.png"],
    github: "https://github.com/yosephdev/worldscope",
    url: "https://worldscope-yoseph-berhanes-projects.vercel.app/",
  },
  "fitgear-clean": {
    title: "FitGear",
    description:
      "A modern e-commerce platform designed for sports equipment enthusiasts, built with a full-stack MERN architecture.",
    longDescription: `
FitGear is a comprehensive e-commerce platform designed for sports equipment enthusiasts. Built with a full-stack MERN architecture, it provides a seamless shopping experience for fitness and sports gear.

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
- State management for seamless user experience
        `,
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
    longDescription: `
Isak's Store is a modern full-stack e-commerce platform that provides a complete online shopping experience. Built with Next.js for optimal performance and SEO, it features secure payment processing through Stripe integration.

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
- RESTful API architecture
        `,
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
    longDescription: `
Tigray Tutor AI is an innovative educational platform that leverages artificial intelligence to provide personalized tutoring experiences for Tigrinya-speaking students. The platform adapts to individual learning styles and provides culturally relevant educational content.

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
- Progress tracking and analytics
        `,
    tech: ["AI", "TypeScript", "React", "Next.js"],
    image: "/images/tigray-tutor-ai.png",
    screenshots: ["/images/tigray-tutor-ai.png"],
    github: "https://github.com/yosephdev/tigray-tutor-ai",
    url: "https://tigray-tutor-ai.vercel.app/",
  },
  ecosyn: {
    title: "EcoSyn",
    description:
      "A global sustainable marketplace connecting eco-conscious consumers with verified green vendors.",
    longDescription: `
EcoSyn is a global sustainable marketplace that connects eco-conscious consumers with verified green vendors. The platform promotes sustainable living by making it easy to discover and purchase environmentally friendly products from trusted sellers worldwide.

<br>

## 🌟 Key Features

<br>

- 🌱 **Sustainable Products**: Curated marketplace of eco-friendly products
- ✅ **Verified Vendors**: All sellers verified for sustainability practices
- 🌍 **Global Marketplace**: Connect with green vendors worldwide
- 🔍 **Advanced Search**: Filter by sustainability certifications and categories
- 🛒 **Shopping Experience**: Seamless cart and checkout process
- 💚 **Impact Tracking**: See the environmental impact of your purchases
- 📱 **Responsive Design**: Beautiful experience on all devices
- ⭐ **Reviews & Ratings**: Community-driven vendor and product reviews

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS
**Backend:** Node.js · Express
**Database:** MongoDB
**Authentication:** JWT
**Deployment:** Vercel
**Performance:** Optimized for fast loading and smooth navigation

<br>

## Technical Highlights

<br>

- React with TypeScript for type-safe component development
- Node.js backend with Express for robust API
- MongoDB for flexible product and vendor data storage
- JWT authentication for secure user sessions
- Tailwind CSS for modern, responsive UI
- Vendor verification system
- Real-time search and filtering
- Impact calculator for sustainability tracking
        `,
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/ecosyn.png",
    screenshots: ["/images/ecosyn.png"],
    github: "https://github.com/yosephdev/ecosyn",
    url: "https://ecosyn-yoseph-berhanes-projects.vercel.app/",
  },
  "habesha-boutique": {
    title: "Habesha Boutique",
    description:
      "An online women's fashion boutique selling luxury apparel, accessories, and outerwear including fur coats, dresses, and yoga sets.",
    longDescription: `
Habesha Boutique is a sophisticated online fashion destination specializing in luxury women's apparel and accessories. The platform offers an exquisite collection of fur coats, elegant dresses, stylish yoga sets, and premium accessories.

<br>

## 🌟 Key Features

<br>

- 👗 **Luxury Fashion**: Curated collection of high-end apparel
- 🧥 **Premium Outerwear**: Exclusive fur coats and jackets
- 🛍️ **Complete E-commerce**: Full shopping experience
- 💳 **Secure Checkout**: Shopify-powered payment processing
- 📱 **Responsive Design**: Beautiful on all devices
- 🎨 **Elegant UI**: Sophisticated and modern interface
- 🔍 **Product Filtering**: Easy navigation and search
- ⭐ **Customer Reviews**: Product ratings and testimonials

<br>

## 🛠 Tech Stack

<br>

**Platform:** Shopify
**Frontend:** Liquid · JavaScript · CSS
**E-commerce:** Shopify Commerce Platform
**Payment:** Shopify Payments
**SEO:** Optimized for search engines

<br>

## Technical Highlights

<br>

- Built on Shopify's robust e-commerce platform
- Custom Liquid templates for unique design
- JavaScript enhancements for interactive features
- Mobile-first responsive design
- Secure payment processing through Shopify
- SEO-optimized product pages
- Fast loading times and performance optimization
- Integrated inventory management
        `,
    tech: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce"],
    image: "/images/Habesha Boutique-preview.png",
    screenshots: ["/images/Habesha Boutique-preview.png"],
    github: "https://github.com/yosephdev/habesha-boutique",
    url: "https://habeshaboutique.com/",
  },
  stayswift: {
    title: "StaySwift",
    description:
      "A modern hotel search and booking application powered by LiteAPI, featuring interactive maps, real-time hotel data, and seamless booking experiences.",
    longDescription: `
StaySwift is a comprehensive hotel search and booking platform that provides users with real-time hotel availability, pricing, and booking capabilities. Powered by LiteAPI, it offers an intuitive interface with interactive maps and detailed hotel information.

<br>

## 🌟 Key Features

<br>

- 🏨 **Hotel Search**: Find hotels by location, dates, and preferences
- 🗺️ **Interactive Maps**: Google Maps integration for location viewing
- 💰 **Real-time Pricing**: Up-to-date rates and availability
- 📸 **Hotel Photos**: High-quality images and virtual tours
- ⭐ **Reviews & Ratings**: Guest reviews and ratings
- 🔍 **Advanced Filters**: Filter by price, amenities, ratings
- 📱 **Responsive Design**: Seamless experience on all devices
- 💳 **Secure Booking**: Safe and encrypted booking process

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS
**API:** LiteAPI for hotel data
**Maps:** Google Maps API
**Styling:** Tailwind CSS · Responsive Design
**Deployment:** Vercel

<br>

## Technical Highlights

<br>

- Integration with LiteAPI for comprehensive hotel data
- Google Maps API for interactive location viewing
- TypeScript for type-safe development
- Real-time data fetching and updates
- Advanced search and filtering capabilities
- Tailwind CSS for modern, responsive UI
- Optimized performance for fast loading
- Cross-platform compatibility (web and mobile)
        `,
    tech: [
      "React",
      "TypeScript",
      "LiteAPI",
      "Tailwind CSS",
      "Google Maps API",
      "Responsive Design",
    ],
    image: "/images/stayswift.png",
    screenshots: ["/images/stayswift.png"],
    github: "https://github.com/yosephdev/stayswift",
    url: "https://stayswift-kappa.vercel.app/",
  },
  "jusplay-cinema-connect": {
    title: "JusPlay Cinema Connect",
    description:
      "A modern streaming platform front-end built with React and TypeScript, integrating with the TMDB API.",
    longDescription: `
JusPlay Cinema Connect is a sleek streaming platform interface that provides users with access to a vast library of movies and TV shows. Built with React and TypeScript, it integrates with The Movie Database (TMDB) API to deliver up-to-date content information.

<br>

## 🌟 Key Features

<br>

- 🎬 **Movie Discovery**: Browse trending and popular movies
- 📺 **TV Shows**: Explore TV series and episodes
- 🔍 **Search Functionality**: Find any movie or show quickly
- ⭐ **Ratings & Reviews**: See ratings and read reviews
- 🎭 **Genre Filtering**: Browse by genre and categories
- 📱 **Responsive Design**: Perfect viewing on any device
- 🎨 **Modern UI**: Netflix-inspired interface
- 🎥 **Trailers**: Watch movie trailers and teasers

<br>

## 🛠 Tech Stack

<br>

**Frontend:** React · TypeScript · Tailwind CSS
**API:** TMDB (The Movie Database) API
**Styling:** Tailwind CSS
**Deployment:** Netlify

<br>

## Technical Highlights

<br>

- Integration with TMDB API for comprehensive movie data
- TypeScript for type-safe component development
- React hooks for efficient state management
- Tailwind CSS for responsive, modern styling
- Lazy loading for optimized performance
- Search and filtering functionality
- Dynamic routing for movie/show details
- Mobile-first responsive design
        `,
    tech: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    image: "/images/jusplay.png",
    screenshots: ["/images/jusplay.png"],
    github: "https://github.com/yosephdev/jusplay-cinema-connect",
    url: "https://jusplay.netlify.app/",
  },
  "cascadia-chauffeur-services": {
    title: "Cascadia Chauffeur Services",
    description:
      "A modern booking platform for Cascadia Transports, designed to streamline the process of booking chauffeur services.",
    longDescription: `
Cascadia Chauffeur Services is a professional booking platform designed for Cascadia Transports. The platform streamlines the chauffeur booking process, providing an elegant solution for luxury transportation services.

<br>

## 🌟 Key Features

<br>

- 🚗 **Service Booking**: Easy online chauffeur reservations
- 📅 **Scheduling**: Book rides in advance or on-demand
- 💳 **Secure Payments**: Safe payment processing
- 👤 **User Profiles**: Manage bookings and preferences
- 🗺️ **Route Planning**: Plan trips and view routes
- 📱 **Responsive Design**: Book from any device
- 💼 **Corporate Accounts**: Business travel management
- 📧 **Booking Confirmations**: Email notifications and reminders

<br>

## 🛠 Tech Stack

<br>

**Frontend:** Bootstrap 5 · JavaScript
**Backend:** Django · Python
**Database:** PostgreSQL
**Styling:** Bootstrap 5 · Custom CSS
**Deployment:** Production server

<br>

## Technical Highlights

<br>

- Django framework for robust backend functionality
- PostgreSQL database for reliable data management
- Bootstrap 5 for responsive, professional design
- User authentication and authorization
- Booking management system
- Payment integration
- Email notification system
- Admin panel for service management
        `,
    tech: ["Bootstrap 5", "JavaScript", "Django", "PostgreSQL"],
    image: "/images/cascadia.png",
    screenshots: ["/images/cascadia.png"],
    github: "https://github.com/yosephdev/chauffeur-booking-system",
    url: "https:/www.cascadiatransports.com/",
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
