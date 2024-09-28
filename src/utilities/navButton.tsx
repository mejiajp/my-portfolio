"use client";

import React from "react";
import "@/src/styles/navigation.css";

interface SidebarButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // onClick handler
  isOpen: boolean; // Indicates whether the button is active
}

const NavButton: React.FC<SidebarButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-[#ffffff33] rounded-full w-[80px] aspect-square z-50 flex flex-col relative justify-center items-center cursor-pointer"
    >
      {/* Top line */}
      <div
        className={`absolute w-8 h-[3px] bg-white rounded-lg transition-all  ${
          isOpen ? "animate-top" : "animate-top-reverse"
        }`}
      />

      {/* Bottom line */}
      <div
        className={`absolute w-8 h-[3px] bg-white rounded-lg transition-all  ${
          isOpen ? "animate-bot" : "animate-bot-reverse"
        }`}
      />
    </button>
  );
};

export default NavButton;
