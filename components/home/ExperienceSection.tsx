"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const colorMap = {
  primary: { dot: "bg-primary", shadow: "shadow-[0_0_15px_#ffc174]", border: "border-primary/20", text: "text-primary" },
  tertiary: { dot: "bg-tertiary", shadow: "shadow-[0_0_15px_#f5c80c]", border: "border-tertiary/20", text: "text-tertiary" },
  secondary: { dot: "bg-secondary", shadow: "shadow-[0_0_15px_#ffb3ad]", border: "border-secondary/20", text: "text-secondary" },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
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
              Journey
            </span>
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">
            My <span className="text-primary">Experience</span>
          </h2>
        </motion.div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tertiary to-secondary" />

        {timeline.map((event, index) => {
          const colors = colorMap[event.color];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.year}
              className={`relative flex items-center mb-16 ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } pl-12 md:pl-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`glass-pane p-8 rounded-3xl max-w-md border ${colors.border} w-full ${
                  isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                }`}
              >
                <span className={`font-label-md ${colors.text} mb-2 block`}>
                  {event.year} — {event.subtitle}
                </span>
                <h3 className="font-headline-md text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-on-surface-variant text-body-md">
                  {event.description}
                </p>
              </div>

              <div
                className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 ${colors.dot} rounded-full ${colors.shadow} z-10`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
