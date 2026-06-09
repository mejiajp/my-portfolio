import React from "react";

import Image from "next/image";

import styles from "./slideshow.module.css";

import img1 from "@/public/img/1727688085199.jpg";

import img3 from "@/public/img/IMG_20230430_095322.jpg";

import img4 from "@/public/img/IMG_20230628_150124.jpg";

import img5 from "@/public/img/IMG_20230729_132415_068.jpg";

import img6 from "@/public/img/IMG_20231219_005903_903.jpg";

import img7 from "@/public/img/IMG_20240204_135655_548.jpg";

import img8 from "@/public/img/IMG_20240204_154947_951.jpg";

import img9 from "@/public/img/IMG_20240330_232043_794.jpg";

import img10 from "@/public/img/IMG_20240514_170735_925.jpg";

import img11 from "@/public/img/IMG_20240825_181955_510.jpg";

import img12 from "@/public/img/received_469330805705564.jpeg";

import img13 from "@/public/img/received_899594922220463.jpeg";

const Slideshow = () => {
  const images = [
    {
      src: img1,

      top: "top-0",

      duplicateTop: "top-[100%]",

      layout: "left-[66%] w-[33%] lg:left-[76%] lg:w-[23%]",
    }, // graduate

    {
      src: img5,

      top: "top-[6%]",

      duplicateTop: "top-[106%]",

      layout: "left-[2%] w-[37%] lg:left-[12%] lg:w-[27%]",
    }, // lrt

    {
      src: img12,

      top: "top-[21%]",

      duplicateTop: "top-[121%]",

      layout: "left-0 w-[43%] lg:left-0 lg:w-[23%]",
    }, // thesis

    {
      src: img3,

      top: "top-[14%] lg:top-[19%]",

      duplicateTop: "top-[114%] lg:top-[119%]",

      layout: "left-[58%] w-[31%] lg:left-[68%] lg:w-[21%]",
    }, // odi

    {
      src: img10,

      top: "top-[40%]",

      duplicateTop: "top-[140%]",

      layout: "left-[5%] w-[38%] lg:left-[35%] lg:w-[18%]",
    }, // cold

    {
      src: img7,

      top: "top-[31%] lg:top-[41%]",

      duplicateTop: "top-[131%] lg:top-[141%]",

      layout: "left-[53%] w-[38%] lg:left-[73%] lg:w-[18%]",
    }, // dani

    {
      src: img4,

      top: "top-[56%]",

      duplicateTop: "top-[156%]",

      layout: "left-[4%] w-[52%] lg:left-[4%] lg:w-[32%]",
    }, // bb

    {
      src: img13,

      top: "top-[58%]",

      duplicateTop: "top-[158%]",

      layout: "left-[58%] w-[41%] lg:left-[78%] lg:w-[21%]",
    }, // samgyup

    {
      src: img9,

      top: "top-[70%]",

      duplicateTop: "top-[170%]",

      layout: "left-[14%] w-[40%] lg:left-[34%] lg:w-[20%]",
    }, // bengbeng

    {
      src: img11,

      top: "top-[76%]",

      duplicateTop: "top-[176%]",

      layout: "left-[49%] w-[40%] lg:left-[69%] lg:w-[20%]",
    }, // coffee

    {
      src: img8,

      top: "top-[88%]",

      duplicateTop: "top-[188%]",

      layout: "left-[5%] w-[40%] lg:left-[5%] lg:w-[20%]",
    }, // phone

    {
      src: img6,

      top: "top-[89%]",

      duplicateTop: "top-[189%]",

      layout: "left-[55%] w-[40%] lg:left-[55%] lg:w-[20%]",
    }, // swimming
  ];

  return (
    <section className="h-[1200px] custom-outline outline-white relative overflow-hidden ">
      <div
        className={`${styles.characteristics} text-3xl md:text-6xl z-10 ml-5 lg:ml-20 leading-relaxed`}
      >
        <p className="">SOMEJUAN&apos;s a</p>

        <p>Gamer</p>

        <p>Paw-rent</p>

        <p>DOOM Scroller</p>
      </div>

      <div className={`${styles.slider} hidden lg:block cursor-pointer z-10`}>
        <ul>
          <li className={`left-0`}>-ABOUT-</li>

          <li className={`left-full`}>-ABOUT-</li>
        </ul>
      </div>

      <div className="h-[3000px] relative ">
        <div className={`${styles.container} `}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden ${img.layout} ${img.top} `}
            >
              {/* Box for animation */}

              <div
                className={`absolute w-full h-full bg-tak ${styles.slide_up}`}
              ></div>

              {/* Image */}

              <Image
                src={img.src}
                alt={`Scattered Image ${index + 1}`}
                loading="lazy"
                placeholder="blur"
                className="object-cover w-full h-auto"
              />
            </div>
          ))}

          {/* Second set of images */}

          {images.map((img, index) => (
            <div
              key={`duplicate-${index}`} // Ensure unique key for duplicate
              className={`absolute overflow-hidden ${img.layout} ${img.duplicateTop} `}
            >
              {/* Box for animation */}

              <div
                className={`absolute w-full h-full bg-tak ${styles.slide_up}`}
              ></div>

              {/* Image */}

              <Image
                src={img.src}
                alt={`Scattered Image ${index + 1}`}
                loading="lazy"
                placeholder="blur"
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
