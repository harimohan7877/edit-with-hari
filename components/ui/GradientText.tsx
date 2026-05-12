"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  direction?: "left" | "right" | "up" | "down";
}

export default function GradientText({
  children,
  className,
  from = "var(--color-accent)",
  to = "var(--color-accent-secondary)",
  direction = "right",
}: GradientTextProps) {
  const gradientMap = {
    left: `linear-gradient(90deg, ${from}, ${to})`,
    right: `linear-gradient(90deg, ${from}, ${to})`,
    up: `linear-gradient(180deg, ${from}, ${to})`,
    down: `linear-gradient(0deg, ${from}, ${to})`,
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: gradientMap[direction],
      }}
    >
      {children}
    </span>
  );
}