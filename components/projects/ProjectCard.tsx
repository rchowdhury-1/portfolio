"use client";

import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import Badge from "@/components/shared/Badge";

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  fullstack: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  ai: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  realtime: "text-green-400 bg-green-400/10 border-green-400/20",
};

const categoryLabels = {
  fullstack: "Full Stack",
  ai: "AI",
  realtime: "Real-Time",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(245,158,11,0.08)] transition-all duration-300">
      {/* Category badge */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-md border ${
            categoryColors[project.category]
          }`}
        >
          {categoryLabels[project.category]}
        </span>
        <div className="flex items-center gap-2">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors p-1"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-amber-400 transition-colors p-1"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-zinc-100 font-semibold text-lg mb-2 group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 5 && (
          <Badge variant="outline">+{project.techStack.length - 5}</Badge>
        )}
      </div>
    </div>
  );
}
