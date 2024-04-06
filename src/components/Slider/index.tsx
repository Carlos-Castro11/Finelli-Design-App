"use client";
// Utils
import Container from "@/utils/Container";

// Components
import { SliderRoot } from "./SliderRoot";

//Hooks
import useMedia from "@/hooks/useMedia";

export default function Slider() {
  const isScreenLarge = useMedia("(max-width: 1100px)");

  return (
    <div className="">
      {isScreenLarge ? (
        <SliderRoot.Content />
      ) : (
        <Container>
          <SliderRoot.Content />
        </Container>
      )}
    </div>
  );
}
