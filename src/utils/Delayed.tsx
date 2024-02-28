"use client";
import React from "react";

interface DelayedProps {
  children: React.ReactNode;
  milliseconds?: number;
}

const Delayed = ({ children, milliseconds = 100 }: DelayedProps) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, milliseconds);
    return () => clearTimeout(timer);
  }, [milliseconds]);

  return isShown ? children : null;
};

export default Delayed;
