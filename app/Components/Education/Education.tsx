//

import { educationData } from "@/assets/assets";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-24 px-6 md:px-[10%] bg-linear-to-b from-white bg-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            My Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-800">
            Education
          </h1>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* 🔥 Main Glass Container */}
        <div
          className="relative rounded-3xl p-8 md:p-12 
          bg-white/60 backdrop-blur-xl 
          border border-white/40 
          shadow-xl flex flex-col lg:flex-row gap-12"
        >
          {/* LEFT SIDE — Timeline */}
          <div className="flex-1 relative border-l-2 border-indigo-100 pl-8 space-y-10">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-sm 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 border border-slate-100"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute -left-10.5 top-6 w-10 h-10 
                  flex items-center justify-center 
                  bg-indigo-500 text-white rounded-full shadow-md"
                >
                  <FaGraduationCap className="text-lg" />
                </div>

                <h3 className="text-xl font-semibold text-slate-800">
                  {edu.degree}
                </h3>

                <p className="text-indigo-600 font-medium mt-1">
                  {edu.institution}
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  <b>{edu.duration}</b>
                </p>
                {/* <p className="text-sm text-slate-600 mt-3">
                  <span className="font-medium">Grade:</span> {edu.grade}
                </p> */}

                <p className="text-sm text-slate-600 mt-3">
                  <span className="font-medium"></span> {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE — Study Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-95">
              <Image
                src="/education.jpg"
                alt="Study Table"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
