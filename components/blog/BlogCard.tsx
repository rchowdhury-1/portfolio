import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Post } from "@/types";
import Badge from "@/components/shared/Badge";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(245,158,11,0.06)] transition-all duration-300"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {post.frontmatter.tags?.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="default" size="sm">
            {tag}
          </Badge>
        ))}
      </div>

      <h2 className="text-zinc-100 font-semibold text-xl mb-3 group-hover:text-amber-400 transition-colors leading-snug">
        {post.frontmatter.title}
      </h2>

      <p className="text-zinc-500 text-sm leading-relaxed mb-5 line-clamp-3">
        {post.frontmatter.excerpt}
      </p>

      <div className="flex items-center gap-4 text-xs text-zinc-600">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        {post.readingTime && (
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
        )}
      </div>
    </Link>
  );
}
