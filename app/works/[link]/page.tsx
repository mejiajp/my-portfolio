"use client";

// app/works/[id]/page.tsx
import React from "react";
// import styles from "./link.module.css";
import { works } from "@/app/data/worksData"; // Import your works data
import { Work } from "@/app/types/workTypes"; // Import your Work type
import Image from "next/image";

export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ link: string }>;
}) {
  const resolvedParams = React.use(params); // unwrap the promise
  const link = resolvedParams.link;

  // Find the work by link instead of id
  const work: Work | undefined = works.find((work) => work.link === link);

  // Check if work is found
  if (!work) {
    return <div>Work not found!</div>; // Handle case where work is not found
  }

  console.log(work.subImg.src);

  return (
    <main className="text-[#dddddd] bg-primary text-sm pb-[150px] px-8 tracking-widest leading-relaxed overflow-hidden">
      <div className="w-full h-[600px] flex justify-center items-center ">
        {" "}
        <h2 className="text-6xl lg:text-9xl font-bold w-[80%] text-center">
          {work.title}
        </h2>
      </div>
      <div className={`w-full h-[600px] relative bg-red-500`}>
        <Image
          src={work.inImg.src}
          alt={work.title}
          width={1200} // Set a fixed width (adjust as necessary)
          height={600} // Set a fixed height (adjust as necessary)
          quality={100}
          className="object-cover h-full w-full" // Ensure the image covers the div without distortion
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full font-medium gap-3 py-5  md:border-b border-[#dddddd]">
        <div>
          <h3 className="text-white font-semibold">LINK</h3>
          <div
            className={work.live ? "cursor-pointer text-tak " : "text-gray-400"}
            onClick={() => work.live && window.open(work.live, "_blank")}
            data-cursor={work.live ? "Open" : ""}
          >
            {work.live ?? "PRIVATE LINK NOT PROVIDED"}
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold">ROLE</h3>
          <p>{work.role}</p>
        </div>
        <div className="overflow-hidden">
          <h3 className="text-white font-semibold">TECH STACK</h3>
          <p className="truncate">{work.techStack.join(", ")}</p>
        </div>
        <div>
          <h3 className="text-white font-semibold">TIMELINE</h3>
          <p className="">
            {work.start} - {work.end}
          </p>
        </div>
      </div>

      <div className="py-5 pt-10">
        <p className="my-3 text-white font-semibold">OVERVIEW</p>
        <div className="text-xl flex justify-center font-light">
          <div className="md:w-[80%]">{work.description}</div>
        </div>
      </div>

      <div className="py-5 pt-20 pb-10 lg:grid lg:grid-cols-2">
        <div className={`w-full  relative flex items-center`}>
          <Image
            src={work.subImg.src}
            alt={work.title}
            width={1200} // Set a fixed width (adjust as necessary)
            height={600} // Set a fixed height (adjust as necessary)
            quality={100}
            className="object-cover w-full" // Ensure the image covers the div without distortion
          />
        </div>

        <div className={` px-5 pt-10 lg:pt-0`}>
          <p className="my-3 text-white font-semibold ">FEATURES</p>
          {work.features.map((feature, index) => (
            <div key={index} className="font-light text-xl py-5 px-5">
              {index + 1}. {feature.title} - {feature.description}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
