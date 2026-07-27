"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const certificates = [
  { id: "1", title: "Hackathon Winner", issuer: "State-level Hackathon 2024", imageUrl: "" },
  { id: "2", title: "AI/ML Workshop", issuer: "Tech Fest 2024", imageUrl: "" },
  { id: "3", title: "Web Dev Bootcamp", issuer: "Udemy", imageUrl: "" },
  { id: "4", title: "Open Source Contributor", issuer: "GitHub 2024", imageUrl: "" },
  { id: "5", title: "Cloud Computing", issuer: "AWS Academy", imageUrl: "" },
  { id: "6", title: "Python Data Science", issuer: "Coursera 2023", imageUrl: "" },
];

export default function CertificatesMarquee() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <motion.div
        className="max-w-container-max mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <span className="text-accent font-label text-label-lg uppercase tracking-widest block mb-4">
            Experience
          </span>
          <h2 className="font-display text-display-lg md:text-display-xl text-primary">
            Certificates & Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className="bento-card overflow-hidden group"
            >
              {cert.imageUrl ? (
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cert.imageUrl}')` }}
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-surface-light to-background flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <span className="material-symbols-outlined text-5xl text-white/10">
                      image
                    </span>
                    <span className="text-muted text-label-sm">
                      Add image here
                    </span>
                  </div>
                </div>
              )}

              <div className="p-5">
                <h3 className="font-display text-body-lg text-primary font-semibold">
                  {cert.title}
                </h3>
                <p className="text-muted text-body-sm mt-1">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
