import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import Badge from "@/components/shared/Badge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Section from "@/components/shared/Section";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (!posts.length) return null;

  return (
    <Section
      id="blog-preview"
      className="border-t border-zinc-800/50"
      heading="Writing"
      subheading="Thoughts on building, learning, and the transition from finance to code."
    >
      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.1}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-amber-500/30 hover:bg-zinc-900 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-zinc-100 font-semibold mb-2 group-hover:text-amber-400 transition-colors line-clamp-1">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-3 line-clamp-2">{post.frontmatter.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-zinc-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    {post.readingTime && (
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readingTime} min read
                      </span>
                    )}
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                  {post.frontmatter.tags?.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="default" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 text-sm transition-colors"
        >
          All posts
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
