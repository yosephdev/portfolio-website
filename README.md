# Yoseph Dev Central 🚀

## A Modern, High-Performance Portfolio Website

This repository hosts the codebase for Yoseph Dev Central, a personal portfolio website meticulously crafted with cutting-edge web technologies. Designed for developers, designers, and anyone interested in clean, performant web experiences, this site showcases projects, shares insights through a blog, and offers valuable resources.

![Check out how the Resume Website looks on different devices](public/images/portfolio-website.png)

## ✨ Key Features

- **🎨 Sleek & Responsive Design**: A modern, minimalist UI built with Tailwind CSS, ensuring a seamless experience across all devices (desktop, tablet, mobile).
- **🌙 Dynamic Dark Mode**: Effortlessly switch between light and dark themes for optimal viewing comfort.
- **📝 Integrated Blog System**: Share your knowledge with a powerful, Markdown-based blog featuring syntax highlighting and robust content management.
- **💼 Interactive Project Showcase**: Highlight your work with a dynamic project gallery, complete with detailed pages for each project.
- **📚 Curated Resources Section**: Provide valuable downloadable content (PDFs, code snippets, guides) for the developer community.
- **📧 Seamless Newsletter Integration**: Grow your audience with Beehiiv-powered newsletter subscription functionality.
- **⚡ Blazing Fast Performance**: Optimized with Vite for rapid development builds and lightning-fast production loading times.
- **🔍 SEO-Friendly Architecture**: Built with meta tags, structured data, and sitemap generation for enhanced search engine visibility.
- **♿ Accessibility First**: Developed with WCAG compliance in mind, ensuring keyboard navigation support and an inclusive user experience.
- **🚀 Effortless Deployment**: Designed for one-click deployment to platforms like Netlify, simplifying your CI/CD pipeline.

## 🛠️ Tech Stack & Core Libraries

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with `tailwindcss-animate` and `@tailwindcss/typography` for enhanced UI and content styling)
- **Build Tool**: Vite
- **Content Management**: Markdown with `gray-matter` for frontmatter parsing
- **Routing**: React Router DOM
- **Deployment Platform**: Netlify (leveraging serverless functions for backend logic)
- **Newsletter Service**: Beehiiv API
- **UI Components**: shadcn/ui (built on Radix UI and Tailwind CSS)
- **Icons**: Lucide React
- **Markdown Processing**: Remark (with `remark-gfm` and `remark-html`)

## 🚀 Getting Started (Local Development)

