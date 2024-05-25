"use client";
import React from "react";

// Slider required imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";

// Slider Images
import { SliderImagesUrls } from "@/Database/Slider";

// Components
import SliderButton from "./SliderButton";

// Icons
import Icon from "@/utils/Icon";

// Hooks
import useMedia from "@/hooks/useMedia";

// Interface
interface SliderContentProps {
  slidesPerView?: number;
}

export default function SliderContent({
  slidesPerView = 1,
}: SliderContentProps) {
  const mobile = useMedia("(max-width: 700px)");

  return (
    <Swiper
      className="md:max-w-[90%] lg:max-w-[78%] 2xl:max-w-full lg:mb-2"
      slidesPerView={slidesPerView}
      loop={true}
      modules={[Navigation, Pagination, Autoplay, A11y]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 6000,
      }}
    >
      {SliderImagesUrls.map((src) => (
        <SwiperSlide key={src} className="2xl:mb-8 lg:mb-5 mb-8">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="Imagem de um projeto de interiores"
            className="shadow-large md:rounded-md"
          />
        </SwiperSlide>
      ))}
      <SliderButton
        backButton={true}
        customStyle={"left-3"}
        icon={<Icon name="ChevronLeft" size={mobile ? undefined : 40} />}
      />
      <SliderButton
        customStyle={"right-3"}
        icon={<Icon name="ChevronRight" size={mobile ? undefined : 40} />}
      />
    </Swiper>
  );
}
