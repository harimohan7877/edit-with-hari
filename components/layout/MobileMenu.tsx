"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { navLinks } from "@/constants";
import { siteConfig } from "@/constants";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-[var(--color-bg)]"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-[var(--color-text)]"
        aria-label="Close menu"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex flex-col items-center justify-center h-full gap-8">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 mt-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
          <span className="text-sm text-[var(--color-text-secondary)]">Open for work</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 mt-8"
        >
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]">
            Instagram
          </a>
          <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]">
            YouTube
          </a>
          <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]">
            Twitter
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}