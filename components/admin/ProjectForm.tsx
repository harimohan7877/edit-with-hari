"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Upload, X, Loader2 } from "lucide-react";
import { Project } from "@/types";
import { ProjectFormData } from "@/lib/validations";
import { projectSchema } from "@/lib/validations";
import { categories } from "@/constants";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/utils";

interface ProjectFormProps {
  project?: Project;
  onSubmit: (data: ProjectFormData) => Promise<void>;
  onCancel?: () => void;
}

export default function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(project?.thumbnailUrl || "");
  const [videoUrl, setVideoUrl] = useState(project?.videoUrl || "");
  const [images, setImages] = useState<string[]>(project?.images || []);
  const [tools, setTools] = useState<string[]>(project?.tools || []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      shortDescription: project?.shortDescription || "",
      category: project?.category || "",
      client: project?.client || "",
      year: project?.year || new Date().getFullYear(),
      duration: project?.duration || "",
      thumbnailUrl: project?.thumbnailUrl || "",
      videoUrl: project?.videoUrl || "",
      images: project?.images || [],
      tools: project?.tools || [],
      featured: project?.featured || false,
      published: project?.published || false,
    },
  });

  const handleFormSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit({
        ...data,
        slug: project?.slug || slugify(data.title),
        thumbnailUrl,
        videoUrl,
        images,
        tools,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const addImage = (url: string) => {
    setImages([...images, url]);
    setValue("images", [...images, url]);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    setValue("images", newImages);
  };

  const addTool = (tool: string) => {
    if (tool && !tools.includes(tool)) {
      setTools([...tools, tool]);
      setValue("tools", [...tools, tool]);
    }
  };

  const removeTool = (tool: string) => {
    const newTools = tools.filter((t) => t !== tool);
    setTools(newTools);
    setValue("tools", newTools);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title *</label>
          <input
            {...register("title")}
            className={cn(
              "w-full px-4 py-3 bg-[var(--color-surface)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
              errors.title ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
            )}
            placeholder="Project title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Client *</label>
          <input
            {...register("client")}
            className={cn(
              "w-full px-4 py-3 bg-[var(--color-surface)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
              errors.client ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
            )}
            placeholder="Client name"
          />
          {errors.client && (
            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.client.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <select
            {...register("category")}
            className={cn(
              "w-full px-4 py-3 bg-[var(--color-surface)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
              errors.category ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
            )}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Year *</label>
          <input
            type="number"
            {...register("year")}
            className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Duration *</label>
          <input
            {...register("duration")}
            className={cn(
              "w-full px-4 py-3 bg-[var(--color-surface)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
              errors.duration ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
            )}
            placeholder="e.g., 2:30"
          />
          {errors.duration && (
            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.duration.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Short Description *</label>
        <textarea
          {...register("shortDescription")}
          rows={2}
          className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          placeholder="Brief summary for cards"
        />
        {errors.shortDescription && (
          <p className="mt-1 text-sm text-[var(--color-error)]">{errors.shortDescription.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Full Description *</label>
        <textarea
          {...register("description")}
          rows={4}
          className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          placeholder="Detailed project description"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-[var(--color-error)]">{errors.description.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail URL *</label>
          <input
            type="url"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Video URL (YouTube/Vimeo) *</label>
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="https://youtube.com/..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tools Used</label>
        <div className="flex flex-wrap gap-2 mb-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-surface-elevated)] rounded-full text-sm"
            >
              {tool}
              <button type="button" onClick={() => removeTool(tool)} className="hover:text-[var(--color-error)]">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type tool name and press Enter"
          className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTool((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Featured</label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("featured")}
              className="w-5 h-5 rounded border-[var(--color-surface-elevated)] bg-[var(--color-surface)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            />
            <span className="text-sm text-[var(--color-text-secondary)]">Show on homepage</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Published</label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("published")}
              className="w-5 h-5 rounded border-[var(--color-surface-elevated)] bg-[var(--color-surface)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            />
            <span className="text-sm text-[var(--color-text-secondary)]">Visible to public</span>
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-surface-elevated)]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {project ? "Update Project" : "Create Project"}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-[var(--color-surface-elevated)] rounded-lg font-medium hover:bg-[var(--color-surface)] transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}