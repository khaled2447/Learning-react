import { useState, useEffect } from "react";

function getSigilSize() {
  return window.innerWidth / 30;
}

export default function useSigilSize() {
  const [sigilSize, setSigilSize] = useState(getSigilSize());

  useEffect(() => {
    const update = () => {
      setSigilSize(getSigilSize());
    };

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return sigilSize;
}