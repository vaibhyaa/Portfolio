

"use client";

import { educationData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { MdSchool } from "react-icons/md";

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-linear-to-b from-white via-slate-50 to-slate-100 px-6 py-28 md:px-[8%] scroll-mt-24"
    >
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
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
              Academic Journey
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Education &
            <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Learning Path
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            A strong foundation in computer science and continuous learning that
            shaped my journey as a frontend-focused full stack developer.
          </p>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500" />
        </motion.div>

        {/* ================= MAIN PREMIUM GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr]">
          {/* ===================================================== */}
          {/*  LEFT SIDE - ADVANCED EDUCATION STACK */}
          {/* ===================================================== */}
          <motion.div
            variants={container}
            className="relative rounded-4xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="rounded-[1.7rem] border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 sm:p-6 md:p-8">
              <div className="mb-8 mt-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    Timeline Highlights
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                    Academic Timeline
                  </h3>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3">
                  <span className="text-sm font-semibold text-indigo-700">
                    Continuous Learning Mindset
                  </span>
                </div>
              </div>

              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-5.75 top-2 bottom-2 w-0.5 bg-linear-to-b from-indigo-400 via-blue-400 to-violet-400" />

                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative"
                    >
                      <div className="grid gap-4 sm:grid-cols-[46px_1fr] sm:gap-5">
                        {/* timeline icon */}
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-indigo-200">
                          <FaGraduationCap className="text-lg" />
                        </div>

                        {/* card */}
                        <div
                          className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-md transition-all duration-300
                          group-hover:shadow-2xl group-hover:border-indigo-200"
                        >
                          {/* hover glow */}
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-100 blur-2xl" />
                            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />
                          </div>

                          <div className="relative z-10">
                            {/* top row */}
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900 md:text-2xl">
                                  {edu.degree}
                                </h4>

                                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5">
                                  <FaUniversity className="text-sm text-indigo-600" />
                                  <span className="text-sm font-semibold text-indigo-700">
                                    {edu.institution}
                                  </span>
                                </div>
                              </div>

                              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
                                <FaCalendarAlt className="text-sm text-slate-500" />
                                <span className="text-sm font-semibold text-slate-700">
                                  {edu.duration}
                                </span>
                              </div>
                            </div>

                            {/* description */}
                            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-[15px]">
                              {edu.description}
                            </p>

                            {/* bottom accent */}
                            <div className="mt-6 flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-indigo-500" />
                              <div className="h-0.5 flex-1 rounded-full bg-linear-to-r from-indigo-500/70 via-blue-500/40 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/*  RIGHT SIDE - FEATURE PANEL */}
          {/* ===================================================== */}
          <motion.div
            variants={item}
            className="relative flex min-h-175 items-center justify-center rounded-4xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="relative w-full max-w-147.5 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-7">
              {/* background glow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl"
              />

              {/* FULL PANEL CONTENT */}
              <div className="relative z-10 flex min-h-170 flex-col justify-center">
                {/* TOP SMALL BADGE */}
                <div className="mb-8 flex justify-between items-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <FaGraduationCap className="text-indigo-300 text-sm" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      Education
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
                    <MdSchool className="text-xl text-white" />
                  </motion.div>
                </div>

                {/* CENTER IMAGE BLOCK */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* floating icon badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md"
                    >
                      <FaUniversity className="text-indigo-300 text-lg" />
                    </motion.div>

                    {/* image card */}
                    <motion.div
                      animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md"
                    >
                      <div className="relative h-90 w-full overflow-hidden rounded-[1.6rem] sm:h-105">
                        <Image
                          src="/education.jpg"
                          alt="Education"
                          fill
                          className="object-cover object-center"
                          priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    Building Strong Fundamentals
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-300 md:text-[15px]">
                    Focused on structured learning, technical concepts, and
                    problem-solving that support real-world software
                    development.
                  </p>

                  {/* bottom accent line */}
                  <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-400 via-blue-400 to-violet-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
