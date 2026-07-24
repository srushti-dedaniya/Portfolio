"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticResult {
  ref: React.RefObject<HTMLDivElement>;
  x: number;
  y: number;
}

export function useMagnetic(strength: number = 0.3): MagneticResult {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * strength;
      const y = (e.clientY - centerY) * strength;
      setPosition({ x, y });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref: ref as React.RefObject<HTMLDivElement>,
    x: position.x,
    y: position.y,
  };
}
