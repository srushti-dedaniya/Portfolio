"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionTitle from "@/components/common/SectionTitle";
import TechGalaxy from "@/components/about/TechGalaxy";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import StoryCard from "@/components/about/StoryCard";
import Education from "@/components/about/Education";
import CareerGoals from "@/components/about/CareerGoals";

export default function AboutPage() {
  return (
    <main className="relative pt-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.section
        className="mb-32"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle
          label="Chronicles of Light"
          title={
            <>
              Behind the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                Code
              </span>
            </>
          }
          description="A journey through architectural voids and solar flares of inspiration. Exploring the intersection of high-performance logic and liquid aesthetic."
        />
      </motion.section>

      <TechGalaxy />
      <JourneyTimeline />
      <StoryCard />
      <Education />
      <CareerGoals />
    </main>
  );
}
