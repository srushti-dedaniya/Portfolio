"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "5", label: "Awards Won" },
];

const colorMap: Record<string, string> = {
  primary: "text-primary",
  tertiary: "text-tertiary",
  secondary: "text-secondary",
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Achievements
            </span>
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">
            Things I Am <span className="text-primary">Proud Of</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-pane rounded-2xl p-6 text-center border border-white/5">
              <span className="font-headline-lg text-headline-lg text-primary block mb-1">
                {stat.value}
              </span>
              <span className="text-on-surface-variant text-label-sm font-label-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={fadeInUp}
              className="glass-pane rounded-[24px] p-8 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-500 border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className={`material-symbols-outlined ${colorMap[achievement.color] || "text-primary"}`}>
                    {achievement.icon}
                  </span>
                </div>
                <span className="font-label-sm text-on-surface-variant">{achievement.date}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {achievement.title}
              </h3>
              <p className="text-on-surface-variant text-body-md">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
