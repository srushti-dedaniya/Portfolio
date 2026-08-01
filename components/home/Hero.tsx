"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const floatingIcons = [
  { icon: "code", x: "10%", y: "15%", delay: 0 },
  { icon: "terminal", x: "78%", y: "8%", delay: 0.5 },
  { icon: "database", x: "88%", y: "50%", delay: 1 },
  { icon: "cloud", x: "3%", y: "60%", delay: 1.5 },
  { icon: "smart_toy", x: "65%", y: "78%", delay: 0.8 },
  { icon: "devices", x: "25%", y: "85%", delay: 1.2 },
  { icon: "language", x: "5%", y: "35%", delay: 0.3 },
  { icon: "storage", x: "90%", y: "25%", delay: 0.7 },
  { icon: "settings_suggest", x: "45%", y: "5%", delay: 1.1 },
  { icon: "web", x: "15%", y: "45%", delay: 0.4 },
  { icon: "javascript", x: "80%", y: "70%", delay: 0.9 },
  { icon: "php", x: "35%", y: "90%", delay: 1.4 },
];

const codeLines = [
  "const developer = new Srushti();",
  "developer.build({ clean: true });",
  "developer.solve(realProblems);",
  "await developer.deploy();",
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const line = codeLines[currentLine];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === line) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting ? line.substring(0, displayText.length - 1) : line.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 60
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLine]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-24 overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <motion.div
        className="relative max-w-container-max mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <motion.span
                className="text-accent font-label text-label-lg uppercase tracking-widest"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full-Stack Developer
              </motion.span>
              <h1 className="font-display text-display-xl md:text-[5.5rem] leading-[1.05] tracking-tight text-primary">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Hi, I&apos;m
                </motion.span>
                <br />
                <motion.span
                  className="text-accent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Srushti
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Dedaniya
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-secondary text-body-xl max-w-lg leading-relaxed"
            >
              I build clean, fast, and user-friendly websites and apps. Passionate
              about full-stack development and solving real problems with code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/resume/Resume_Srushti.pdf" download className="btn-primary">
                <span className="material-symbols-outlined text-lg">download</span>
                Download Resume
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right: Animated Visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Central Glowing Circle */}
            <motion.div
              className="absolute w-48 h-48 rounded-full border border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-72 h-72 rounded-full border border-accent/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full border border-accent/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Center: Profile with Pulse */}
            <motion.div
              className="absolute z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                className="absolute inset-0 w-28 h-28 -m-2 rounded-full bg-accent/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-24 h-24 rounded-full border-2 border-accent/40 bg-surface overflow-hidden flex items-center justify-center">
                <img
                  src="/images/certificates/profile.jpg"
                  alt="SD"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Icons */}
            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                className="absolute glass-panel p-4 rounded-xl"
                style={{ left: item.x, top: item.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: item.delay + 0.8 },
                  scale: { duration: 0.5, delay: item.delay + 0.8 },
                  y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                }}
              >
                <span className="material-symbols-outlined text-accent text-2xl">
                  {item.icon}
                </span>
              </motion.div>
            ))}

            {/* Typing Code Block */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-panel px-6 py-4 font-mono text-sm min-w-[340px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="text-secondary">
                <span className="text-accent">{">"} </span>
                <span className="text-primary">{displayText}</span>
                <motion.span
                  className="text-accent inline-block w-2 h-4 bg-accent ml-0.5"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
