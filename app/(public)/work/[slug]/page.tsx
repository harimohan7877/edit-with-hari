"use client";

import { useParams } from "next/navigation";
import ProjectDetail from "@/components/work/ProjectDetail";

const projectsData: Record<string, any> = {
  "cinematic-brand-film": {
    id: "1",
    title: "Cinematic Brand Film",
    slug: "cinematic-brand-film",
    description: "This brand film for TechCorp showcases their cutting-edge technology through stunning visuals and a compelling narrative. We worked closely with their marketing team to create a piece that not only looked incredible but also effectively communicated their brand values and innovation. The project involved extensive color grading to achieve that signature cinematic look, along with motion graphics to highlight key product features.",
    shortDescription: "A visually stunning brand film showcasing innovation and technology.",
    category: "Cinematic",
    client: "TechCorp",
    year: 2024,
    duration: "3:45",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
    featured: true,
    published: true,
    views: 12500,
  },
  "music-video": {
    id: "2",
    title: "Music Video Production",
    slug: "music-video",
    description: "A dynamic music video that pushes creative boundaries. Working with the artist, we developed a visual style that perfectly complements the music while creating an engaging viewing experience. The edit features dramatic transitions, synchronized visual effects, and carefully crafted pacing that builds throughout the track.",
    shortDescription: "Dynamic music video with creative editing and visual effects.",
    category: "Music Video",
    client: "Artist Name",
    year: 2024,
    duration: "4:20",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    featured: true,
    published: true,
    views: 8900,
  },
  "commercial-ad": {
    id: "3",
    title: "Commercial Advertisement",
    slug: "commercial-ad",
    description: "A high-energy commercial designed to capture attention and drive engagement. The 30-second spot required careful planning to deliver maximum impact in minimum time. Every frame was optimized for emotional resonance, with strategic placements of the brand message throughout.",
    shortDescription: "High-energy commercial for a major retail brand.",
    category: "Commercial",
    client: "Brand X",
    year: 2023,
    duration: "0:30",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    ],
    tools: ["Adobe Premiere Pro", "After Effects"],
    featured: false,
    published: true,
    views: 15000,
  },
};

export default function ProjectSlugPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projectsData[slug] || {
    id: "default",
    title: "Project",
    slug: slug,
    description: "Project details coming soon.",
    shortDescription: "A stunning project by Edit With Hari.",
    category: "Cinematic",
    client: "Client Name",
    year: 2024,
    duration: "0:00",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
    images: [],
    tools: ["Adobe Premiere Pro"],
    featured: false,
    published: true,
    views: 0,
  };

  const relatedProjects = Object.values(projectsData)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return <ProjectDetail project={project} relatedProjects={relatedProjects} />;
}