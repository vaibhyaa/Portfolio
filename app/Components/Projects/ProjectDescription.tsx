"use client";

import React, { useEffect } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";

interface ProjectDescriptionType {
  title: string;
  description: string;
  githubUrl: string;
  tech?: string[];
  icon: IconType;
}

interface Props {
  projectDescription: ProjectDescriptionType;
  onClose: () => void;
}

const ProjectDescription: React.FC<Props> = ({
  projectDescription,
  onClose,
}) => {
  const Icon = projectDescription.icon;

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
          <div className="w-14 h-14 flex items-center justify-center 
            bg-indigo-600 rounded-xl text-white">
            <Icon className="text-2xl" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {projectDescription.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-slate-700 leading-relaxed">
          {projectDescription.description}
        </p>

        {/* Tech Stack */}
        {projectDescription.tech && (
          <div className="flex flex-wrap gap-2 mt-6">
            {projectDescription.tech.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full 
                bg-slate-100 text-slate-700 border border-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* GitHub Button */}
        <div className="mt-8">
          <a
            href={projectDescription.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
            px-6 py-2 rounded-full
            bg-indigo-600 text-white
            hover:bg-indigo-700 transition"
          >
            View Repository
            <FiExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;