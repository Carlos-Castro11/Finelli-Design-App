"use client";
interface SliderWrapperProps {
  children: React.ReactNode;
}

export default function SliderWrapper({ children }: SliderWrapperProps) {
  return (
    <div className="lg:px-5 lg:pt-1 lg:mt-5 lg:bg-background-color lg:shadow-inner-md lg:rounded">
      {children}
    </div>
  );
}
