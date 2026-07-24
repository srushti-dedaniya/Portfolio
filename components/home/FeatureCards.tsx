"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: "auto_awesome",
    color: "primary",
    bgColor: "bg-primary-container/10",
    iconColor: "text-primary",
    title: "Experience Design",
    description:
      "Crafting interfaces that feel like liquid light - intuitive, warm, and hyper-responsive.",
  },
  {
    icon: "code",
    color: "tertiary",
    bgColor: "bg-tertiary-container/10",
    iconColor: "text-tertiary",
    title: "Engineering",
    description:
      "Robust software architecture designed for scalability and high-performance user journeys.",
    extraClass: "md:mt-12",
  },
  {
    icon: "flare",
    color: "secondary",
    bgColor: "bg-secondary-container/10",
    iconColor: "text-secondary",
    title: "Solar Solutions",
    description:
      "Solving complex global problems with creative energy and futuristic technology.",
  },
];

export default function FeatureCards() {
  return (
    <motion.div
      className="mt-32 w-full max-w-container-max grid grid-cols-1 md:grid-cols-3 gap-8 pb-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={fadeInUp}
          className={`glass-pane rounded-[24px] p-8 flex flex-col gap-4 text-left group hover:-translate-y-2 transition-transform duration-500 ${feature.extraClass || ""}`}
        >
          <div
            className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}
          >
            <span
              className={`material-symbols-outlined ${feature.iconColor}`}
            >
              {feature.icon}
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {feature.title}
          </h3>
          <p className="text-on-surface-variant text-body-md">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
