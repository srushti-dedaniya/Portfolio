"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop pt-32">
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
          FULL-STACK DEVELOPER
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
          with clean code and creative thinking.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="solar-button px-10 py-5 rounded-full font-headline-md text-headline-md text-white inline-flex items-center gap-3 group">
            Explore My Work
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">
              arrow_outward
            </span>
          </a>
          <a
            href="/resume/Srushti_Dedaniya_Resume.pdf"
            download
            className="px-10 py-5 rounded-full font-headline-md text-headline-md text-on-surface inline-flex items-center gap-3 border border-white/10 hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            Download Resume
            <span className="material-symbols-outlined">download</span>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <div className="marquee-track whitespace-nowrap py-4">
          <span className="font-label-md text-primary/40 uppercase tracking-[0.15em]">
            {"Full-Stack Developer \u00A0\u00A0\u00A0/ \u00A0\u00A0\u00A0UI/UX Designer \u00A0\u00A0\u00A0/ \u00A0\u00A0\u00A0Problem Solver \u00A0\u00A0\u00A0/ \u00A0\u00A0\u00A0".repeat(4)}
          </span>
          <span className="font-label-md text-primary/40 uppercase tracking-[0.15em]">
            {"Full-Stack Developer \u00A0\u00A0\u00A0/ \u00A0\u00A0\u00A0UI/UX Designer \u00A0\u00A0\u00A0/ \u00A0\u00A0\u00A0Problem Solver \u00A0\u00A0\u00A0/ \u00A0\u00A0\u00A0".repeat(4)}
          </span>
        </div>
      </div>
    </section>
  );
}
