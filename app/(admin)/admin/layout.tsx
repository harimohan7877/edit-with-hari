"use client";

import { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <AdminSidebar />
      <main className="lg:ml-64 p-6">{children}</main>
    </div>
  );
}