import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Section from "@/components/shared/Section";

export default function About() {
  return (
    <Section id="about" className="border-t border-zinc-800/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-4">
            From NatWest to{" "}
            <span className="text-amber-400">Next.js</span>
          </h2>
          <div className="h-px w-12 bg-amber-500/60 mb-6" />
          <p className="text-zinc-400 leading-relaxed mb-4">
            I spent five years in customer-facing roles and 18 months at NatWest in commercial
            banking. I got good at it, but I kept coming back to the same thought: I&apos;d rather
            build the tools.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Now I build full-stack web applications — React frontends, Node.js backends, real-time
            features with WebSockets, and AI integrations. Five production applications live, two
            freelance clients delivered, all of which I can explain line by line.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
          >
            Full story
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects shipped", value: "5" },
              { label: "Years pre-dev career", value: "5+" },
              { label: "Technologies", value: "15+" },
              { label: "Lines of code written", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-amber-500/30 transition-colors"
              >
                <div className="font-serif text-4xl text-amber-400 mb-1">{stat.value}</div>
                <div className="text-zinc-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
