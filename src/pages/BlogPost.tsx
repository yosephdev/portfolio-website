
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/NewsletterForm";
import { useEffect } from "react";

// Sample blog post data - In a real app, this would be fetched from a CMS or API
const blogPosts = {
  "modern-react-hooks": {
    title: "Understanding Modern React Hooks",
    date: "May 12, 2023",
    readingTime: "8 min read",
    author: "Yoseph",
    tags: ["React", "JavaScript", "Hooks"],
    content: `
# Understanding Modern React Hooks

React Hooks have revolutionized how we write React components, moving away from class components and toward a more functional approach. In this article, we'll explore some of the more advanced hooks and patterns.

## useState vs useReducer

While **useState** is perfect for simple state values, **useReducer** shines when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

\`\`\`jsx
// Using useState
const [count, setCount] = useState(0);

// Equivalent using useReducer
const [count, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}, 0);
\`\`\`

## useCallback for Performance

The **useCallback** hook returns a memoized version of the callback that only changes if one of the dependencies has changed.

\`\`\`jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
\`\`\`

## useMemo for Expensive Calculations

**useMemo** is similar to useCallback but is designed to memoize computed values rather than functions.

\`\`\`jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

## Custom Hooks for Reusability

One of the most powerful features of hooks is the ability to create your own for reusable logic.

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Usage
function MyComponent() {
  const size = useWindowSize();
  return (
    <div>
      Width: {size.width}, Height: {size.height}
    </div>
  );
}
\`\`\`

## Conclusion

Hooks provide a more direct API to React concepts you were already familiar with: props, state, context, refs, and lifecycle. They also offer a powerful new way to combine them.`,
    relatedPosts: ["typescript-tips", "state-management"]
  },
  "typescript-tips": {
    title: "10 TypeScript Tips for Better Code",
    date: "April 23, 2023",
    readingTime: "6 min read",
    author: "Yoseph",
    tags: ["TypeScript", "Best Practices"],
    content: `
# 10 TypeScript Tips for Better Code

TypeScript continues to grow in popularity, and for good reason. Here are some tips to help you write better TypeScript code.

## 1. Use Type Inference Where Possible

TypeScript's type inference is powerful. Don't add type annotations when they're unnecessary.

\`\`\`typescript
// Unnecessarily verbose
const name: string = "TypeScript";

// Let TypeScript infer the type
const name = "TypeScript";
\`\`\`

## 2. Understand the 'any' Type

The \`any\` type effectively opts out of type checking. Use it sparingly and consider \`unknown\` as a safer alternative.

## 3. Leverage Union Types

Union types are powerful for representing values that could be one of several types.

\`\`\`typescript
type StringOrNumber = string | number;

function process(input: StringOrNumber) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}
\`\`\`

## 4. Use Intersection Types for Object Combinations

Intersection types combine multiple types into one.

\`\`\`typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeeRecord = Person & Employee;
\`\`\`

## 5. Implement Discriminated Unions

These are useful for modeling state transitions or API responses.

\`\`\`typescript
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: any;
};

type ErrorState = {
  status: "error";
  error: Error;
};

type State = LoadingState | SuccessState | ErrorState;
\`\`\`

## 6. Make Good Use of 'readonly'

The \`readonly\` modifier prevents properties from being changed after initialization.

\`\`\`typescript
interface Config {
  readonly apiUrl: string;
}
\`\`\`

## 7. Use Type Guards

Type guards help narrow down the type of a value.

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
\`\`\`

## 8. Leverage Generics for Reusable Code

Generics allow you to create reusable components.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## 9. Use Mapped Types for Transformations

Mapped types allow you to create new types from existing ones.

\`\`\`typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
\`\`\`

## 10. Optimize for Strictness

Enable strict mode in your tsconfig.json to catch more errors.

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`
`,
    relatedPosts: ["modern-react-hooks", "nextjs-vs-remix"]
  },
  // Add more blog posts in a similar format
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  useEffect(() => {
    if (!post) {
      window.location.href = "/blog";
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, slug]);

  if (!post) {
    return null;
  }

  // Convert markdown content to HTML
  // In a real app you would use a library like marked or remark
  const formatContent = (content: string) => {
    // Very basic markdown formatting
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-xl font-bold mt-4 mb-2">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />')
      .replace(/```([^`]+)```/g, (_, code) => {
        return `<pre class="bg-muted p-4 rounded-md overflow-x-auto my-4"><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
      });
  };

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
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            {/* Post Content */}
            <div 
              className="prose dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
            
            {/* Post Footer */}
            <div className="mt-12 border-t pt-6">
              <h2 className="text-2xl font-bold">Related Posts</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {post.relatedPosts && post.relatedPosts.map((relatedSlug) => {
                  const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts];
                  if (relatedPost) {
                    return (
                      <div key={relatedSlug} className="rounded-lg border p-4">
                        <h3 className="font-bold">{relatedPost.title}</h3>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {relatedPost.date} • {relatedPost.readingTime}
                        </div>
                        <Button asChild variant="link" className="mt-2 p-0">
                          <Link to={`/blog/${relatedSlug}`}>Read Post</Link>
                        </Button>
                      </div>
                    );
                  }
                  return null;
                })}
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
