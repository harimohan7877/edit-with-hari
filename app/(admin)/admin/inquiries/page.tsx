"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InquiryTable from "@/components/admin/InquiryTable";
import { Inquiry } from "@/types";

const mockInquiries: Inquiry[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    phone: "+1 234 567 8901",
    company: "TechCorp",
    projectType: "Commercial",
    budget: "50k-1l",
    deadline: "2024-04-15",
    message: "Hi, I need a commercial video for our product launch. Looking for someone with experience in brand films and dynamic editing.",
    status: "new",
    createdAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@startupxyz.com",
    phone: "+1 234 567 8902",
    company: "StartupXYZ",
    projectType: "Cinematic",
    budget: "above-1l",
    deadline: "2024-05-01",
    message: "We are looking for a cinematic video that showcases our startup journey. The video should be emotional and inspiring.",
    status: "read",
    createdAt: new Date("2024-03-14"),
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@brandco.com",
    phone: "+1 234 567 8903",
    company: "BrandCo",
    projectType: "Social Media",
    budget: "25k-50k",
    message: "Need a series of social media content for our Instagram and TikTok. Fast-paced, trendy edits with trending audio.",
    status: "replied",
    createdAt: new Date("2024-03-13"),
  },
  {
    id: "4",
    name: "Alex Thompson",
    email: "alex@creator.com",
    projectType: "Music Video",
    budget: "50k-1l",
    message: "Looking for a music video editor for my upcoming single. The genre is R&B and I want something artistic and cinematic.",
    status: "new",
    createdAt: new Date("2024-03-12"),
  },
  {
    id: "5",
    name: "John Martinez",
    email: "john@agency.com",
    phone: "+1 234 567 8905",
    company: "Creative Agency",
    projectType: "Documentary",
    budget: "above-1l",
    deadline: "2024-06-01",
    message: "We need a documentary editor for our new project about climate change. Long-form storytelling experience preferred.",
    status: "read",
    createdAt: new Date("2024-03-11"),
  },
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setInquiries(mockInquiries);
      setIsLoading(false);
    };

    fetchInquiries();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    setInquiries((prev) =>
      prev.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: status as Inquiry["status"] } : inquiry
      )
    );

    try {
      await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const newCount = inquiries.filter((i) => i.status === "new").length;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold">Inquiries</h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            {newCount > 0 ? `${newCount} new inquiry${newCount > 1 ? "s" : ""} awaiting response` : "All caught up!"}
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <InquiryTable inquiries={inquiries} onStatusChange={handleStatusChange} />
        </motion.div>
      )}
    </div>
  );
}