"use client";

import React, { useEffect } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";

interface CertificateDescriptionType {
  icon: IconType;
  name: string;
  description: string;
  completedAt: string;
  credentialUrl: string;
  skills: string[];
}

interface Props {
  certificateDescription: CertificateDescriptionType;
  onClose: () => void;
}

const CertificateDescription: React.FC<Props> = ({
  certificateDescription,
  onClose,
}) => {
  const Icon = certificateDescription.icon;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl p-8 md:p-10 
        w-full max-w-2xl 
        shadow-2xl border border-slate-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-black transition"
        >
          <FiX size={22} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 rounded-xl bg-indigo-100 text-indigo-600">
            <Icon className="text-2xl" />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {certificateDescription.name}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Completed: {certificateDescription.completedAt}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">
          {certificateDescription.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {certificateDescription.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full 
              bg-indigo-100 text-indigo-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Credential Button */}
        <div className="mt-8">
          <a
            href={certificateDescription.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 
            px-6 py-2 rounded-full 
            bg-indigo-600 text-white 
            hover:bg-indigo-700 transition"
          >
            View Credential
            <FiExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateDescription;