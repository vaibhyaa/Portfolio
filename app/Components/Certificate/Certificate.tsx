// "use client";

// import { certificateList } from "@/assets/assets";
// import React, { useState } from "react";
// import { GrCertificate } from "react-icons/gr";
// import { FiArrowRight } from "react-icons/fi";
// import { motion } from "framer-motion";
// import CertificateDescription from "./CertificateDescription";

// type CertificateType = {
//   name: string;
//   description: string;
//   icon: React.ComponentType<any>;
//   position?: string;
//   companyName?: string;
//   duration?: string;
//   completedAt?: string;
//   credentialUrl?: string;
//   skills?: string[];
// };

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 35 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: "easeOut",
//     },
//   },
// };

// const Certificate = () => {
//   const [selectedCertificate, setSelectedCertificate] =
//     useState<CertificateType | null>(null);

//   return (
//     <section
//       id="certificate"
//       className="relative w-full overflow-hidden bg-linear-to-b from-white via-slate-50 to-slate-100 px-6 py-28 md:px-[8%] scroll-mt-24"
//     >
//       {/* ================= BACKGROUND GLOW ================= */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-[-8%] top-14 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
//         <div className="absolute right-[-8%] bottom-8 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.65 }}
//           viewport={{ once: false, amount: 0.25 }}
//           className="mx-auto mb-18 max-w-3xl text-center"
//         >
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-indigo-500" />
//             <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
//               Learning Journey
//             </span>
//           </div>

//           <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-slate-900 md:gap-4 md:text-5xl">
//             <GrCertificate className="text-3xl text-indigo-600 md:text-4xl" />
//             <span>Certificates</span>
//             <GrCertificate className="text-3xl text-indigo-600 md:text-4xl" />
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
//             Certifications that reflect continuous learning, practical skill
//             development, and a strong focus on modern frontend and full stack
//             web technologies.
//           </p>

//           <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500" />
//         </motion.div>

//         {/* ================= PREMIUM GLASS WRAPPER ================= */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97, y: 20 }}
//           whileInView={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.55 }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-7"
//         >
//           {/* subtle wrapper glow */}
//           <div className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full bg-indigo-100/50 blur-3xl" />
//           <div className="pointer-events-none absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl" />

//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.15 }}
//             className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
//           >
//             {certificateList.map((eachCertificate, index) => {
//               const Icon = eachCertificate.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   variants={item}
//                   whileHover={{ y: -8 }}
//                   onClick={() => setSelectedCertificate(eachCertificate)}
//                   className="group relative flex min-h-90 cursor-pointer flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300"
//                 >
//                   {/* ================= CARD GLOW ================= */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.08, 1],
//                       opacity: [0.2, 0.32, 0.2],
//                     }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"
//                   />
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.1, 1],
//                       opacity: [0.15, 0.28, 0.15],
//                     }}
//                     transition={{
//                       duration: 10,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
//                   />

//                   {/* ================= WATERMARK ICON ================= */}
//                   <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-[0.05]">
//                     <Icon className="text-[120px] text-white" />
//                   </div>

//                   {/* ================= TOP BADGE ================= */}
//                   <div className="relative z-10 mb-5 flex items-center justify-between">
//                     <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
//                       <GrCertificate className="text-xs text-indigo-300" />
//                       <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
//                         Certificate
//                       </span>
//                     </div>

//                     <motion.div
//                       whileHover={{ rotate: 8, scale: 1.08 }}
//                       className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur-md"
//                     >
//                       <Icon className="text-xl" />
//                     </motion.div>
//                   </div>

//                   {/* ================= CONTENT ================= */}
//                   <div className="relative z-10 flex flex-1 flex-col">
//                     {/* ================= TOP CONTENT ================= */}
//                     <div>
//                       <h3 className="text-xl font-bold leading-snug text-white">
//                         {eachCertificate.name}
//                       </h3>

//                       <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-300">
//                         {eachCertificate.description}
//                       </p>
//                     </div>

//                     {/* ================= BOTTOM FIXED INFO ================= */}
//                     <div className="mt-auto pt-5 min-h-27.5">
//                       {/* metadata */}
//                       {eachCertificate.completedAt && (
//                         <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300">
//                           Completed:{" "}
//                           <span className="text-white">
//                             {eachCertificate.completedAt}
//                           </span>
//                         </div>
//                       )}

//                       {/* skills preview */}
//                       {eachCertificate.skills &&
//                         eachCertificate.skills.length > 0 && (
//                           <div className="mt-4 flex flex-wrap gap-2">
//                             {eachCertificate.skills
//                               .slice(0, 3)
//                               .map((skill, i) => (
//                                 <span
//                                   key={i}
//                                   className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-medium text-slate-200"
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}

