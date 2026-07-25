"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: "auto_awesome",
    color: "primary",
    bgColor: "bg-primary-container/10",
    iconColor: "text-primary",
    stat: "3+",
    statLabel: "Years Experience",
    title: "UI/UX & Design",
    description:
      "I design clean, easy-to-use interfaces that people actually enjoy. From wireframes to final product, I focus on making things simple and beautiful.",
    skills: ["Figma", "Design Systems", "Prototyping"],
    offering: "Websites  ·  Dashboards  ·  Mobile Apps",
  },
  {
    icon: "code",
    color: "tertiary",
    bgColor: "bg-tertiary-container/10",
    iconColor: "text-tertiary",
    stat: "15+",
    statLabel: "Projects Built",
    title: "Full-Stack Development",
    description:
      "I build complete web apps from scratch — the database, the server, and the frontend. Everything works together smoothly and loads fast.",
    skills: ["React / Next.js", "Node.js", "TypeScript"],
    offering: "Web Apps  ·  APIs  ·  SaaS Products",
  },
  {
    icon: "lightbulb",
    color: "secondary",
    bgColor: "bg-secondary-container/10",
    iconColor: "text-secondary",
    stat: "10+",
    statLabel: "Technologies",
    title: "Problem Solver",
    description:
      "I love breaking down complex problems and finding practical solutions. Whether it is a startup idea or a tough bug, I find a way to make it work.",
    skills: ["Python", "Cloud & DevOps", "Open Source"],
    offering: "Freelance  ·  Collaboration  ·  Consulting",
  },
];

export default function FeatureCards() {
  return (
    <motion.div
      className="mt-32 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-8 pb-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={fadeInUp}
          className={`feature-card feature-card--${feature.color} glass-pane rounded-[24px] p-8 flex flex-col gap-5 text-left group hover:-translate-y-2 transition-all duration-500 border border-transparent ${feature.extraClass || ""}`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}
            >
              <span
                className={`material-symbols-outlined ${feature.iconColor}`}
              >
                {feature.icon}
              </span>
            </div>
            <div className="text-right">
              <span className={`font-headline-lg text-headline-lg ${feature.iconColor} leading-none block`}>
                {feature.stat}
              </span>
              <span className="text-on-surface-variant text-label-sm font-label-sm">
                {feature.statLabel}
              </span>
            </div>
          </div>

          <h3 className="font-headline-md text-headline-md text-on-surface">
            {feature.title}
          </h3>

          <p className="text-on-surface-variant text-body-md leading-relaxed">
            {feature.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {feature.skills.map((skill) => (
              <span
                key={skill}
                className={`${feature.bgColor} ${feature.iconColor} text-label-sm font-label-sm px-3 py-1 rounded-full`}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="border-t border-white/5 pt-4 mt-1">
            <span className="text-on-surface-variant text-label-sm font-label-sm tracking-wide uppercase">
              {feature.offering}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
