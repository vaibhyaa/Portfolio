"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Logo from "../Ui/Logo";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  // 👇 Properly typed ref
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const [isScroll, setisScroll] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 
      px-5 lg:px-8 xl:px-[8%] py-4 
      flex items-center justify-between 
      bg-linear-to-r 
      from-white/60 via-rose-100/40 to-white/60
      backdrop-blur-xl border-b border-white/20 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
    >
      {/* Logo */}
      <a href="#top">
        <Logo />
      </a>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-8 
         backdrop-blur-md ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} 
        px-10 py-3 rounded-full `}
      >
        {["Home", "About Me", "Services", "My Work", "Contact Me"].map(
          (item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-rose-500 transition"
              >
                {item}
              </a>
            </li>
          ),
        )}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Button */}
        <button className="p-2 rounded-full">
          <Image src={assets.moon_icon} alt="Toggle Theme" className="w-5" />
        </button>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 
          px-6 py-2 rounded-full 
          bg-white text-black 
          hover:scale-105 hover:bg-gray-200 
          transition"
        >
          Contact
          <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden ml-3 cursor-pointer"
          onClick={openMenu}
        >
          <Image src={assets.menu_black} alt="Open Menu" className="w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 
        py-20 px-10 fixed -right-64 top-0 bottom-0 
        w-64 h-screen z-50 
        bg-rose-50 transition-transform duration-500"
      >
        <div
          className="absolute right-6 top-6 cursor-pointer"
          onClick={closeMenu}
        >
          <Image src={assets.close_black} alt="Close Menu" className="w-5" />
        </div>

        {["Home", "About Me", "Services", "My Work", "Contact Me"].map(
          (item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-rose-500 transition"
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
