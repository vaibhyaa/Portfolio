

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { infoList, toolsData } from "@/assets/assets";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const techLabels = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Tailwind",
    "Git",
    "GitHub",
  ];

  const techColors = [
    "text-orange-500 border-orange-200 bg-orange-50", // HTML
    "text-blue-500 border-blue-200 bg-blue-50", // CSS
    "text-yellow-500 border-yellow-200 bg-yellow-50", // JS
    "text-cyan-500 border-cyan-200 bg-cyan-50", // React
    "text-slate-900 border-slate-300 bg-slate-50", // Next
    "text-green-600 border-green-200 bg-green-50", // Node
    "text-gray-700 border-gray-300 bg-gray-50", // Express
    "text-green-500 border-green-200 bg-green-50", // Mongo
    "text-sky-600 border-sky-200 bg-sky-50", // TS
    "text-cyan-500 border-cyan-200 bg-cyan-50", // Tailwind
    "text-orange-600 border-orange-200 bg-orange-50", // Git
    "text-slate-900 border-slate-300 bg-slate-50", // GitHub
  ];

  return (
    <section
      id="aboutme"
      className="relative isolate overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 px-4 py-24 md:px-[8%] lg:px-[10%] scroll-mt-24"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-300/15 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= SECTION HEADER ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <motion.p
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600"
        >
          Introduction
        </motion.p>

        <motion.h2
          variants={item}
          className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base"
        >
          A quick overview of my experience, strengths, and the technologies I
          use to build modern web applications.
        </motion.p>

        <motion.div
          variants={item}
          className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500"
        />
      </motion.div>

      {/* ================= MAIN LAYOUT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.18 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr]"
      >
        {/* ================= LEFT VISUAL PANEL ================= */}
        <motion.div
          variants={item}
          className="relative flex min-h-175 items-center justify-center rounded-4xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl"
        >
          <div className="relative w-full max-w-147.5 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-linear-to-br from-slate-100 to-white p-3">
            <div className="relative h-145 w-full overflow-hidden rounded-3xl">
              <motion.div
                animate={{ scale: [1, 1.03, 1], y: [0, -6, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/VaibhavshindeImage.jpeg"
                  alt="Vaibhav Shinde"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>

            {/* floating tech badge 1 */}

            {/* <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-2 top-8 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md md:flex"
            >
              <FaReact className="text-xl text-cyan-500" />
              <span className="text-sm font-bold text-slate-700">React.js</span>
            </motion.div> */}

            {/* floating tech badge 2 */}
            {/* <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-1/3 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md md:flex"
            >
              <SiJavascript className="text-xl text-yellow-500" />
              <span className="text-sm font-bold text-slate-700">
                JavaScript
              </span>
            </motion.div> */}

            {/* floating tech badge 3 */}
            {/* <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 -left-2 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md md:flex"
            >
              <FaNodeJs className="text-xl text-green-600" />
              <span className="text-sm font-bold text-slate-700">Node.js</span>
            </motion.div> */}

            {/* floating tech badge 4 */}
            {/* <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-4 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md md:flex"
            >
              <SiMongodb className="text-xl text-green-500" />
              <span className="text-sm font-bold text-slate-700">MongoDB</span>
            </motion.div> */}
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT PANEL ================= */}
        <motion.div
          variants={container}
          className="rounded-4xl border border-slate-200 bg-white/85 p-6 shadow-xl backdrop-blur-md md:p-8 xl:p-10"
        >
          {/* top label */}
          <motion.div variants={item} className="mb-5">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              Full Stack Web Developer
            </span>
          </motion.div>

          {/* main heading */}
          <motion.h3
            variants={item}
            className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl"
          >
            Building modern, responsive & scalable web experiences with a strong
            frontend focus.
          </motion.h3>

          {/* description */}
          <motion.p
            variants={item}
            className="mt-6 text-sm leading-7 text-slate-600 md:text-base md:leading-8"
          >
            I’m a Full Stack Software Engineer from Pune, India with{" "}
            <span className="font-semibold text-slate-900">
              3.5+ years of experience
            </span>{" "}
            building production-ready web applications. My core strength lies in{" "}
            <span className="font-semibold text-slate-900">
              React-based frontend development
            </span>{" "}
            while also contributing to backend APIs, database integration, and
            overall application stability.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8"
          >
            I enjoy crafting clean user interfaces, reusable components, and
            scalable architecture that helps teams ship faster and build better
            user experiences.
          </motion.p>

          {/* quick stats */}
          <motion.div
            variants={container}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <p className="text-xl font-bold text-slate-900 md:text-2xl">
                3.5+
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                Years Exp.
              </p>
            </motion.div>

            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <p className="text-xl font-bold text-slate-900 md:text-2xl">
                10+
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                Technologies
              </p>
            </motion.div>

            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <p className="text-xl font-bold text-slate-900 md:text-2xl">
                UI + API
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                Core Focus
              </p>
            </motion.div>

            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <p className="text-xl font-bold text-slate-900 md:text-2xl">
                Clean
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                Code Style
              </p>
            </motion.div>
          </motion.div>

          {/* info cards */}
          <motion.div
            variants={container}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {infoList.slice(0, 4).map((itemData) => {
              const Icon = itemData.icon;

              return (
                <motion.div
                  key={itemData.title}
                  variants={cardItem}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-blue-500 shadow-md">
                      <Icon className="text-xl text-white" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {itemData.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {itemData.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* tools / tech stack */}
          <motion.div variants={item} className="mt-8">
            <h4 className="text-base font-semibold text-slate-900 md:text-lg">
              Core Tech Stack
            </h4>

            <motion.div
              variants={container}
              className="mt-5 flex flex-wrap gap-3"
            >
              {toolsData.map((tool, index) => {
                const Icon = tool.icon;
                const label = techLabels[index] || "Tech";
                const colorClasses =
                  techColors[index] ||
                  "text-slate-700 border-slate-200 bg-slate-50";

                return (
                  <motion.div
                    key={index}
                    variants={cardItem}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md ${colorClasses}`}
                  >
                    <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-semibold md:text-sm">
                      {label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
