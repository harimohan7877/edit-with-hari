"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import ProjectForm from "@/components/admin/ProjectForm";
import { Project } from "@/types";
import { ProjectFormData } from "@/lib/validations";

const mockProject: Project = {
  id: "1",
  title: "Cinematic Brand Film",
  slug: "cinematic-brand-film",
  description: "A visually stunning brand film showcasing innovation and technology.",
  shortDescription: "A visually stunning brand film showcasing innovation and technology.",
  category: "cinematic",
  client: "TechCorp",
  year: 2024,
  duration: "3:45",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  images: [
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  ],
  tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
  featured: true,
  published: true,
  views: 12500,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProject(mockProject);
      setIsLoading(false);
    };

    fetchProject();
  }, [params.id]);

  const handleSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/projects/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/projects");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update project:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-[var(--color-accent)] animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-text-muted)]">Project not found</p>
        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-2 mt-4 text-[var(--color-accent)] hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-3xl font-display font-bold">Edit Project</h1>
        <p className="text-[var(--color-text-muted)] mt-1">
          Update project details
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-8"
      >
        <ProjectForm
          project={project}
          onSubmit={handleSubmit}
          onCancel={() => router.push("/admin/projects")}
        />
      </motion.div>
    </div>
  );
}