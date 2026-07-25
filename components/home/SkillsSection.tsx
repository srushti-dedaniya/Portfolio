"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const categories = ["All", "Frontend", "Backend", "Mobile", "Tools"] as const;

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  tertiary: { bg: "bg-tertiary/10", text: "text-tertiary", border: "border-tertiary/20" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" },
  "on-surface-variant": { bg: "bg-on-surface-variant/10", text: "text-on-surface-variant", border: "border-on-surface-variant/20" },
  white: { bg: "bg-white/10", text: "text-white", border: "border-white/20" },
};

export default function SkillsSection() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Skills
            </span>
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">
            Technologies I <span className="text-primary">Work With</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all duration-300 border ${
                filter === cat
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-transparent text-on-surface-variant border-white/10 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filtered.map((skill) => {
            const colors = colorMap[skill.color] || colorMap["on-surface-variant"];
            return (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                layout
                className={`glass-pane rounded-2xl p-5 flex flex-col items-center gap-3 group hover:-translate-y-1 transition-all duration-300 border ${colors.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-2xl ${colors.text}`}>
                    {skill.icon}
                  </span>
                </div>
                <span className="font-label-md text-on-surface text-center">{skill.name}</span>
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div
                    className={`h-full rounded-full ${colors.bg.replace("/10", "")}`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
