"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ArrowUpIcon from "../assets/ArrowUp";

export default function ToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const isToShowButton = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", isToShowButton);
    return () => {
      window.removeEventListener("scroll", isToShowButton);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-[2%] p-3 rounded-full shadow-inner-md bg-background-color left-[2%] z-10 cursor-pointer
        opacity-0 transition-all duration-300 ease-in-out
        ${isVisible && "opacity-100"}
        `}
        onClick={goToTop}
      >
        <div className="text-primary-color animate-bounce">
          <ArrowUpIcon />
        </div>
      </div>
    </>
  );
}
