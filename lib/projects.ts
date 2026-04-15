import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "saas-crm",
    title: "SaaS Customer Management Platform",
    description:
      "Full-stack SaaS application with subscription billing, JWT authentication, and role-based access control.",
    longDescription:
      "Built a complete SaaS platform from scratch featuring user registration with JWT authentication, bcrypt password hashing, Stripe payment integration with webhook handling for subscription management, plan-based feature gating, and a responsive dashboard. Designed the database schema, REST API, and frontend component architecture end-to-end.",
    techStack: ["React", "Node.js", "Express", "SQLite", "JWT", "Stripe", "Tailwind CSS"],
    liveUrl: "https://riz-website-v2.netlify.app",
    githubUrl: "https://github.com/rchowdhury-1/website-v2",
    featured: true,
    category: "fullstack",
    image: "/images/projects/saas-crm.svg",
  },
  {
    id: "ai-support-agent",
    title: "AI Customer Support Agent",
    description:
      "AI-powered support platform with embeddable chat widget, multi-agent management, and real-time conversation handling.",
    longDescription:
      "Built an AI support agent platform where businesses can create custom AI agents trained on their knowledge base. Features include a real-time chat interface powered by Groq AI, an embeddable JavaScript widget for any website, agent performance analytics, conversation history, and a management dashboard. The system handles concurrent conversations with context-aware responses.",
    techStack: ["React", "TypeScript", "Node.js", "Groq AI", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ai-support-agent-rc-1.vercel.app",
    githubUrl: "https://github.com/rchowdhury-1/ai-support-agent",
    featured: true,
    category: "ai",
    image: "/images/projects/ai-support.svg",
  },
  {
    id: "freelancer-crm",
    title: "Freelancer CRM with Invoicing",
    description:
      "Client management system for freelancers with project tracking, time logging, and PDF invoice generation.",
    longDescription:
      "A CRM designed for freelancers to manage clients, track projects and hours, generate professional PDF invoices, and monitor revenue. Features include client profiles with contact history, project status boards, hourly and fixed-rate billing, automated invoice generation, and a financial dashboard with income tracking and overdue payment alerts.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://freelancer-crm-one.vercel.app",
    githubUrl: "https://github.com/rchowdhury-1/freelancer-crm",
    featured: true,
    category: "fullstack",
    image: "/images/projects/freelancer-crm.svg",
  },
  {
    id: "task-manager",
    title: "Real-Time Collaborative Task Manager",
    description:
      "Kanban board with live collaboration — real-time cursors, drag-and-drop, and instant sync across users via WebSockets.",
    longDescription:
      "A collaborative task management app where multiple users work on shared Kanban boards in real-time. Features include drag-and-drop task cards with @dnd-kit, live cursor tracking showing where other users are working, instant task sync via Socket.IO rooms, an activity feed, board sharing via invite codes, JWT authentication, and optimistic UI updates with server reconciliation.",
    techStack: ["React", "TypeScript", "Socket.IO", "Node.js", "Express", "PostgreSQL", "Zustand", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/rchowdhury-1/task-manager",
    featured: true,
    category: "realtime",
    image: "/images/projects/task-manager.svg",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Socket.IO", "JWT Auth"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "SQLite", "Supabase"],
  },
  {
    name: "AI / ML",
    skills: ["Groq AI", "OpenAI API", "LangChain (learning)"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Claude Code", "Vercel", "Render", "Vite", "npm"],
  },
  {
    name: "Currently Learning",
    skills: ["Next.js App Router", "TypeScript advanced patterns", "AI agent architecture"],
  },
];
