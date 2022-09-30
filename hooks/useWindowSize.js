import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    if (typeof window === "undefined") {
      return;
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState({
    width: 414,
    height: 896,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
