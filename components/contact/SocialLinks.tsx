"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function SocialLinks() {
  return (
    <section className="mt-24">
      <h2 className="font-display-lg text-headline-md text-center mb-12 text-on-surface">
        Alternate <span className="text-tertiary">Orbits</span>
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            variants={fadeInUp}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-2xl group flex flex-col items-center justify-center gap-4 text-center liquid-transition hover:-translate-y-2 hover:border-primary/40"
          >
            <div
              className={`w-12 h-12 rounded-full bg-${link.color}/10 flex items-center justify-center group-hover:bg-${link.color}/20 transition-colors`}
            >
              <span
                className={`material-symbols-outlined text-${link.color}`}
              >
                {link.icon}
              </span>
            </div>
            <span className="font-label-md text-on-surface">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
