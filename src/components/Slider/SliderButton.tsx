"use client";
import { useSwiper } from "swiper/react";

interface SliderButton {
  icon: React.ReactNode;
  customStyle: string;
}

export default function SliderButton({ icon, customStyle }: SliderButton) {
  const swiper = useSwiper();
  return (
    <div className={`flex top-[40%] lg:top-[45%] absolute ${customStyle}`}>
      <button
        className="z-50 cursor-pointer bg-background-color rounded shadow text-primary-color p-1.5"
        onClick={() => swiper.slideNext()}
      >
        {icon}
      </button>
    </div>
  );
}
