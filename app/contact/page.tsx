"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";
import WorldMap from "@/components/contact/WorldMap";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-primary">
              sensors
            </span>
            <span className="font-label-sm text-primary uppercase tracking-[0.2em]">
              Signal Established
            </span>
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
            Mission <span className="text-primary">Control</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            Ready to ignite the next solar cycle of innovation? Bridge the
            distance between vision and reality. Send a transmission to the core.
          </p>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <WorldMap />
        </div>
        <div className="lg:col-span-5">
          <ContactForm />
        </div>
      </div>

      <SocialLinks />
    </main>
  );
}
