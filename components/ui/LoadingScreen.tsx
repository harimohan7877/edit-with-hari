"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  brandName?: string;
  onComplete?: () => void;
}

export default function LoadingScreen({
  brandName = "Edit With Hari",
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(false);
            setTimeout(() => {
              onComplete?.();
            }, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[var(--color-bg)] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {brandName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-block"
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.h1>

            <div className="mt-12 w-64 md:w-80 mx-auto">
              <div className="h-1 bg-[var(--color-surface)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--color-accent)]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="mt-4 text-sm text-[var(--color-text-muted)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {progress < 100 ? "Loading experience..." : "Welcome!"}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}