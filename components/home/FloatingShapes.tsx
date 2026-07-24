"use client";

import { useEffect, useRef } from "react";

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "absolute bg-primary rounded-full opacity-20 pointer-events-none";
      const size = Math.random() * 4 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.filter = "blur(1px)";
      p.animate(
        [
          { transform: "translateY(0) scale(1)", opacity: 0.2 },
          {
            transform: `translateY(-${Math.random() * 100 + 50}px) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          iterations: Infinity,
          delay: Math.random() * 5000,
        }
      );
      container.appendChild(p);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
