// "use client";

// import React, { useEffect } from "react";
// import { FiX } from "react-icons/fi";

// interface DescriptionData {
//   position: string;
//   companyName: string;
//   duration: string;
//   description: string[];
// }

// interface Props {
//   descriptionData: DescriptionData;
//   onClose: () => void;
// }

// const DescriptionModel: React.FC<Props> = ({
//   descriptionData,
//   onClose,
// }) => {
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };

//     document.addEventListener("keydown", handleEsc);

//     // Disable background scroll
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleEsc);
//       document.body.style.overflow = "auto";
//     };
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center
//       bg-black/50 backdrop-blur-sm px-4"
//       onClick={onClose}
//     >
//       {/* Modal Card */}
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="relative bg-white rounded-3xl p-8 md:p-10 
//         w-full max-w-2xl 
//         shadow-2xl border border-slate-200
//         animate-[fadeIn_0.3s_ease-in-out]"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 text-slate-500 hover:text-black transition"
//         >
//           <FiX size={22} />
//         </button>

//         {/* Header */}
//         <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
//           {descriptionData.position}
//         </h2>

//         <p className="text-indigo-600 font-semibold mt-2">
//           {descriptionData.companyName}
//         </p>

//         <p className="text-sm text-slate-500 mt-1 mb-6">
//           {descriptionData.duration}
//         </p>

//         {/* Description Points */}
//         <ul className="space-y-3 text-slate-600 list-disc list-inside leading-relaxed">
//           {descriptionData.description.map((point, i) => (
//             <li key={i}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DescriptionModel;