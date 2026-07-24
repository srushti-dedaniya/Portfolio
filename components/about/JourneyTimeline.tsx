"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

const colorMap = {
  primary: { dot: "bg-primary", shadow: "shadow-[0_0_15px_#ffc174]", border: "border-primary/20", text: "text-primary" },
  tertiary: { dot: "bg-tertiary", shadow: "shadow-[0_0_15px_#f5c80c]", border: "border-tertiary/20", text: "text-tertiary" },
  secondary: { dot: "bg-secondary", shadow: "shadow-[0_0_15px_#ffb3ad]", border: "border-secondary/20", text: "text-secondary" },
};

export default function JourneyTimeline() {
  return (
    <section className="mb-48 relative">
      <h2 className="font-display-lg text-headline-lg mb-20 text-center text-on-surface">
        Solar Milestones
      </h2>
      <div className="relative px-gutter">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full max-w-[800px] pointer-events-none"
          fill="none"
          viewBox="0 0 800 1200"
        >
          <path
            d="M400 0C400 200 100 200 100 400C100 600 700 600 700 800C700 1000 400 1000 400 1200"
            stroke="url(#paint0_linear)"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear"
              x1="400"
              x2="400"
              y1="0"
              y2="1200"
            >
              <stop stopColor="#ffc174" />
              <stop offset="0.5" stopColor="#f5c80c" />
              <stop offset="1" stopColor="#ffb3ad" />
            </linearGradient>
          </defs>
        </svg>

        {timeline.map((event, index) => {
          const colors = colorMap[event.color];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.year}
              className={`relative flex items-center mb-64 ${
                isLeft ? "justify-start md:pl-20" : "justify-end md:pr-20"
              } group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className={`glass-pane p-8 rounded-3xl max-w-md border ${colors.border} solar-glow group-hover:-translate-y-2 transition-transform duration-500`}
              >
                <span
                  className={`font-label-md ${colors.text} mb-2 block`}
                >
                  {event.year} — {event.subtitle}
                </span>
                <h3 className="font-headline-md text-white mb-4">
                  {event.title}
                </h3>
                <p className="text-on-surface-variant">{event.description}</p>
              </div>
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 ${colors.dot} rounded-full ${colors.shadow}`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