Follow these steps to get your development environment up and running.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [Yarn](https://yarnpkg.com/)

### Installation Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yosephdev/personal-website.git
    cd personal-website
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of your project by copying the example:

    ```bash
    cp .env.example .env
    ```

    Open the newly created `.env` file and add your Beehiiv credentials:

    ```env
    VITE_BEEHIIV_API_KEY=your_api_key_here
    VITE_BEEHIIV_PUBLICATION_ID=your_publication_id_here
    ```

    *Note: `VITE_` prefix is required for environment variables exposed to your Vite-powered frontend.*

4. **Start the development server:**

    ```bash
    npm run dev
    # or yarn dev
    ```

5. **Access the application:**

    Open your web browser and navigate to [http://localhost:5173](http://localhost:5173).

### Development with Netlify Functions (for full functionality)

To test serverless functions (e.g., newsletter subscription) locally, use the Netlify CLI:

1. **Install Netlify CLI globally (if you haven't already):**

    ```bash
    npm install netlify-cli -g
    ```

2. **Run the Netlify development server:**

    ```bash
    netlify dev
    ```

    Access your site at [http://localhost:8888](http://localhost:8888). This will proxy requests to your Vite development server and handle Netlify Functions.

## 📁 Project Structure Overview

```
.netlify/                # Netlify build cache
.husky/                  # Git hooks configuration
dist/                    # Production build output
node_modules/            # Project dependencies
public/                  # Static assets (images, downloads, favicon)
├── admin/               # Netlify CMS admin interface
├── downloads/           # Downloadable resources
└── images/              # Project images
src/
├── App.tsx              # Main React application component
├── main.tsx             # React entry point
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── ...
├── config/              # Application configuration
├── content/             # Markdown content for blog posts and projects
│   ├── blog/            # Blog posts (Markdown files)
│   └── projects/        # Project descriptions (Markdown files)
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries and helpers
├── pages/               # React page components (e.g., Blog, ProjectDetail)
├── types/               # TypeScript type definitions
└── utils/               # General utility functions
netlify/                 # Netlify specific configurations
└── functions/           # Serverless functions (e.g., identity-signup, subscribe)
```

## 📝 Content Management

Content for the blog and projects is managed using Markdown files with frontmatter.

### Adding New Blog Posts

1. Create a new `.md` file in `src/content/blog/` (e.g., `my-new-post.md`).
2. Add frontmatter at the top of the file, followed by your Markdown content:

    ```markdown
    ---
    title: "Your Awesome Blog Post Title"
    date: "YYYY-MM-DD" # e.g., "2024-07-15"
    readingTime: "X min read" # e.g., "7 min read"
    author: "Your Name"
    tags: ["Tag1", "Tag2", "Tag3"] # List of relevant tags
    excerpt: "A concise summary of your blog post for previews."
    relatedPosts: ["slug-of-related-post-1", "slug-of-related-post-2"]
    ---

    # Your Blog Post Content

    Start writing your blog post here using standard Markdown syntax.

    ## Subheading Example

    You can include code blocks:

    ```javascript
    console.log("Hello, world!");
    ```

    And other Markdown elements like lists, links, and images.

    ```

### Adding New Projects

1. Create a new `.md` file in `src/content/projects/` (e.g., `my-awesome-project.md`).
2. Add frontmatter at the top of the file, followed by your Markdown content:

    ```markdown
    ---
    title: "My Awesome Project"
    description: "A brief, engaging description of your project."
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
    github: "https://github.com/your-username/your-repo" # Optional GitHub link
    url: "https://your-project-demo.com" # Optional live demo link
    image: "/images/my-awesome-project.png" # Path to project image in public/images
    ---

    ## Project Details

    Provide a more detailed description of your project here. Discuss its features, challenges faced, and technologies used.
    ```

## 🎨 Customization

### Styling

This project uses Tailwind CSS. You can customize the theme, add new utilities, or extend existing ones in `tailwind.config.ts`:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Define your custom color palette
        'custom-blue': '#3490dc',
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [/* ... */],
};
```

### UI Components

All reusable UI components are located in `src/components/` and `src/components/ui/`. You can modify these components or create new ones to match your design system.

## 🚀 Deployment

This project is optimized for easy deployment to various static hosting services.

### Netlify (Recommended)

1. **Connect your GitHub repository** to Netlify.
2. **Configure build settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
3. **Add environment variables** in your Netlify dashboard under `Site settings > Build & deploy > Environment`:
    - `VITE_BEEHIIV_API_KEY`
    - `VITE_BEEHIIV_PUBLICATION_ID`
4. **Deploy** 🎉 Netlify will automatically build and deploy your site on every push to your main branch.

### Other Platforms

The project can also be deployed to:

- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- Any static hosting service that supports Vite builds.

## 🧪 Testing & Quality Assurance

To ensure code quality and functionality, the project includes:

- **Linting**: Enforced with ESLint for consistent code style and error prevention.

    ```bash
    npm run lint
    ```

- **Type Checking**: TypeScript compiler for static type analysis.

    ```bash
    npm run type-check
    ```

- **Unit/Integration Tests**: (If configured) Run tests using your preferred testing framework (e.g., Vitest, Jest).

    ```bash
    npm run test # If a test script is defined in package.json
    ```

## 📊 Performance & SEO

This website is built with performance and SEO in mind:

- **Lighthouse Score**: Achieves high scores (95+ across all metrics) for performance, accessibility, best practices, and SEO.
- **Optimized Bundle Size**: Leverages Vite's efficient bundling and code splitting to minimize load times.
- **Fast Loading Speed**: Designed for rapid content delivery, typically loading under 2 seconds even on slower networks.
- **Comprehensive SEO**: Includes meta tags, structured data (JSON-LD), and a dynamically generated sitemap for optimal search engine indexing.

## 🤝 Contributing

We welcome contributions to Yoseph Dev Central! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix:

    ```bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b bugfix/fix-issue-description
    ```

3. **Make your changes** and ensure they adhere to the project's coding standards.
4. **Commit your changes** with a clear and concise message:

    ```bash
    git commit -m 'feat: Add new amazing feature'
    # or
    git commit -m 'fix: Resolve issue with X'
    ```

5. **Push your branch** to your forked repository:

    ```bash
    git push origin feature/your-feature-name
    ```

6. **Open a Pull Request** to the `main` branch of this repository, describing your changes in detail.

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.

## 👨‍💻 Author

**Yoseph Berhane Gebremedhin**

- **Website**: [yoseph.dev](https://yoseph.dev)
- **GitHub**: [@yosephdev](https://github.com/yosephdev)
- **LinkedIn**: [Yoseph Berhane](https://linkedin.com/in/yoseph-berhane)

## 🙏 Acknowledgments

Special thanks to the creators and maintainers of these incredible tools and libraries:

- [shadcn/ui](https://ui.shadcn.com/) - For beautifully crafted and accessible UI components.
- [Tailwind CSS](https://tailwindcss.com/) - For a utility-first CSS framework that enables rapid UI development.
- [Lucide](https://lucide.dev/) - For a consistent and extensive icon library.
- [Beehiiv](https://beehiiv.com/) - For robust newsletter management and API services.
- [Netlify](https://netlify.com/) - For seamless deployment and serverless functions.
- [Vite](https://vitejs.dev/) - For a fast and efficient development experience.
- [React](https://react.dev/) - For the powerful JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - For adding static typing to JavaScript, enhancing code quality and maintainability.

---

⭐ If you found this repository helpful, please consider giving it a star! Your support is greatly appreciated.
