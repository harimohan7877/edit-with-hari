"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { services } from "@/constants";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden noise-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-secondary)] to-[var(--color-bg)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-accent)] tracking-wider uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative border border-[var(--color-surface)] rounded-2xl p-8 transition-all duration-300",
                activeIndex === index
                  ? "bg-[var(--color-surface)] border-[var(--color-accent)]/50"
                  : "hover:bg-[var(--color-surface)]/50"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl md:text-6xl font-display font-bold text-[var(--color-accent)]/20">
                  {service.number}
                </span>

                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {service.title}
                  </h3>

                  <motion.p
                    initial={false}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-[var(--color-text-secondary)] mb-4 overflow-hidden"
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mb-6">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="/contact"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === index ? 1 : 0 }}
                      className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium hover:underline"
                    >
                      Inquire for this service
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}