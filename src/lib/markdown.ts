import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

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

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.warn('Blog directory not found, returning empty array');
    return [];
  }
}

// Get blog post metadata (without content)
export function getPostMetadata(slug: string): BlogPostMetadata | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
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
  } catch (error) {
    console.error(`Error reading post metadata for ${slug}:`, error);
    return null;
  }
}

// Get all blog posts metadata
export function getAllPostsMetadata(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map(slug => getPostMetadata(slug))
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get full blog post with content
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content
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
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPostsMetadata();
  const tagSet = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}

// Filter posts by search query and tag
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