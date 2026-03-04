"use client";

import { experienceData, ExperienceItem } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import ExperienceDescription from "./ExperienceDescription";

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <section
      id="experience"
      className="w-full pt-32 pb-24 px-6 md:px-[10%] 
      bg-linear-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Experience
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Glass Container */}
        <div
          className="relative rounded-3xl p-10 md:p-14
          bg-white/40 backdrop-blur-2xl
          border border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          flex flex-col lg:flex-row gap-16"
        >
          {/* LEFT SIDE — Timeline */}
          <div className="flex-1 relative border-l-2 border-indigo-200 pl-10 space-y-12">
            {experienceData.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedExp(exp)}
                  className="cursor-pointer relative bg-white/70 backdrop-blur-lg
                  rounded-2xl p-8 shadow-md border border-white/50
                  transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute -left-[52px] top-8 w-11 h-11
                    flex items-center justify-center
                    bg-linear-to-r from-indigo-500 to-blue-500
                    text-white rounded-full shadow-lg"
                  >
                    <Icon className="text-lg" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800">
                    {exp.position}
                  </h3>

                  <p className="text-indigo-600 font-medium mt-1">
                    {exp.companyName}
                  </p>

                  <p className="text-sm text-slate-500 mt-1 font-medium">
                    {exp.duration}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE — Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-[420px]">
              <Image
                src="/expBlack.svg"
                alt="Experience Illustration"
                fill
                className="object-contain rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Rendered Once */}
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
