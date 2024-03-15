"use client";
// Utils
import Container from "@/utils/Container";

// Components
import { SliderRoot } from "./SliderRoot";

//Hooks
import useMedia from "@/hooks/useMedia";

export default function Slider() {
  const screenWidth = useMedia("(max-width: 1100px)");

  return (
    <div className="">
      {screenWidth ? (
        <SliderRoot.Content />
      ) : (
        <Container>
          <SliderRoot.Content />
        </Container>
      )}
    </div>
  );
}
