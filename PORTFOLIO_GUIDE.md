# Portfolio Website Enhancement Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [New Features](#new-features)
3. [Setup Instructions](#setup-instructions)
4. [Environment Variables](#environment-variables)
5. [Content Management](#content-management)
6. [Deployment](#deployment)
7. [Maintenance](#maintenance)

## 🎯 Overview

Your portfolio has been significantly enhanced to meet German tech market standards and better showcase your skills for job applications in Berlin. The website now includes:

- GitHub API integration for dynamic project display
- Comprehensive About Me section
- Technical skills visualization
- Job seeking banner
- Enhanced contact section
- Case study template
- Testimonials section
- And much more!

## ✨ New Features

### 1. GitHub Integration

**Location:** `src/services/github.service.ts`, `src/components/GitHubStats.tsx`, `src/components/GitHubRepos.tsx`

**Features:**
- Automatic fetching of your GitHub repositories
- Display of GitHub stats (repos, stars, forks, contributions)
- Caching to avoid rate limiting (15-minute cache)
- Fallback UI when GitHub API is unavailable

**Usage:**
```tsx
import { GitHubStats } from '@/components/GitHubStats';
import { GitHubRepos } from '@/components/GitHubRepos';

// Display GitHub stats
<GitHubStats />

// Display repositories with filtering
<GitHubRepos filter="featured" limit={6} showTabs={true} />
```

### 2. About Me Section

**Location:** `src/pages/About.tsx`, `src/components/AboutMe.tsx`

**Features:**
- Professional photo placeholder
- Detailed bio highlighting your experience
- Languages spoken
- Work authorization status (EU Citizen)
- Career goals and aspirations

**To Update:**
1. Navigate to `src/components/AboutMe.tsx`
2. Update the bio text in the component
3. Replace the professional photo placeholder with your actual photo in `public/images/`

### 3. Technical Skills

**Location:** `src/components/TechnicalSkills.tsx`

**Features:**
- Visual skill proficiency indicators (progress bars)
- Category grouping (Frontend, Backend, Databases, Tools, Other)
- Tabbed interface for easy navigation
- Compact version for homepage

**To Update Skills:**
1. Open `src/components/TechnicalSkills.tsx`
2. Modify the `skills` array:
```typescript
const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
  // Add or modify skills here
];
```

### 4. Job Seeking Banner

**Location:** `src/components/JobSeekingBanner.tsx`

**Features:**
- Prominent banner displaying job seeking status
- Dismissible (remembered for 7 days)
- CTA buttons for CV download and contact
- Responsive design for mobile and desktop

**To Update:**
- Edit the banner text and CTA buttons in the component file
- Update CV file path when you upload your CV

### 5. Contact Section

**Location:** `src/pages/Contact.tsx`, `src/components/ContactInfo.tsx`

**Features:**
- Enhanced contact form with EmailJS integration
- Contact information cards
- Response time information
- Social media links
- Availability status

**To Update Contact Info:**
1. Open `src/components/ContactInfo.tsx`
2. Update email, LinkedIn, GitHub URLs
3. Update location information

### 6. Case Study Template

**Location:** `src/pages/CaseStudy.tsx`

**Features:**
- Detailed project case study template
- Sections: Overview, Process, Challenges, Technical Details, Results, Learnings
- MT Skrädderi & Butik case study included as example

**To Add New Case Studies:**
1. Open `src/pages/CaseStudy.tsx`
2. Add a new entry to the `caseStudies` object:
```typescript
'project-slug': {
  slug: 'project-slug',
  title: 'Project Title',
  // ... fill in all fields
}
```

### 7. Testimonials

**Location:** `src/components/Testimonials.tsx`

**Features:**
- Carousel for displaying testimonials
- Author information with avatar
- Relationship tags (Client, Colleague, etc.)
- Sample testimonials included

**To Add Testimonials:**
1. Open `src/components/Testimonials.tsx`
2. Add testimonials to the `testimonials` array:
```typescript
{
  id: 'unique-id',
  name: 'Client Name',
  role: 'Their Role',
  company: 'Their Company',
  quote: 'Their testimonial...',
  relationship: 'Client',
  date: '2024',
}
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone and install dependencies** (already done):
```bash
cd /home/user/webapp
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env
```

3. **Configure environment variables** in `.env`:

```env
# GitHub (Optional - higher rate limits)
VITE_GITHUB_TOKEN=your_github_token_here

# EmailJS (Required for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Beehiiv (For newsletter)
VITE_BEEHIIV_API_KEY=your_api_key
VITE_BEEHIIV_PUBLICATION_ID=your_publication_id
```

4. **Start development server**:
```bash
npm run dev
```

Visit `http://localhost:5173`

## 🔑 Environment Variables

### GitHub API Token (Optional but Recommended)

**Why?** Increases rate limits from 60 to 5000 requests/hour and enables pinned repos.

**How to get:**
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Select scopes: `public_repo`, `read:user`
4. Copy token and add to `.env`

### EmailJS Configuration (Required for Contact Form)

**How to get:**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get Service ID, Template ID, and Public Key
5. Add to `.env`

**Email Template Variables:**
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Email subject
- `message` - Email message body
- `to_name` - Your name (Yoseph Berhane)

### Beehiiv Configuration (Optional - for Newsletter)

**How to get:**
1. Sign up at [Beehiiv](https://www.beehiiv.com/)
2. Create a publication
3. Get API credentials from settings
4. Add to `.env`

## 📝 Content Management

### Updating Your CV

1. Export your CV as PDF
2. Name it `Yoseph_Berhane_CV.pdf`
3. Place it in `public/` directory
4. The download button will automatically work

**Optional:** Create multiple versions:
- `Yoseph_Berhane_CV_English.pdf`
- `Yoseph_Berhane_Lebenslauf_German.pdf`

### Adding Blog Posts

Blog posts are stored in `src/content/blog/` as Markdown files.

**Create new post:**
```bash
touch src/content/blog/my-new-post.md
```

**Format:**
```markdown
---
title: "Post Title"
date: "2024-10-23"
readingTime: "5 min read"
author: "Yoseph Berhane"
tags: ["React", "TypeScript"]
excerpt: "Brief description..."
---

# Your blog post content here

Write your post using Markdown syntax.
```

### Adding Projects

Projects are stored in `src/content/projects/` as Markdown files.

**Create new project:**
```bash
touch src/content/projects/my-project.md
```

**Format:**
```markdown
---
title: "Project Name"
description: "Brief description"
tech: ["React", "Node.js", "PostgreSQL"]
github: "https://github.com/yourusername/repo"
url: "https://project-demo.com"
image: "/images/project-image.png"
---

## Project Details

Detailed description of your project...
```

### Updating Personal Information

**Location:** `src/components/AboutMe.tsx`

Update:
- Bio text
- Languages
- Education
- Career goals
- Location

**Location:** `src/components/ContactInfo.tsx`

Update:
- Email address
- LinkedIn URL
- GitHub URL
- Location

### Managing Images

Store images in `public/images/`:
- Project screenshots
- Professional photo
- Blog post images

**Best practices:**
- Optimize images before uploading (use WebP format)
- Use descriptive filenames
- Keep file sizes under 500KB for better performance

## 🚀 Deployment

### Netlify (Recommended - Already Set Up)

Your site is configured for Netlify deployment.

**Environment variables to set in Netlify:**
1. Go to Site settings > Build & deploy > Environment
2. Add the same variables from your `.env` file

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

**Deploy:**
```bash
git push origin main
```

Netlify will automatically build and deploy.

### Alternative: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard

### Alternative: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio-website/', // Your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 🔧 Maintenance

### Regular Updates

**Weekly:**
- Check for broken links
- Update blog with new posts
- Review and respond to contact form submissions

**Monthly:**
- Update skills if you've learned new technologies
- Add new projects
- Update GitHub repositories (automatic, but verify)
- Check analytics and performance

**Quarterly:**
- Review and update About Me section
- Add new testimonials
- Update CV
- Review and optimize performance

### Performance Optimization

**Monitor with:**
```bash
npm run lighthouse
```

**Tips:**
- Compress images
- Minimize third-party scripts
- Use lazy loading for images
- Keep bundle size under 300KB

### SEO Optimization

**Included:**
- Meta tags for each page
- Open Graph tags for social sharing
- Sitemap (run `npm run sitemap` to regenerate)
- Structured data (JSON-LD)

**To improve:**
- Add more blog content (SEO loves fresh content)
- Get backlinks from other websites
- Optimize images with alt text
- Use keywords naturally in content

### Accessibility

**Current features:**
- Keyboard navigation support
- ARIA labels
- Color contrast compliance
- Screen reader friendly

**To test:**
- Use keyboard only to navigate
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Run accessibility audit in Chrome DevTools

## 📧 Support & Questions

If you need help or have questions:

1. Check this documentation first
2. Review component comments in the code
3. Check the README.md for technical details
4. For GitHub issues, check GitHub API documentation
5. For EmailJS issues, check EmailJS documentation

## 🎉 What's Next?

**Recommended next steps:**

1. ✅ Upload your professional photo
2. ✅ Upload your CV (English and optionally German)
3. ✅ Configure EmailJS for contact form
4. ✅ Set up GitHub token for better rate limits
5. ✅ Customize the About Me section with your details
6. ✅ Add real testimonials
7. ✅ Create more case studies for your projects
8. ✅ Write your first blog post about your journey
9. ✅ Set up analytics (Google Analytics or Plausible)
10. ✅ Share your portfolio with potential employers!

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create account at [Google Analytics](https://analytics.google.com/)
2. Get your Tracking ID (G-XXXXXXXXXX)
3. Add to `.env`:
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Plausible Analytics (Privacy-friendly alternative)

1. Sign up at [Plausible](https://plausible.io/)
2. Add your domain
3. Add to `.env`:
```env
VITE_PLAUSIBLE_DOMAIN=yoseph.dev
```

## 🐛 Troubleshooting

### GitHub API Rate Limiting

**Problem:** "API rate limit exceeded"

**Solution:**
1. Add GitHub token to `.env`
2. Or wait for rate limit to reset (1 hour)

### Contact Form Not Working

**Problem:** Email not sending

**Solution:**
1. Verify EmailJS credentials in `.env`
2. Check EmailJS service status
3. Verify email template exists
4. Check browser console for errors

### Images Not Loading

**Problem:** Images show broken link

**Solution:**
1. Verify image exists in `public/images/`
2. Check file name matches code
3. Use forward slashes in paths: `/images/photo.jpg`

### Build Errors

**Problem:** Build fails

**Solution:**
1. Run `npm install` to ensure all dependencies are installed
2. Check for TypeScript errors: `npm run type-check`
3. Check for lint errors: `npm run lint`
4. Clear cache: `rm -rf node_modules dist && npm install`

---

**Good luck with your job search in Berlin! 🚀**

Your portfolio is now ready to impress German tech employers. Remember to keep it updated and showcase your best work!
