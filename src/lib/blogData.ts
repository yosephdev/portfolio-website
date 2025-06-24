import { getAllPostsMetadata, getAllTags, getPostBySlug } from './markdown';

export const generateBlogData = async () => {
  const posts = getAllPostsMetadata();
  const tags = getAllTags();
  
  return {
    posts,
    tags,
    totalPosts: posts.length
  };
};

export const blogData = {
  posts: getAllPostsMetadata(),
  tags: getAllTags()
};