"use client";

import { motion } from "framer-motion";
import { textReveal } from "@/lib/animations";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3";
}

export default function AnimatedText({
  children,
  className,
  as: Tag = "span",
}: AnimatedTextProps) {
  return (
    <motion.div
      variants={textReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}
