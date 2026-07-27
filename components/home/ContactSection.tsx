"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { skillCategories } from "@/data/skills";
import { socialLinks } from "@/data/social";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <motion.div
        className="max-w-container-max mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <span className="text-accent font-label text-label-lg uppercase tracking-widest block mb-4">
            Contact
          </span>
          <h2 className="font-display text-display-lg md:text-display-xl text-primary">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp}>
            <h3 className="font-display text-display-sm text-primary mb-6">
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="glass-panel p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-accent text-xl">
                      {cat.icon}
                    </span>
                    <h4 className="font-display text-body-lg text-primary font-semibold">
                      {cat.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-sm w-12 h-12 flex items-center justify-center hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-accent text-xl">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="font-display text-display-sm text-primary mb-6">
              Get In Touch
            </h3>
            <p className="text-secondary text-body-lg mb-8">
              Have a project in mind, a question, or just want to say hello?
              I&apos;d love to hear from you.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-muted text-label-md uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="input-field"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-muted text-label-md uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  className="input-field"
                />
              </div>

              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-muted text-label-md uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  required
                  className="input-field resize-none flex-grow"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50"
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="material-symbols-outlined animate-spin">
                      autorenew
                    </span>
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <span className="material-symbols-outlined">check_circle</span>
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <span className="material-symbols-outlined">error</span>
                    Failed to send. Try again.
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
