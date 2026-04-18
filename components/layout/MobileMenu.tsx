"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-72 bg-zinc-900 border-l border-zinc-800 z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-serif text-lg text-zinc-100">Menu</span>
              <button onClick={onClose} className="text-zinc-400 hover:text-zinc-100 p-1 transition-colors">
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-zinc-300 hover:text-amber-400 hover:bg-zinc-800 px-3 py-3 rounded-lg transition-all text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-zinc-800">
              <a
                href="/resume.pdf"
                download="Razwanul_Chowdhury_CV.pdf"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
