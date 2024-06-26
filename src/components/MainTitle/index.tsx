"use client";
// Fonts
import { Inter } from "next/font/google";
const font = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

interface MainTitleProps {
  title: string;
  firstSection?: boolean;
}

export default function MainTitle({
  title,
  firstSection = false,
}: MainTitleProps) {
  return (
    <div
      className={`pointer-events-none ${
        firstSection ? "mt-1" : "my-0"
      } shadow-large animeLeft bg-primary-color 
    border-t-2 border-b-2 border-t-white border-b-white flex items-ceter justify-center p-5
    lg:p-7
    `}
    >
      <h1
        className={`drop-shadow-text font-bold uppercase text-3xl lg:text-4xl text-white ${font.className}`}
      >
        {title}
      </h1>
    </div>
  );
}
