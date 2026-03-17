
"use client";

import { experienceData, ExperienceItem } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import ExperienceDescription from "./ExperienceDescription";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 px-6 py-28 md:px-[8%] scroll-mt-24"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.12 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* ================= HEADER ================= */}
        <motion.div
          variants={item}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
            <HiSparkles className="text-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Professional Journey
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Work
            <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            My journey of building scalable applications, solving real business
            problems, and delivering polished user experiences across modern web
            stacks.
          </p>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500" />
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr]">
          {/* ===================================================== */}
          {/* LEFT SIDE PREMIUM SHOWCASE */}
          {/* ===================================================== */}
          <motion.div
            variants={item}
            className="relative flex min-h-175 items-center justify-center rounded-4xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="relative w-full max-w-3xl overflow-hidden rounded-[1.7rem] border border-slate-200 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-7">
              {/* animated glow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.35, 0.22] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.3, 0.18] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl"
              />

              <div className="relative z-10 flex min-h-175 flex-col justify-center">
                {/* top badge */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <FaBriefcase className="text-sm text-indigo-300" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      Experience Overview
                    </span>
                  </div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md"
                  >
                    <MdWorkHistory className="text-xl text-white" />
                  </motion.div>
                </div>

                {/* center image */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* floating badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md"
                    >
                      <FaBriefcase className="text-lg text-indigo-300" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md"
                    >
                      <div className="relative h-90 w-full overflow-hidden rounded-[1.6rem] sm:h-107.5">
                        <Image
                          src="/expBlack.svg"
                          alt="Experience Illustration"
                          fill
                          className="object-contain object-center p-4"
                          priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* bottom content */}
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    Building Real-World Products
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-300 md:text-[15px]">
                    Delivering scalable frontend experiences, backend
                    integrations, and production-ready solutions with clean,
                    maintainable code.
                  </p>

                  <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-400 via-blue-400 to-violet-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* RIGHT SIDE ADVANCED EXPERIENCE STACK */}
          {/* ===================================================== */}
          <motion.div
            variants={container}
            className="relative rounded-4xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="rounded-[1.7rem] border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 sm:p-6 md:p-8">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    Career Highlights
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                    Professional Timeline
                  </h3>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3">
                  <span className="text-sm font-semibold text-indigo-700">
                    Click any card to view details
                  </span>
                </div>
              </div>

              <div className="relative">
                {/* modern vertical line */}
                <div className="absolute left-5.75 top-2 bottom-2 w-0.5 bg-linear-to-b from-indigo-400 via-blue-400 to-violet-400" />

                <div className="space-y-6">
                  {experienceData.map((exp, index) => {
                    const Icon = exp.icon;

                    return (
                      <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -8 }}
                        className="group relative"
                      >
                        <div className="grid gap-4 sm:grid-cols-[46px_1fr] sm:gap-5">
                          {/* timeline icon */}
                          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-indigo-200">
                            <Icon className="text-lg" />
                          </div>

                          {/* experience card */}
                          <button
                            onClick={() => setSelectedExp(exp)}
                            className="relative w-full cursor-pointer overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-0 text-left shadow-md transition-all duration-300 group-hover:border-indigo-200 group-hover:shadow-2xl"
                          >
                            {/* hover glow */}
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-100 blur-2xl" />
                              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />
                            </div>

                            <div className="relative z-10 p-6 md:p-7">
                              {/* top row */}
                              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                  <h4 className="text-xl font-bold text-slate-900 md:text-2xl">
                                    {exp.position}
                                  </h4>

                                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5">
                                    <FaBriefcase className="text-sm text-indigo-600" />
                                    <span className="text-sm font-semibold text-indigo-700">
                                      {exp.companyName}
                                    </span>
                                  </div>
                                </div>

                                <div className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
                                  <span className="text-sm font-semibold text-slate-700">
                                    {exp.duration}
                                  </span>
                                </div>
                              </div>

                              {/* extra line */}
                              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                                Click to explore responsibilities, technologies,
                                and key contributions from this role.
                              </p>

                              {/* bottom row */}
                              <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                                  <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-indigo-500/70 via-blue-500/40 to-transparent" />
                                </div>

                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
                                  View Details
                                  <FaArrowRight className="text-xs" />
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================= MODAL ================= */}
      {selectedExp && (
        <ExperienceDescription
          experienceDescription={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      )}
    </section>
  );
};

export default Experience;
