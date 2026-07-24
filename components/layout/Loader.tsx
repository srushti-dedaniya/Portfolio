"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onAnimationComplete={(definition) => {
        if (typeof window !== "undefined") {
          const el = document.getElementById("loader");
          if (el) el.style.display = "none";
        }
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-primary border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="font-label-md text-primary tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Solar Flare
        </motion.span>
      </div>
    </motion.div>
  );
}
