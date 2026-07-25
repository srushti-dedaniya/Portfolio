"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <motion.div
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Projects
            </span>
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">
            Things I Have <span className="text-primary">Built</span>
          </h2>
        </motion.div>
      </motion.div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-margin-mobile md:px-margin-desktop pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="snap-center flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] h-[420px] rounded-[24px] overflow-hidden relative group cursor-pointer"
            >
              {project.imageUrl ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.imageUrl}')` }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface-container-high to-tertiary/20" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className={`px-3 py-1 rounded-full text-label-sm font-label-sm ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "In Development"
                        ? "bg-tertiary/20 text-tertiary"
                        : "bg-primary/20 text-primary"
                    }`}>
                      {project.status}
                    </span>
                  )}
                  <span className="text-on-surface-variant text-label-sm font-label-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-headline-lg text-headline-lg text-white">
                  {project.title}
                </h3>

                <p className="text-on-surface-variant text-body-md max-w-lg line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-on-surface text-label-sm font-label-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="solar-button px-6 py-2 rounded-full font-label-md text-white text-label-md inline-flex items-center gap-2"
                    >
                      Visit
                      <span className="material-symbols-outlined text-lg">arrow_outward</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
