"use client";
interface SliderWrapperProps {
  children: React.ReactNode;
}

export default function SliderWrapper({ children }: SliderWrapperProps) {
  return (
    <div className="px-7 pt-7 mt-5 mb-8 bg-background-color shadow-inner-md rounded">
      {children}
    </div>
  );
}
