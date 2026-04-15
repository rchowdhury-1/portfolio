import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: "#18181b",
        border: "#27272a",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "gradient-x": "gradientX 4s ease infinite",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#a1a1aa",
            h1: { color: "#f4f4f5" },
            h2: { color: "#f4f4f5" },
            h3: { color: "#f4f4f5" },
            h4: { color: "#f4f4f5" },
            strong: { color: "#f4f4f5" },
            a: { color: "#f59e0b", textDecoration: "none" },
            blockquote: { borderLeftColor: "#f59e0b", color: "#a1a1aa" },
            "pre code": { backgroundColor: "transparent", padding: "0" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
