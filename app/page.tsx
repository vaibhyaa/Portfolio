// 'use client'
// Client component can be used inside a Server component
// But Server component cannot be used inside Client component
import About from "./Components/About/About";
import Certificate from "./Components/Certificate/Certificate";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Certificate />
      <Project />
      <Contact/>
    </>
  );
}
