import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  deadline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const projectSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  slug: z.string().optional(),
  description: z.string().min(20, "Description must be at least 20 characters"),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  client: z.string().min(1, "Client name is required"),
  year: z.number().min(2000).max(2030),
  duration: z.string().min(1, "Duration is required"),
  videoUrl: z.string().url("Invalid video URL"),
  thumbnailUrl: z.string().url("Invalid thumbnail URL"),
  images: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

export const testimonialSchema = z.object({
  clientName: z.string().min(2, "Client name is required"),
  clientRole: z.string().min(2, "Client role is required"),
  clientCompany: z.string().min(2, "Client company is required"),
  clientAvatar: z.string().url("Invalid avatar URL"),
  content: z.string().min(20, "Testimonial must be at least 20 characters"),
  rating: z.number().min(1).max(5),
  projectId: z.string().optional(),
  published: z.boolean().default(false),
});

export const inquiryStatusSchema = z.object({
  status: z.enum(["new", "read", "replied", "closed"]),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ProjectFormData = z.infer<typeof projectSchema>;
export type TestimonialFormData = z.infer<typeof testimonialSchema>;