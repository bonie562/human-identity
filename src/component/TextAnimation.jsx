import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation({ text, onComplete }) {
  const textRef = useRef(null); // reference to the single text element

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-0 md:pr-[rem] lg:pr-60 overflow-hidden "
    >
      <p
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-relaxed-char flex flex-col gap-6"
        style={{ willChange: "transform, opacity" }}
      >
        {/* {text} */}
        <span>
          Hello humans, i left my home planet after refusing to design another
          propaganda poster, turns out freedom of expression doesn't apply in
          alien politics.
        </span>
        <span>
          Now, disguised as a young black guy, I help humans tell their stories
          through design, not from fear but because the work should take the
          spotlight.
        </span>
      </p>
    </motion.div>
  );
}
