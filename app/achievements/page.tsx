"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import AchievementCard from "@/components/achievements/AchievementCard";
import CertificateCard from "@/components/achievements/CertificateCard";
import { achievements } from "@/data/achievements";
import { certificates } from "@/data/certificates";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function AchievementsPage() {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <SectionTitle
        label="Solar Milestones"
        title={
          <>
            Achievements &{" "}
            <span className="text-primary">Recognition</span>
          </>
        }
        description="A collection of milestones, certifications, and recognitions earned through dedication and innovation."
      />

      <motion.section
        className="mb-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-headline-md text-headline-md text-on-surface mb-8"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-headline-md text-headline-md text-on-surface mb-8"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
