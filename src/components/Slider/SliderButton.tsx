"use client";
// Swiper Hook
import { useSwiper } from "swiper/react";

interface SliderButton {
  icon: React.ReactNode;
  customStyle: string;
  backButton?: boolean;
}

export default function SliderButton({
  icon,
  customStyle,
  backButton = false,
}: SliderButton) {
  const swiper = useSwiper();
  return (
    <div className={`flex top-[40%] lg:top-[45%] absolute ${customStyle}`}>
      <button
        className="z-50 cursor-pointer bg-background-color rounded shadow text-primary-color p-1.5"
        onClick={
          backButton ? () => swiper.slidePrev() : () => swiper.slideNext()
        }
      >
        {icon}
      </button>
    </div>
  );
}
