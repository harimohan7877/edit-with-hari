export const siteConfig = {
  name: "Edit With Hari",
  title: "Edit With Hari — Video Editor Portfolio",
  description:
    "Professional video editor crafting cinematic stories through motion. Available for commercial, cinematic, and social media projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  accentColor: "#00F5FF",
  secondAccent: "#7C3AED",
  email: "hari@editwithhari.com",
  phone: "+91 98765 43210",
  socials: {
    instagram: "https://instagram.com/editwithhari",
    youtube: "https://youtube.com/@editwithhari",
    twitter: "https://twitter.com/editwithhari",
    linkedin: "https://linkedin.com/in/editwithhari",
  },
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: "01",
    title: "Cinematic Editing",
    description:
      "Transform your raw footage into a cinematic masterpiece. I bring stories to life with precision cuts, seamless transitions, and emotional depth that resonates with audiences.",
    includes: [
      "Narrative flow optimization",
      "Scene transitions & pacing",
      "Sound design integration",
      "Multi-cam editing",
      "Project organization",
    ],
  },
  {
    number: "02",
    title: "Color Grading",
    description:
      "Set the mood and tone with professional color correction and grading. From subtle enhancements to dramatic color transformations that define your visual identity.",
    includes: [
      "Color correction & balance",
      "Creative color grading",
      "Consistent look development",
      "HDR grading",
      "Before/after delivery",
    ],
  },
  {
    number: "03",
    title: "Motion Graphics",
    description:
      "Add dynamic visual elements that elevate your content. Titles, lower thirds, animated graphics, and VFX that make your videos stand out.",
    includes: [
      "Custom title animations",
      "Lower thirds & overlays",
      "Logo animations",
      "VFX compositing",
      "Kinetic typography",
    ],
  },
  {
    number: "04",
    title: "Social Media Content",
    description:
      "Platform-optimized content that stops the scroll. Short-form, long-form, reels, shorts — whatever your audience craves, I deliver it.",
    includes: [
      "Vertical/horizontal formats",
      "Trending audio integration",
      "Engagement optimization",
      "Multiple platform exports",
      "Engagement analytics review",
    ],
  },
  {
    number: "05",
    title: "Documentary Editing",
    description:
      "Complex narratives, multiple interviews, B-roll, and archival footage — structured into compelling documentary experiences.",
    includes: [
      "Archival footage research",
      "Interview structuring",
      "Narrative arc development",
      "Music licensing guidance",
      "Multiple revision rounds",
    ],
  },
  {
    number: "06",
    title: "Brand Content",
    description:
      "Consistent brand storytelling that builds recognition. Product videos, brand films, advertisements that convert viewers into customers.",
    includes: [
      "Brand guidelines adherence",
      "Product showcases",
      "Testimonial editing",
      "Campaign consistency",
      "Brand asset library",
    ],
  },
];

export const categories = [
  { id: "cinematic", name: "Cinematic", color: "#00F5FF" },
  { id: "commercial", name: "Commercial", color: "#7C3AED" },
  { id: "social", name: "Social Media", color: "#F59E0B" },
  { id: "documentary", name: "Documentary", color: "#10B981" },
  { id: "wedding", name: "Wedding", color: "#EC4899" },
  { id: "motion", name: "Motion Graphics", color: "#EF4444" },
];

export const budgetRanges = [
  { label: "Under ₹25,000", value: "under-25k" },
  { label: "₹25,000 - ₹50,000", value: "25k-50k" },
  { label: "₹50,000 - ₹1,00,000", value: "50k-1l" },
  { label: "₹1,00,000+", value: "above-1l" },
  { label: "Let's discuss", value: "discuss" },
];

export const projectTypes = [
  { label: "Cinematic", value: "cinematic" },
  { label: "Commercial", value: "commercial" },
  { label: "Social Media", value: "social" },
  { label: "Documentary", value: "documentary" },
  { label: "Wedding", value: "wedding" },
  { label: "Music Video", value: "music-video" },
  { label: "Other", value: "other" },
];

export const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 85 },
  { name: "DaVinci Resolve", level: 90 },
  { name: "Final Cut Pro", level: 75 },
  { name: "Cinema 4D", level: 60 },
  { name: "Blender", level: 50 },
];

export const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "Illustrator",
  "Cinema 4D",
  "Blender",
  "Audition",
  "Figma",
  "Frame.io",
  "Google Drive",
  "Notion",
];

export const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer:
      "Standard projects take 7-14 days from receiving all assets. Rush delivery (3-5 days) is available for a 50% rush fee. Complex projects may require additional time.",
  },
  {
    question: "Do you include music and sound effects?",
    answer:
      "I provide royalty-free music recommendations and sound effects. Custom music composition or licensed tracks can be arranged at additional cost.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Standard projects include 2 rounds of revisions. Additional revision rounds can be purchased. Minor tweaks (color, text) are often included at no extra charge.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "Deliverables include MP4 (H.264/H.265), ProRes for high-quality archive, and platform-specific formats (YouTube, Instagram, etc.). Raw project files can be provided upon request.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, I routinely sign NDAs for confidential projects. Just send the agreement and I'll review and sign promptly.",
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Awards Won" },
];