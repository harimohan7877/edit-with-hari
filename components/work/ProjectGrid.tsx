"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  client: string;
  year: number;
  shortDescription: string;
}

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export default function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}