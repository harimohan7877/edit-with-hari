"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plus, ArrowRight, Eye, MessageSquare, Clock } from "lucide-react";
import StatsCards from "@/components/admin/StatsCards";
import { formatDate } from "@/lib/utils";

const stats = {
  projects: 12,
  views: 45800,
  inquiries: 8,
  testimonials: 5,
};

const recentInquiries = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    projectType: "Commercial",
    status: "new",
    createdAt: new Date("2024-03-15"),
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@startupxyz.com",
    projectType: "Cinematic",
    status: "read",
    createdAt: new Date("2024-03-14"),
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@brandco.com",
    projectType: "Social Media",
    status: "replied",
    createdAt: new Date("2024-03-13"),
  },
  {
    id: "4",
    name: "Alex Thompson",
    email: "alex@creator.com",
    projectType: "Music Video",
    status: "new",
    createdAt: new Date("2024-03-12"),
  },
  {
    id: "5",
    name: "John Martinez",
    email: "john@agency.com",
    projectType: "Documentary",
    status: "read",
    createdAt: new Date("2024-03-11"),
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold">Dashboard</h1>
          <p className="text-[var(--color-text-muted)] mt-1">Welcome back, Hari</p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      <StatsCards stats={stats} />

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold">Recent Inquiries</h2>
            <Link
              href="/admin/inquiries"
              className="text-sm text-[var(--color-accent)] hover:underline flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {recentInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="flex items-center justify-between p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-surface-elevated)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold">
                    {inquiry.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{inquiry.name}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {inquiry.projectType}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      inquiry.status === "new"
                        ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                        : inquiry.status === "read"
                        ? "bg-[var(--color-warning)]/20 text-[var(--color-warning)]"
                        : "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                    }`}
                  >
                    {inquiry.status}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {formatDate(inquiry.createdAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-6"
        >
          <h2 className="text-xl font-display font-bold mb-6">Quick Actions</h2>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/admin/projects/new"
              className="p-6 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-xl hover:border-[var(--color-accent)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                <Plus className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="font-medium mb-1">Add Project</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Create a new portfolio entry
              </p>
            </Link>

            <Link
              href="/admin/inquiries"
              className="p-6 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-xl hover:border-[var(--color-accent)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-success)]/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-[var(--color-success)]" />
              </div>
              <h3 className="font-medium mb-1">View Inquiries</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Check client messages
              </p>
            </Link>

            <Link
              href="/admin/testimonials"
              className="p-6 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-xl hover:border-[var(--color-accent)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-secondary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-secondary)]/20 transition-colors">
                <Eye className="w-6 h-6 text-[var(--color-accent-secondary)]" />
              </div>
              <h3 className="font-medium mb-1">Manage Reviews</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Update client testimonials
              </p>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="p-6 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-xl hover:border-[var(--color-accent)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-warning)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-warning)]/20 transition-colors">
                <Eye className="w-6 h-6 text-[var(--color-warning)]" />
              </div>
              <h3 className="font-medium mb-1">View Site</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Preview your portfolio
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}