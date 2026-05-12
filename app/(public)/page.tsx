"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
  ssr: false,
  loading: () => null,
});

const featuredProjects = [
  {
    id: "1",
    title: "Cinematic Brand Film",
    slug: "cinematic-brand-film",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    category: "Cinematic",
    client: "TechCorp",
    year: 2024,
  },
  {
    id: "2",
    title: "Music Video Production",
    slug: "music-video",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Music Video",
    client: "Artist Name",
    year: 2024,
  },
  {
    id: "3",
    title: "Commercial Ad",
    slug: "commercial-ad",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    category: "Commercial",
    client: "Brand X",
    year: 2023,
  },
  {
    id: "4",
    title: "Documentary Short",
    slug: "documentary-short",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    category: "Documentary",
    client: "Studio Y",
    year: 2023,
  },
];

const testimonials = [
  {
    id: "1",
    clientName: "Sarah Johnson",
    clientRole: "Creative Director",
    clientCompany: "TechCorp",
    clientAvatar: "",
    content: "Hari transformed our raw footage into a cinematic masterpiece. His attention to detail and storytelling ability exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Michael Chen",
    clientRole: "CEO",
    clientCompany: "StartupXYZ",
    clientAvatar: "",
    content: "The video Hari created for our product launch generated incredible engagement. Professional, creative, and delivered ahead of schedule.",
    rating: 5,
  },
  {
    id: "3",
    clientName: "Emily Davis",
    clientRole: "Marketing Head",
    clientCompany: "BrandCo",
    clientAvatar: "",
    content: "Working with Hari was a seamless experience. He understood our vision perfectly and delivered content that truly resonates with our audience.",
    rating: 5,
  },
  {
    id: "4",
    clientName: "Alex Thompson",
    clientRole: "YouTuber",
    clientCompany: "Self-employed",
    clientAvatar: "",
    content: "Best video editor I've worked with. Fast turnaround, creative edits, and always open to feedback. A true professional.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="relative">
      <Scene3D />
      <HeroSection />
      <ServicesSection />
      <FeaturedWork projects={featuredProjects} />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </main>
  );
}