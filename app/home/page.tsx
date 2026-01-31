import Hero from "./hero/hero";
import Works from "./works/works";

export default function page() {
  return (
    <main className="relative min-h-screen text-white bg-primary z-10 lala">
      <Hero />
      <Works />
    </main>
  );
}
