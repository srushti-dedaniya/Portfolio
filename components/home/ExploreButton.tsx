"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import Link from "next/link";

export default function ExploreButton() {
  const { ref, x, y } = useMagnetic(0.3);

  return (
    <motion.div
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <Link
        href="/projects"
        className="solar-button px-10 py-5 rounded-full font-headline-md text-headline-md text-white inline-flex items-center gap-3 group"
      >
        Explore My World
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </Link>
    </motion.div>
  );
}
