"use client";

interface ProjectFilterProps {
  categories: { value: string; label: string }[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function ProjectFilter({ categories, selected, onSelect }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          className={`px-4 py-2 text-sm rounded-xl font-medium border transition-all duration-200 ${
            selected === cat.value
              ? "bg-amber-500 text-zinc-950 border-amber-500"
              : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
