"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel p-8 md:p-12 rounded-[24px] flex flex-col gap-8 h-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="flex flex-col gap-2">
        <label className="font-label-sm text-on-surface-variant uppercase tracking-widest">
          Pilot Identification
        </label>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="bg-surface-container-low border border-white/5 p-4 rounded-xl font-body-md text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-label-sm text-on-surface-variant uppercase tracking-widest">
          Comm Channel
        </label>
        <input
          type="email"
          placeholder="Email Address"
          required
          className="bg-surface-container-low border border-white/5 p-4 rounded-xl font-body-md text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30"
        />
      </div>

      <div className="flex flex-col gap-2 flex-grow">
        <label className="font-label-sm text-on-surface-variant uppercase tracking-widest">
          The Transmission
        </label>
        <textarea
          placeholder="Describe your objective..."
          rows={5}
          required
          className="bg-surface-container-low border border-white/5 p-4 rounded-xl font-body-md text-on-surface focus:border-primary/50 focus:outline-none transition-all resize-none placeholder:text-on-surface-variant/30 flex-grow"
        />
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-5 rounded-full font-label-md font-bold uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all duration-300 solar-glow flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === "idle" && (
          <>
            Ignite Connection
            <span className="material-symbols-outlined">rocket_launch</span>
          </>
        )}
        {status === "sending" && (
          <>
            <span className="material-symbols-outlined animate-spin">
              autorenew
            </span>
            Transmitting...
          </>
        )}
        {status === "sent" && (
          <>
            <span className="material-symbols-outlined">check_circle</span>
            Delivered
          </>
        )}
      </button>
    </form>
  );
}
