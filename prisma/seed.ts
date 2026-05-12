import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  const hashedPassword = await hash("admin123", 12);

  const admin = await prisma.admin.upsert({
    where: { email: "admin@editwithhari.com" },
    update: {},
    create: {
      email: "admin@editwithhari.com",
      password: hashedPassword,
      name: "Hari",
    },
  });

  console.log("Created admin:", admin.email);

  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      showreelUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      heroTitle: "Crafting Stories Through Motion",
      heroSubtitle: "Professional video editor transforming visions into cinematic experiences.",
      email: "hari@editwithhari.com",
      phone: "+91 98765 43210",
      instagram: "https://instagram.com/editwithhari",
      youtube: "https://youtube.com/@editwithhari",
      twitter: "https://twitter.com/editwithhari",
      metaTitle: "Edit With Hari — Video Editor Portfolio",
      metaDescription: "Professional video editor crafting cinematic stories through motion. Available for commercial, cinematic, and social media projects.",
    },
  });

  console.log("Created site settings");

  const categories = [
    { name: "Cinematic", slug: "cinematic", color: "#00F5FF", icon: "film" },
    { name: "Commercial", slug: "commercial", color: "#7C3AED", icon: "tv" },
    { name: "Social Media", slug: "social", color: "#F59E0B", icon: "smartphone" },
    { name: "Documentary", slug: "documentary", color: "#10B981", icon: "camera" },
    { name: "Wedding", slug: "wedding", color: "#EC4899", icon: "heart" },
    { name: "Motion Graphics", slug: "motion", color: "#EF4444", icon: "sparkles" },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log("Created categories");

  const projects = [
    {
      title: "Cinematic Brand Film",
      slug: "cinematic-brand-film",
      description: "This brand film for TechCorp showcases their cutting-edge technology through stunning visuals and a compelling narrative. We worked closely with their marketing team to create a piece that not only looked incredible but also effectively communicated their brand values and innovation.",
      shortDescription: "A visually stunning brand film showcasing innovation and technology.",
      category: "Cinematic",
      client: "TechCorp",
      year: 2024,
      duration: "3:45",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80"],
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
      featured: true,
      published: true,
      views: 12500,
    },
    {
      title: "Music Video Production",
      slug: "music-video",
      description: "A dynamic music video that pushes creative boundaries. Working with the artist, we developed a visual style that perfectly complements the music while creating an engaging viewing experience.",
      shortDescription: "Dynamic music video with creative editing and visual effects.",
      category: "Music Video",
      client: "Artist Name",
      year: 2024,
      duration: "4:20",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
      images: [],
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      featured: true,
      published: true,
      views: 8900,
    },
    {
      title: "Commercial Advertisement",
      slug: "commercial-ad",
      description: "A high-energy commercial designed to capture attention and drive engagement. The 30-second spot required careful planning to deliver maximum impact in minimum time.",
      shortDescription: "High-energy commercial for a major retail brand.",
      category: "Commercial",
      client: "Brand X",
      year: 2023,
      duration: "0:30",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      images: [],
      tools: ["Adobe Premiere Pro", "After Effects"],
      featured: false,
      published: true,
      views: 15000,
    },
    {
      title: "Documentary Short",
      slug: "documentary-short",
      description: "Award-winning documentary about sustainable living. This project involved extensive research, interview capturing, and careful editing to create a compelling narrative.",
      shortDescription: "Award-winning documentary about sustainable living.",
      category: "Documentary",
      client: "Studio Y",
      year: 2023,
      duration: "12:30",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80",
      images: [],
      tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Audition"],
      featured: false,
      published: true,
      views: 7800,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
  }

  console.log("Created projects");

  const testimonials = [
    {
      clientName: "Sarah Johnson",
      clientRole: "Creative Director",
      clientCompany: "TechCorp",
      clientAvatar: "",
      content: "Hari transformed our raw footage into a cinematic masterpiece. His attention to detail and storytelling ability exceeded our expectations. Highly recommended!",
      rating: 5,
      published: true,
    },
    {
      clientName: "Michael Chen",
      clientRole: "CEO",
      clientCompany: "StartupXYZ",
      clientAvatar: "",
      content: "The video Hari created for our product launch generated incredible engagement. Professional, creative, and delivered ahead of schedule.",
      rating: 5,
      published: true,
    },
    {
      clientName: "Emily Davis",
      clientRole: "Marketing Head",
      clientCompany: "BrandCo",
      clientAvatar: "",
      content: "Working with Hari was a seamless experience. He understood our vision perfectly and delivered content that truly resonates with our audience.",
      rating: 5,
      published: true,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }

  console.log("Created testimonials");

  const inquiries = [
    {
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      phone: "+1 234 567 8901",
      company: "TechCorp",
      projectType: "Commercial",
      budget: "50k-1l",
      deadline: "2024-04-15",
      message: "Hi, I need a commercial video for our product launch. Looking for someone with experience in brand films and dynamic editing.",
      status: "new",
    },
    {
      name: "Michael Chen",
      email: "michael@startupxyz.com",
      phone: "+1 234 567 8902",
      company: "StartupXYZ",
      projectType: "Cinematic",
      budget: "above-1l",
      deadline: "2024-05-01",
      message: "We are looking for a cinematic video that showcases our startup journey. The video should be emotional and inspiring.",
      status: "read",
    },
  ];

  for (const inquiry of inquiries) {
    await prisma.inquiry.create({
      data: inquiry,
    });
  }

  console.log("Created inquiries");

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });