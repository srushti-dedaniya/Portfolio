"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center max-w-4xl text-center"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        variants={fadeInUp}
        className="font-label-md text-label-md text-primary tracking-[0.2em] mb-6 animate-pulse"
      >
        CREATIVE ARCHITECT
      </motion.span>

      <motion.h1
        variants={fadeInUp}
        className="font-display-lg text-display-lg text-on-surface leading-[0.9] mb-8 select-none"
      >
        SRUSHTI <br /> DEDANIYA
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 opacity-80"
      >
        Designing experiences. Building software. Solving real-world problems
        through the lens of digital craftsmanship.
      </motion.p>

      <motion.div variants={fadeInUp}>
        <a href="/projects" className="solar-button px-10 py-5 rounded-full font-headline-md text-headline-md text-white inline-flex items-center gap-3 group">
          Explore My World
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
}
