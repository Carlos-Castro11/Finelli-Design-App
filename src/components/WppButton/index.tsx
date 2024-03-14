/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

// Component
import WppIcon from "../assets/Wpp";

export default function WppButton() {
  return (
    <>
      <Link
        target="_blank"
        href={"https://wa.me/5538998695145"}
        className={`fixed bottom-[2%] p-1 rounded-full border-2 border-light-blue bg-primary-color left-[2%] z-50 
        cursor-pointer transition-all duration-300 ease-in-out animeLeft
        `}
      >
        <div className="text-background-color">
          <WppIcon />
        </div>
      </Link>
    </>
  );
}
