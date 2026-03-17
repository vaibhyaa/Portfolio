

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 px-6 sm:px-8 lg:px-12 xl:px-16 pt-28 md:pt-32 pb-16 md:pb-20"
    >
      {/* ================= FULL SECTION BACKGROUND IMAGE ================= */}
      <motion.div
        className="absolute inset-0 z-1 pointer-events-none"
        animate={{ scale: [1, 1.04, 1], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/developerImage.png"
          alt="Background design"
          fill
          priority
          className="object-cover opacity-[0.01] md:opacity-[0.12]"
        />
      </motion.div>

      {/* ================= OVERLAY FOR READABILITY ================= */}
      <div className="absolute inset-0 z-1 bg-white/82" />

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 z-50 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-16 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="mb-5 inline-flex">
            <span className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-indigo-700 shadow-sm">
              Open to Frontend / Fullstack Opportunities
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-sm md:text-base font-medium text-slate-600"
          >
            Hi, I&apos;m{" "}
            <span className="font-bold text-slate-800">Vaibhav Shinde</span> 👋
          </motion.p>

          {/* Main title */}
          <motion.h1
            variants={item}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-5xlxl"
          >
            Building clean, scalable
            <span className="block bg-linear-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              web experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-5 max-w-xl mx-auto lg:mx-0 text-sm md:text-base leading-7 text-slate-600"
          >
            Fullstack Web Developer from Pune, India with{" "}
            <span className="font-semibold text-slate-800">
              3.5+ years of experience
            </span>{" "}
            building modern, scalable applications using React, Next.js,
            Node.js, MongoDB, and Javascript.
          </motion.p>

          {/* Proof points */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-slate-700 shadow-sm">
              React / Next.js
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-slate-700 shadow-sm">
              Node.js / APIs
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-slate-700 shadow-sm">
              Clean UI + Performance
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contactme"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              <HiOutlineMail className="text-base md:text-lg" />
              Contact Me
              <FaArrowRight className="text-xs md:text-sm transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Vaibhav-Shinde.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm md:text-base font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 hover:shadow-md"
            >
              <FaDownload className="text-xs md:text-sm" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-4 lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/vaibhyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white p-3.5 shadow-md transition hover:shadow-lg"
            >
              <FaGithub className="text-lg md:text-xl text-slate-700" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/vaibhav-shinde-55a52b1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white p-3.5 shadow-md transition hover:shadow-lg"
            >
              <FaLinkedin className="text-lg md:text-xl text-slate-700" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex items-center justify-center mt-6 lg:mt-0"
        >
          {/* Main profile card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-sm md:max-w-md"
          >
            <div className="rounded-4xl border border-white/70 bg-white/90 p-5 md:p-6 shadow-2xl backdrop-blur-md">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-72 md:w-72">
                <Image
                  src="/VaibhavshindeImage.jpeg"
                  alt="Vaibhav Shinde"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="mt-5 md:mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Vaibhav Shinde
                </h3>
                <p className="mt-2 text-xs md:text-sm font-medium text-slate-600">
                  Fullstack Web Developer • React • Next.js • Node.js
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating tech cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-10 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:flex items-center gap-3"
          >
            <FaReact className="text-cyan-500 text-xl" />
            <span className="text-sm font-bold text-slate-700">React</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-8 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:flex items-center gap-3"
          >
            <SiNextdotjs className="text-black text-xl" />
            <span className="text-sm font-bold text-slate-700">Next.js</span>
          </motion.div>

          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 bottom-42 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:flex items-center gap-3"
          >
            <FaNodeJs className="text-green-600 text-xl" />
            <span className="text-sm font-bold text-slate-700">Node.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-44 z-20 hidden rounded-2xl border border-yellow-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md lg:flex items-center gap-3"
          >
            <div className="rounded-xl bg-yellow-100 p-2">
              <SiJavascript className="text-yellow-500 text-lg" />
            </div>
            <span className="text-sm font-bold text-slate-700">JavaScript</span>
          </motion.div>

          <motion.div
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-12 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:flex items-center gap-3"
          >
            <SiMongodb className="text-green-700 text-xl" />
            <span className="text-sm font-bold text-slate-700">MongoDB</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 bottom-0 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:flex items-center gap-3"
          >
            <SiTypescript className="text-blue-600 text-xl" />
            <span className="text-sm font-bold text-slate-700">TypeScript</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-400">
          <div className="mt-2 h-2 w-1 rounded-full bg-slate-400"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
