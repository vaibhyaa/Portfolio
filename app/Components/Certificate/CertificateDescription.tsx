


"use client";

import React, { useEffect } from "react";
import { FiX, FiExternalLink, FiCalendar } from "react-icons/fi";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateDescriptionType {
  icon: IconType;
  name: string;
  description: string;
  completedAt: string;
  credentialUrl: string;
  skills: string[];
}

interface Props {
  certificateDescription: CertificateDescriptionType;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 30,
    transition: {
      duration: 0.25,
      ease: "easeInOut" as const,
    },
  },
};

const CertificateDescription: React.FC<Props> = ({
  certificateDescription,
  onClose,
}) => {
  const Icon = certificateDescription.icon;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/35 px-4 py-6 backdrop-blur-md"
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
        >
          {/* Animated Background Glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-indigo-400/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl"
          />

          {/* Inner Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 transition hover:bg-white hover:text-slate-900"
            >
              <FiX size={20} />
            </motion.button>

            {/* Top Header */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.35 }}
              className="flex flex-col gap-5 pr-12 sm:flex-row sm:items-start"
            >
              {/* Icon Block */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white/80 shadow-lg backdrop-blur-xl"
                >
                  <Icon className="text-3xl text-indigo-600" />
                </motion.div>
              </div>

              {/* Title + Meta */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Certified Achievement
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
                  {certificateDescription.name}
                </h2>

                <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
                  <FiCalendar className="text-indigo-500" />
                  <span>
                    Completed:{" "}
                    <span className="font-medium text-slate-900">
                      {certificateDescription.completedAt}
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.35 }}
              className="mt-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Overview
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600 md:text-[15px]">
                {certificateDescription.description}
              </p>
            </motion.div>

            {/* Skills */}
            {certificateDescription.skills &&
              certificateDescription.skills.length > 0 && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Skills Covered
                  </h3>

                  <motion.div
                    className="mt-4 flex flex-wrap gap-3"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {certificateDescription.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85, y: 8 },
                          show: { opacity: 1, scale: 1, y: 0 },
                        }}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}

            {/* CTA */}
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
            >
              <p className="text-sm text-slate-500">
                View the official credential verification link.
              </p>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={certificateDescription.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl"
              >
                View Credential
                <FiExternalLink className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateDescription;