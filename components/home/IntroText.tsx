"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function IntroText() {
  return (
    <motion.div
      className="relative z-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.p
        variants={fadeInUp}
        className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
      >
        A journey through architectural voids and solar flares of inspiration.
        Exploring the intersection of high-performance logic and liquid
        aesthetic.
      </motion.p>
    </motion.div>
  );
}
