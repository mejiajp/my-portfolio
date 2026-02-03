"use client";

import React, { useEffect, useState } from "react";
import "@/app/styles/navigation.css";
import CircleButtonHover from "@/app/components/CircleButtonHover";

interface SidebarButtonProps {
  onClick: () => void;
  isOpen: boolean | null;
}

const NavButton: React.FC<SidebarButtonProps> = ({ onClick, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <button
      onClick={onClick}
      className={`nav-button w-(--big-circle) rounded-full aspect-square z-50 flex flex-col relative justify-center items-center overflow-hidden cursor-pointer pointer-events-auto
        group ${isOpen ? "open bg-primary" : "bg-primary-dark"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CircleButtonHover isHovered={isHovered} mounted={mounted} />
      <div className="line top " />
      <div className="line bottom " />
    </button>
  );
};

export default NavButton;
