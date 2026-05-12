"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "@/components/ui/GradientText";
import { skills, tools } from "@/constants";
import { useRef, useEffect, useState } from "react";

function AnimatedSkillBar({ skill }: { skill: { name: string; level: number } }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(skill.level);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-[var(--color-text-muted)]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-[var(--color-surface)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Hari - Video Editor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[var(--color-accent)] text-[var(--color-bg)] p-6 rounded-2xl"
            >
              <p className="text-4xl font-display font-bold">5+</p>
              <p className="text-sm">Years Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-medium text-[var(--color-accent)] tracking-wider uppercase mb-4">
              About Me
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                The Story Behind
              </motion.span>
              <br />
              <GradientText>Edit With Hari</GradientText>
            </h1>

            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                Hello! I&apos;m Hari, a passionate video editor with over 5 years of experience
                transforming raw footage into compelling visual stories. My journey began
                with a simple curiosity about how films and videos could evoke emotions and
                create lasting impacts.
              </p>
              <p>
                Today, I work with brands, creators, and individuals to bring their visions
                to life. Whether it&apos;s a cinematic brand film, a fast-paced commercial, or an
                intimate wedding story, I approach each project with the same dedication to
                craft and storytelling excellence.
              </p>
              <p>
                Based in India, I work remotely with clients worldwide. When I&apos;m not editing,
                you&apos;ll find me exploring new films, experimenting with visual effects, or
                perfecting my color grading skills.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            My <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Tools I <span className="text-gradient">Use</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-full text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            My <span className="text-gradient">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, goals, and requirements" },
              { step: "02", title: "Pre-Production", desc: "Planning the edit structure and style" },
              { step: "03", title: "Editing", desc: "Crafting the story with precision and creativity" },
              { step: "04", title: "Delivery", desc: "Final polish, color grading, and delivery" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-[var(--color-surface)] border border-[var(--color-surface-elevated)] rounded-2xl"
              >
                <span className="text-5xl font-display font-bold text-[var(--color-accent)]/20 absolute top-4 right-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}