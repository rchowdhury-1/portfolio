import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import SkillsGrid from "@/components/home/SkillsGrid";
import BlogPreview from "@/components/home/BlogPreview";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsShowcase />
      <SkillsGrid />
      <BlogPreview />
      <Contact />
    </>
  );
}
