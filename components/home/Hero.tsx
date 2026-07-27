"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-24"
    >
      <motion.div
        className="max-w-container-max mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <span className="text-accent font-label text-label-lg uppercase tracking-widest">
                Full-Stack Developer
              </span>
              <h1 className="font-display text-display-xl md:text-[5.5rem] leading-[1.05] tracking-tight text-primary">
                Hi, I&apos;m
                <br />
                <span className="text-accent">Srushti</span>
                <br />
                Dedaniya
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-secondary text-body-xl max-w-lg leading-relaxed"
            >
              I build clean, fast, and user-friendly websites and apps. Passionate
              about UI/UX design, full-stack development, and solving real
              problems with code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/resume/Srushti_Dedaniya_Resume.pdf" download className="btn-primary">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Download Resume
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bento-card p-6 flex flex-col gap-3">
              <span className="material-symbols-outlined text-accent text-2xl">
                palette
              </span>
              <h3 className="font-display text-display-sm text-primary">
                UI/UX Design
              </h3>
              <p className="text-secondary text-body-sm">
                Clean, modern interfaces that people enjoy using.
              </p>
            </div>

            <div className="bento-card p-6 flex flex-col gap-3 mt-8">
              <span className="material-symbols-outlined text-accent text-2xl">
                code
              </span>
              <h3 className="font-display text-display-sm text-primary">
                Full-Stack Dev
              </h3>
              <p className="text-secondary text-body-sm">
                Complete web apps from database to frontend.
              </p>
            </div>

            <div className="bento-card p-6 flex flex-col gap-3 col-span-2">
              <span className="material-symbols-outlined text-accent text-2xl">
                phone_android
              </span>
              <h3 className="font-display text-display-sm text-primary">
                Mobile Apps
              </h3>
              <p className="text-secondary text-body-sm">
                Native and cross-platform mobile applications.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
