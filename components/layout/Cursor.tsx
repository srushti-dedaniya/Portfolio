"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="fixed w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0 transition-opacity duration-500 hidden md:block"
        animate={{
          left: x - 192,
          top: y - 192,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
    </>
  );
}
