"use client";

import { motion } from "framer-motion";
import { FolderOpen, Eye, MessageSquare, Star, TrendingUp, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

function StatCard({ title, value, icon, change, changeType = "neutral" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
          {icon}
        </div>
        {change && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              changeType === "positive" && "bg-[var(--color-success)]/10 text-[var(--color-success)]",
              changeType === "negative" && "bg-[var(--color-error)]/10 text-[var(--color-error)]",
              changeType === "neutral" && "bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)]"
            )}
          >
            {change}
          </span>
        )}
      </div>
      <p className="text-3xl font-display font-bold mb-1">{value}</p>
      <p className="text-sm text-[var(--color-text-muted)]">{title}</p>
    </motion.div>
  );
}

interface StatsCardsProps {
  stats: {
    projects: number;
    views: number;
    inquiries: number;
    testimonials: number;
  };
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Projects"
        value={stats.projects}
        icon={<FolderOpen className="w-6 h-6 text-[var(--color-accent)]" />}
        change="+3 this month"
        changeType="positive"
      />
      <StatCard
        title="Total Views"
        value={stats.views.toLocaleString()}
        icon={<Eye className="w-6 h-6 text-[var(--color-accent)]" />}
        change="+12%"
        changeType="positive"
      />
      <StatCard
        title="New Inquiries"
        value={stats.inquiries}
        icon={<MessageSquare className="w-6 h-6 text-[var(--color-accent)]" />}
        change="+5 this week"
        changeType="positive"
      />
      <StatCard
        title="Testimonials"
        value={stats.testimonials}
        icon={<Star className="w-6 h-6 text-[var(--color-accent)]" />}
      />
    </div>
  );
}