"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

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

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-light transition-all duration-200"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {project.imageUrl ? (
              <div
                className={`h-56 md:h-72 bg-cover bg-center bg-gradient-to-br ${colorMap[project.color]}`}
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              />
            ) : (
              <div
                className={`h-56 md:h-72 bg-gradient-to-br ${colorMap[project.color]} flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-7xl text-white/15">
                  deployed_code
                </span>
              </div>
            )}

            <div className="p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3 flex-wrap">
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

              <h2 className="font-display text-display-md text-primary">
                {project.title}
              </h2>

              <p className="text-secondary text-body-lg leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {project.stats && (
                <div className="flex gap-6">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="glass-panel-sm px-5 py-3 text-center">
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

              <div>
                <span className="text-muted text-label-md uppercase tracking-widest block mb-3">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
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
                    className="btn-outline"
                  >
                    <span className="material-symbols-outlined text-lg">
                      code
                    </span>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
