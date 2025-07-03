import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
  excerpt: string;
  content?: string;
  relatedPosts?: string[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
  excerpt: string;
  relatedPosts?: string[];
}

// Use Vite's import.meta.glob to get all markdown files.
// { as: 'raw', eager: true } imports the files as raw strings synchronously.
const postModules = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

const allPostsData: BlogPostMetadata[] = Object.entries(postModules).map(([filePath, fileContents]) => {
    const slug = filePath.split('/').pop()?.replace(/\.md$/, '') || '';
    const { data } = matter(fileContents);

    return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        readingTime: data.readingTime || '5 min read',
        author: data.author || 'Yoseph Berhane',
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        relatedPosts: data.relatedPosts || []
    };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export function getAllPostsMetadata(): BlogPostMetadata[] {
    return allPostsData;
}

export function getAllPostSlugs(): string[] {
    return allPostsData.map(post => post.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const filePath = `/src/content/blog/${slug}.md`;
    const fileContents = postModules[filePath];

    if (!fileContents) {
        console.error(`Post with slug ${slug} not found.`);
        return null;
    }

    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(remarkGfm)
        .use(html, { sanitize: false })
        .process(content);

    return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        readingTime: data.readingTime || '5 min read',
        author: data.author || 'Yoseph Berhane',
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        content: processedContent.toString(),
        relatedPosts: data.relatedPosts || []
    };
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  allPostsData.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function filterPosts(
  posts: BlogPostMetadata[],
  searchQuery?: string,
  selectedTag?: string
): BlogPostMetadata[] {
  return posts.filter(post => {
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });
}
