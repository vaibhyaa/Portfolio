"use client";

import { projectList } from "@/assets/assets";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import ProjectDescription from "./ProjectDescription";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <section
      id="projects"
      className="w-full py-24 px-6 md:px-[8%] from-white bg-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mt-6 rounded-full" />
        </div>

        {/* 🔥 Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-6">
          {projectList.map((project, index) => {
            const Icon = project.icon;

            return (
              //   <div
              //     key={index}
              //     className="min-w-[260px] md:min-w-[280px] h-[360px]
              //     bg-white rounded-2xl p-8
              //     flex flex-col justify-between
              //     border border-slate-200
              //     shadow-sm
              //     transition-all duration-300
              //     hover:shadow-xl hover:-translate-y-2"
              //   >
              //     {/* Top Icon */}
              //     <div
              //       className="w-14 h-14 flex items-center justify-center
              //       bg-indigo-600 rounded-xl text-white"
              //     >
              //       <Icon className="text-2xl" />
              //     </div>

              //     {/* Content */}
              //     <div className="mt-6">
              //       <h3 className="text-xl font-bold text-slate-900">
              //         {project.title}
              //       </h3>

              //       <p className="text-sm text-slate-700 mt-4 leading-relaxed">
              //         {project.description}
              //       </p>
              //     </div>

              //     {/* Button */}
              //     <a
              //       href={project.githubUrl}
              //       target="_blank"
              //       className="mt-6 text-indigo-600 font-semibold hover:text-indigo-700 transition"
              //     >
              //       <FaCode className="text-4xl" />
              //     </a>
              //   </div>
              <div
                onClick={() => setSelectedProject(project)}
                key={index}
                className="relative min-w-[260px] md:min-w-[280px] h-[360px]
  bg-white rounded-2xl p-8
  flex flex-col justify-between
  border border-slate-200
  shadow-sm
  overflow-hidden
  transition-all duration-300
  hover:shadow-xl hover:-translate-y-2"
              >
                {/* 🔥 Watermark Background Icon */}
                <div className="absolute -bottom-9 -right-7 opacity-11">
                  <Icon className="text-[220px] text-black" />
                </div>

                {/* Top Icon */}
                <div
                  className="relative z-10 w-14 h-14 flex items-center justify-center 
    bg-gray-600 text-white rounded-xl"
                >
                  <Icon className="text-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-700 mt-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="relative z-10 mt-6 text-indigo-600 font-semibold hover:text-indigo-700 transition"
                >
                  <FaCode className="text-4xl" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Rendered Once */}
      {selectedProject && (
        <ProjectDescription
          projectDescription={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;
