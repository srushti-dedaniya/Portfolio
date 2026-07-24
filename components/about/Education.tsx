"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Education() {
  return (
    <section className="mb-48">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display-lg text-headline-lg mb-12 text-on-surface"
        >
          Education
        </motion.h2>

        {education.map((edu) => (
          <motion.div
            key={edu.institution}
            variants={fadeInUp}
            className="glass-pane rounded-[24px] p-8 border-l-4 border-primary/40"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="font-headline-md text-white">{edu.degree}</h3>
                <p className="text-primary font-label-md">{edu.field}</p>
              </div>
              <span className="font-label-sm text-on-surface-variant">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
            <p className="font-label-sm text-on-surface-variant mb-2">
              {edu.institution}
            </p>
            {edu.description && (
              <p className="text-on-surface-variant mt-4">{edu.description}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
