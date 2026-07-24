"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ResumePage() {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-primary">
              description
            </span>
            <span className="font-label-sm text-primary uppercase tracking-[0.2em]">
              Resume
            </span>
          </div>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">
            Professional <span className="text-primary">Profile</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            A comprehensive overview of skills, experience, and academic
            achievements.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="glass-pane rounded-[24px] p-12 text-center"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-4xl text-primary">
              picture_as_pdf
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
            Download Resume
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-md mx-auto">
            Get a detailed overview of my professional journey, skills, and
            accomplishments.
          </p>
          <a
            href="/resume/Srushti_Dedaniya_Resume.pdf"
            download
            className="inline-flex items-center gap-3 solar-button px-8 py-4 rounded-full font-label-md text-white font-bold uppercase tracking-[0.1em] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="material-symbols-outlined">download</span>
            Download PDF
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="glass-pane rounded-[24px] p-8">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">code</span>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {[
                { category: "Frontend", skills: "React, Next.js, TypeScript, Tailwind CSS" },
                { category: "Backend", skills: "Java, Python, Node.js, FastAPI" },
                { category: "Mobile", skills: "Kotlin, React Native" },
                { category: "Tools", skills: "Git, Docker, PostgreSQL, AWS" },
              ].map((item) => (
                <div key={item.category}>
                  <span className="font-label-sm text-primary block mb-1">
                    {item.category}
                  </span>
                  <span className="text-on-surface-variant text-body-md">
                    {item.skills}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-pane rounded-[24px] p-8">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">work</span>
              Experience
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-headline-md text-on-surface">
                  Software Developer Intern
                </h4>
                <span className="font-label-sm text-primary">Tech Company</span>
                <span className="font-label-sm text-on-surface-variant block">
                  2024 - Present
                </span>
                <p className="text-on-surface-variant mt-2 text-body-md">
                  Building scalable web applications and contributing to
                  microservices architecture.
                </p>
              </div>
              <div>
                <h4 className="font-headline-md text-on-surface">
                  Freelance Developer
                </h4>
                <span className="font-label-sm text-primary">Self-Employed</span>
                <span className="font-label-sm text-on-surface-variant block">
                  2022 - Present
                </span>
                <p className="text-on-surface-variant mt-2 text-body-md">
                  Delivering end-to-end digital solutions for clients across
                  various industries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
