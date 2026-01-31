"use client";
import React, { useRef, useState } from "react";
import styles from "./worksdraggable.module.css";
import { Work } from "@/app/types/workTypes";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";
import Link from "next/link";

interface Props {
  works: Work[];
}

const WorksDraggable = ({ works }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    hasMoved: false,
  });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault();
    dragState.current = {
      isDragging: true,
      startX: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
      hasMoved: false,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragState.current.isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - dragState.current.startX;

    scrollRef.current.scrollLeft = dragState.current.scrollLeft - walk;

    // Mark as moved if dragged more than 5px
    if (Math.abs(walk) > 5) {
      dragState.current.hasMoved = true;
    }
  };

  const handleMouseUp = () => {
    // Reset after a small delay to allow click event to read the state
    setTimeout(() => {
      dragState.current.isDragging = false;
      dragState.current.hasMoved = false;
    }, 0);
    setIsDragging(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragState.current.hasMoved) {
      e.preventDefault();
    }
  };

  const cursorClass = isDragging ? styles.grabbing : styles.grab;

  return (
    <div
      className={`${styles.container} ${cursorClass} px-5 lg:px-20 pb-[250px] lg:pb-[300px]`}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {works.slice(0, 3).map((work) => (
        <Link
          href={`/works/${work.link}`}
          key={work.link}
          className={`${styles.content} w-[80%] lg:w-[50%] mr-5 shrink-0 relative ${cursorClass}`}
          onClick={handleLinkClick}
          data-cursor="Drag"
        >
          <div className="w-full aspect-4/3 relative overflow-hidden">
            <div
              className={`${styles.image} w-full h-full bg-cover bg-center transition-transform duration-300`}
              style={{ backgroundImage: `url(${work.img.src})` }}
            />
            <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-primary to-transparent" />
          </div>
          <div
            className={`h-[25%] w-full z-10 bg-primary p-2 text-white ${styles.textContainer}`}
          >
            <p className="text-[#696969] font-bold">{work.projectType}</p>
            <div className="flex text-tak text-3xl items-center mb-3">
              <p>{work.title}</p>
              <Arrow className={styles.arrow} />
            </div>
            <p className="mt-3 text-[#dddddd] text-sm md:text-base">
              {work.overview}
            </p>
          </div>
        </Link>
      ))}
      <Link
        href="/works"
        className="w-[80%] lg:w-[50%] aspect-4/3 mr-5 bg-primary_dark shrink-0 relative overflow-hidden"
        data-cursor="Open"
        onClick={handleLinkClick}
      >
        <div
          className={`flex items-center justify-center h-full ${styles.more}`}
        >
          <div className="text-xl">
            Explore more about this and other of my projects
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorksDraggable;
