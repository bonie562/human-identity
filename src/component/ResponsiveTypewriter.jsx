import React, { useEffect, useState } from "react";

function ResponsiveWordAnimator({ text = "", speed = 500 }) {
  const [visibleWords, setVisibleWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    if (!text || currentWord >= words.length) return;
    // if (!text || currentWord >= words.length) {
    //   const resetTimer = setTimeout(() => {
    //     setVisibleWords([]);
    //     setCurrentWord(0);
    //   }, 5000); // Wait before resetting

    //   return () => clearTimeout(resetTimer);
    // }

    const timeout = setTimeout(() => {
      setVisibleWords((prev) => [...prev, words[currentWord]]);
      setCurrentWord((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentWord, text, speed, words]);

  return (
    <p className="text-[1.3rem] sm:text-5xl lg:text-6xl leading-relaxed sm:leading-[3rem] lg:leading-[4.5rem] font-semibold whitespace-pre-line">
      {visibleWords.map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-slideInLeft"
          style={{
            animationDelay: `${index * speed}ms`,
            animationFillMode: "forwards",
          }}
        >
          {word}&nbsp;
        </span>
      ))}
      {/* <span className="inline-block w-1 animate-[blink_1000ms_step-end_infinite]">|</span> */}
    </p>
  );
}

export default ResponsiveWordAnimator;
