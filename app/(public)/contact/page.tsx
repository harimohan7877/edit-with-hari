"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GradientText from "@/components/ui/GradientText";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { projectTypes, budgetRanges } from "@/constants";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Send,
  Check,
  Loader2,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              Let&apos;s Create
            </motion.span>
            <br />
            <GradientText>Something Amazing</GradientText>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s talk about how we can work together
            to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                I typically respond within 24 hours. For urgent projects,
                feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-xl hover:border-[var(--color-accent)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Email</p>
                  <p className="font-medium">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-xl hover:border-[var(--color-accent)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Phone</p>
                  <p className="font-medium">{siteConfig.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Response Time</p>
                  <p className="font-medium">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--color-surface)]">
              <p className="text-sm text-[var(--color-text-muted)] mb-4">Follow me</p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">Send a Message</h3>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 rounded-xl flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-[var(--color-success)]" />
                    <p className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 rounded-xl flex items-center gap-3"
                  >
                    <span className="w-5 h-5 text-[var(--color-error)]">!</span>
                    <p className="text-sm">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      className={cn(
                        "w-full px-4 py-3 bg-[var(--color-bg)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
                        errors.name ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[var(--color-error)]">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={cn(
                        "w-full px-4 py-3 bg-[var(--color-bg)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
                        errors.email ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[var(--color-error)]">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company/Brand</label>
                    <input
                      {...register("company")}
                      className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type *</label>
                    <select
                      {...register("projectType")}
                      className={cn(
                        "w-full px-4 py-3 bg-[var(--color-bg)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
                        errors.projectType ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
                      )}
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-[var(--color-error)]">{errors.projectType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range *</label>
                    <select
                      {...register("budget")}
                      className={cn(
                        "w-full px-4 py-3 bg-[var(--color-bg)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors",
                        errors.budget ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
                      )}
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-[var(--color-error)]">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Deadline</label>
                  <input
                    type="date"
                    {...register("deadline")}
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-surface-elevated)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell me about your project *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 bg-[var(--color-bg)] border rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none",
                      errors.message ? "border-[var(--color-error)]" : "border-[var(--color-surface-elevated)]"
                    )}
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-[var(--color-error)]">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}