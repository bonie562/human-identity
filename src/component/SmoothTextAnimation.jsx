import React from "react";

function SmoothTextAnimation({ text = "", speed = 100 }) {
  const words = text.split(" ");

  return (
    <p className="text-[1.3rem] sm:text-4xl lg:text-6xl leading-relaxed sm:leading-[3rem] lg:leading-[4.5rem] font-semibold whitespace-pre-line overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fadeInSlideIn"
          style={{
            animationDelay: `${index * speed}ms`,
            animationFillMode: "forwards",
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}

export default SmoothTextAnimation;
