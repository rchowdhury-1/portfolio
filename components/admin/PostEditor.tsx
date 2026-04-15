"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Save, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { PostFrontmatter } from "@/types";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
    </div>
  ),
});

interface PostEditorProps {
  slug?: string;
  initialFrontmatter?: Partial<PostFrontmatter>;
  initialContent?: string;
  isNew?: boolean;
}

export default function PostEditor({
  slug: initialSlug,
  initialFrontmatter,
  initialContent = "",
  isNew = false,
}: PostEditorProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [content, setContent] = useState(initialContent);

  const [frontmatter, setFrontmatter] = useState<PostFrontmatter>({
    title: initialFrontmatter?.title || "",
    date: initialFrontmatter?.date || new Date().toISOString().split("T")[0],
    excerpt: initialFrontmatter?.excerpt || "",
    tags: initialFrontmatter?.tags || [],
    published: initialFrontmatter?.published ?? false,
  });

  const [slug, setSlug] = useState(
    initialSlug ||
      frontmatter.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
  );

  const handleTitleChange = (title: string) => {
    setFrontmatter((prev) => ({ ...prev, title }));
    if (isNew) {
      setSlug(
        title
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
      );
    }
  };

  const handleSave = async () => {
    if (!frontmatter.title || !slug) {
      setError("Title and slug are required.");
      return;
    }
    setSaving(true);
    setError("");

    try {
      const method = isNew ? "POST" : "PUT";
      const url = isNew ? "/api/posts" : `/api/posts/${initialSlug}`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, frontmatter, content }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Save failed");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div data-color-mode="dark">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin")}
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
        >
          <ArrowLeft size={15} />
          Back to posts
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-zinc-950 font-medium rounded-lg hover:bg-amber-400 transition-colors text-sm disabled:opacity-50"
        >
          <Save size={15} />
          {saving ? "Saving..." : "Save post"}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Frontmatter fields */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6 p-5 bg-zinc-900 border border-zinc-800 rounded-xl">
        <div>
          <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-1.5">Title *</label>
          <input
            type="text"
            value={frontmatter.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-1.5">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            disabled={!isNew}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 text-sm focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-1.5">Date</label>
          <input
            type="date"
            value={frontmatter.date}
            onChange={(e) => setFrontmatter((prev) => ({ ...prev, date: e.target.value }))}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-1.5">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={frontmatter.tags?.join(", ") || ""}
            onChange={(e) =>
              setFrontmatter((prev) => ({
                ...prev,
                tags: e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean),
              }))
            }
            placeholder="React, TypeScript, Node.js"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-1.5">Excerpt</label>
          <input
            type="text"
            value={frontmatter.excerpt}
            onChange={(e) => setFrontmatter((prev) => ({ ...prev, excerpt: e.target.value }))}
            placeholder="One-line summary of the post"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setFrontmatter((prev) => ({ ...prev, published: !prev.published }))}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              frontmatter.published
                ? "text-green-400 bg-green-400/10 border-green-400/20"
                : "text-zinc-500 bg-zinc-800 border-zinc-700 hover:border-zinc-600"
            }`}
          >
            {frontmatter.published ? <Eye size={14} /> : <EyeOff size={14} />}
            {frontmatter.published ? "Published" : "Draft"}
          </button>
        </div>
      </div>

      {/* Markdown editor */}
      <div className="rounded-xl overflow-hidden border border-zinc-800">
        <MDEditor
          value={content}
          onChange={(val) => setContent(val || "")}
          height={600}
          preview="live"
        />
      </div>
    </div>
  );
}
