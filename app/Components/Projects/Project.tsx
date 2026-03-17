// "use client";

// import { projectList } from "@/assets/assets";
// import { useState } from "react";
// import { FaCode, FaArrowRight } from "react-icons/fa";
// import ProjectDescription from "./ProjectDescription";
// import { motion } from "framer-motion";

// const Project = () => {
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   return (
//     <section
//       id="projects"
//       className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 px-6 py-28 md:px-[8%]"
//     >
//       {/* ================= BACKGROUND GLOW ================= */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
//         <div className="absolute right-[-8%] bottom-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.65 }}
//           viewport={{ once: false, amount: 0.25 }}
//           className="mb-16 text-center"
//         >
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-indigo-500" />
//             <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
//               My Work
//             </span>
//           </div>

//           <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
//             Featured Projects
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
//             A collection of modern web applications built with a focus on clean
//             UI, scalable architecture, and real-world functionality.
//           </p>

//           <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500" />
//         </motion.div>

//         {/* ================= WRAPPER ================= */}
//         <div className="rounded-4xl border border-white/40 bg-white/50 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-2xl md:p-6">
//           {/* ================= HORIZONTAL SCROLL ================= */}
//           <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//             {projectList.map((project, index) => {
//               const Icon = project.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   onClick={() => setSelectedProject(project)}
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 0.55,
//                     delay: index * 0.1,
//                   }}
//                   viewport={{ once: false, amount: 0.2 }}
//                   whileHover={{ y: -8 }}
//                   className="group relative flex min-h-105 min-w-[320px] cursor-pointer flex-col overflow-hidden rounded-4xl border border-slate-200/80 bg-linear-to-br from-slate-900 via-slate-850 to-slate-800 p-6 shadow-xl md:min-h-110 md:min-w-95"
//                 >
//                   {/* ================= BACKGROUND ANIMATED GLOW ================= */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.08, 1],
//                       opacity: [0.25, 0.4, 0.25],
//                     }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl"
//                   />
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.12, 1],
//                       opacity: [0.18, 0.3, 0.18],
//                     }}
//                     transition={{
//                       duration: 10,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
//                   />

//                   {/* ================= WATERMARK ICON ================= */}
//                   <motion.div
//                     animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -bottom-10 -right-8 opacity-[0.06]"
//                   >
//                     <Icon className="text-[220px] text-white" />
//                   </motion.div>

//                   {/* ================= TOP BADGES ================= */}
//                   <div className="relative z-10 flex items-center justify-between">
//                     <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
//                       <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
//                         Project {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </div>

//                     <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/70 backdrop-blur-md">
//                       Premium Build
//                     </div>
//                   </div>

//                   {/* ================= TOP ICON ================= */}
//                   <motion.div
//                     whileHover={{ scale: 1.08, rotate: 4 }}
//                     className="relative z-10 mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow-lg"
//                   >
//                     <Icon className="text-2xl" />
//                   </motion.div>

//                   {/* ================= CONTENT AREA (GROWS) ================= */}
//                   <div className="relative z-10 mt-8 flex flex-1 flex-col">
//                     {/* text content */}
//                     <div>
//                       <h3 className="text-2xl font-bold leading-tight text-white">
//                         {project.title}
//                       </h3>

//                       <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-300 md:text-[15px]">
//                         {project.description}
//                       </p>
//                     </div>

//                     {/* ================= BOTTOM FIXED ACTION AREA ================= */}
//                     <div className="mt-auto pt-6">
//                       {/* divider */}
//                       <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-indigo-400 via-blue-400 to-transparent" />

//                       {/* actions */}
//                       <div className="mt-8 flex items-center justify-between gap-4">
//                         {/* github */}
//                         <motion.a
//                           whileHover={{ scale: 1.08 }}
//                           whileTap={{ scale: 0.96 }}
//                           href={project.githubUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           onClick={(e) => e.stopPropagation()}
//                           className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/20"
//                           aria-label={`Open ${project.title} GitHub repository`}
//                         >
//                           <FaCode className="text-xl" />
//                         </motion.a>

//                         {/* details button */}
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.97 }}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setSelectedProject(project);
//                           }}
//                           className="group/btn inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl"
//                         >
//                           View Details
//                           <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
//                         </motion.button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {selectedProject && (
//         <ProjectDescription
//           projectDescription={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </section>
//   );
// };

// export default Project;

"use client";

import { projectList } from "@/assets/assets";
import { useState } from "react";
import { FaCode, FaArrowRight } from "react-icons/fa";
import ProjectDescription from "./ProjectDescription";
import { motion } from "framer-motion";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 px-6 py-28 md:px-[8%]"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute right-[-8%] bottom-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: false, amount: 0.25 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              My Work
            </span>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Featured Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            A collection of modern web applications built with a focus on clean
            UI, scalable architecture, and real-world functionality.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500" />
        </motion.div>

        {/* ================= WRAPPER ================= */}
        <div className="rounded-4xl border border-white/40 bg-white/50 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-2xl md:p-6">
          {/* ================= HORIZONTAL SCROLL ================= */}
          <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {projectList.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group relative flex min-h-105 min-w-[320px] cursor-pointer flex-col overflow-hidden rounded-4xl border border-slate-300 bg-linear-to-br from-white via-slate-50 to-indigo-50 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.12)] transition-all duration-300 hover:border-slate-400 hover:shadow-[0_24px_70px_rgba(99,102,241,0.18)] md:min-h-110 md:min-w-95"
                >
                  {/* ================= BACKGROUND ANIMATED GLOW ================= */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.22, 0.35, 0.22],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-300/20 blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.16, 0.28, 0.16],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
                  />

                  {/* ================= WATERMARK ICON ================= */}
                  <motion.div
                    animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-10 -right-8 opacity-[0.08]"
                  >
                    <Icon className="text-[220px] text-indigo-200" />
                  </motion.div>

                  {/* ================= TOP BADGES ================= */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="inline-flex rounded-full border border-indigo-100 bg-white/80 px-4 py-2 backdrop-blur-md">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-700">
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">
                      Premium Build
                    </div>
                  </div>

                  {/* ================= TOP ICON ================= */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className="relative z-10 mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow-lg"
                  >
                    <Icon className="text-2xl" />
                  </motion.div>

                  {/* ================= CONTENT AREA (GROWS) ================= */}
                  <div className="relative z-10 mt-8 flex flex-1 flex-col">
                    {/* text content */}
                    <div>
                      <h3 className="text-2xl font-bold leading-tight text-slate-900">
                        {project.title}
                      </h3>

                      <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-600 md:text-[15px]">
                        {project.description}
                      </p>
                    </div>

                    {/* ================= BOTTOM FIXED ACTION AREA ================= */}
                    <div className="mt-auto pt-6">
                      {/* divider */}
                      <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-indigo-400 via-blue-400 to-transparent" />

                      {/* actions */}
                      <div className="mt-8 flex items-center justify-between gap-4">
                        {/* github */}
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-indigo-700 shadow-md backdrop-blur-md transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50"
                          aria-label={`Open ${project.title} GitHub repository`}
                        >
                          <FaCode className="text-xl" />
                        </motion.a>

                        {/* details button */}
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="group/btn inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl"
                        >
                          View Details
                          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
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
