import React, { useState, useRef, useEffect } from "react";
import ContactCard from "./ContactCard";

function ProjectInfo({ projectInfoText }) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);
  const email = import.meta.env.VITE_EMAIL || "";

  const paragraphs = projectInfoText
    .split("\n")
    .map((para) => para.trim())
    .filter((para) => para.length > 0);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const computed = window.getComputedStyle(el);
      const lineHeight = parseFloat(computed.lineHeight || "20");
      const lines = el.scrollHeight / lineHeight;

      if (lines > 10) {
        setIsOverflowing(true);
      }
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4 lg:mt-0">
      <div className="bg-grey p-4 md:px-5 rounded-2xl">
        <div className="lg:w-11/12">
          <h6 className="capitalize font-semibold mb-2">project information</h6>

          <div
            ref={textRef}
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-[10000px]" : "max-h-[190px]"
            }`}
            style={{ lineHeight: "20px" }}
          >
            {paragraphs.map((para, i) => (
              <p key={i} className="mb-3 leading-5 tracking-wide">
                {para}
              </p>
            ))}
          </div>

          {isOverflowing && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-blue-600 hover:underline"
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>

      <ContactCard email={email} />
    </div>
  );
}

export default ProjectInfo;
