"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/social";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 max-w-container-max mx-auto">
      <nav className="bg-surface/60 backdrop-blur-[40px] rounded-full mt-4 md:mx-margin-desktop border-t border-l border-white/10 drop-shadow-[0_0_20px_rgba(245,158,11,0.2)] w-full flex justify-between items-center px-gutter py-4">
        <Link href="#home" className="font-display-lg text-headline-md tracking-tighter text-on-surface">
          Srushti Dedaniya
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-body-md text-body-md transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "text-on-surface-variant hover:text-tertiary"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="active:scale-95 transition-transform bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-md"
        >
          Let&apos;s Talk
        </a>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-24 bg-surface/95 backdrop-blur-[40px] z-40 flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-headline-md text-headline-md text-on-surface-variant hover:text-tertiary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
