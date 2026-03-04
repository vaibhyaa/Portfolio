// 'use client'
// Client component can be used inside a Server component
// But Server component cannot be used inside Client component
import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
    </>
  );
}
