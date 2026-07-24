"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <SectionTitle
        label="Innovation Lab"
        title={
          <>
            Forging digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Solar Flares
            </span>
          </>
        }
        description="A premium showcase of experimental ventures, architectural designs, and high-tech social solutions. Where code meets liquid light."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* Atmospheric Quote */}
      <section className="mt-32 text-center max-w-3xl mx-auto py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        <span className="material-symbols-outlined text-tertiary text-6xl mb-8 opacity-50">
          flare
        </span>
        <h2 className="font-display-lg text-headline-lg italic text-on-surface leading-tight relative z-10">
          &ldquo;In the lab, we don&apos;t just build tools; we craft the
          atmosphere where innovation breathes.&rdquo;
        </h2>
      </section>
    </main>
  );
}
