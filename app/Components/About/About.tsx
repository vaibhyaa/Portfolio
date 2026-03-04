import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="aboutme"
      className="w-full px-3 md:px-[10%] py-28 bg-linear-to-b from-slate-50 via-white to-white scroll-mt-24"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Introduction
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-800">
          About Me
        </h2>

        <div className="w-24 h-0.75 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-14 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Profile Image */}
        <div className="relative w-64 sm:w-80 shrink-0">
          <Image
            src={assets.user_image}
            alt="Vaibhav Shinde"
            className="rounded-3xl object-cover shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <p className="text-slate-600 leading-relaxed text-lg mb-14">
            I’m a Fullstack Developer with over 3.5 years of experience
            building scalable, high-performance web applications. I focus on
            creating maintainable frontend architectures and robust backend
            systems that deliver real business value.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {infoList.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-slate-50 rounded-2xl p-6 text-center
                  border border-slate-200
                  hover:border-indigo-400
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300"
                >
                  <div className="flex justify-center mb-5">
                    <div
                      className="p-4 rounded-xl bg-indigo-50
                      group-hover:bg-indigo-100
                      transition duration-300"
                    >
                      <Icon className="text-2xl text-indigo-600 group-hover:scale-110 transition duration-300" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">
              Tools & Technologies
            </h4>

            <div className="flex flex-wrap gap-4">
              {toolsData.map((tool, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex items-center justify-center 
                  bg-slate-50 border border-slate-200 rounded-xl
                  hover:border-indigo-400
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all duration-300"
                >
                  <Image src={tool} alt="Tool" className="w-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;