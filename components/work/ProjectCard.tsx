"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/work/${project.slug}`}>
      <motion.div
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[4/3] bg-[var(--color-surface)]">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
              <Play className="w-6 h-6 text-[var(--color-bg)]" fill="currentColor" />
            </div>
          </motion.div>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-medium bg-[var(--color-accent)]/20 text-[var(--color-accent)] backdrop-blur-sm rounded-full border border-[var(--color-accent)]/30">
              {project.category}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-white/70 mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-xs text-white/60">
                {project.client} • {project.year}
              </div>

              <motion.div
                className="flex items-center gap-1 text-sm text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}