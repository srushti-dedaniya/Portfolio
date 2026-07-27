"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { timeline } from "@/data/timeline";
import { education } from "@/data/education";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <motion.div
        className="max-w-container-max mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <span className="text-accent font-label text-label-lg uppercase tracking-widest block mb-4">
            About Me
          </span>
          <h2 className="font-display text-display-lg md:text-display-xl text-primary">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <p className="text-secondary text-body-xl leading-relaxed">
              I&apos;m a full-stack developer who loves building things that make a
              difference. I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <p className="text-secondary text-body-lg leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or thinking about the next
              thing I can build. I believe in writing clean code and creating
              designs that people actually enjoy using.
            </p>

            <div className="glass-panel p-6 mt-4">
              <h3 className="font-display text-display-sm text-primary mb-2">
                Career Goals
              </h3>
              <p className="text-secondary text-body-md">
                Work at a innovative tech company as a Software Engineer,
                contribute to open-source projects, and eventually build my own
                product that helps people.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <h3 className="font-display text-display-sm text-primary mb-2">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.institution} className="glass-panel p-6">
                <h4 className="font-display text-body-lg text-primary font-semibold">
                  {edu.degree} — {edu.field}
                </h4>
                <p className="text-accent text-body-sm mt-1">
                  {edu.institution}
                </p>
                <p className="text-muted text-body-sm mt-1">
                  {edu.startDate} – {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-secondary text-body-sm mt-3">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeInUp}>
          <h3 className="font-display text-display-sm text-primary mb-8">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-accent/20" />

            <div className="flex flex-col gap-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  className="relative pl-12 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

                  <div className="glass-panel p-6">
                    <span className="text-accent font-label text-label-md uppercase tracking-widest">
                      {event.year}
                    </span>
                    <h4 className="font-display text-body-lg text-primary font-semibold mt-1">
                      {event.title}
                    </h4>
                    <p className="text-secondary text-body-sm mt-2">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
