// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// const Header = () => {
//   return (
//     <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-5">
//       <div>
//         {/* change the profile image to yours  */}
//         <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
//       </div>
//       <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono">
//         Hii! I'm Vaibhav Shinde
//         <Image src={assets.hand_icon} alt="" className="w-6" />
//       </h3>
//       <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-mono">
//         Fullstack web developer.
//       </h1>
//       <p className="max-w-2xl mx-auto font-mono">
//         I am fullstack developer from pune, India with 3.5 years of experience.
//       </p>
//       <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
//         <a
//           className="px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2"
//           href="#contact"
//         >
//           Contact Me{" "}
//           <Image src={assets.right_arrow_white} alt="" className="w-4" />
//         </a>
//         <a
//           href="/sample-resume.pdf"
//           download
//           className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
//         >
//           My Resume <Image src={assets.download_icon} alt="" className="w-4" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <section className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-6 font-sans">
      {/* Profile Image */}
      <div className="mb-4">
        <Image
          src={assets.profile_img}
          alt="Vaibhav Shinde"
          className="rounded-full w-32 md:w-40 border-4 border-gray-200 shadow-lg"
        />
      </div>

      {/* Intro */}
      <h3 className="flex items-center gap-2 text-lg md:text-xl text-gray-600">
        Hi, I&apos;m Vaibhav Shinde
        <Image src={assets.hand_icon} alt="wave" className="w-5" />
      </h3>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
        Fullstack Web Developer
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-500 text-base md:text-lg leading-relaxed">
        I’m a fullstack developer from Pune, India with 3.5 years of experience
        building modern, scalable web applications using the MERN stack.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 rounded-full border border-gray-300 flex items-center gap-2 hover:bg-gray-100 transition duration-300"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </section>
  );
};

export default Header;
