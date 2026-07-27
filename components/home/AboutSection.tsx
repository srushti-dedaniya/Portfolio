"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { timeline } from "@/data/timeline";
import { education } from "@/data/education";

const interests = [
  { icon: "code", label: "Web Development" },
  { icon: "phone_android", label: "Android Dev" },
  { icon: "psychology", label: "Artificial Intelligence" },
  { icon: "query_stats", label: "Machine Learning" },
  { icon: "translate", label: "NLP" },
  { icon: "sensors", label: "IoT" },
];

const journeyIcons = ["school", "science", "terminal", "web"];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative max-w-container-max mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        {/* Image + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-center mb-24">

          {/* Left: Profile Image with Glow Ring */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-sm" />

              {/* Corner Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-2xl z-10" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-2xl z-10" />

              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5">
                <img
                  src="/images/certificates/profile.jpg"
                  alt="Srushti Dedaniya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-primary font-display text-body-lg font-semibold">Srushti Dedaniya</p>
                  <p className="text-accent text-body-sm">Full-Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Quick Stats below image */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: "Projects", value: "4+" },
                { label: "Hackathons", value: "2+" },
                { label: "Technologies", value: "10+" },
                { label: "Certifications", value: "2+" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="glass-panel p-5 text-center group cursor-default"
                  whileHover={{ scale: 1.03, borderColor: "rgba(124, 58, 237, 0.3)" }}
                >
                  <span className="text-accent font-display text-display-sm font-bold block">
                    {stat.value}
                  </span>
                  <span className="text-muted text-label-sm uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeInUp}>
              <span className="text-accent font-label text-label-lg uppercase tracking-widest block mb-4">
                About Me
              </span>
              <h2 className="font-display text-display-lg md:text-display-xl text-primary">
                ABOUT <span className="text-accent">ME</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-5">
              <p className="text-secondary text-body-xl leading-relaxed">
                Hi, I&apos;m <span className="text-primary font-semibold">Srushti Dedaniya</span>.
              </p>
              <p className="text-secondary text-body-lg leading-relaxed">
                I&apos;m a Computer Engineering student passionate about building things that
                make a real difference. I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>
              <p className="text-secondary text-body-lg leading-relaxed">
                I enjoy building real-world applications that solve practical problems.
                My interests include creating full-stack web applications, AI-powered
                solutions, mobile applications, and participating in hackathons.
              </p>
              <p className="text-secondary text-body-lg leading-relaxed">
                I believe in continuous learning and enjoy exploring new technologies
                through projects, competitions, and collaborative development.
              </p>
            </motion.div>

            {/* What I Do - Icon Cards */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-muted text-label-md uppercase tracking-widest mb-4">
                What I Do
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((item) => (
                  <motion.div
                    key={item.label}
                    className="glass-panel p-4 flex flex-col items-center gap-2 text-center group cursor-default"
                    whileHover={{
                      scale: 1.04,
                      borderColor: "rgba(124, 58, 237, 0.4)",
                    }}
                  >
                    <span className="material-symbols-outlined text-accent text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-secondary text-body-sm font-medium leading-tight">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-accent text-3xl">school</span>
            <h3 className="font-display text-display-sm text-primary">
              Education
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="glass-panel p-6 border-l-4 border-accent/50 group"
                whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.6)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h4 className="font-display text-body-lg text-primary font-semibold">
                  {edu.degree} — {edu.field}
                </h4>
                <p className="text-accent text-body-sm mt-1">
                  {edu.institution}
                </p>
                <p className="text-muted text-body-sm mt-1">
                  {edu.startDate} – {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-secondary text-body-sm mt-3">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-accent text-3xl">timeline</span>
            <h3 className="font-display text-display-sm text-primary">
              My Journey
            </h3>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:hidden" />

            <div className="flex flex-col gap-12 md:gap-16">
              {timeline.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      <motion.div
                        className="glass-panel p-6 md:p-8 relative overflow-hidden group"
                        whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.4)" }}
                      >
                        {/* Decorative gradient blob */}
                        <div className={`absolute ${isLeft ? "top-0 right-0" : "top-0 left-0"} w-32 h-32 bg-accent/5 blur-3xl rounded-full group-hover:bg-accent/10 transition-colors duration-500`} />

                        {/* Icon + Year Badge Row */}
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
                          <span className="material-symbols-outlined text-accent/40 text-lg">
                            {journeyIcons[index] || "arrow_forward"}
                          </span>
                          <span className="px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider border border-accent/20">
                            {event.year}
                          </span>
                        </div>

                        {/* Subtitle */}
                        {event.subtitle && (
                          <p className="text-accent/70 text-label-sm uppercase tracking-widest mb-2">
                            {event.subtitle}
                          </p>
                        )}

                        {/* Title */}
                        <h4 className="font-display text-body-lg md:text-xl text-primary font-semibold mb-3">
                          {event.title}
                        </h4>

                        {/* Description */}
                        <p className="text-secondary text-body-sm leading-relaxed">
                          {event.description}
                        </p>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    </div>

                    {/* Center Dot - Desktop */}
                    <div className="relative z-10 flex-shrink-0 hidden md:flex items-center justify-center">
                      <motion.div
                        className="w-6 h-6 rounded-full bg-accent border-4 border-background"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(124,58,237,0.4)",
                            "0 0 0 10px rgba(124,58,237,0)",
                            "0 0 0 0 rgba(124,58,237,0.4)",
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                      />
                    </div>

                    {/* Mobile Dot */}
                    <div className="relative z-10 flex-shrink-0 md:hidden absolute left-[-12px] top-6">
                      <div className="w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    </div>

                    {/* Empty spacer for desktop alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
