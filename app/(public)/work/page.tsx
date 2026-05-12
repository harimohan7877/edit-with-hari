"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectGrid from "@/components/work/ProjectGrid";
import ProjectFilter from "@/components/work/ProjectFilter";
import { categories } from "@/constants";

const projects = [
  {
    id: "1",
    title: "Cinematic Brand Film",
    slug: "cinematic-brand-film",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Cinematic",
    client: "TechCorp",
    year: 2024,
    shortDescription: "A visually stunning brand film showcasing innovation and technology.",
  },
  {
    id: "2",
    title: "Music Video Production",
    slug: "music-video",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Music Video",
    client: "Artist Name",
    year: 2024,
    shortDescription: "Dynamic music video with creative editing and visual effects.",
  },
  {
    id: "3",
    title: "Commercial Advertisement",
    slug: "commercial-ad",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Commercial",
    client: "Brand X",
    year: 2023,
    shortDescription: "High-energy commercial for a major retail brand.",
  },
  {
    id: "4",
    title: "Documentary Short",
    slug: "documentary-short",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Documentary",
    client: "Studio Y",
    year: 2023,
    shortDescription: "Award-winning documentary about sustainable living.",
  },
  {
    id: "5",
    title: "Wedding Film",
    slug: "wedding-film",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Wedding",
    client: "John & Jane",
    year: 2024,
    shortDescription: "Romantic wedding film capturing the special day beautifully.",
  },
  {
    id: "6",
    title: "Social Media Reel",
    slug: "social-media-reel",
    thumbnailUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Social Media",
    client: "Influencer",
    year: 2024,
    shortDescription: "Viral social media content with trending audio and effects.",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All", count: projects.length },
    ...categories.map((cat) => ({
      id: cat.id,
      label: cat.name,
      count: projects.filter((p) => p.category.toLowerCase() === cat.id).length,
    })),
  ].filter((f) => f.count > 0 || f.id === "all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter);

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-accent)] tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              My Work
            </motion.span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A collection of projects that showcase my passion for visual storytelling
            and cinematic excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <ProjectFilter
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </motion.div>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </main>
  );
}