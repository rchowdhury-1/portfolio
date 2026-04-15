import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Section from "@/components/shared/Section";

export default function ProjectsShowcase() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      className="border-t border-zinc-800/50"
      heading="Selected Projects"
      subheading="Real applications built with real architecture — not tutorial clones."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {featured.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 text-sm transition-colors"
        >
          All projects with details
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
