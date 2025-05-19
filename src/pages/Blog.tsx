
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Sample data - in a real app this would come from a CMS or API
const blogPosts = [
  {
    slug: "modern-react-hooks",
    title: "Understanding Modern React Hooks",
    excerpt: "A deep dive into React's latest hooks and how they can improve your components.",
    date: "May 12, 2023",
    readingTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks"]
  },
  {
    slug: "typescript-tips",
    title: "10 TypeScript Tips for Better Code",
    excerpt: "Practical TypeScript tips that will help you write more maintainable code.",
    date: "April 23, 2023",
    readingTime: "6 min read",
    tags: ["TypeScript", "Best Practices"]
  },
  {
    slug: "tailwind-tricks",
    title: "Advanced Tailwind CSS Techniques",
    excerpt: "Take your Tailwind CSS skills to the next level with these advanced techniques.",
    date: "March 18, 2023",
    readingTime: "5 min read",
    tags: ["CSS", "Tailwind", "Frontend"]
  },
  {
    slug: "nextjs-vs-remix",
    title: "Next.js vs Remix: A Practical Comparison",
    excerpt: "Comparing two of the most popular React frameworks for building modern web applications.",
    date: "February 5, 2023",
    readingTime: "10 min read",
    tags: ["React", "Next.js", "Remix", "Frameworks"]
  },
  {
    slug: "state-management",
    title: "Modern State Management in React",
    excerpt: "An overview of current state management solutions in the React ecosystem.",
    date: "January 20, 2023",
    readingTime: "7 min read",
    tags: ["React", "State Management", "Redux", "Zustand"]
  },
  {
    slug: "web-performance",
    title: "Web Performance Optimization Techniques",
    excerpt: "Strategies to improve loading times and overall performance of your web applications.",
    date: "December 12, 2022",
    readingTime: "9 min read",
    tags: ["Performance", "Optimization", "Web Development"]
  }
];

// All unique tags from the blog posts
const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search query and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Blog Header */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Thoughts, tutorials and insights on web development.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Filters */}
        <section className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Search articles..."
              className="max-w-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              <button
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  selectedTag === null
                    ? "bg-primary text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                onClick={() => setSelectedTag(null)}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    selectedTag === tag
                      ? "bg-primary text-white"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="container py-8">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No posts found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
