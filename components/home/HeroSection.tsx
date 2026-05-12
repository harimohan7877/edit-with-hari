"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowDown } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import ShowreelModal from "./ShowreelModal";

export default function HeroSection() {
  const [showShowreel, setShowShowreel] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg-secondary)] to-[var(--color-bg)]" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-secondary)]/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-surface-elevated)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm text-[var(--color-text-secondary)]">Available for Projects</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9]">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block text-[var(--color-text)]"
                >
                  Crafting Stories
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="block"
                >
                  <GradientText>Through Motion</GradientText>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg"
              >
                Transforming raw footage into cinematic experiences. From commercials
                to documentaries, I bring your vision to life.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setShowShowreel(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-medium hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Watch Showreel
                <span className="w-0 group-hover:w-8 transition-all duration-300 overflow-hidden">
                  →
                </span>
              </button>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-surface-elevated)] rounded-full font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-8 pt-8"
            >
              <div>
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">150+</p>
                <p className="text-sm text-[var(--color-text-muted)]">Projects Done</p>
              </div>
              <div className="w-px h-12 bg-[var(--color-surface)]" />
              <div>
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">50+</p>
                <p className="text-sm text-[var(--color-text-muted)]">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-[var(--color-surface)]" />
              <div>
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">5+</p>
                <p className="text-sm text-[var(--color-text-muted)]">Years Exp</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-secondary)]/20 animate-tilt" />
              <div className="absolute inset-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <Play className="w-10 h-10 text-[var(--color-accent)]" fill="currentColor" />
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Watch Showreel</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)] flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
          </motion.div>
        </motion.div>
      </section>

      <ShowreelModal
        isOpen={showShowreel}
        onClose={() => setShowShowreel(false)}
      />
    </>
  );
}