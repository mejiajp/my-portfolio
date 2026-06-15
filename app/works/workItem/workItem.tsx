import React from "react";
import styles from "./workItem.module.css";
import { Work } from "@/app/types/workTypes";
import Image from "next/image";
import Link from "next/link";

interface WorkItemProps {
  work: Work;
  styles: typeof styles;
  index: number;
}
const WorkItem: React.FC<WorkItemProps> = ({ work, styles, index }) => {
  return (
    <Link
      className={`${styles.project}   `}
      style={{ "--index": index } as React.CSSProperties}
      href={`works/${work.link}`}
      data-cursor="View"
    >
      <div className="w-full overflow-hidden">
        <Image
          src={work.img.src}
          alt={work.title}
          width={300}
          height={300}
          quality={100}
          className={`${styles.image}`}
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.endDate}>
          <p className={styles.endDateContent}>{work.end}</p>
        </div>
      </div>
      <div className="p-5 text-xl  md:p-10 tracking-none ">
        <h4 className={`${styles.projectType} `}>{work.projectType}</h4>
        <h3 className={styles.projectTitle}>{work.title}</h3>
      </div>
    </Link>
  );
};

export default WorkItem;
