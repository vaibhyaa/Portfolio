// 'use client'
// Client component can be used inside a Server component
// But Server component cannot be used inside Client component
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
// import Education from "./Components/Education/EducationCard";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
    </>
  );
}
