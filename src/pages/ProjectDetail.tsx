import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { marked } from 'marked';

// Define the project details
const projects = {
    "babys-and-me": {
        title: "Baby's & Me",
        description: "A responsive eCommerce store offering handmade baby and toddler products with focus on sustainability and supporting local artisans.",
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
        tech: [
            "Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"
        ],
        image: "/images/babys-and-me.png",
        screenshots: [
            "/images/babys-and-me.png"
        ],
        github: "https://github.com/yosephdev/babys-and-me",
        url: "https://babys-and-me.vercel.app/"
    },
    "anenitigray-development-services": {
        title: "Anenitigray Development Services (ADS)",
        description: "A platform for an NGO committed to fostering sustainable development and providing humanitarian support in Tigray through community-driven initiatives.",
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
        tech: [
            "Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"
        ],
        image: "/images/anenitigray-development-services.png",
        screenshots: [
            "/images/anenitigray-development-services.png"
        ],
        github: "https://github.com/yosephdev/anenitigray-development-services",
        url: "https://anenitigray-development-services.vercel.app/"
    },
    "ternafit": {
        title: "Ternafit",
        description: "A platform for a Sweden-based NGO empowering the Tigrean people through information sharing, raising awareness, and building connections for aid.",
        longDescription: `
Ternafit is a Sweden-based NGO with a mission to empower the Tigrean people through initiatives in information sharing, raising awareness, and building connections for aid. The platform promotes digital solidarity, community engagement, and resource mobilization.

<br>

## 🌟 Key Features

<br>

- ✅ Comprehensive information about the organization's mission and work
- 🔗 Resource hub for community support and aid coordination
- 📣 Awareness campaigns and educational content
- 📱 Responsive design optimized for global accessibility
- 🌍 Multi-language support for broader reach
- 📅 Events calendar for community engagement

<br>

## 🛠 Tech Stack

<br>

**Frontend:** Vite · TypeScript · React · shadcn/ui · Tailwind CSS  
**Deployment:** Vercel  
**Features:** Information sharing and community building tools  
**Design:** Clean, accessible interface with focus on content clarity

<br>

## Technical Details

<br>

The website leverages modern web technologies to create a fast, accessible platform for information sharing and community building. The architecture is designed for easy content updates and future expansion of features.

<br>

Key technical aspects:
<br>

- Vite for optimized build performance and development experience
- TypeScript for code quality and maintainability
- Tailwind CSS for responsive, consistent styling
- shadcn/ui for accessible UI components
- Content management system integration for easy updates
        `,
        tech: [
            "Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"
        ],
        image: "/images/ternafit.png",
        screenshots: [
            "/images/ternafit.png"
        ],
        github: "https://github.com/yosephdev/ternafit",
        url: "https://ternafit.vercel.app/"
    },
    "le-menelik-saly-vibes": {
        title: "Le Menelik Saly Vibes",
        description: "A modern restaurant and event venue website showcasing authentic cuisine and vibrant atmosphere.",
        longDescription: `
Le Menelik Saly Vibes is a sophisticated restaurant and event venue website that captures the essence of authentic cuisine and vibrant atmosphere. The site features elegant design, interactive menus, and seamless booking functionality.

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
        tech: [
            "React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"
        ],
        image: "/images/le-menelik-saly-vibes.png",
        screenshots: [
            "/images/le-menelik-saly-vibes.png"
        ],
        github: "https://github.com/yosephdev/le-menelik-saly-vibes",
        url: "https://le-menelik-saly-vibes.vercel.app/"
    },
    "selams-handmade": {
        title: "Selam's Handmade",
        description: "An elegant e-commerce platform for handcrafted products with modern design and seamless shopping experience.",
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
        tech: [
            "React", "Next.js", "Tailwind CSS", "Stripe", "Vercel"
        ],
        image: "/images/selams-handmade.png",
        screenshots: [
            "/images/selams-handmade.png"
        ],
        github: "https://github.com/yosephdev/selams-handmade",
        url: "https://selamshandmade.vercel.app/"
    },
    "supermerra": {
        title: "Supermerra",
        description: "A modern, responsive website for Super Merra Frisör – a professional men's hair salon in Katrineholm, Sweden.",
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
        tech: [
            "React", "TypeScript", "Tailwind CSS", "Next.js"
        ],
        image: "/images/supermerra.png",
        screenshots: [
            "/images/supermerra.png"
        ],
        github: "https://github.com/yosephdev/supermerra",
        url: "https://supermerra.se/"
    },
    "devfinder": {
        title: "DevFinder",
        description: "A developer search tool built with React, TypeScript and the GitHub API.",
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
            "React", "TypeScript", "GitHub API",
            "Tailwind CSS", "Context API", "Vercel"
        ],
        image: "/images/devfinder.png",
        screenshots: [
            "/images/devfinder.png"
        ],
        github: "https://github.com/yosephdev/DevFinder",
        url: "https://dev-finder-five-iota.vercel.app/"
    },
    "markdown-editor": {
        title: "Markdown Editor",
        description: "A real-time markdown editor with preview and export functionality.",
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
            "JavaScript", "React", "CodeMirror",
            "marked.js", "Node.js", "Vercel"
        ],
        image: "/images/markdown-editor.png",
        screenshots: [
            "/images/markdown-editor.png"
        ],
        github: "https://github.com/yosephdev/markdown-editor",
        url: "https://instant-markdown-canvas.vercel.app"
    },
    "portfolio-website": {
        title: "Portfolio Website",
        description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS.",
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
            "React", "TypeScript", "Tailwind CSS",
            "Netlify CMS", "Netlify", "SEO Optimization"
        ],
        image: "/images/portfolio-website.png",
        screenshots: [
            "/images/portfolio-website.png",
            "https://via.placeholder.com/800x600?text=Screenshot+2"
        ],
        github: "https://github.com/yosephdev/portfolio",
        url: "https://yoseph.dev"
    },
    "react-notes-app": {
        title: "React Notes App",
        description: "A feature-rich note-taking application built with React and Firebase.",
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
            "React", "Firebase", "Redux",
            "Tailwind CSS", "Vercel", "Service Workers"
        ],
        image: "/images/react-notes.png",
        screenshots: [
            "/images/react-notes.png"
        ],
        github: "https://github.com/yosephdev/react-notes",
        url: "https://react-notes-five-phi.vercel.app/"
    },
    "countries-api": {
        title: "Worldscope",
        description: "A web application that displays information about countries using the REST Countries API.",
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
        tech: [
            "JavaScript", "React", "REST API",
            "CSS", "React Router", "Vercel"
        ],
        image: "/images/worldscope.png",
        screenshots: [
            "/images/worldscope.png"
        ],
        github: "https://github.com/yosephdev/worldscope",
        url: "https://worldscope-yoseph-berhanes-projects.vercel.app/"
    },
    "ip-address-tracker": {
        title: "IP Address Tracker",
        description: "A web application that allows users to track IP addresses and view their location on a map.",
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
            "JavaScript", "Leaflet.js", "IP Geolocation API",
            "HTML/CSS", "Vercel", "Interactive Maps"
        ],
        image: "/images/ip-address-tracker.png",
        screenshots: [
            "/images/ip-address-tracker.png"
        ],
        github: "https://github.com/yosephdev/ip-address-tracker",
        url: "https://ip-address-tracker-swart-rho.vercel.app/"
    },
    "book-dine": {
        "title": "Book & Dine",
        "description": "A full-stack restaurant reservation system with real-time availability, secure bookings, and a responsive interface powered by Django.",
        "longDescription": `
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
        "tech": [
            "Python", "Django", "PostgreSQL",
            "HTML5", "CSS3", "JavaScript", "Bootstrap",
            "Cloudinary", "Heroku"
        ],
        "image": "/images/book-dine.png",
        "screenshots": [
            "/images/book-dine.png"
        ],
        "github": "https://github.com/yosephdev/book-dine",
        "url": ""
    },
    "mastery-hub": {
        title: "Mastery Hub",
        description: "A platform that connects professionals for mentorship and skill-sharing with responsive design and intuitive navigation.",
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
        tech: [
            "Python", "Django", "PostgreSQL",
            "HTML/CSS", "Bootstrap", "Heroku"
        ],
        image: "/images/mastery-hub.png",
        screenshots: [
            "/images/mastery-hub.png"
        ],
        github: "https://github.com/yosephdev/mastery-hub",
        url: "https://skill-sharing-446c0336ffb5.herokuapp.com/"
    },
    "boutique-ado": {
        title: "Boutique Ado",
        description: "A Django web application for an online clothing store with e-commerce functionality.",
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
            "Python", "Django", "PostgreSQL",
            "HTML/CSS", "Bootstrap", "Stripe", "AWS S3"
        ],
        image: "/images/boutique-ado.png",
        screenshots: [
            "/images/boutique-ado.png",
        ],
        github: "https://github.com/yosephdev/boutique-ado",
        url: ""
    },
    "sero-global": {
        title: "Sero Global",
        description: "A modern mental health platform built with Django and AWS to improve access to therapy, education, and progress tracking.",
        longDescription: `
Sero Global is a modern mental health platform built with Django and AWS to improve access to therapy, education, and progress tracking. It empowers users and therapists with secure, remote tools for better mental wellness care. 

<br>


## 🌟 Key Features
<br>

- ✅ Secure user authentication & profile management

- 🔍 Therapist discovery and appointment booking
- 📹 Encrypted video conferencing for remote sessions
- 📚 Educational resource library on mental health
- 📈 Progress tracking and goal-setting tools
- 🛠️ Admin dashboard for content and user management

<br>

## 🛠 Tech Stack
<br>

**Backend:** Django · Python · PostgreSQL  
**Frontend:** HTML · CSS · Bootstrap · JavaScript  
**Infrastructure:** AWS (EC2, S3, RDS, CloudFront)  
**DevOps:** Docker · GitHub Actions (CI/CD) · Heroku-compatible
        `,
        tech: [
            "Django", "Python", "PostgreSQL",
            "HTML", "CSS", "Bootstrap", "JavaScript",
            "AWS (EC2, S3, RDS, CloudFront)",
            "Docker", "GitHub Actions", "Heroku-compatible"
        ],
        image: "/images/sero-global.png",
        screenshots: [
            "/images/sero-global.png"
        ],
        github: "https://github.com/yosephdev/sero-global",
        url: ""
    },
    "isana-facilitation": {
        "title": "Isana Facilitation Platform",
        "description": "A secure, full-stack mental health platform built with Django, React, and AWS — empowering therapists with modern tools for client and session management.",
        "longDescription": `
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
        "tech": [
            "React", "TypeScript", "Tailwind CSS", "Zustand",
            "Django", "Python", "PostgreSQL",
            "AWS (EC2, S3, RDS, CloudFront)",
            "Docker", "GitHub Actions", "Cloudinary"
        ],
        "image": "/images/isana-facilitation.png",
        "screenshots": [
            "/images/isana-facilitation.png"
        ],
        "github": "https://github.com/yosephdev/isana-facilitation",
        "url": ""
    },
    "worldscope": {
        title: "Worldscope",
        description: "A web application that displays information about countries using the REST Countries API.",
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
            "React", "TypeScript", "Tailwind CSS",
            "REST Countries API",
            "GitHub Actions", "AWS (EC2, S3, RDS, CloudFront)",
            "Docker", "Cloudinary"
        ],
        image: "/images/worldscope.png",
        screenshots: [
            "/images/worldscope.png"
        ],
        github: "https://github.com/yosephdev/worldscope",
        url: "https://worldscope-yoseph-berhanes-projects.vercel.app/"
    }
};



const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState(slug ? projects[slug as keyof typeof projects] : null);
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
                htmlOrPromise.then(html => setHtmlContent(html));
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

                            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                            <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

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
                                        <div key={index} className="overflow-hidden rounded-lg border">
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
