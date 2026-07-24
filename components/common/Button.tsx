"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "active:scale-95 transition-all duration-300 rounded-full font-label-md flex items-center justify-center gap-2",
          variant === "primary" &&
            "solar-button text-white",
          variant === "secondary" &&
            "bg-primary-container text-on-primary-container hover:scale-105",
          variant === "ghost" &&
            "bg-transparent text-on-surface-variant hover:text-primary border border-white/10 hover:border-primary/30",
          size === "sm" && "px-5 py-2 text-label-sm",
          size === "md" && "px-6 py-3 text-label-md",
          size === "lg" && "px-10 py-5 text-headline-md",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
