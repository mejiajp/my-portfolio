import Hero from "./hero/hero";
import Works from "./works/works";

export default function page() {
  return (
    <div className="relative  text-white bg-primary z-10">
      <Hero />
      <Works />
    </div>
  );
}
