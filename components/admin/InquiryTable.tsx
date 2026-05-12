"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Check,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Building,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { Inquiry } from "@/types";
import { formatDate } from "@/lib/utils";

interface InquiryTableProps {
  inquiries: Inquiry[];
  onStatusChange: (id: string, status: string) => Promise<void>;
}

export default function InquiryTable({ inquiries, onStatusChange }: InquiryTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const handleStatusChange = async (id: string, status: string) => {
    setLoading(id);
    try {
      await onStatusChange(id, status);
    } finally {
      setLoading(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-[var(--color-accent)]/20 text-[var(--color-accent)]";
      case "read":
        return "bg-[var(--color-warning)]/20 text-[var(--color-warning)]";
      case "replied":
        return "bg-[var(--color-success)]/20 text-[var(--color-success)]";
      case "closed":
        return "bg-[var(--color-text-muted)]/20 text-[var(--color-text-muted)]";
      default:
        return "bg-[var(--color-surface)] text-[var(--color-text-secondary)]";
    }
  };

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-[var(--color-surface-elevated)]">
            <tr className="text-left text-sm text-[var(--color-text-muted)]">
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Project Type</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <>
                <tr
                  key={inquiry.id}
                  className="border-b border-[var(--color-surface-elevated)] hover:bg-[var(--color-surface-elevated)]/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{inquiry.name}</td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                    {inquiry.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs bg-[var(--color-surface-elevated)] rounded-full">
                      {inquiry.projectType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={inquiry.status}
                      onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                      disabled={loading === inquiry.id}
                      className={`px-3 py-1 text-xs rounded-full border-0 cursor-pointer ${getStatusColor(inquiry.status)}`}
                    >
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">
                    {formatDate(new Date(inquiry.createdAt))}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
                      className="p-2 hover:bg-[var(--color-surface-elevated)] rounded-lg transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedId === inquiry.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </td>
                </tr>

                {expandedId === inquiry.id && (
                  <tr>
                    <td colSpan={6} className="px-6 py-6 bg-[var(--color-bg)]">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          {inquiry.phone && (
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-[var(--color-text-muted)]" />
                              <span className="text-sm">{inquiry.phone}</span>
                            </div>
                          )}
                          {inquiry.company && (
                            <div className="flex items-center gap-3">
                              <Building className="w-4 h-4 text-[var(--color-text-muted)]" />
                              <span className="text-sm">{inquiry.company}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-3">
                            <DollarSign className="w-4 h-4 text-[var(--color-text-muted)]" />
                            <span className="text-sm">{inquiry.budget}</span>
                          </div>
                          {inquiry.deadline && (
                            <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-[var(--color-text-muted)]" />
                              <span className="text-sm">{inquiry.deadline}</span>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-[var(--color-surface)] rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="w-4 h-4 text-[var(--color-accent)]" />
                            <span className="text-sm font-medium">Message</span>
                          </div>
                          <p className="text-[var(--color-text-secondary)]">{inquiry.message}</p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={`mailto:${inquiry.email}?subject=Re: Your Project Inquiry`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            Reply via Email
                          </a>
                        </div>
                      </motion.div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>

        {inquiries.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-[var(--color-text-muted)]">No inquiries yet</p>
          </div>
        )}
      </div>
    </div>
  );
}