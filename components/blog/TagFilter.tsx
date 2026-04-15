"use client";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagSelect(null)}
        className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all ${
          selectedTag === null
            ? "bg-amber-500 text-zinc-950"
            : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
          className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all ${
            selectedTag === tag
              ? "bg-amber-500 text-zinc-950"
              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
