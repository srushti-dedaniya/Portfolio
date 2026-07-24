"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  color?: "primary" | "tertiary" | "secondary";
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const colorMap = {
    primary: "bg-primary shadow-[0_0_15px_#ffc174]",
    tertiary: "bg-tertiary shadow-[0_0_15px_#f5c80c]",
    secondary: "bg-secondary shadow-[0_0_15px_#ffb3ad]",
  };

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tertiary to-secondary" />
      {items.map((item, index) => (
        <motion.div
          key={item.year}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <div
            className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${
              colorMap[item.color || "primary"]
            }`}
          />
          <div className="ml-12 md:ml-0 md:w-[45%] glass-pane rounded-2xl p-6">
            <span className="font-label-sm text-primary">{item.year}</span>
            <h4 className="font-headline-md text-on-surface mt-1">
              {item.title}
            </h4>
            <p className="text-on-surface-variant mt-2 text-body-md">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
