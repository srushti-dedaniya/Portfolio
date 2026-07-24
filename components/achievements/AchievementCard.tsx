"use client";

import { motion } from "framer-motion";
import { Achievement } from "@/types/project";
import { fadeInUp } from "@/lib/animations";

interface AchievementCardProps {
  achievement: Achievement;
}

const colorMap = {
  primary: { bg: "bg-primary/10", border: "border-primary/20", text: "text-primary", iconBg: "bg-primary-container/10" },
  tertiary: { bg: "bg-tertiary/10", border: "border-tertiary/20", text: "text-tertiary", iconBg: "bg-tertiary-container/10" },
  secondary: { bg: "bg-secondary/10", border: "border-secondary/30", text: "text-secondary", iconBg: "bg-secondary-container/10" },
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const colors = colorMap[achievement.color];

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-pane rounded-[24px] p-6 group hover:-translate-y-2 transition-transform duration-500"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
          <span className={`material-symbols-outlined ${colors.text}`}>
            {achievement.icon}
          </span>
        </div>
        <div>
          <h3 className="font-headline-md text-on-surface">{achievement.title}</h3>
          <span className={`font-label-sm ${colors.text}`}>{achievement.date}</span>
        </div>
      </div>
      <p className="text-on-surface-variant text-body-md">
        {achievement.description}
      </p>
    </motion.div>
  );
}
