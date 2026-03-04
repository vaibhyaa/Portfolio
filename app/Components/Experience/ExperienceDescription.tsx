/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";

interface Props {
  exp: any;
  onClose: () => void;
}

const ExperienceDescription: React.FC<Props> = ({ exp, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white backdrop-blur-xl
rounded-3xl p-10 w-[90%] max-w-2xl
shadow-2xl
border border-slate-200
transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-slate-800">
          <b>{exp.position}</b>
        </h2>

        <p className="text-indigo-600 font-semibold mt-1">
          <b>
            <strong>{exp.companyName}</strong>
          </b>
        </p>

        <p className="text-sm text-slate-500 mt-1 mb-4">
          <b>{exp.duration}</b>
        </p>

        <ul className="space-y-3 text-slate-600 list-disc list-inside">
          {exp.description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDescription;
