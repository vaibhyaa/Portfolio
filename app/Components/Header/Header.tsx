// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import { FaArrowRight, FaDownload } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";

// const Header = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-b from-slate-50 via-white to-slate-100"
//     >
//       {/* Profile Image */}
//       <div className="relative mb-6">
//         <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 blur-2xl opacity-30"></div>

//         <Image
//           src={assets.profile_img}
//           alt="Vaibhav Shinde"
//           className="relative rounded-full w-32 md:w-40 border-4 border-white shadow-xl object-cover"
//           priority
//         />
//       </div>

//       {/* Intro */}
//       <h3 className="flex items-center gap-2 text-lg md:text-xl text-slate-600">
//         Hi, I&apos;m Vaibhav Shinde 👋
//       </h3>

//       {/* Main Heading */}
//       <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
//         <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
//           Fullstack Web Developer
//         </span>
//       </h1>

//       {/* Description */}
//       <p className="max-w-2xl text-slate-500 text-base md:text-lg leading-relaxed mt-4">
//         I’m a fullstack developer from Pune, India with 3.5 years of experience
//         building modern, scalable web applications using the MERN stack.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
//         {/* Contact Button */}
//         <a
//           href="#contact"
//           className="group px-8 py-3 rounded-full bg-indigo-600 text-white flex items-center gap-2
//           hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1
//           transition-all duration-300"
//         >
//           <HiOutlineMail className="text-lg" />
//           Contact Me
//           <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
//         </a>

//         {/* Resume Button */}
//         <a
//           href="/sample-resume.pdf"
//           download
//           className="group px-8 py-3 rounded-full border border-slate-300
//           flex items-center gap-2
//           hover:bg-slate-100 hover:shadow-md hover:-translate-y-1
//           transition-all duration-300"
//         >
//           <FaDownload className="text-sm" />
//           My Resume
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Header;

"use client";

import Image from "next/image";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 blur-2xl opacity-30"></div>

        <Image
          src="/profile-img.png"
          alt="Vaibhav Shinde"
          width={160}
          height={160}
          priority
          className="relative rounded-full w-32 md:w-40 border-4 border-white shadow-xl object-cover"
        />
      </div>

      {/* Intro */}
      <h3 className="flex items-center gap-2 text-lg md:text-xl text-slate-600">
        Hi, I&apos;m Vaibhav Shinde 👋
      </h3>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mt-2">
        <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Fullstack Web Developer
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-slate-500 text-base md:text-lg leading-relaxed mt-4">
        I’m a fullstack developer from Pune, India with 3.5 years of experience
        building modern, scalable web applications using the MERN stack.
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-6">
        <a
          href="https://github.com/vaibhyaa"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-slate-200 rounded-full bg-white shadow-md transition-transform duration-300 hover:scale-125
    "
        >
          <FaGithub className="text-xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/vaibhav-shinde-55a52b1b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-slate-200 rounded-full bg-white shadow-md transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        {/* Contact Button */}
        <a
          href="#contact"
          className="group px-8 py-3 rounded-full bg-indigo-600 text-white flex items-center gap-2 
          hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 
          transition-all duration-300"
        >
          <HiOutlineMail className="text-lg" />
          Contact Me
          <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        {/* Resume Button */}
        <a
          href="/sample-resume.pdf"
          download
          className="group px-8 py-3 rounded-full border border-slate-300 
          flex items-center gap-2 
          hover:bg-slate-100 hover:shadow-md hover:-translate-y-1 
          transition-all duration-300"
        >
          <FaDownload className="text-sm" />
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Header;
