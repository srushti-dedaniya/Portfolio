"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function TechGalaxy() {
  return (
    <section className="relative h-[600px] mb-48 overflow-visible flex items-center justify-center">
      <div className="relative z-10 w-full h-full">
        {skills.slice(0, 4).map((skill, index) => {
          const positions = [
            "top-1/4 left-1/4",
            "bottom-1/4 right-1/3",
            "top-1/3 right-1/4",
            "bottom-1/3 left-1/3",
          ];
          const borders = [
            "border-primary/30",
            "border-tertiary/30",
            "border-secondary/30",
            "border-white/20",
          ];

          return (
            <motion.div
              key={skill.name}
              className={`liquid-node absolute ${positions[index]} glass-pane p-6 rounded-2xl border ${borders[index]}`}
              animate={{
                y: [0, -15, 10, 0],
                x: [0, 10, -15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 2,
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`material-symbols-outlined text-4xl text-${skill.color}`}
                >
                  {skill.icon}
                </span>
                <div>
                  <p className={`font-label-sm text-${skill.color}`}>
                    {skill.category}
                  </p>
                  <p className="font-headline-md text-white">{skill.name}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
