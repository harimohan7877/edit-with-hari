"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Wrench } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 pb-16"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <VideoPlayer
          videoUrl={project.videoUrl}
          thumbnailUrl={project.thumbnailUrl}
          title={project.title}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full mb-4">
                {project.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                {project.title}
              </h1>

              <div className="prose prose-invert prose-lg max-w-none mb-12">
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {project.images.slice(0, 4).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className={cn(
                        "relative aspect-video rounded-xl overflow-hidden",
                        index === 0 && "md:col-span-2"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-6">
              <h3 className="text-lg font-display font-bold mb-6 pb-4 border-b border-[var(--color-surface-elevated)]">
                Project Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[var(--color-text-muted)]" />
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[var(--color-text-muted)]" />
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-text-muted)]" />
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                </div>

                {project.tools && project.tools.length > 0 && (
                  <div className="pt-4 border-t border-[var(--color-surface-elevated)]">
                    <div className="flex items-center gap-3 mb-3">
                      <Wrench className="w-5 h-5 text-[var(--color-text-muted)]" />
                      <p className="text-xs text-[var(--color-text-muted)]">Tools Used</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs bg-[var(--color-surface-elevated)] rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Related Projects
              </h2>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 3).map((relatedProject, index) => (
                <Link
                  key={relatedProject.id}
                  href={`/work/${relatedProject.slug}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-video rounded-xl overflow-hidden"
                  >
                    <Image
                      src={relatedProject.thumbnailUrl}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-[var(--color-accent)]">{relatedProject.category}</span>
                      <h3 className="text-lg font-display font-bold text-white mt-1">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}