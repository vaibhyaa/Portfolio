"use client";

import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
  error: string;
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
    <section
      id="contactme"
      className="w-full px-4 md:px-[10%] py-28 bg-linear-to-b from-slate-50 via-white to-white scroll-mt-24"
    >
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
          Contact Me
        </h2>

        <div className="w-24 h-0.75 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-14 grid md:grid-cols-2 gap-16">
        {/* ================= FORM ================= */}
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit((formData: FormData) => {
            // console.log(formData);
            // reset();
            try {
              setIsSending(true);

              console.log(formData); // later we will send this to email service

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
          <div className="relative">
            <label className="text-base font-semibold text-slate-700 mb-2 block tracking-wide">
              Name
            </label>

            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500 transition"
            />

            {errors.name && (
              <p className="text-red-500 font-semibold text-base mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-base font-semibold text-slate-700 mb-2 block tracking-wide">
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
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500 transition"
            />

            {errors.email && (
              <p className="text-red-500 font-semibold text-base mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-base font-semibold text-slate-700 mb-2 block tracking-wide">
              Message
            </label>

            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          {errors.message && (
            <p className="text-red-500 font-semibold text-base mt-1">{errors.message.message}</p>
          )}

          {/* Button */}
          <button
            disabled={isSending}
            type="submit"
            className="flex items-center justify-center gap-2 w-fit px-8 py-3 rounded-full
            bg-indigo-600 text-white
            hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1
            transition-all duration-300"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ================= CONTACT INFO ================= */}
        <div className="flex flex-col gap-10 justify-center">
          {/* Email */}
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-xl bg-indigo-100">
              <HiOutlineMail className="text-xl text-indigo-600" />
            </div>

            <p className="text-slate-700 text-lg">
              vaibhavshinde1318@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-xl bg-indigo-100">
              <FiPhone className="text-xl text-indigo-600" />
            </div>

            <p className="text-slate-700 text-lg">+91 7776963722</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-xl bg-indigo-100">
              <FiMapPin className="text-xl text-indigo-600" />
            </div>

            <p className="text-slate-700 text-lg">Pune, India</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/vaibhyaa"
              target="_blank"
              className="p-4 bg-slate-50 border border-slate-200 rounded-xl
              hover:scale-110 hover:shadow-md transition"
            >
              <FaGithub className="text-xl text-slate-700" />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-shinde-55a52b1b2/"
              target="_blank"
              className="p-4 bg-slate-50 border border-slate-200 rounded-xl
              hover:scale-110 hover:shadow-md transition"
            >
              <FaLinkedin className="text-xl text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
