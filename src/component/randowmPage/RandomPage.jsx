import React, { useState } from "react";
import SlideINHeader from "../SlideINHeader";
import { randomData } from "../data/random";
import RandomCard from "./ExpandableCard";

function RandomPage({ borderClr = "rgb(218, 61, 5)", bgImg, nrl, nrlMd }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }
  return (
    <section id="random" className={`flex flex-col`}>
      <SlideINHeader
        text={"random"}
        borderClr={borderClr}
        bgImg={bgImg}
        nrl={nrl}
        nrlMd={nrlMd}
      />

      {/* Random Items */}
      <div className="divide-y-4 divide-black">
        {randomData.map(
          ({ id, label, type, details, url, contents }, index) => (
            <RandomCard
              key={index}
              id={id}
              url={url}
              nrl={nrl}
              nrlMd={nrlMd}
              index={index}
              borderClr={borderClr}
              label={label}
              type={type}
              details={details}
              contents={contents}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          )
        )}
      </div>
    </section>
  );
}

export default RandomPage;
