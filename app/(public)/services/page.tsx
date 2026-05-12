"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";
import { services, faqs } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight } from "lucide-react";

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-[var(--color-surface)] rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-8 text-left flex items-center gap-6 hover:bg-[var(--color-surface)]/50 transition-colors"
      >
        <span className="text-5xl md:text-6xl font-display font-bold text-[var(--color-accent)]/30">
          {service.number}
        </span>
        <div className="flex-1">
          <h3 className="text-2xl font-display font-bold">{service.title}</h3>
          {!isExpanded && (
            <p className="text-[var(--color-text-secondary)] line-clamp-1 mt-1">
              {service.description}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-[var(--color-text-muted)]" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 border-t border-[var(--color-surface)]">
          <div className="pt-6 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[var(--color-text-secondary)] mb-6">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Inquire for this service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h4 className="font-medium mb-4">What&apos;s Included:</h4>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[var(--color-surface)]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex items-center justify-between gap-4"
      >
        <span className="font-medium text-lg">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)]" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[var(--color-text-secondary)]">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-accent)] tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              What I
            </motion.span>
            <br />
            <GradientText>Offer</GradientText>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            From cinematic editing to motion graphics, I provide comprehensive video
            production services tailored to your needs.
          </p>
        </motion.div>

        <div className="space-y-4 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Start</span>?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-medium text-lg hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}