import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: calculateReadingTime(content),
    };
  });

  return posts
    .filter((p) => p.frontmatter.published)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getAllPostsAdmin(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        frontmatter: data as PostFrontmatter,
        content,
        readingTime: calculateReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.frontmatter.tags?.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function createPost(slug: string, frontmatter: PostFrontmatter, content: string): void {
  // NOTE: File-system writes won't persist on Vercel's serverless functions (read-only filesystem).
  // Options for production:
  // 1. Use Vercel Blob or a database (e.g. Supabase, PlanetScale) to store post content
  // 2. The CMS works perfectly in local development; blog posts committed to git deploy via Vercel
  // For now, the file-based approach demonstrates the CMS architecture and works locally.

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const frontmatterStr = Object.entries(frontmatter)
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}: [${v.map((i) => `"${i}"`).join(", ")}]`;
      if (typeof v === "boolean") return `${k}: ${v}`;
      return `${k}: "${v}"`;
    })
    .join("\n");

  const fileContent = `---\n${frontmatterStr}\n---\n\n${content}`;
  fs.writeFileSync(path.join(POSTS_DIR, `${slug}.mdx`), fileContent, "utf8");
}

export function updatePost(slug: string, frontmatter: PostFrontmatter, content: string): void {
  // NOTE: Same production limitation as createPost — file writes are ephemeral on Vercel.
  createPost(slug, frontmatter, content);
}

export function deletePost(slug: string): void {
  // NOTE: Same production limitation as createPost — file deletes are ephemeral on Vercel.
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}
