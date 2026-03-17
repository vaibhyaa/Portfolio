


"use client";

import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

interface ExperienceDescription {
  position: string;
  companyName: string;
  duration: string;
  description: string[];
}

interface Props {
  experienceDescription: ExperienceDescription;
  onClose: () => void;
}

const ExperienceDescription: React.FC<Props> = ({
  experienceDescription,
  onClose,
}) => {
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
        className="fixed inset-0 z-999 flex items-center justify-center bg-slate-900/35 px-4 py-6 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Modal */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 50 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
        >
          {/* soft ambient glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-300/25 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          </div>

          {/* close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
          >
            <FiX size={20} />
          </button>

          <div className="relative z-10 max-h-[85vh] overflow-y-auto p-5 sm:p-6 md:p-8">
            {/* ================= HERO HEADER - LIGHT GLASS ================= */}
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl sm:p-7">
              {/* floating glow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-300/20 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
              />

              <div className="relative z-10">
                {/* top badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
                  <HiSparkles className="text-indigo-500" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Experience Details
                  </span>
                </div>

                {/* title */}
                <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
                  {experienceDescription.position}
                </h2>

                {/* meta info */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
                    <FaBuilding className="text-sm text-indigo-500" />
                    <span className="text-sm font-semibold text-slate-800">
                      {experienceDescription.companyName}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
                    <FaCalendarAlt className="text-sm text-blue-500" />
                    <span className="text-sm font-semibold text-slate-800">
                      {experienceDescription.duration}
                    </span>
                  </div>
                </div>

                {/* bottom accent line */}
                <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500" />
              </div>
            </div>

            {/* ================= CONTENT BLOCK ================= */}
            <div className="mt-6 rounded-[1.8rem] border border-slate-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl sm:p-6 md:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    Key Contributions
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">
                    Responsibilities & Impact
                  </h3>
                </div>

                <div className="hidden rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-3 sm:block">
                  <span className="text-sm font-semibold text-indigo-700">
                    Professional Highlights
                  </span>
                </div>
              </div>

              {/* description cards */}
              <div className="space-y-4">
                {experienceDescription.description.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    whileHover={{ y: -3 }}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg sm:p-5"
                  >
                    {/* hover glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-100 blur-2xl" />
                    </div>

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow-md">
                        <FaBriefcase className="text-xs" />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm leading-7 text-slate-700 md:text-[15px]">
                          {point}
                        </p>

                        <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-500/70 via-blue-500/40 to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceDescription;
