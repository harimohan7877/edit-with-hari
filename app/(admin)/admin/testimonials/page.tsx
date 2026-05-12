"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Star, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientAvatar: string;
  content: string;
  rating: number;
  published: boolean;
  createdAt: Date;
}

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Sarah Johnson",
    clientRole: "Creative Director",
    clientCompany: "TechCorp",
    clientAvatar: "",
    content: "Hari transformed our raw footage into a cinematic masterpiece. His attention to detail and storytelling ability exceeded our expectations. Highly recommended!",
    rating: 5,
    published: true,
    createdAt: new Date("2024-03-10"),
  },
  {
    id: "2",
    clientName: "Michael Chen",
    clientRole: "CEO",
    clientCompany: "StartupXYZ",
    clientAvatar: "",
    content: "The video Hari created for our product launch generated incredible engagement. Professional, creative, and delivered ahead of schedule.",
    rating: 5,
    published: true,
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "3",
    clientName: "Emily Davis",
    clientRole: "Marketing Head",
    clientCompany: "BrandCo",
    clientAvatar: "",
    content: "Working with Hari was a seamless experience. He understood our vision perfectly and delivered content that truly resonates with our audience.",
    rating: 5,
    published: false,
    createdAt: new Date("2024-02-28"),
  },
];

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState(mockTestimonials);

  const togglePublished = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, published: !t.published } : t
      )
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold">Testimonials</h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            Manage client reviews and testimonials
          </p>
        </div>

        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:bg-[var(--color-accent-hover)] transition-colors">
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-2xl font-bold text-[var(--color-accent)]">
                  {testimonial.clientName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium">{testimonial.clientName}</h3>
                    <span
                      className={cn(
                        "px-2 py-0.5 text-xs rounded-full",
                        testimonial.published
                          ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                          : "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)]"
                      )}
                    >
                      {testimonial.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {testimonial.clientRole} at {testimonial.clientCompany}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < testimonial.rating
                            ? "text-[var(--color-accent)] fill-current"
                            : "text-[var(--color-text-muted)]"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-[var(--color-text-secondary)] line-clamp-3">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-text-muted)]">
                    {formatDate(testimonial.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePublished(testimonial.id)}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    testimonial.published
                      ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                      : "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)]"
                  )}
                >
                  {testimonial.published ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
                <button className="p-2 rounded-lg bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteTestimonial(testimonial.id)}
                  className="p-2 rounded-lg bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-error)] transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="text-center py-12 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl">
            <p className="text-[var(--color-text-muted)]">No testimonials yet</p>
            <button className="inline-flex items-center gap-2 mt-4 text-[var(--color-accent)] hover:underline">
              <Plus className="w-4 h-4" />
              Add your first testimonial
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}