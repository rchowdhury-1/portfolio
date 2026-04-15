"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit, Trash2, Plus, Eye, EyeOff } from "lucide-react";
import { Post } from "@/types";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts: initialPosts }: PostListProps) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (slug: string) => {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    setDeleting(slug);
    try {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.slug !== slug));
        router.refresh();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-zinc-100 font-semibold text-lg">All Posts ({posts.length})</h2>
        <Link
          href="/admin/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-zinc-950 font-medium rounded-lg hover:bg-amber-400 transition-colors text-sm"
        >
          <Plus size={16} />
          New Post
        </Link>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-500 text-xs uppercase tracking-wider">
              <th className="text-left px-4 py-3">Title</th>
              <th className="text-left px-4 py-3 hidden sm:table-cell">Date</th>
              <th className="text-left px-4 py-3 hidden md:table-cell">Tags</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-right px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {posts.map((post) => (
              <tr key={post.slug} className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-4 py-3 text-zinc-200 font-medium max-w-xs truncate">
                  {post.frontmatter.title}
                </td>
                <td className="px-4 py-3 text-zinc-500 hidden sm:table-cell">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3 text-zinc-500 hidden md:table-cell">
                  {post.frontmatter.tags?.slice(0, 2).join(", ")}
                  {(post.frontmatter.tags?.length ?? 0) > 2 && "..."}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${
                      post.frontmatter.published
                        ? "text-green-400 bg-green-400/10 border-green-400/20"
                        : "text-zinc-500 bg-zinc-800 border-zinc-700"
                    }`}
                  >
                    {post.frontmatter.published ? (
                      <Eye size={10} />
                    ) : (
                      <EyeOff size={10} />
                    )}
                    {post.frontmatter.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/editor/${post.slug}`}
                      className="p-1.5 text-zinc-500 hover:text-amber-400 transition-colors"
                    >
                      <Edit size={15} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.slug)}
                      disabled={deleting === post.slug}
                      className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors disabled:opacity-50"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {posts.length === 0 && (
          <div className="py-12 text-center text-zinc-500">
            No posts yet. Create your first post.
          </div>
        )}
      </div>
    </div>
  );
}
