"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ArrowUpIcon from "../assets/ArrowUp";

// Context
//import { PopUpContext } from "../../PopUpContext";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  //const { footerVisible } = React.useContext(PopUpContext);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
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
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-[2%] p-3 rounded-full shadow-inner-md bg-background-color right-[3%] z-10 cursor-pointer
        opacity-0 transform translate-x-10 transition-all duration-300 ease-in-out
        ${isVisible && "opacity-100 translate-x-0"}
        `}
        onClick={goToBtn}
      >
        <div className="text-primary-color animate-bounce">
          <ArrowUpIcon />
        </div>
      </div>
    </>
  );
};

export default ToTopButton;
