"use client";

import { certificates } from "@/data/certificates";

export default function CertificatesMarquee() {
  const items = [...certificates, ...certificates];

  return (
    <section className="py-12 overflow-hidden border-y border-border">
      <div className="max-w-container-max mx-auto px-6 md:px-12 mb-8">
        <span className="text-accent font-label text-label-lg uppercase tracking-widest">
          Experience
        </span>
        <h2 className="font-display text-display-sm text-primary mt-2">
          Certificates & Achievements
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll">
          {items.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="glass-panel-sm px-6 py-4 mx-3 flex items-center gap-4 flex-shrink-0 hover:border-accent/30 transition-all duration-300 min-w-[280px]"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ color: cert.color }}
                >
                  {cert.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-body-sm font-semibold whitespace-nowrap">
                  {cert.title}
                </span>
                <span className="text-muted text-label-sm whitespace-nowrap">
                  {cert.issuer} · {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
