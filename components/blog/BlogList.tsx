"use client";

import { useState, useMemo } from "react";
import { Post } from "@/types";
import BlogCard from "./BlogCard";
import TagFilter from "./TagFilter";
import { Search } from "lucide-react";

interface BlogListProps {
  posts: Post[];
  tags: string[];
}

export default function BlogList({ posts, tags }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = !selectedTag || post.frontmatter.tags?.includes(selectedTag);
      const matchesSearch =
        !searchQuery ||
        post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.frontmatter.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [posts, selectedTag, searchQuery]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>
        <div className="text-zinc-600 text-sm self-center shrink-0">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        </div>
      </div>

      <div className="mb-8">
        <TagFilter tags={tags} selectedTag={selectedTag} onTagSelect={setSelectedTag} />
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-zinc-500">
          No posts match your search.
        </div>
      )}
    </div>
  );
}
