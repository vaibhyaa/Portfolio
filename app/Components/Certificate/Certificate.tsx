"use client";

import { certificateList } from "@/assets/assets";
import React, { useState } from "react";
import { GrCertificate } from "react-icons/gr";
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

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);

  return (
    <section
      id="certificate"
      className="w-full px-6 md:px-[10%] py-28 bg-linear-to-b from-white bg-slate-100 scroll-mt-24"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2
          className="flex items-center justify-center gap-4 
          text-4xl md:text-5xl font-bold text-slate-800"
        >
          <GrCertificate className="text-3xl md:text-4xl text-indigo-600" />
          <span>Certificates</span>
          <GrCertificate className="text-3xl md:text-4xl text-indigo-600" />
        </h2>

        <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Glass Container */}
      <div
        className="max-w-6xl mx-auto 
        bg-white/70 backdrop-blur-xl 
        rounded-3xl shadow-xl 
        border border-white/40 
        p-8 md:p-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateList.map((eachCertificate, index) => {
            const Icon = eachCertificate.icon;

            return (
              <div
                key={index}
                onClick={() => setSelectedCertificate(eachCertificate)}
                className="group cursor-pointer bg-slate-50 rounded-2xl p-6 text-center
                border border-slate-200
                hover:border-indigo-400
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300"
              >
                <div className="flex justify-center mb-5">
                  <div
                    className="p-4 rounded-xl bg-indigo-50
                    // group-hover:bg-indigo-100
                    transition duration-300"
                  >
                    <Icon className="text-2xl  group-hover:scale-137 transition duration-300" />
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {eachCertificate.name}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {eachCertificate.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Rendered Once */}
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
