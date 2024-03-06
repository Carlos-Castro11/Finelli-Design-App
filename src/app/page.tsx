"use client";

// Components
import Slider from "@/components/Slider";
import Projects from "@/components/Sections/Projects";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";
import Banner from "@/components/Banner.tsx";

export default function Home() {
  return (
    <>
      <Slider />
      <Projects />
      <Services />
      <Banner image="ferrari.jpg" />
      <About />
    </>
  );
}
