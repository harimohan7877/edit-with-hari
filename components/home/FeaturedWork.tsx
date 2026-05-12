"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  category: string;
  client: string;
  year: number;
}

interface FeaturedWorkProps {
  projects: Project[];
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-[var(--color-accent)] tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={cn(
                "group relative rounded-2xl overflow-hidden cursor-pointer",
                index === 0 || index === 3 ? "md:row-span-2" : ""
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={cn(
                "aspect-video transition-all duration-500",
                index === 0 || index === 3 ? "md:aspect-auto md:h-full" : ""
              )}>
                <div className="relative w-full h-full bg-[var(--color-surface)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredId === project.id ? 1 : 0,
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center"
                    >
                      <Play className="w-6 h-6 text-[var(--color-bg)]" fill="currentColor" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {project.client} • {project.year}
                    </p>
                  </div>

                  <div className={cn(
                    "absolute inset-0 bg-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity",
                    hoveredId === project.id && "animate-pulse"
                  )} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/work"
          className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}