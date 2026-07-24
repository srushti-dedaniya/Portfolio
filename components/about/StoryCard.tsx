"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function StoryCard() {
  return (
    <section className="mb-48">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={fadeInUp}
          className="md:col-span-8 glass-pane rounded-[32px] overflow-hidden relative group min-h-[400px]"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 bg-surface-container-high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-headline-lg text-white mb-4">
              The Engine Room
            </h3>
            <p className="text-on-surface-variant max-w-xl">
              Deep dives into the core of the galaxy where code translates into
              energy. My workspace is an experimental lab of liquid light.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="md:col-span-4 glass-pane rounded-[32px] flex flex-col justify-center items-center p-12 text-center border border-tertiary/20 solar-glow"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-primary">
              wb_sunny
            </span>
          </div>
          <h4 className="font-headline-md text-white mb-4">
            12k+ Light Hours
          </h4>
          <p className="text-on-surface-variant">
            Spent refining logic gates and sculpting interfaces in the Solar
            Flare spectrum.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="md:col-span-4 glass-pane rounded-[32px] p-10 flex flex-col justify-end"
        >
          <span className="material-symbols-outlined text-tertiary text-5xl mb-6">
            api
          </span>
          <h4 className="font-headline-md text-white mb-2">
            Connective Core
          </h4>
          <p className="text-on-surface-variant">
            Seamlessly integrating diverse technology stacks into a singular,
            radiant experience.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="md:col-span-8 glass-pane rounded-[32px] overflow-hidden relative min-h-[300px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-display-lg text-white text-4xl mb-2">
                Evolving Flux
              </h3>
              <p className="font-label-md text-primary tracking-widest uppercase">
                Continuous Innovation
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
