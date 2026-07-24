"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CareerGoals() {
  return (
    <section className="mb-48">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display-lg text-headline-lg mb-12 text-on-surface"
        >
          Career <span className="text-primary">Goals</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "rocket_launch",
              title: "Innovate",
              description:
                "Push the boundaries of what's possible in web and mobile technology, creating solutions that make a tangible impact.",
              color: "primary",
            },
            {
              icon: "public",
              title: "Scale",
              description:
                "Build systems that serve millions, architecting for performance, reliability, and global reach.",
              color: "tertiary",
            },
            {
              icon: "favorite",
              title: "Inspire",
              description:
                "Share knowledge, mentor the next generation, and contribute to the open-source community.",
              color: "secondary",
            },
          ].map((goal) => (
            <div
              key={goal.title}
              className="glass-pane rounded-[24px] p-8 text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full bg-${goal.color}/10 flex items-center justify-center mb-6`}
              >
                <span
                  className={`material-symbols-outlined text-3xl text-${goal.color}`}
                >
                  {goal.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-white mb-4">{goal.title}</h3>
              <p className="text-on-surface-variant">{goal.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
