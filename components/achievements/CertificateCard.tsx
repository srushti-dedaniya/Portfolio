"use client";

import { motion } from "framer-motion";
import { Certificate } from "@/types/project";
import { fadeInUp } from "@/lib/animations";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-pane rounded-[24px] p-6 group hover:-translate-y-2 transition-transform duration-500 flex items-center gap-6"
    >
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-2xl text-primary">
          verified
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="font-headline-md text-on-surface mb-1">
          {certificate.title}
        </h3>
        <p className="font-label-sm text-on-surface-variant">
          {certificate.issuer}
        </p>
        <span className="font-label-sm text-primary">{certificate.date}</span>
      </div>
      {certificate.credentialUrl && (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">open_in_new</span>
        </a>
      )}
    </motion.div>
  );
}
