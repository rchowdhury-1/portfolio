import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <Link href="/" className="font-serif text-lg text-zinc-100 hover:text-amber-400 transition-colors">
            RC<span className="text-amber-500">.</span>
          </Link>
          <p className="text-zinc-500 text-sm mt-1">
            © {new Date().getFullYear()} Razwanul Chowdhury. All rights reserved.
          </p>
        </div>

        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/projects" className="hover:text-amber-400 transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rchowdhury-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-amber-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/razwanul-chowdhury-711211223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-amber-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:razwanulchowdhury@gmail.com"
            className="text-zinc-500 hover:text-amber-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
