"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Only split if children is a string
  if (typeof children !== "string") {
    return (
      <span ref={ref} className={className}>
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration, delay }}
        >
          {children}
        </motion.span>
      </span>
    );
  }

  const words = children.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration,
              delay: delay + i * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
            {i !== words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}