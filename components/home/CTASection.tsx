"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden noise-texture">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-bg)] to-[var(--color-accent-secondary)]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Ready to Tell Your <span className="text-gradient">Story</span>?
          </h2>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
            Let&apos;s transform your vision into compelling visual content.
            From concept to delivery, I&apos;ll guide you through every step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-medium text-lg"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>

            <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm">hari@editwithhari.com</span>
              </div>
              <span className="text-[var(--color-surface-elevated)]">|</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">24hr Response</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-[var(--color-text-muted)]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
              Available Now
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]" />
              Flexible Hours
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              Remote Ready
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}