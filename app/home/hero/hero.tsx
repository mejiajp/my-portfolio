import React from "react";
import styles from "@/app/home/hero/hero.module.css";
import Image from "next/image";
import Profile from "@/public/img/profile.jpg";
import AutoType from "@/app/utilities/autoType";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-[100px] lg:pt-[150px]">
      <section
        className={`${styles.container} p-10  lg:grid grid-cols-2 lg:mx-20 lg:gap-[5%] lg:p-0`}
      >
        <div
          className={`${styles.imageContainer} relative w-full h-full overflow-hidden flex items-center bg-blue`}
        >
          <Image
            src={Profile}
            alt="Profile"
            priority
            className="object-cover"
          />
        </div>

        {/* Introduction */}
        <div
          className={`${styles.introduction} flex flex-col lg:justify-between lg:h-[90%] my-12 lg:my-0`}
        >
          <div className="text-3xl lg:text-4xl font-medium tracking-wider leading-loose mt-8 lg:mt-0 h-[200px] md:h-[120px] lg:h-[20%]">
            <p>
              Juan is an up and coming <AutoType />
            </p>
          </div>

          <p className="text-sm lg:text-xl font-extralight text-[#dddddd] tracking-wider leading-loose">
            Fueled by a fascination with the digital landscape. I’ve recently
            received my degree in Computer Science at the PUP, where I’ve honed
            and practiced my skills. Now, I’m eager to turn my passion into a
            profession, ready to create impactful web solutions.
          </p>

          <Link
            href="/about"
            className={`${styles.getToKnow} mt-10 lg:mt-0 relative group`}
            data-cursor="About"
          >
            <p className="cursor-pointer">Get to know me more</p>
            <Arrow className="ml-5 text-tak transition-transform duration-800 group-hover:translate-x-5 scale-x-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
