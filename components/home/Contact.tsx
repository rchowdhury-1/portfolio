import { Mail, Github, Linkedin, Download } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Section from "@/components/shared/Section";

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-zinc-800/50">
      <AnimatedSection>
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-3">
            Let&apos;s talk
          </h2>
          <div className="h-px w-12 bg-amber-500/60 mb-6" />
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            I&apos;m actively looking for developer roles — remote or hybrid, UK or US market.
            If you&apos;re building something interesting, especially in fintech or AI, I&apos;d
            love to hear about it.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:razwanulchowdhury@gmail.com"
              className="group inline-flex items-center gap-3 px-5 py-3 bg-amber-500 text-zinc-950 font-semibold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get in touch
            </a>

            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-3 px-5 py-3 bg-zinc-900 text-zinc-100 font-medium rounded-xl border border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://github.com/rchowdhury-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm"
            >
              <Github size={16} />
              github.com/rchowdhury-1
            </a>
            <a
              href="https://www.linkedin.com/in/razwanul-chowdhury-711211223/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