//                             {eachCertificate.skills.length > 3 && (
//                               <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-medium text-slate-300">
//                                 +{eachCertificate.skills.length - 3} more
//                               </span>
//                             )}
//                           </div>
//                         )}
//                     </div>

//                     {/* ================= BUTTON ALWAYS BOTTOM ================= */}
//                     <div className="pt-7">
//                       <motion.button
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setSelectedCertificate(eachCertificate);
//                         }}
//                         className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl"
//                       >
//                         View Details
//                         <FiArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {selectedCertificate && (
//         <CertificateDescription
//           certificateDescription={selectedCertificate}
//           onClose={() => setSelectedCertificate(null)}
//         />
//       )}
//     </section>
//   );
// };

// export default Certificate;







"use client";

import { certificateList } from "@/assets/assets";
import React, { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CertificateDescription from "./CertificateDescription";

type CertificateType = {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  position?: string;
  companyName?: string;
  duration?: string;
  completedAt?: string;
  credentialUrl?: string;
  skills?: string[];
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);

  return (
    <section
      id="certificate"
      className="relative w-full overflow-hidden bg-linear-to-b from-white via-slate-50 to-slate-100 px-6 py-28 md:px-[8%] scroll-mt-24"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-14 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute right-[-8%] bottom-8 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto mb-18 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Learning Journey
            </span>
          </div>

          <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-slate-900 md:gap-4 md:text-5xl">
            <GrCertificate className="text-3xl text-indigo-600 md:text-4xl" />
            <span>Certificates</span>
            <GrCertificate className="text-3xl text-indigo-600 md:text-4xl" />
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Certifications that reflect continuous learning, practical skill
            development, and a strong focus on modern frontend and full stack
            web technologies.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-violet-500" />
        </motion.div>

        {/* ================= PREMIUM GLASS WRAPPER ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-7"
        >
          {/* subtle wrapper glow */}
          <div className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full bg-indigo-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {certificateList.map((eachCertificate, index) => {
              const Icon = eachCertificate.icon;

              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedCertificate(eachCertificate)}
                  className="group relative flex min-h-90 cursor-pointer flex-col overflow-hidden rounded-[1.8rem] border border-slate-300 bg-linear-to-br from-white via-slate-50 to-indigo-50 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.12)] transition-all duration-300 hover:border-slate-400 hover:shadow-[0_24px_70px_rgba(99,102,241,0.18)]"
                >
                  {/* ================= CARD GLOW ================= */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.2, 0.32, 0.2],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-300/20 blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.15, 0.28, 0.15],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
                  />

                  {/* ================= WATERMARK ICON ================= */}
                  <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-[0.08]">
                    <Icon className="text-[120px] text-indigo-200" />
                  </div>

                  {/* ================= TOP BADGE ================= */}
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 backdrop-blur-md">
                      <GrCertificate className="text-xs text-indigo-600" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        Certificate
                      </span>
                    </div>

                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-white text-indigo-700 shadow-lg backdrop-blur-md"
                    >
                      <Icon className="text-xl" />
                    </motion.div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="relative z-10 flex flex-1 flex-col">
                    {/* ================= TOP CONTENT ================= */}
                    <div>
                      <h3 className="text-xl font-bold leading-snug text-slate-900">
                        {eachCertificate.name}
                      </h3>

                      <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600">
                        {eachCertificate.description}
                      </p>
                    </div>

                    {/* ================= BOTTOM FIXED INFO ================= */}
                    <div className="mt-auto pt-5 min-h-27.5">
                      {/* metadata */}
                      {eachCertificate.completedAt && (
                        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">
                          Completed:{" "}
                          <span className="text-slate-900">
                            {eachCertificate.completedAt}
                          </span>
                        </div>
                      )}

                      {/* skills preview */}
                      {eachCertificate.skills &&
                        eachCertificate.skills.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {eachCertificate.skills
                              .slice(0, 3)
                              .map((skill, i) => (
                                <span
                                  key={i}
                                  className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-700"
                                >
                                  {skill}
                                </span>
                              ))}

                            {eachCertificate.skills.length > 3 && (
                              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
                                +{eachCertificate.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                    </div>

                    {/* ================= BUTTON ALWAYS BOTTOM ================= */}
                    <div className="pt-7">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCertificate(eachCertificate);
                        }}
                        className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl"
                      >
                        View Details
                        <FiArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedCertificate && (
        <CertificateDescription
          certificateDescription={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default Certificate;