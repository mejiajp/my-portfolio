"use client";

import { useState } from "react";
import "@/src/styles/navigation.css";
import NavButton from "../utilities/navButton";
import NavContent from "../utilities/navContent";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside className="">
      <NavButton onClick={handleClick} isOpen={isOpen} />
      {/* {isOpen && <NavContent/>} */}
    </aside>
  );
};

export default Sidebar;
