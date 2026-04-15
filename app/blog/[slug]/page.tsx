import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { extractHeadings } from "@/lib/mdx";
import TableOfContents from "@/components/blog/TableOfContents";
import Badge from "@/components/shared/Badge";
import MDXContent from "@/components/blog/MDXContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    keywords: post.frontmatter.tags,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post || !post.frontmatter.published) notFound();

  const headings = extractHeadings(post.content);

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = allPosts[currentIndex + 1] || null;
  const nextPost = allPosts[currentIndex - 1] || null;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 text-sm transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        <div className="grid lg:grid-cols-[1fr_220px] gap-12 xl:gap-16">
          {/* Article */}
          <article className="min-w-0">
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-5">
                {post.frontmatter.tags?.map((tag) => (
                  <Badge key={tag} variant="amber" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-100 leading-tight mb-6">
                {post.frontmatter.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 border-b border-zinc-800 pb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                {post.readingTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readingTime} min read
                  </span>
                )}
              </div>
            </header>

            {/* MDX Content */}
            <div className="prose-custom">
              <MDXContent source={post.content} />
            </div>

            {/* Prev / Next navigation */}
            <nav className="mt-16 pt-8 border-t border-zinc-800 grid sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-1 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-all"
                >
                  <span className="text-xs text-zinc-600 flex items-center gap-1">
                    <ArrowLeft size={11} />
                    Previous
                  </span>
                  <span className="text-zinc-300 text-sm font-medium group-hover:text-amber-400 transition-colors line-clamp-2">
                    {prevPost.frontmatter.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-1 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-all sm:text-right"
                >
                  <span className="text-xs text-zinc-600 flex items-center gap-1 sm:justify-end">
                    Next
                    <ArrowRight size={11} />
                  </span>
                  <span className="text-zinc-300 text-sm font-medium group-hover:text-amber-400 transition-colors line-clamp-2">
                    {nextPost.frontmatter.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </article>

          {/* Sidebar ToC */}
          {headings.length > 0 && (
            <aside className="order-first lg:order-last">
              <TableOfContents content={post.content} />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
