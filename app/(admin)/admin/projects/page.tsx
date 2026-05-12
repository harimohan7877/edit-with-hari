"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Star, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "1",
    title: "Cinematic Brand Film",
    slug: "cinematic-brand-film",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80",
    category: "Cinematic",
    client: "TechCorp",
    year: 2024,
    featured: true,
    published: true,
    views: 12500,
  },
  {
    id: "2",
    title: "Music Video Production",
    slug: "music-video",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
    category: "Music Video",
    client: "Artist Name",
    year: 2024,
    featured: true,
    published: true,
    views: 8900,
  },
  {
    id: "3",
    title: "Commercial Advertisement",
    slug: "commercial-ad",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&q=80",
    category: "Commercial",
    client: "Brand X",
    year: 2023,
    featured: false,
    published: true,
    views: 15000,
  },
  {
    id: "4",
    title: "Documentary Short",
    slug: "documentary-short",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
    category: "Documentary",
    client: "Studio Y",
    year: 2023,
    featured: false,
    published: false,
    views: 4200,
  },
];

export default function AdminProjectsPage() {
  const [projectsList, setProjectsList] = useState(projects);

  const toggleFeatured = (id: string) => {
    setProjectsList((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, featured: !p.featured } : p
      )
    );
  };

  const togglePublished = (id: string) => {
    setProjectsList((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, published: !p.published } : p
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold">Projects</h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            Manage your portfolio projects
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-[var(--color-surface-elevated)]">
              <tr className="text-left text-sm text-[var(--color-text-muted)]">
                <th className="px-6 py-4 font-medium">Project</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Featured</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Views</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectsList.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-[var(--color-surface-elevated)] hover:bg-[var(--color-surface-elevated)]/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-[var(--color-bg)]">
                        <img
                          src={project.thumbnailUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">
                          {project.slug}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs bg-[var(--color-surface-elevated)] rounded-full">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                    {project.client}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleFeatured(project.id)}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        project.featured
                          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                          : "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)]"
                      )}
                    >
                      <Star
                        className="w-4 h-4"
                        fill={project.featured ? "currentColor" : "none"}
                      />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => togglePublished(project.id)}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        project.published
                          ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                          : "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)]"
                      )}
                    >
                      {project.published ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                    {project.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/projects/${project.id}`}
                        className="p-2 rounded-lg bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button className="p-2 rounded-lg bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-error)] transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {projectsList.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-[var(--color-text-muted)]">No projects yet</p>
              <Link
                href="/admin/projects/new"
                className="inline-flex items-center gap-2 mt-4 text-[var(--color-accent)] hover:underline"
              >
                Create your first project
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}