import React from "react";

export default function useMedia(size: string) {
  const [match, setMatch] = React.useState<boolean>();

  React.useEffect(() => {
    function handleResize() {
      const { matches } = window.matchMedia(size);
      setMatch(matches);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);
  return match;
}
