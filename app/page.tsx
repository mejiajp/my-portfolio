"use client";
// import React, { useState } from "react";
import Hero from "@/pages/hero";
import Sidebar from "@/src/components/sidebar";

export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClick = () => setIsOpen((prev) => !prev);

  return (
    <main className="relative text-white py-5 px-5 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-4xl">J1</h1>

        <Sidebar />
      </div>
      <Hero />
    </main>
  );
}
