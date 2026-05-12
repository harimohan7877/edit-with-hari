"use client";

import { motion } from "framer-motion";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.loader}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>

        <motion.p
          className="mt-8 text-sm text-[var(--color-text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </main>
  );
}