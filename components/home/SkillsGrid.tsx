import { skillCategories } from "@/lib/projects";
import Badge from "@/components/shared/Badge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Section from "@/components/shared/Section";

export default function SkillsGrid() {
  return (
    <Section
      id="skills"
      className="border-t border-zinc-800/50"
      heading="Technical Skills"
      subheading="Technologies I work with and am actively learning."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <AnimatedSection key={category.name} delay={i * 0.07}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
              <h3 className="text-zinc-300 font-medium text-sm mb-3 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={category.name === "Currently Learning" ? "amber" : "default"}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
