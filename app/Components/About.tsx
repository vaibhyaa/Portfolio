import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

// const About = () => {
//   return (
//     <div id="aboutme" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-sans">Introduction</h4>
//       <h2 className="text-center text-5xl font-sans">About Me</h2>
//       <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
//         {/* first column */}
//         <div className="w-64 sm:w-80 rounded-3xl max-w-none">
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-ful rounded-3xl"
//           />
//         </div>
//         {/* second column */}
//         <div className="flex-1">
//           <p className="mb-10 max-w-2xl font-sans">
//             I am an experienced Fullstack developer with over 3.5 years
//             professional experience in the software field. Throughtout my
//             career, I have had the privileage of collabrating with other
//             organizations, contributing to their success and growth.
//           </p>
//           <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
//             {infoList.map((eachInfo, index) => (
//               <li
//                 key={index}
//                 className="
// 				 border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-fcf4fff hover:-translate-y-1 duration-500 hover:shadow "
//               >
//                 <Image
//                   src={eachInfo.icon}
//                   alt={eachInfo.title}
//                   className="w-1 mt-3"
//                 />
//                 <h3 className="my-4 font-semibold text-gray-700">
//                   {eachInfo.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{eachInfo.description}</p>
//                 {/* <span className="text-gray-600 font-medium">{eachInfo.title}</span> */}
//                 {/* <span className="font-semibold">{eachInfo.description}</span> */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



// type InfoItem = {
//   icon: string;
//   title: string;
//   description: string;
// };

// const About: React.FC = () => {
//   return (
//     <section id="aboutme" className="w-full px-6 md:px-[12%] py-20 scroll-mt-24">
//       {/* Section Heading */}
//       <div className="text-center mb-16">
//         <h4 className="text-sm uppercase tracking-widest text-gray-500">
//           Introduction
//         </h4>
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
//           About Me
//         </h2>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col lg:flex-row items-center gap-16">
//         {/* Left Image */}
//         <div className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg">
//           <Image
//             src={assets.user_image}
//             alt="Vaibhav Shinde"
//             className="w-full object-cover rounded-3xl"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="flex-1">
//           <p className="mb-10 max-w-2xl text-gray-600 leading-relaxed">
//             I am an experienced Fullstack Developer with over 3.5 years of
//             professional experience in the software industry. Throughout my
//             career, I have collaborated with teams and organizations to build
//             scalable, high-performance web applications.
//           </p>

//           {/* Info Cards */}
//           <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
//             {infoList.map((item, index) => (
//               <li
//                 key={index}
//                 className="group border border-gray-200 rounded-2xl p-6 
//                 bg-white hover:shadow-xl hover:-translate-y-2 
//                 transition duration-300"
//               >
//                 <Image src={item.icon} alt={item.title} className="w-8 mb-4" />

//                 <h3 className="mb-2 font-semibold text-lg">{item.title}</h3>

//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   {item.description}
//                 </p>
//               </li>
//             ))}
//           </ul>
//           <h4 className="my-6 text-gray-800 font-sans">Tools I use</h4>
//           <ul className="flex items-center gap-3 sm:gap-5">
//             {toolsData.map((eachTool, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:shadow-xl hover:-translate-y-2 
//                 transition duration-300"
//               >
//                 <Image src={eachTool} alt="Tool" className="w-5 sm:w-7" />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// const About: React.FC = () => {
//   return (
//     <section
//       id="aboutme"
//       className="relative w-full px-6 md:px-[10%] py-24 bg-gray-50 scroll-mt-24"
//     >
//       {/* Section Header */}
//       <div className="text-center max-w-2xl mx-auto mb-20">
//         <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
//           Introduction
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
//           About Me
//         </h2>
//         <div className="w-16 h-1 bg-black mx-auto mt-6 rounded-full" />
//       </div>

//       {/* Main Card */}
//       <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-16">
        
//         {/* Profile Image */}
//         <div className="relative w-64 sm:w-80">
//           <Image
//             src={assets.user_image}
//             alt="Vaibhav Shinde"
//             className="rounded-3xl object-cover shadow-lg"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="flex-1">
//           <p className="text-gray-600 leading-relaxed text-lg mb-12">
//             I’m a Fullstack Developer with over 3.5 years of experience building
//             scalable and high-performance web applications. I enjoy solving
//             complex problems and collaborating with teams to deliver impactful
//             digital products.
//           </p>

//           {/* Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
//             {infoList.map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-gray-50 rounded-2xl p-6 text-center 
//                 hover:bg-black hover:text-white 
//                 transition-all duration-300"
//               >
//                 <div className="flex justify-center mb-4">
//                   <Image
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-8 group-hover:invert"
//                   />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm opacity-80">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Tools Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">
//               Tools & Technologies
//             </h4>

//             <div className="flex flex-wrap gap-4">
//               {toolsData.map((tool, index) => (
//                 <div
//                   key={index}
//                   className="w-14 h-14 flex items-center justify-center 
//                   bg-gray-100 rounded-xl 
//                   hover:bg-black hover:scale-110 
//                   transition duration-300"
//                 >
//                   <Image
//                     src={tool}
//                     alt="Tool"
//                     className="w-6 hover:invert"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



const About: React.FC = () => {
  return (
    <section
      id="aboutme"
      className="w-full px-6 md:px-[10%] py-24 bg-linear-to-b from-slate-50 to-white scroll-mt-24"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Introduction
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight text-slate-800">
          About Me
        </h2>
        <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image */}
        <div className="relative w-64 sm:w-80">
          <Image
            src={assets.user_image}
            alt="Vaibhav Shinde"
            className="rounded-3xl object-cover shadow-md"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-slate-600 leading-relaxed text-lg mb-12">
            I’m a Fullstack Developer with over 3.5 years of experience building
            scalable and high-performance web applications. I specialize in
            creating clean UI systems and robust backend architectures.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {infoList.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-6 text-center 
                border border-transparent 
                hover:border-indigo-300 
                hover:shadow-md 
                hover:-translate-y-1 
                transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-indigo-100">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-6"
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">
              Tools & Technologies
            </h4>

            <div className="flex flex-wrap gap-4">
              {toolsData.map((tool, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex items-center justify-center 
                  bg-slate-50 border border-slate-200 rounded-xl 
                  hover:border-indigo-400 
                  hover:shadow-md 
                  hover:-translate-y-1 
                  transition-all duration-300"
                >
                  <Image
                    src={tool}
                    alt="Tool"
                    className="w-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;