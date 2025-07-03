
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { getAllPostsMetadata, filterPosts, getAllTags, BlogPostMetadata } from "@/lib/markdown";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [allPosts, setAllPosts] = useState<BlogPostMetadata[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMetadata[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = () => {
      setIsLoading(true);
      const posts = getAllPostsMetadata();
      const tags = getAllTags();
      setAllPosts(posts);
      setFilteredPosts(posts);
      setAllTags(tags);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = filterPosts(allPosts, searchQuery, selectedTag || undefined);
    setFilteredPosts(filtered);
  }, [searchQuery, selectedTag, allPosts]);

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
                Thoughts, tutorials and insights on web development, Python, AI, and more.
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
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <Skeleton className="h-40 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
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
