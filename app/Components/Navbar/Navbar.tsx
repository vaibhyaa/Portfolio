// "use client";

// import Logo from "../../Ui/Logo";
// import { useEffect, useRef, useState } from "react";
// import { FiMoon, FiArrowRight, FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const sideMenuRef = useRef<HTMLUListElement | null>(null);
//   const [isScroll, setIsScroll] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const openMenu = () => {
//     if (sideMenuRef.current) {
//       sideMenuRef.current.style.transform = "translateX(-16rem)";
//     }
//   };

//   const closeMenu = () => {
//     if (sideMenuRef.current) {
//       sideMenuRef.current.style.transform = "translateX(16rem)";
//     }
//   };

//   const menuItems = [
//     { label: "Home", id: "home" },
//     { label: "About Me", id: "aboutme" },
//     { label: "Education", id: "education" },
//     { label: "Experience", id: "experience" },
//     { label: "Projects", id: "projects" },
//     { label: "Contact Me", id: "contactme" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 50);

//       const scrollPosition = window.scrollY + 150;

//       for (const item of menuItems) {
//         const section = document.getElementById(item.id);

//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.offsetHeight;

//           if (
//             scrollPosition >= sectionTop &&
//             scrollPosition < sectionTop + sectionHeight
//           ) {
//             setActiveSection(item.id);
//           }
//         }
//       }
//     };

//     handleScroll(); // run once on load
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50
//       px-5 lg:px-8 xl:px-[8%] py-4
//       flex items-center justify-between
//       transition-all duration-300

//       ${
//         isScroll
//           ? "bg-white/70 backdrop-blur-lg shadow-md"
//           : "bg-white/40 backdrop-blur-md"
//       }`}
//     >
//       {/* Logo */}
//       <a href="#home">
//         <Logo />
//       </a>

//       {/* Desktop Menu */}
//       <ul
//         className="hidden md:flex items-center gap-8
//         px-10 py-3 rounded-full
//         border border-slate-200
//         bg-white/60 backdrop-blur-md
//         shadow-sm"
//       >
//         {menuItems.map((item, index) => (
//           <li key={index} className="relative group">
//             <a
//               href={`#${item.id}`}
//               className={`font-bold text-[17px] transition duration-300 ${
//                 activeSection === item.id
//                   ? "text-indigo-800"
//                   : "text-slate-700 hover:text-indigo-800"
//               }`}
//             >
//               {item.label}
//             </a>

//             {/* underline */}
//             <span
//               className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 ${
//                 activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
//               }`}
//             />
//           </li>
//         ))}
//       </ul>

//       {/* Right Side */}
//       <div className="flex items-center gap-4">
//         {/* Dark Mode */}
//         <button
//           className="p-2 rounded-full border border-slate-200
//           hover:bg-slate-100 transition"
//         >
//           <FiMoon className="w-5 h-5 text-slate-700" />
//         </button>

//         {/* Contact Button */}
//         <a
//           href="#contactme"
//           className="hidden md:flex items-center gap-2
//           px-6 py-2 rounded-full
//           bg-indigo-600 text-white
//           hover:bg-indigo-700 hover:scale-105
//           transition-all duration-300"
//         >
//           Contact
//           <FiArrowRight className="w-4 h-4" />
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="block md:hidden ml-3 cursor-pointer"
//           onClick={openMenu}
//         >
//           <FiMenu className="w-6 h-6 text-slate-800" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <ul
//         ref={sideMenuRef}
//         className="flex md:hidden flex-col gap-6
//         py-24 px-10 fixed -right-64 top-0 bottom-0
//         w-64 h-screen z-50
//         bg-white shadow-xl
//         transition-transform duration-500"
//       >
//         <div
//           className="absolute right-6 top-6 cursor-pointer"
//           onClick={closeMenu}
//         >
//           <FiX className="w-6 h-6" />
//         </div>

//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <a
//               href={`#${item.id}`}
//               className={`text-lg font-medium transition ${
//                 activeSection === item.id
//                   ? "text-red-500"
//                   : "text-slate-700 hover:text-red-500"
//               }`}
//               onClick={closeMenu}
//             >
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Logo from "../../Ui/Logo";
import { useEffect, useState } from "react";
import { FiMoon, FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "aboutme" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Certificate", id: "certificate" },
    { label: "Projects", id: "projects" },
    { label: "Contact Me", id: "contactme" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);

      const scrollPosition = window.scrollY + 180;

      for (const item of menuItems) {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(item.id);
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8 xl:px-[8%]"
      >
        <div
          className={`mx-auto flex w-full items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 lg:px-7 ${
            isScroll
              ? "border-white/80 bg-white/75 shadow-[0_10px_40px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
              : "border-white/60 bg-white/55 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0"
          >
            <Logo />
          </motion.a>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex items-center gap-2 rounded-full border border-white/70
            bg-white/70 px-3 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    className={`relative z-10 block rounded-full px-5 py-2 text-[15px] font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-indigo-600 via-sky-500 to-violet-500 shadow-[0_8px_25px_rgba(99,102,241,0.28)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Button */}
            {/* <motion.button
              whileHover={{ scale: 1.06, rotate: 8 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/75 text-slate-700 shadow-sm backdrop-blur-xl transition hover:text-slate-900"
            >
              <FiMoon className="h-5 w-5" />
            </motion.button> */}

            {/* Contact Button */}
            <motion.a
              href="#contactme"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 via-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)]"
            >
              Contact
              <FiArrowRight className="h-4 w-4" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/75 text-slate-800 shadow-sm backdrop-blur-xl md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-60 bg-slate-950/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-[85%] max-w-[340px] flex-col border-l border-white/70 bg-white/85 px-6 pb-8 pt-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl md:hidden"
            >
              {/* Top */}
              <div className="mb-8 flex items-center justify-between">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  <Logo />
                </a>

                <motion.button
                  whileHover={{ scale: 1.06, rotate: 90 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/80 text-slate-700 shadow-sm"
                >
                  <FiX className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Menu Links */}
              <ul className="flex flex-col gap-3">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-linear-to-r from-indigo-600 via-sky-500 to-violet-500 text-white shadow-[0_10px_25px_rgba(99,102,241,0.25)]"
                            : "bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900"
                        }`}
                      >
                        <span>{item.label}</span>
                        <FiArrowRight className="h-4 w-4" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Bottom CTA */}
              <motion.a
                href="#contactme"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 via-sky-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,102,241,0.25)]"
              >
                Let’s Connect
                <FiArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
