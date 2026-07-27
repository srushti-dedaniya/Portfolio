"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects } from "@/data/projects";

const colorMap = {
  blue: "from-blue-500/20 to-blue-600/5",
  purple: "from-purple-500/20 to-purple-600/5",
  red: "from-red-500/20 to-red-600/5",
  emerald: "from-emerald-500/20 to-emerald-600/5",
};

const statusColorMap = {
  Live: "bg-emerald-500/20 text-emerald-400",
  "In Development": "bg-amber-500/20 text-amber-400",
  Completed: "bg-accent/20 text-accent",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <motion.div
        className="max-w-container-max mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <span className="text-accent font-label text-label-lg uppercase tracking-widest block mb-4">
            Projects
          </span>
          <h2 className="font-display text-display-lg md:text-display-xl text-primary">
            Things I&apos;ve Built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className={`bento-card overflow-hidden flex flex-col ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              {project.imageUrl ? (
                <div
                  className={`h-48 md:h-64 bg-cover bg-center bg-gradient-to-br ${
                    colorMap[project.color]
                  }`}
                  style={{ backgroundImage: `url('${project.imageUrl}')` }}
                />
              ) : (
                <div
                  className={`h-48 md:h-64 bg-gradient-to-br ${
                    colorMap[project.color]
                  } flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-6xl text-white/20">
                    deployed_code
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col gap-4 flex-grow">
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColorMap[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                  <span className="text-muted text-body-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-display-sm text-primary">
                  {project.title}
                </h3>

                <p className="text-secondary text-body-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.stats && (
                  <div className="flex gap-4 mt-2">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <span className="text-accent font-display text-body-lg font-bold block">
                          {stat.value}
                        </span>
                        <span className="text-muted text-label-sm">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-4"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_outward
                      </span>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm py-2 px-4"
                    >
                      <span className="material-symbols-outlined text-lg">
                        code
                      </span>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
