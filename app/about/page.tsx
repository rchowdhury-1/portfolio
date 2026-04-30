import { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "From NatWest financial analyst to full-stack developer — Razwanul Chowdhury's career transition story and what he builds now.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <AnimatedSection>
        <div className="mb-14">
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-4 uppercase">About</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-zinc-100 mb-4">
            Who I am
          </h1>
          <div className="h-px w-16 bg-amber-500/60" />
        </div>
      </AnimatedSection>

      <div className="prose prose-zinc max-w-none space-y-10">
        {/* The Transition */}
        <AnimatedSection delay={0.1}>
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-zinc-100 mb-4">The Transition</h2>
            <div className="h-px w-8 bg-amber-500/60 mb-5" />
            <p className="text-zinc-400 leading-relaxed mb-4">
              Before NatWest, I spent five years in customer-facing roles — building the communication
              and problem-solving instincts that finance alone doesn&apos;t teach. Then 18 months at
              NatWest in risk analysis, building models in Excel and working across operations teams.
              I got competent at it. I also kept noticing a pattern: whenever there was a manual,
              repetitive process, I&apos;d try to automate it. Whenever there was a reporting gap,
              I&apos;d build a tool to fill it.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Eventually the obvious question became unavoidable: if I like building the tools
              more than I like using them, maybe I should actually learn to build them properly.
              That&apos;s what brought me here.
            </p>
          </section>
        </AnimatedSection>

        {/* The Learning Path */}
        <AnimatedSection delay={0.15}>
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-zinc-100 mb-4">The Learning Path</h2>
            <div className="h-px w-8 bg-amber-500/60 mb-5" />
            <p className="text-zinc-400 leading-relaxed mb-4">
              I completed the{" "}
              <span className="text-zinc-200">Meta Front End Developer Professional Certificate</span>{" "}
              (covering React, testing, UX/UI principles, and Git), then moved into backend development
              self-taught: Node.js, Express, PostgreSQL, JWT authentication, WebSockets.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The approach that worked for me: build real projects first, then deconstruct them. I use
              AI-assisted development tools to accelerate the initial build, then go back through every
              line until I can explain why each decision was made. Five production applications live,
              two freelance clients delivered — not toy apps, but real applications with real architecture.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I&apos;ve written about this in detail in the blog. The short version: AI doesn&apos;t
              replace understanding, but it dramatically compresses the time between &ldquo;building it&rdquo;
              and &ldquo;understanding it.&rdquo;
            </p>
          </section>
        </AnimatedSection>

        {/* What I Build */}
        <AnimatedSection delay={0.2}>
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-zinc-100 mb-4">What I Build</h2>
            <div className="h-px w-8 bg-amber-500/60 mb-5" />
            <p className="text-zinc-400 leading-relaxed mb-4">
              React-based web applications with a lean toward three areas: AI integrations, real-time
              features, and fintech applications. I&apos;m comfortable across the full stack — React
              frontends, Node.js/Express backends, PostgreSQL databases, WebSocket servers.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I have a particular interest in the intersection of AI and product — not just adding a
              chatbot to a site, but thinking about how AI changes what a product can do. The AI support
              agent project gave me hands-on experience with that, and it&apos;s the direction I want
              to keep moving in.
            </p>
          </section>
        </AnimatedSection>

        {/* What I'm Looking For */}
        <AnimatedSection delay={0.25}>
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-zinc-100 mb-4">What I&apos;m Looking For</h2>
            <div className="h-px w-8 bg-amber-500/60 mb-5" />
            <p className="text-zinc-400 leading-relaxed mb-4">
              Remote developer roles, UK or US market. Ideally at a fintech startup or a company
              building AI-powered products — somewhere I can learn from strong engineers while
              contributing immediately. I&apos;m most interested in front-end heavy roles with
              full-stack exposure, though I&apos;m open to the right fit.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I bring the analytical rigour from five years in customer-facing roles and 18 months in financial services at NatWest, the ability to ship
              independently, and a genuine obsession with making things work well. If that sounds
              like a fit, let&apos;s talk.
            </p>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:razwanulchowdhury@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 text-zinc-950 font-semibold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight size={15} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-zinc-100 font-medium rounded-xl border border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={15} />
              Download CV
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 text-zinc-400 hover:text-amber-400 transition-colors text-sm"
            >
              View projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
