"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "px-5 py-2.5 bg-amber-500 text-zinc-950 hover:bg-amber-400 active:bg-amber-600 text-sm",
    secondary:
      "px-5 py-2.5 bg-zinc-900 text-zinc-100 border border-zinc-700 hover:border-amber-500/50 hover:bg-zinc-800 text-sm",
    ghost:
      "px-3 py-1.5 text-zinc-400 hover:text-amber-400 hover:bg-zinc-800/50 text-sm",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
