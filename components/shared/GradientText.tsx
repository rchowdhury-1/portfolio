"use client";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent ${className}`}
      style={{ backgroundSize: "200% auto", animation: "gradientX 4s ease infinite" }}
    >
      {children}
    </span>
  );
}
