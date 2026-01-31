"use client";

import Link from "next/link";
import Linkedin from "@/public/svg/linkedin-02-stroke-rounded";
import Github from "@/public/svg/github-stroke-rounded";
import Resume from "@/public/svg/license-stroke-rounded";

const Footer = () => {
  return (
    <div className="h-[300px] lg:h-[500px] w-full fixed bottom-0 z-[-1] bg-primary_dark text-white flex items-center justify-center ">
      <h4 className="text-5xl md:text-9xl opacity-60 w-full  text-center">
        Get Connected
      </h4>

      {/* Absolute Footer */}
      <div className="absolute bottom-5 flex justify-between items-center w-full  px-5 ">
        <div className=" text-[hsl(0,0%,90%)] text-center md:flex  md:gap-3 ">
          <h6>Updated: </h6>
          <h6>January 2026</h6>
        </div>
        <div className="flex space-x-[clamp(.25rem,1vw,.75rem)] ">
          <div
            className="w-(--small-circle)  aspect-square rounded-full border outline-[#696969] flex items-center justify-center hover:text-tak hover:border-tak group"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/juan-paulo-mejia-857953282/",
                "_blank"
              )
            }
          >
            <Linkedin className="text-[hsl(0,0%,90%)] cursor-pointer group-hover:text-tak w-[60%]" />
          </div>
          <Link
            href="./Resumé.pdf" // Directly referencing the public path
            target="_blank"
            rel="noopener noreferrer"
            className="w-(--small-circle)  aspect-square rounded-full border outline-[#696969] flex items-center justify-center hover:text-tak hover:border-tak group"
          >
            <Resume className="text-[hsl(0,0%,90%)] cursor-pointer group-hover:text-tak w-[60%]" />
          </Link>
          <div
            className="w-(--small-circle)  aspect-square rounded-full border outline-[#696969] flex items-center justify-center hover:text-tak hover:border-tak group"
            onClick={() => window.open("https://github.com/mejiajp", "_blank")}
          >
            <Github className="text-[hsl(0,0%,90%)] cursor-pointer group-hover:text-tak w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
