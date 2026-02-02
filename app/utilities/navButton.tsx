import React from "react";
import "@/app/styles/navigation.css";
import NavButtonHover from "@/app/components/NavButtonHover";

interface SidebarButtonProps {
  onClick: () => void; // onClick handler
  isOpen: boolean | null; // Indicates whether the button is active
}

const NavButton: React.FC<SidebarButtonProps> = ({ onClick, isOpen }) => {
  // console.log(`is open is ${isOpen}`);
  return (
    <button
      onClick={onClick}
      className={`nav-button w-(--big-circle) rounded-full aspect-square z-50 flex flex-col relative justify-center items-center overflow-hidden cursor-pointer pointer-events-auto
         group ${isOpen ? "open bg-primary" : "bg-primary-dark"}`}
    >
      <NavButtonHover />
      <div className="line top " />
      <div className="line bottom " />
    </button>
  );
};

export default NavButton;
