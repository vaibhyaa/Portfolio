// 'use client'
// Client component can be used inside a Server component
// But Server component cannot be used inside Client component
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
