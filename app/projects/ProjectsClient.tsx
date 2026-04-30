"use client";

import { useState } from "react";
import { Project } from "@/types";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ExternalLink } from "lucide-react";

const categories = [
  { value: "all", label: "All" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ai", label: "AI" },
  { value: "realtime", label: "Real-Time" },
];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const portfolioProjects = projects.filter((p) => p.category !== "freelance");
  const freelanceProjects = projects.filter((p) => p.category === "freelance");

  const filteredPortfolio = portfolioProjects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Portfolio Projects */}
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-4 uppercase">Work</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-zinc-100 mb-4">Portfolio Projects</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Production applications built to explore real architecture — authentication, real-time
            systems, AI integrations, and billing.
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

      <div className="grid sm:grid-cols-2 gap-5 mb-20">
        {filteredPortfolio.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.08}>
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </AnimatedSection>
        ))}
        {filteredPortfolio.length === 0 && (
          <div className="col-span-2 text-center py-20 text-zinc-500">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Client Work */}
      <AnimatedSection>
        <div className="mb-10 border-t border-zinc-800/50 pt-16">
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-4 uppercase">Client Work</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-4">Freelance Projects</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Real client projects delivered for paying customers.
          </p>
          <div className="mt-4 h-px w-16 bg-amber-500/60" />
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5">
        {freelanceProjects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 p-6 flex flex-col hover:border-amber-500/40 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-serif text-xl text-zinc-100 leading-snug">{project.title}</h3>
                <span className="shrink-0 text-xs font-mono px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Client Work
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    <ExternalLink size={13} />
                    Live Site
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-zinc-600 italic">
                    In Development
                  </span>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
