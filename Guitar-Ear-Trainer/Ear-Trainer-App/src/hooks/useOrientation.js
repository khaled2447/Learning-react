import { useEffect, useState } from "react";

const getOrientation = () => window.innerHeight > window.innerWidth;

export default function useOrientation() {
  const [portrait, setPortrait] = useState(getOrientation());
  const [key, setKey] = useState(0);

  useEffect(() => {
    const update = () => {
      setPortrait(getOrientation());
      setKey(prev => prev + 1); 
    };

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return { portrait, key };
}