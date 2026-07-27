"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certificate } from "./CertificatesMarquee";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

const colorMap: Record<string, string> = {
  blue: "from-blue-500/20 to-blue-600/5",
  purple: "from-purple-500/20 to-purple-600/5",
  red: "from-red-500/20 to-red-600/5",
  emerald: "from-emerald-500/20 to-emerald-600/5",
};

const categoryColorMap: Record<string, string> = {
  Competition: "bg-emerald-500/20 text-emerald-400",
  Workshop: "bg-blue-500/20 text-blue-400",
  "Online Course": "bg-purple-500/20 text-purple-400",
  Community: "bg-red-500/20 text-red-400",
  Certification: "bg-amber-500/20 text-amber-400",
};

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [certificate]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-light transition-all duration-200"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {certificate.imageUrl ? (
              <div
                className={`h-56 md:h-72 bg-cover bg-center bg-gradient-to-br ${colorMap[certificate.color]}`}
                style={{ backgroundImage: `url('${certificate.imageUrl}')` }}
              />
            ) : (
              <div
                className={`h-56 md:h-72 bg-gradient-to-br ${colorMap[certificate.color]} flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-7xl text-white/15">
                  badge
                </span>
              </div>
            )}

            <div className="p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    categoryColorMap[certificate.category] || "bg-accent/20 text-accent"
                  }`}
                >
                  {certificate.category}
                </span>
                <span className="text-muted text-body-sm">
                  {certificate.issuer}
                </span>
                <span className="text-muted">·</span>
                <span className="text-muted text-body-sm">
                  {certificate.date}
                </span>
              </div>

              <h2 className="font-display text-display-md text-primary">
                {certificate.title}
              </h2>

              <p className="text-secondary text-body-lg leading-relaxed">
                {certificate.longDescription || certificate.description}
              </p>

              {certificate.credentialUrl && (
                <div className="flex gap-3 pt-2">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span className="material-symbols-outlined text-lg">
                      verified
                    </span>
                    View Credential
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
