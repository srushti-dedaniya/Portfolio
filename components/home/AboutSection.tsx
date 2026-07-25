"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              About Me
            </span>
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">
            The Person Behind{" "}
            <span className="text-primary">the Code</span>
          </h2>
          <div className="flex flex-col gap-4 text-on-surface-variant text-body-lg leading-relaxed">
            <p>
              I am a full-stack developer who loves building things that make a
              difference. I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <p>
              When I am not coding, you will find me exploring new technologies,
              contributing to open-source projects, or thinking about the next
              thing I can build. I believe in writing clean code and creating
              designs that people actually enjoy using.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-[32px] glass-pane border border-primary/20 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    person
                  </span>
                </div>
                <p className="font-headline-md text-on-surface mb-2">
                  Srushti Dedaniya
                </p>
                <p className="text-on-surface-variant text-label-sm font-label-sm">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-primary">
                code
              </span>
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-tertiary">
                auto_awesome
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
