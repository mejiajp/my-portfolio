import styles from "@/app/styles/CircleButtonHover.module.css";

export default function NavButtonHover({
  isHovered,
  mounted,
}: {
  isHovered: boolean;
  mounted: boolean;
}) {
  return (
    <div
      className={`absolute w-full h-full bg-tak rounded-full ${
        mounted && isHovered ? styles.toCenter : styles.toUp
      }`}
    />
  );
}
