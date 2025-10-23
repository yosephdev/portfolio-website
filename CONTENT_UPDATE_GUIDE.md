# Quick Content Update Guide

This is a quick reference for updating common content on your portfolio.

## 🖼️ Add Your Professional Photo

1. Take or choose a professional headshot photo
2. Resize to approximately 500x500px (square)
3. Save as `professional-photo.jpg` or `.png`
4. Place in `public/images/` directory
5. Update `src/components/AboutMe.tsx`:

```tsx
// Replace the placeholder div with:
<img
  src="/images/professional-photo.png"
  alt="Yoseph Berhane Gebremedhin"
  className="w-full h-full object-cover rounded-lg"
/>
```

## 📄 Upload Your CV

### Option 1: Single CV

1. Export your CV as PDF
2. Name it `Yoseph_Berhane_CV.pdf`
3. Place in `public/` directory
4. Done! The download buttons will work automatically

### Option 2: Multiple CVs (English + German)

1. Create two PDFs:
   - `Yoseph_Berhane_CV_English.pdf`
   - `Yoseph_Berhane_Lebenslauf_German.pdf`
2. Place both in `public/` directory
3. Update buttons in components to offer language choice

## 📧 Update Contact Email

**File:** `src/components/ContactInfo.tsx`

Find and replace:

```tsx
value: 'contact@yoseph.dev',
link: 'mailto:contact@yoseph.dev',
```

With your actual email.

## 🔗 Update Social Links

**File:** `src/components/ContactInfo.tsx`

Update these URLs:

```tsx
link: 'https://linkedin.com/in/your-actual-profile',
link: 'https://github.com/your-actual-username',
```

## ✍️ Update Your Bio

**File:** `src/components/AboutMe.tsx`

Find the bio paragraphs and update with your own story:

```tsx
<p className="text-base leading-relaxed mb-4">
  Hello! I'm <strong>Yoseph Berhane</strong>, [your story here]
</p>
```

## 🎓 Update Education & Experience

**File:** `src/components/AboutMe.tsx`

Update the quick info section:

```tsx
<p className="text-muted-foreground">Full Stack Development Diploma (2025)</p>
// Change to your actual education

<p className="text-muted-foreground">5 Years Coding</p>
// Change to your actual experience
```

## 🛠️ Update Skills

**File:** `src/components/TechnicalSkills.tsx`

Add, remove, or modify skills in the `skills` array:

```tsx
const skills: Skill[] = [
  { name: 'Your Skill', level: 85, category: 'Frontend', icon: '🎨' },
  // level: 0-100 (your proficiency)
  // category: Frontend, Backend, Databases, Tools, Other
];
```

## 💬 Add Testimonials

**File:** `src/components/Testimonials.tsx`

Add real testimonials to the `testimonials` array:

```tsx
{
  id: '1',
  name: 'Client Name',
  role: 'Their Position',
  company: 'Company Name',
  quote: 'What they said about you...',
  relationship: 'Client', // or 'Colleague', 'Mentor'
  date: '2024',
  avatar: '/images/client-photo.jpg', // optional
}
```

## 📝 Add a Blog Post

1. Create new file: `src/content/blog/post-slug.md`
2. Add frontmatter and content:

```markdown
---
title: "Your Post Title"
date: "2024-10-23"
readingTime: "5 min read"
author: "Yoseph Berhane"
tags: ["React", "Web Development"]
excerpt: "A brief description of your post..."
---

# Your Content Here

Write your blog post using Markdown...
```

## 🚀 Add a New Project

1. Create new file: `src/content/projects/project-slug.md`
2. Add frontmatter and content:

```markdown
---
title: "Project Name"
description: "Short description"
tech: ["React", "Node.js"]
github: "https://github.com/yourusername/repo"
url: "https://live-demo.com"
image: "/images/project-screenshot.png"
---

## About the Project

Detailed description...
```

3. Add project screenshot to `public/images/`

## 🎯 Update Job Seeking Status

If you've found a job and want to hide the banner:

**File:** `src/components/JobSeekingBanner.tsx`

Change:

```tsx
const [isVisible, setIsVisible] = useState(true);
```

To:

```tsx
const [isVisible, setIsVisible] = useState(false);
```

Or remove the component from `src/pages/Index.tsx`

## 📍 Update Location

When you move to Berlin, update:

**File:** `src/components/AboutMe.tsx`

```tsx
<p className="text-muted-foreground">Relocating to Berlin, Germany</p>
// Change to:
<p className="text-muted-foreground">Berlin, Germany</p>
```

**File:** `src/components/ContactInfo.tsx`

```tsx
value: 'Relocating to Berlin',
// Change to:
value: 'Berlin, Germany',
```

## 🔍 Need More Help?

- See `PORTFOLIO_GUIDE.md` for detailed documentation
- See `README.md` for technical setup
- Component files have detailed comments explaining functionality

---

**Remember to commit your changes after updates!**

```bash
git add .
git commit -m "Update: [what you changed]"
git push
```
