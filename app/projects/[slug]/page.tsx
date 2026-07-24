"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import TechStack from "@/components/projects/TechStack";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="pt-40 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h1 className="font-display-lg text-headline-lg text-on-surface mb-8">
          Project Not Found
        </h1>
        <Link href="/projects" className="text-primary hover:underline">
          Back to Innovation Lab
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-40 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <Link
            href="/projects"
            className="text-primary font-label-md hover:underline inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Innovation Lab
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full font-label-sm text-label-sm text-primary"
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
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">
            {project.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            {project.longDescription}
          </p>
        </motion.div>

        {project.imageUrl && (
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="glass-pane rounded-[24px] overflow-hidden h-[400px] md:h-[500px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              />
            </div>
          </motion.div>
        )}

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
            Technology Stack
          </h2>
          <TechStack technologies={project.techStack} />
        </motion.div>

        {project.progress !== undefined && (
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Development Progress
            </h2>
            <div className="flex gap-4 items-center">
              <div className="h-2 flex-grow bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">
                {project.progress}%
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
