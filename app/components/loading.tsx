"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./loading.module.css";

const SplashScreenClient = () => {
  const countdown = ["Three", "Two", "Juan"];
  const [loading, setLoading] = useState(true);
  const [phrase, setPhrase] = useState("Setting up...");
  const [animate, setAnimate] = useState(false);

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
  };

  const [currentBreakpoint, setCurrentBreakpoint] = useState("sm");

  const prevBreakpointRef = useRef<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newBreakpoint: string;

      if (width >= breakpoints.lg) {
        newBreakpoint = "lg";
      } else if (width >= breakpoints.md) {
        newBreakpoint = "md";
      } else if (width >= breakpoints.sm) {
        newBreakpoint = "sm";
      } else {
        newBreakpoint = "xs";
      }

      const prevBreakpoint = prevBreakpointRef.current;

      // Only update if the new breakpoint is different from the previous one
      if (newBreakpoint !== prevBreakpoint) {
        setLoading(true);
        setCurrentBreakpoint(newBreakpoint);
        prevBreakpointRef.current = newBreakpoint; // Update ref with the new breakpoint
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Start countdown only if the breakpoint has actually changed
    let count = 0;

    const beginCountdown = setInterval(() => {
      setPhrase(countdown[count]);
      count++;

      if (count === countdown.length) {
        clearInterval(beginCountdown);

        setTimeout(() => {
          setAnimate(true);

          setTimeout(() => {
            setLoading(false);
            setPhrase("Setting up...");
            setAnimate(false);
          }, 800);
        }, 500);
      }
    }, 400);

    return () => clearInterval(beginCountdown); // Cleanup interval on effect re-run
  }, [currentBreakpoint]);

  return loading ? (
    <div
      className={`text-lg lg:text-xl ${styles.load} ${
        animate ? `${styles.aniUp}` : ``
      }`}
    >
      <h1>{phrase}</h1>
    </div>
  ) : null;
};

export default SplashScreenClient;
