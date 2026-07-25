"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 2000);
  };

  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Contact
            </span>
          </div>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp} className="flex flex-col gap-8">
            <p className="text-on-surface-variant text-body-lg max-w-lg">
              Have a project in mind, a question, or just want to say hello?
              I&apos;d love to hear from you. Drop me a message and I&apos;ll get
              back to you soon.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pane w-12 h-12 rounded-xl flex items-center justify-center hover:-translate-y-1 transition-all duration-300 border border-white/5"
                >
                  <span className="material-symbols-outlined text-primary">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="glass-pane rounded-[24px] p-6 border border-white/5">
              <span className="font-label-sm text-on-surface-variant block mb-1">Email me at</span>
              <a href="mailto:srushti@example.com" className="text-primary font-headline-md hover:underline">
                srushti@example.com
              </a>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="glass-pane p-8 rounded-[24px] flex flex-col gap-6 border border-white/5"
          >
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-widest">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="bg-surface-container-low border border-white/5 p-4 rounded-xl font-body-md text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="bg-surface-container-low border border-white/5 p-4 rounded-xl font-body-md text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30"
              />
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-widest">
                Your Message
              </label>
              <textarea
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                required
                className="bg-surface-container-low border border-white/5 p-4 rounded-xl font-body-md text-on-surface focus:border-primary/50 focus:outline-none transition-all resize-none placeholder:text-on-surface-variant/30 flex-grow"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full solar-button text-on-primary px-8 py-4 rounded-full font-label-md font-bold uppercase tracking-[0.15em] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === "idle" && (
                <>
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </>
              )}
              {status === "sending" && (
                <>
                  <span className="material-symbols-outlined animate-spin">autorenew</span>
                  Sending...
                </>
              )}
              {status === "sent" && (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Sent!
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
