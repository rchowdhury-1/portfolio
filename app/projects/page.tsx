import { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack web applications built with React, Node.js, Socket.IO, and AI — real projects with real architecture.",
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
