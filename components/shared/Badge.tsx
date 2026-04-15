"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "amber" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({ children, variant = "default", size = "sm", className = "" }: BadgeProps) {
  const base = "inline-flex items-center font-mono rounded-md font-medium transition-colors";
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border border-zinc-700",
    amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    outline: "border border-zinc-700 text-zinc-400",
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
