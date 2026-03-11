import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="aboutme"
      className="w-full px-4 md:px-[10%] py-28 bg-linear-to-b from-slate-50 via-white to-white scroll-mt-24"
    >
      {/* ================= HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Introduction
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
          About Me
        </h2>

        <div className="w-24 h-0.75 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-14 flex flex-col lg:flex-row items-center gap-20">
        {/* ================= PROFILE IMAGE ================= */}
        <div className="relative w-64 sm:w-80 h-80 sm:h-105 shrink-0">
          <Image
            src="/user-image.png" // Make sure this exists inside /public
            alt="Vaibhav Shinde"
            fill
            className="rounded-3xl object-cover shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1">
          {/* Description */}
          <p className="text-slate-600 leading-relaxed text-lg mb-14">
            Full Stack Software Engineer with 3.5+ years of experience
            developing modern web applications, specializing in React-based
            frontend development with working knowledge of Node.js, REST APIs,
            and database integration. Experienced in building responsive user
            interfaces, contributing to backend services, and conducting basic
            unit and integration testing to improve application stability.
          </p>

          {/* ================= INFO CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {infoList.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-8 text-center
                  border border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  hover:border-indigo-500
                  transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 rounded-2xl bg-indigo-100
                      group-hover:bg-indigo-600
                      transition-all duration-300"
                    >
                      <Icon
                        className="text-3xl text-indigo-600 
                        group-hover:text-white 
                        group-hover:scale-110 
                        transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ================= TOOLS SECTION ================= */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">
              Tools & Technologies
            </h4>

            <div className="flex flex-wrap gap-4">
              {toolsData.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={index}
                    className="group w-14 h-14 flex items-center justify-center 
                    bg-slate-50 border border-slate-200 rounded-xl
                    hover:scale-125
                    hover:shadow-md
                    hover:-translate-y-1
                    transition-all duration-300"
                  >
                    <Icon className="text-2xl text-slate-700 group-hover:scale-137 transition duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
