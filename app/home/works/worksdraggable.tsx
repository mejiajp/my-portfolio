"use client";
import React, { useRef, useState } from "react";
import styles from "./worksdraggable.module.css";
import { Work } from "@/app/types/workTypes";
import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";
import Link from "next/link";

interface Props {
  works: Work[];
}

const DRAG_THRESHOLD = 5;

const WorksDraggable = ({ works }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const drag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault(); // 🔥 CRITICAL

    drag.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: scrollRef.current.scrollLeft,
      moved: false,
    };

    setIsDragging(true);
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !scrollRef.current) return;

    e.preventDefault();

    const walk = e.clientX - drag.current.startX;
    scrollRef.current.scrollLeft = drag.current.startScrollLeft - walk;

    if (Math.abs(walk) > DRAG_THRESHOLD) {
      drag.current.moved = true;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture(e.pointerId);
  };

  const preventClickOnDrag = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const cursorClass = isDragging ? styles.grabbing : styles.grab;

  return (
    <div
      ref={scrollRef}
      className={`${styles.container} ${cursorClass} px-5 lg:px-20 pb-[250px] lg:pb-[300px]`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      {works.slice(0, 3).map((work) => (
        <Link
          key={work.link}
          href={`/works/${work.link}`}
          onClick={preventClickOnDrag}
          className={`${styles.content} w-[80%] lg:w-[50%] mr-5 shrink-0 relative`}
          data-cursor="Drag"
        >
          <div className="w-full aspect-4/3 relative overflow-hidden">
            <div
              className={`${styles.image} w-full h-full bg-cover bg-center`}
              style={{ backgroundImage: `url(${work.img.src})` }}
            />
            <div className="absolute bottom-0 w-full h-[30%] bg-linear-to-t from-primary" />
          </div>

          <div className={`bg-primary p-2 text-white ${styles.textContainer}`}>
            <p className="text-[#696969] font-bold">{work.projectType}</p>

            <div className="flex text-tak text-3xl items-center mb-3">
              <p>{work.title}</p>
              <Arrow className={styles.arrow} />
            </div>

            <p className="text-[#dddddd] text-sm md:text-base">
              {work.overview}
            </p>
          </div>
        </Link>
      ))}

      <Link
        href="/works"
        onClick={preventClickOnDrag}
        className="w-[80%] lg:w-[50%] aspect-4/3 mr-5 bg-primary-dark shrink-0 relative overflow-hidden"
        data-cursor="Open"
      >
        <div
          className={`flex items-center justify-center h-full  ${styles.more}`}
        >
          <div className="text-xl text-center text-tak lg:text-white">
            Explore more about my other projects
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorksDraggable;
