import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function RelatedWorks({ workData, currentPage }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    window.addEventListener("resize", updateScrollButtons);
    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
    }
    return () => {
      window.removeEventListener("resize", updateScrollButtons);
      if (el) {
        el.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [workData]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Related Works</h2>

      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2"
          >
            <FaChevronLeft />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2"
          >
            <FaChevronRight />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pr-6"
        >
          {workData.map(({ tag, url, contents }, idx) => {
            const images = contents.filter(({ type }) => type === "image");
            const secondImage = images[2]; // Get the second image

            if (!secondImage || currentPage === tag) return null;

            return (
              <button
                key={idx}
                onClick={() => navigate(url)}
                className="group space-y-3 relative focus:outline-none flex-shrink-0"
              >
                <div className="relative w-96 h-72 rounded-md overflow-hidden">
                  <img
                    src={secondImage.img}
                    alt={`related-${idx}`}
                    className="w-full h-full object-cover transition duration-300"
                  />
                  <div className="absolute inset-0 bg-white group-hover:bg-black group-hover:bg-opacity-40 transition duration-300 mix-blend-multiply" />
                </div>
                <div className="text-center text-xl font-medium capitalize transition-colors duration-300 group-hover:text-orange-600">
                  {tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RelatedWorks;
