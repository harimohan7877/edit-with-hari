export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  client: string;
  year: number;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  images: string[];
  tools: string[];
  featured: boolean;
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientAvatar: string;
  content: string;
  rating: number;
  projectId?: string;
  published: boolean;
  createdAt: Date;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  deadline?: string;
  message: string;
  status: "new" | "read" | "replied" | "closed";
  createdAt: Date;
}

export interface Admin {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface SiteSettings {
  id: string;
  showreelUrl: string;
  heroTitle: string;
  heroSubtitle: string;
  email: string;
  phone: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  deadline?: string;
  message: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  includes: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}