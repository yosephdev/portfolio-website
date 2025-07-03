
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/NewsletterForm";
import { useEffect, useState } from "react";
import { getPostBySlug, getAllPostsMetadata, BlogPost as BlogPostType, BlogPostMetadata } from "@/lib/markdown";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      if (slug) {
        try {
          const fetchedPost = await getPostBySlug(slug);
          if (fetchedPost) {
            setPost(fetchedPost);
            // Fetch metadata for related posts
            if (fetchedPost.relatedPosts) {
              const allPosts = getAllPostsMetadata();
              const related = allPosts.filter(p => fetchedPost.relatedPosts?.includes(p.slug));
              setRelatedPosts(related);
            }
          } else {
            navigate("/404");
          }
        } catch (error) {
          console.error("Failed to fetch post:", error);
          navigate("/404");
        }
      }
      setIsLoading(false);
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <article className="container py-8 md:py-12">
            <div className="mx-auto max-w-[800px]">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-12 w-full mb-4" />
              <div className="flex flex-wrap gap-2 mb-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-8">
                <Skeleton className="h-5 w-24" />
                <span className="mx-2">•</span>
                <Skeleton className="h-5 w-24" />
                <span className="mx-2">•</span>
                <Skeleton className="h-5 w-16" />
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null; // Or a not found component
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container py-8 md:py-12">
          <div className="mx-auto max-w-[800px]">
            {/* Post Header */}
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
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
                Back to Blog
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            {/* Post Content */}
            <div 
              className="prose dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
            
            {/* Post Footer */}
            <div className="mt-12 border-t pt-6">
              <h2 className="text-2xl font-bold">Related Posts</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="rounded-lg border p-4">
                    <h3 className="font-bold">{relatedPost.title}</h3>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {new Date(relatedPost.date).toLocaleDateString()} • {relatedPost.readingTime}
                    </div>
                    <Button asChild variant="link" className="mt-2 p-0">
                      <Link to={`/blog/${relatedPost.slug}`}>Read Post</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        {/* Newsletter Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <div className="mx-auto max-w-[500px]">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
