"use client";

import React, { useEffect } from "react";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDescriptionType {
  title: string;
  description: string;
  githubUrl: string;
  tech?: string[];
  icon: IconType;
}

interface Props {
  projectDescription: ProjectDescriptionType;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 40,
    rotateX: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 24,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const ProjectDescription: React.FC<Props> = ({
  projectDescription,
  onClose,
}) => {
  const Icon = projectDescription.icon;

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 px-4 py-6 backdrop-blur-md"
        onClick={onClose}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
        >
          {/* ================= SOFT BACKGROUND GLOW ================= */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.18, 0.28, 0.18],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-300/35 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.14, 0.24, 0.14],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-sky-300/30 blur-3xl"
            />
            <div className="absolute inset-0 bg-linear-to-br from-white/55 via-white/30 to-slate-100/45" />
          </div>

          {/* ================= WATERMARK ICON ================= */}
          <motion.div
            animate={{
              rotate: [0, 6, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-10 -right-8 opacity-[0.045]"
          >
            <Icon className="text-[220px] text-slate-900 md:text-[260px]" />
          </motion.div>

          {/* ================= TOP BAR ================= */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-200/70 px-6 py-5 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                Project Overview
              </span>
            </div>

            <button
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-slate-900"
              aria-label="Close project details"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 max-h-[85vh] overflow-y-auto px-6 py-7 md:px-8 md:py-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* header */}
            <motion.div
              className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.06, rotate: 4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative flex h-18 w-18 shrink-0 items-center justify-center rounded-[1.5rem] border border-white/70 bg-linear-to-br from-indigo-500 via-sky-500 to-violet-500 text-white shadow-[0_14px_35px_rgba(99,102,241,0.28)]"
              >
                <div className="absolute inset-0 rounded-[1.5rem] bg-white/10" />
                <Icon className="relative z-10 text-3xl" />
              </motion.div>

              <div className="min-w-0">
                <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
                  {projectDescription.title}
                </h2>

                <p className="mt-3 text-sm text-slate-600 md:text-base">
                  Modern web application crafted with scalable architecture,
                  polished UI, and real-world functionality.
                </p>
              </div>
            </motion.div>

            {/* divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="mt-7 h-[3px] rounded-full bg-linear-to-r from-indigo-500 via-sky-500 to-transparent"
            />

            {/* description block */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.4 }}
              className="mt-8 rounded-[1.7rem] border border-white/80 bg-white/72 p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Project Details
                </h3>
              </div>

              <p className="text-sm leading-8 text-slate-700 md:text-[15px]">
                {projectDescription.description}
              </p>
            </motion.div>

            {/* tech stack */}
            {projectDescription.tech && projectDescription.tech.length > 0 && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.4 }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Tech Stack
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.28,
                      },
                    },
                  }}
                >
                  {projectDescription.tech.map((item, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85, y: 8 },
                        show: { opacity: 1, scale: 1, y: 0 },
                      }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md md:text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* action buttons */}
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={projectDescription.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-indigo-600 via-sky-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(99,102,241,0.28)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(99,102,241,0.35)]"
              >
                <FiGithub size={18} />
                View Repository
                <FiExternalLink size={16} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Close Details
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDescription;
