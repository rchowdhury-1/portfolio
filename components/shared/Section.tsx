import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  heading?: string;
  subheading?: string;
}

export default function Section({ children, id, className = "", heading, subheading }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 max-w-6xl mx-auto ${className}`}>
      {(heading || subheading) && (
        <div className="mb-12">
          {heading && (
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-3">{heading}</h2>
          )}
          {subheading && (
            <p className="text-zinc-400 text-lg max-w-2xl">{subheading}</p>
          )}
          <div className="mt-4 h-px w-16 bg-amber-500/60" />
        </div>
      )}
      {children}
    </section>
  );
}
