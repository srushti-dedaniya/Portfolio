"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/project";
import { fadeInUp } from "@/lib/animations";
import ProjectStats from "./ProjectStats";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tagVariantMap = {
  primary: "bg-primary/10 border-primary/20 text-primary",
  tertiary: "bg-tertiary/10 border-tertiary/20 text-tertiary",
  secondary: "bg-secondary/10 border-secondary/30 text-secondary",
};

const sizeClasses = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const colSpan = sizeClasses[index % sizeClasses.length];

  return (
    <motion.div
      variants={fadeInUp}
      className={`${colSpan} group cursor-pointer`}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="glass-pane rounded-[24px] h-[500px] overflow-hidden relative liquid-transition solar-glow-hover flex flex-col">
          {project.imageUrl && (
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
          )}

          {!project.imageUrl && (
            <div className="absolute inset-0 z-0 bg-surface-container-high">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
          )}

          <div className="mt-auto p-8 relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1 border rounded-full font-label-sm text-label-sm ${tagVariantMap[tag.variant]}`}
                >
                  {tag.label}
                </span>
              ))}
              {project.status && (
                <span className="px-3 py-1 bg-tertiary/10 border border-tertiary/20 rounded-full font-label-sm text-label-sm text-tertiary">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              {project.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              {project.description}
            </p>

            {project.progress !== undefined && (
              <div className="mt-4 flex gap-4 items-center">
                <div className="h-1 flex-grow bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary-container rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {project.progress}% Complete
                </span>
              </div>
            )}

            {project.stats && (
              <div className="mt-6">
                <ProjectStats stats={project.stats} />
              </div>
            )}

            <div className="mt-6 flex items-center gap-4 text-primary font-bold">
              <span>Explore Project</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
