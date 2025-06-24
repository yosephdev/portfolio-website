# Yoseph Dev Central 🚀

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, blog functionality, project showcase, and newsletter integration.

![Check out how the Resume Website looks on different devices](public/images/portfolio-website.png)

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist interface with smooth animations
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **📝 Blog System**: Markdown-based blog with syntax highlighting
- **💼 Project Showcase**: Interactive project gallery with detailed pages
- **📧 Newsletter Integration**: Beehiiv-powered newsletter subscription
- **⚡ Fast Performance**: Optimized with Vite for lightning-fast builds
- **🔍 SEO Optimized**: Meta tags, structured data, and sitemap
- **♿ Accessible**: WCAG compliant with keyboard navigation support
- **🚀 Easy Deployment**: One-click deployment to Netlify

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Content**: Markdown with frontmatter
- **Deployment**: Netlify with serverless functions
- **Newsletter**: Beehiiv API integration
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

  ```bash
  git clone https://github.com/yosephdev/personal-website.git
  cd personal-website
  ```

2. **Install dependencies**

  ```bash
  npm install
  ```

3. **Set up environment variables**

  ```bash
  cp .env.example .env
  ```

  Add your Beehiiv credentials to `.env`:

  ```env
  BEEHIIV_API_KEY=your_api_key_here
  BEEHIIV_PUBLICATION_ID=your_publication_id_here
  ```

4. **Start development server**

  ```bash
  npm run dev
  ```

5. **Open in browser**
  Visit [http://localhost:5173](http://localhost:5173)

### Development with Netlify Functions

For full newsletter functionality in development:

```bash
# Install Netlify CLI
npx netlify-cli dev

# Access at http://localhost:8888
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # Base UI components (buttons, etc.)
│   ├── NewsletterForm.tsx
│   ├── NewsletterSubscribe.tsx
│   └── ...
├── content/           # Markdown content
│   ├── blog/          # Blog posts
│   └── projects/      # Project descriptions
├── hooks/             # Custom React hooks
│   └── useBeehiivSubscription.ts
├── lib/               # Utility libraries
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── utils/             # Utility functions



netlify/
└── functions/         # Serverless functions
   └── subscribe.js   # Newsletter subscription handler

public/                # Static assets
```

## 📝 Content Management

### Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-20"
readingTime: "5 min read"
author: "Your Name"
tags: ["React", "TypeScript", "Web Development"]
excerpt: "A brief description of your post..."
---

# Your Blog Post Content

Write your content here using Markdown syntax.
```

### Adding Projects

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief project description"
tech: ["React", "TypeScript", "Tailwind CSS"]
github: "https://github.com/username/repo"
url: "https://project-demo.com"
image: "path/to/project-image.jpg"
---

Detailed project description goes here...
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.ts`:

```typescript
export default {
 theme: {
   extend: {
     colors: {
       // Add your custom colors
     },
     fontFamily: {
       // Add custom fonts
     }
   }
 }
}
```

### Components

All UI components are in `src/components/ui/` and can be customized to match your design preferences.

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Set build settings**:

- Build command: `npm run build`
- Publish directory: `dist`

3. **Add environment variables** in Netlify dashboard:

- `BEEHIIV_API_KEY`
- `BEEHIIV_PUBLICATION_ID`

4. **Deploy** 🎉

### Other Platforms

The project can also be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Any static hosting service

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests (if configured)
npm run test
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 2s on 3G networks
- **SEO**: Fully optimized for search engines

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yoseph Berhane**

- Website: [yoseph.dev](https://yoseph.dev)
- GitHub: [@yosephdev](https://github.com/yosephdev)
- LinkedIn: [Yoseph Berhane](https://linkedin.com/in/yosephberhane)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for clean, consistent icons
- [Beehiiv](https://beehiiv.com/) for newsletter management
- [Netlify](https://netlify.com/) for seamless deployment

---

⭐ Star this repo if you found it helpful!
