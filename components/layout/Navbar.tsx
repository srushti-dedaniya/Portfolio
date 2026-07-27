"use client";

import { useState } from "react";
import { navLinks } from "@/data/social";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-container-max mt-4 mx-4 md:mx-auto glass-panel-sm px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-primary"
        >
          Srushti Dedaniya
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-primary text-body-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            <span className="material-symbols-outlined text-lg">send</span>
            Hire Me
          </a>

          <button
            className="md:hidden text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-display-sm text-secondary hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            <span className="material-symbols-outlined text-lg">send</span>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
