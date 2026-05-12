"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterTab {
  id: string;
  label: string;
  count: number;
}

interface ProjectFilterProps {
  filters: FilterTab[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

export default function ProjectFilter({
  filters,
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
            activeFilter === filter.id
              ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
              : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-surface-elevated)]"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
          <span className="ml-2 text-xs opacity-60">({filter.count})</span>
        </motion.button>
      ))}
    </div>
  );
}