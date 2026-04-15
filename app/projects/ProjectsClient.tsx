"use client";

import { useState } from "react";
import { Project } from "@/types";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import AnimatedSection from "@/components/shared/AnimatedSection";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ai", label: "AI" },
  { value: "realtime", label: "Real-Time" },
];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = projects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-4 uppercase">Work</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-zinc-100 mb-4">Projects</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Four real applications built from scratch. Each one taught me something different
            about software architecture, user experience, and shipping.
          </p>
          <div className="mt-4 h-px w-16 bg-amber-500/60" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mb-8">
          <ProjectFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.08}>
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </AnimatedSection>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-zinc-500">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
