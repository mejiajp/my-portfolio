import Link from "next/link";
import React from "react";
import Sidebar from "./sidebar";

function Header() {
  return (
    <div className="fixed w-full top-0 z-20  flex justify-between items-center py-5 px-5 pointer-events-none">
      <Link href="/" className="title pointer-events-auto pl-5">
        J1
      </Link>
      <Sidebar />
    </div>
  );
}

export default Header;
