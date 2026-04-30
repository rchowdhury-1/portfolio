import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "saas-crm",
    title: "SaaS Customer Management Platform",
    description:
      "Full-stack SaaS application with subscription billing, JWT authentication, and role-based access control.",
    longDescription:
      "Built a complete SaaS platform from scratch featuring user registration with JWT authentication, bcrypt password hashing, Stripe payment integration with webhook handling for subscription management, plan-based feature gating, and a responsive dashboard. Designed the database schema, REST API, and frontend component architecture end-to-end.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT", "Stripe", "Tailwind CSS"],
    liveUrl: "https://saas-landing-v2-ten.vercel.app",
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
    liveUrl: "https://task-manager-nine-lake-56.vercel.app",
    githubUrl: "https://github.com/rchowdhury-1/task-manager",
    featured: true,
    category: "realtime",
    image: "/images/projects/task-manager.svg",
  },
  {
    id: "ooo-fat",
    title: "Ooo..FAT! Restaurant Website",
    description:
      "Custom website for a Birmingham drive-thru smash burger restaurant — mobile-first digital menu, QR ordering system and branded domain. Delivered in one week.",
    longDescription:
      "Designed and delivered a full production website for a Birmingham drive-thru restaurant. Features a mobile-first Apple-style visual scroll menu, a full pricing tab, and a QR code menu system so customers can scan and browse on their phones instantly. Includes branded domain setup, Google Maps integration, SEO metadata and sitemap. Delivered and approved within one week. Client feedback: \"Your work is soo good\"",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.ooofat.com",
    githubUrl: "https://github.com/rchowdhury-1/ooo-fat",
    featured: true,
    category: "freelance",
    image: "/images/projects/ooo-fat.svg",
  },
  {
    id: "my-institute",
    title: "My Institute — Education Platform",
    description:
      "Full-stack education platform for an Islamic studies institute — student portal, teacher tools, admin dashboard, scholarship system and recorded courses.",
    longDescription:
      "Full-stack education platform built for a real Islamic studies institute. Features a student portal with session management, teacher portal with homework and exam tools, supervisor panel, admin dashboard, scholarship application system, and a recorded courses section. Built with a Next.js frontend, Node.js/Express backend, and PostgreSQL database.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/rchowdhury-1/my-institute",
    featured: true,
    category: "freelance",
    image: "/images/projects/my-institute.svg",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Socket.IO", "JWT Auth", "bcrypt"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "SQLite", "Supabase", "Neon"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS S3", "AWS EC2", "AWS RDS", "Vercel", "Render", "Git/GitHub"],
  },
  {
    name: "AI & Payments",
    skills: ["Groq AI", "LLM APIs", "Prompt Engineering", "Stripe API", "Webhooks"],
  },
];
