"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import GradientText from "@/components/shared/GradientText";

const rotatingTexts = [
  "React Specialist",
  "AI-Integrated Apps",
  "Real-Time Systems",
  "From Finance to Code",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-amber-500 text-sm font-mono tracking-widest mb-6 uppercase">
            Available for work
          </p>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl text-zinc-100 mb-4 leading-none tracking-tight">
            Razwanul
            <br />
            <GradientText>Chowdhury</GradientText>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6 mb-8 h-10">
            <span className="text-zinc-400 text-xl sm:text-2xl font-light">
              Full-Stack Developer —
            </span>
            <div className="relative h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-0 flex items-center text-amber-400 text-xl sm:text-2xl font-medium whitespace-nowrap"
                >
                  {rotatingTexts[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Building polished web applications with React and Node.js. Former NatWest Assistant Relationship Manager, now
            obsessed with shipping products that actually work.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-semibold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-100 font-medium rounded-xl border border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              Read Blog
            </Link>
            <a
              href="https://github.com/rchowdhury-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">rchowdhury-1</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-zinc-600 text-xs">
            <span>scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
