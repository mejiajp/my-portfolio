import { Work } from "@/app/types/workTypes";
import { works } from "@/app/data/worksData";
// import Arrow from "@/public/svg/arrow-right-02-stroke-rounded";
import styles from "./workItem/workList.module.css";
import WorkItem from "./workItem/workItem";

const WorksPage = () => {
  const thisFunction = (string: string) => {
    const array = string.split("");
    console.log(array);
    return null;
  };

  thisFunction("1111010");

  return (
    <section className={`${styles.main} bg-primary pb-20 pt-20 z-20`}>
      <div className={styles.titleContainer}>
        <h1 className={`${styles.title} ml-[10%]`}>All Projects</h1>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.projectsContainer}>
        {works.map((work: Work, index) => (
          <div
            className={`w-full mb-16 flex ${
              index % 2 === 0 ? "sm:justify-end sm:pr-[20%]" : " sm:pl-[20%]"
            } `}
            key={index}
          >
            <WorkItem work={work} styles={styles} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksPage;
