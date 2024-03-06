"use client";

// Components
import Slider from "@/components/Slider";
import Projects from "@/components/Sections/Projects";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";

export default function Home() {
  return (
    <>
      <Slider />
      <Projects />
      <Services />
      <About />
    </>
  );
}
