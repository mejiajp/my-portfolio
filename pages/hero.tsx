import React from "react";
import Image from "next/image"; // Import the Image component
import Profile from "@/public/img/profile.jpg";

const Hero = () => {
  return (
    <section className="flex justify-evenly p-10">
      {/*image*/}
      <div className="flex justify-center items-center w-[450px] h-[400px] overflow-hidden">
        <Image
          className="w-[450px]  "
          src={Profile}
          alt="Profile"
          quality={100}
        />
      </div>
      {/* introduction */}
      <div className=" w-[600px] h-[400px] flex flex-col justify-between ">
        <p className="text-4xl font-medium tracking-wider leading-normal">
          Juan from Antipolo is an aspiring Full-Stack developer
        </p>
        <p className="text-2xl font-light tracking-wide leading-snug">
          Fueled by a fascination with the digital landscape. Ive recently
          received my degree in Computer Science at the PUP, where I’ve honed
          and practiced my skills. Now, I’m eager to turn my passion into a
          profession, ready to create impactful web solutions.
        </p>
        <div className="get-to-know relative">
          <p className="">Get to know me more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
