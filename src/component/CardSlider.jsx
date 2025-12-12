import { useEffect, useRef, useState } from "react";
import { CgChevronRightR, CgChevronLeftR } from "react-icons/cg";
import { WebImages } from "../img/website/WebImage";

// const cardData = [
//   {
//     image: WebImages.Harry,
//     title: "Title 1",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
//   },
//   {
//     image: WebImages.Harry,
//     title: "Title 2",
//     text: "Another card content goes here...",
//   },
//   {
//     image: WebImages.Harry,
//     title: "Title 3",
//     text: "Third card for testing slider behavior...",
//   },
// ];

export default function CardSlider({ cardData, className }) {
  const totalSlides = cardData.length;
  const [index, setIndex] = useState(1); // Start from 1 (real first)
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);

  // Prepare cloned slides
  const slides = [
    cardData[totalSlides - 1], // last (clone)
    ...cardData,
    cardData[0], // first (clone)
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    if (index >= totalSlides + 1) return; // block over-increment
    setIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const prev = () => {
    if (index <= 0) return; // block over-decrement
    setIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  // Snap back after clone transition
  const handleTransitionEnd = () => {
    if (index === totalSlides + 1) {
      setIsAnimating(false);
      setIndex(1); // jump to first real
    }
    if (index === 0) {
      setIsAnimating(false);
      setIndex(totalSlides); // jump to last real
    }
  };

  return (
    <div
      className={`h-fit flex items-center justify-center overflow-hidden relative ${className} rounded-xl`}
    >
      <div
        ref={sliderRef}
        className="flex w-[50rem] h-auto"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map(({ title, img, type }, i) => (
          <div
            key={i}
            className="flex w-full flex-shrink-0 gap-4 items-center justify-center h-full px-5"
          >
            {/* Image */}
            <div className="flex-1 h-full rounded-xl overflow-hidden">
              {type == "image" ? (
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover rounded-xl"
                />
              ) : (
                <video src={img} autoPlay loop type={`video.mp4`}>
                  {" "}
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
