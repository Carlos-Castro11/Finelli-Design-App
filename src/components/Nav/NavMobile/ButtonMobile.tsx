"use client";
import { ComponentProps } from "react";

interface ButtonMobileProps extends ComponentProps<"button"> {
  isMenuMobileActive?: boolean;
}

export const ButtonMobile = ({
  isMenuMobileActive = false,
  ...props
}: ButtonMobileProps) => {
  return (
    <button
      {...props}
      className={`
      border-2 border-primary-color p-6 rounded-full relative shadow-inner before:content[''] before:absolute before:bg-primary-color before:left-1/2 before:top-1/2
      before:translate-x-[-50%] before:translate-y-[-50%] before:h-0.5 before:w-6 before:shadow-[0_8px_0_0_rgba(41,78,91,1),0_-8px_0_0_rgba(41,78,91,1)] before:transition-all 
      before:duration-500 before:ease-in-out
      ${
        isMenuMobileActive
          ? `before:rotate-90 before:w-[4px] before:h-1 before:rounded-full
          `
          : ""
      }
      `}
    />
  );
};
