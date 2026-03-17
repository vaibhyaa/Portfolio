
"use client";

import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSending, setIsSending] = useState(false);

  return (
    <motion.section
      id="contactme"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.2 }}
      className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 px-4 py-28 md:px-[8%] scroll-mt-24"
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
      />

      {/* ================= HEADER ================= */}
      <div className="relative z-10 mx-auto mb-20 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Let’s Connect
        </div>

        <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
          Contact Me
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
          Have a project idea, freelance opportunity, or full-time role? Let’s
          connect and build something impactful together.
        </p>

        <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-linear-to-r from-indigo-400 via-blue-400 to-violet-400" />
      </div>

      {/* ================= MAIN WRAPPER ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 mx-auto grid max-w-7xl gap-8 rounded-4xl border border-slate-200 bg-white/80 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr] md:p-8"
      >
        {/* ================= FORM PANEL ================= */}
        <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-linear-to-br from-white via-slate-50 to-white p-6 sm:p-8">
          {/* subtle glow */}
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl"
          />

          <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                I usually reply quickly for project discussions and job
                opportunities.
              </p>
            </div>

            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(async (formData: FormData) => {
                try {
                  setIsSending(true);

                  console.log(formData);

                  toast.success("Message sent successfully!");
                  reset();
                } catch (error) {
                  toast.error("Something went wrong!");
                } finally {
                  setIsSending(false);
                }
              })}
            >
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition duration-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter valid email",
                    },
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition duration-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition duration-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSending}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FiSend className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </div>

        {/* ================= CONTACT INFO PANEL ================= */}
        <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-indigo-50/50 p-6 sm:p-8">
          {/* glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.16, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl"
          />

          <div className="relative z-10 flex h-full flex-col">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Contact Details
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl">
                Let’s Build Together
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Whether it’s a freelance project, collaboration, or a software
                engineering opportunity, I’d love to hear from you.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-8 flex flex-col gap-4">
              {[
                {
                  icon: HiOutlineMail,
                  label: "Email",
                  text: "vaibhavshinde1318@gmail.com",
                  href: "mailto:vaibhavshinde1318@gmail.com",
                  iconColor: "text-red-500",
                },
                {
                  icon: FiPhone,
                  label: "Phone",
                  text: "+91 7776963722",
                  href: "tel:+917776963722",
                  iconColor: "text-emerald-500",
                },
                {
                  icon: FiMapPin,
                  label: "Location",
                  text: "Pune, India",
                  href: "#",
                  iconColor: "text-indigo-500",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm transition duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                      <Icon className={`text-xl ${item.iconColor}`} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-medium text-slate-700 sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );

                return item.href !== "#" ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="mt-auto pt-8">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Find me on
              </p>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/vaibhyaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:bg-slate-50"
                >
                  <FaGithub className="text-2xl text-slate-700 transition duration-300 group-hover:text-slate-900" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/vaibhav-shinde-55a52b1b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:bg-slate-50"
                >
                  <FaLinkedin className="text-2xl text-blue-600 transition duration-300 group-hover:text-blue-700" />
                </motion.a>
              </div>

              {/* bottom line */}
              <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />

              <p className="mt-5 text-xs leading-6 text-slate-500">
                Open to full-time roles, freelance work, and collaborative
                product development opportunities.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;