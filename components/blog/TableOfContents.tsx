"use client";

import { useState, useEffect } from "react";
import { extractHeadings } from "@/lib/mdx";

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const headings = extractHeadings(content).filter((h) => h.level <= 3);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <>
      {/* Mobile ToC toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-300"
        >
          <span>Table of contents</span>
          <span className="text-zinc-500">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="mt-2 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
            <ToCList headings={headings} activeId={activeId} onItemClick={() => setIsOpen(false)} />
          </div>
        )}
      </div>

      {/* Desktop sticky ToC */}
      <div className="hidden lg:block sticky top-24">
        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-3 font-mono">
          On this page
        </p>
        <ToCList headings={headings} activeId={activeId} />
      </div>
    </>
  );
}

function ToCList({
  headings,
  activeId,
  onItemClick,
}: {
  headings: { id: string; text: string; level: number }[];
  activeId: string;
  onItemClick?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-1">
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={onItemClick}
          className={`text-sm py-1 transition-colors leading-snug ${
            heading.level === 3 ? "pl-4" : ""
          } ${
            activeId === heading.id
              ? "text-amber-400"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}
