"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import CertificateModal from "./CertificateModal";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  date: string;
  description: string;
  longDescription: string;
  credentialUrl?: string;
  category: string;
  color: string;
  highlights: string[];
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "HackFusion 2026",
    issuer: "IEEE UMIT × SPIT Hackathon",
    imageUrl: "/images/certificates/HackFusion_image.jpeg",
    date: "2026",
    description: "Built SiteOps — a platform to streamline site operations, improve team coordination, and manage projects efficiently in a 36-hour hackathon.",
    longDescription: "At HackFusion 2026, a 36-hour hackathon organized by IEEE UMIT and SPIT, our team built SiteOps — a comprehensive platform designed to streamline site operations. The project focused on improving team coordination, real-time task tracking, and efficient project management. We tackled real-world logistics challenges and delivered a working prototype under tight deadlines, competing against 50+ teams.",
    credentialUrl: "/images/certificates/Hackfusion.jpg",
    category: "Hackathon",
    color: "emerald",
    highlights: [
      "Built SiteOps — a real-time site operations management platform",
      "Enabled team coordination, task tracking, and project management",
      "Developed a full-stack working prototype in just 36 hours",
      "Competed against 50+ teams at a state-level hackathon",
      "Organized by IEEE UMIT and SPIT — one of the largest hackathons in the region",
    ],
  },
  {
    id: "3",
    title: "Codeamble 2026",
    issuer: "Zone of Engineering Innovators (ZEN)",
    imageUrl: "/images/certificates/Codeamble_image.jpeg",
    date: "2026",
    description:
      "Participated in Codeamble 2026, a national-level 24-hour hackathon organized by ZEN Club at A. C. Patil College of Engineering, Kharghar, Navi Mumbai, competing against 120+ teams to build impactful, real-world solutions.",
    longDescription:
      "Codeamble 2026 is a prestigious national-level innovation marathon organized by the Zone of Engineering Innovators (ZEN). The event followed a rigorous multi-stage elimination process — from an online technical blueprinting phase to a high-intensity 24-hour physical finale at A. C. Patil College of Engineering, Kharghar, Navi Mumbai. Our team worked through the full hackathon funnel, building a working prototype within the 24-hour coding marathon and competing against 120+ teams from across India.",
    credentialUrl: "/images/certificates/Codeamble.jpg",
    category: "Hackathon",
    color: "purple",
    highlights: [
      "Competed in a national-level 24-hour hackathon with a prize pool of ₹5,00,000+",
      "Advanced through online rounds and the offline grand finale at Navi Mumbai",
      "Built a working prototype within the 24-hour coding marathon",
      "Competed against 120+ teams from across India",
      "Organized by Zone of Engineering Innovators (ZEN) with industry mentorship",
    ],
  },
  {
    id: "2",
    title: "Robotics Techno-Connect Competition",
    issuer: "University of Mumbai",
    imageUrl: "/images/certificates/Techno-connect_image.jpeg",
    date: "2026",
    description: "Built a Smart Air Quality Monitoring & Purification System — both software dashboard and hardware unit — for real-time air quality tracking and automated purification.",
    longDescription: "Presented an IoT-Based Smart Air Quality Monitoring and Purification System at the Robotics Techno-Connect Competition organized by the University of Mumbai in collaboration with Janyu Technologies. The project combined both software and hardware — a sensor-driven hardware unit for real-time air quality data collection and a software dashboard for live monitoring, analytics, and automated purification control. The system monitored PM2.5, CO2, temperature, and humidity levels, triggering purification mechanisms automatically when air quality dropped below safe thresholds.",
    credentialUrl: "/images/certificates/Techno-Connect.jpg",
    category: "Hackathon",
    color: "blue",
    highlights: [
      "Designed and built a complete IoT-based air quality system — both hardware and software",
      "Hardware unit with sensors for PM2.5, CO2, temperature, and humidity monitoring",
      "Software dashboard for real-time data visualization and analytics",
      "Automated purification trigger when air quality drops below safe levels",
      "Presented at University of Mumbai in collaboration with Janyu Technologies",
    ],
  },
];

export default function CertificatesMarquee() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <>
      <section id="experience" className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <motion.div
          className="relative max-w-container-max mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-accent font-label text-label-lg uppercase tracking-widest block mb-4">
              Experience
            </span>
            <h2 className="font-display text-display-lg md:text-display-xl text-primary">
              Certificates & Achievements
            </h2>
          </motion.div>

          {/* Journey Layout */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:hidden" />

            <div className="flex flex-col gap-16 md:gap-24">
              {certificates.map((cert, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={cert.id}
                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -60 : 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Image Side */}
                    <div className="flex-1 w-full">
                      <motion.div
                        className="relative rounded-2xl overflow-hidden cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedCert(cert)}
                      >
                        {/* Glow behind image */}
                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                          {cert.imageUrl ? (
                            <img
                              src={cert.imageUrl}
                              alt={cert.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-surface-light to-background flex items-center justify-center">
                              <span className="material-symbols-outlined text-7xl text-white/10">
                                workspace_premium
                              </span>
                            </div>
                          )}

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-accent text-xs font-semibold uppercase tracking-wider border border-accent/20">
                              {cert.category}
                            </span>
                          </div>

                          {/* View Button */}
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-sm">open_in_new</span>
                              View Details
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Dot - Desktop */}
                    <div className="relative z-10 flex-shrink-0 hidden md:flex items-center justify-center">
                      <motion.div
                        className="w-6 h-6 rounded-full bg-accent border-4 border-background"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(124,58,237,0.4)",
                            "0 0 0 10px rgba(124,58,237,0)",
                            "0 0 0 0 rgba(124,58,237,0.4)",
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                      />
                    </div>

                    {/* Mobile Dot */}
                    <div className="relative z-10 flex-shrink-0 md:hidden absolute left-[-12px] top-6">
                      <div className="w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 w-full">
                      <motion.div
                        className="glass-panel p-6 md:p-8 relative overflow-hidden group"
                        whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.4)" }}
                      >
                        {/* Decorative glow */}
                        <div className={`absolute ${isLeft ? "top-0 right-0" : "top-0 left-0"} w-32 h-32 bg-accent/5 blur-3xl rounded-full group-hover:bg-accent/10 transition-colors duration-500`} />

                        {/* Date + Category */}
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-start" : "md:justify-start"}`}>
                          <span className="px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider border border-accent/20">
                            {cert.date}
                          </span>
                          <span className="text-muted text-label-sm uppercase tracking-widest">
                            {cert.issuer}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-display-sm md:text-body-xl text-primary font-semibold mb-4">
                          {cert.title}
                        </h3>

                        {/* Description */}
                        <p className="text-secondary text-body-lg leading-relaxed mb-5">
                          {cert.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-col gap-3 mb-6">
                          {cert.highlights.map((point, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                              <span className="text-secondary text-body-md leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Download Button */}
                        <motion.a
                          href={cert.credentialUrl}
                          download
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 text-accent text-body-sm font-semibold border border-accent/20 hover:bg-accent/25 hover:border-accent/40 transition-all duration-300"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span className="material-symbols-outlined text-lg">download</span>
                          Download Certificate
                        </motion.a>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
