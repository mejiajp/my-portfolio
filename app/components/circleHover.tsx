import "@/app/styles/circleHover.css";
import { useState, useEffect } from "react";

export default function NavButtonHover({
  isHovered,
  mounted,
}: {
  isHovered: boolean;
  mounted: boolean;
}) {
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setSupportsHover(media.matches);

    const listener = (e: MediaQueryListEvent) => setSupportsHover(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div
      className={`absolute w-full h-full bg-tak rounded-full ${
        mounted && isHovered && supportsHover ? "toCenter" : "toUp"
      }`}
    />
  );
}
