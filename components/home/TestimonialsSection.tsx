"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientAvatar: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-accent)] tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Client <span className="text-gradient">Reviews</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl h-full">
                <Quote className="w-10 h-10 text-[var(--color-accent)]/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[var(--color-accent)] fill-current"
                    />
                  ))}
                </div>

                <p className="text-[var(--color-text-secondary)] mb-6 line-clamp-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-lg font-bold text-[var(--color-accent)]">
                    {testimonial.clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-text)]">
                      {testimonial.clientName}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {testimonial.clientRole}, {testimonial.clientCompany}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}