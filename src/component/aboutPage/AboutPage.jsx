import React, { useState } from "react";
import SlideINHeader from "../SlideINHeader";
import { aboutItems } from "../data/aboutItems";
import AboutCard from "../randowmPage/ExpandableCard";
import Footer from "../footer/Footer";
import { WebImages } from "../../img/website/WebImage";
import web2 from "../../img/web 2/web2";

function AboutPage({ bgClr = "#f9fafb", bgImg, nrl, nrlMd }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }
  return (
    <section className="flex flex-col  min-h-fit ">
      <SlideINHeader
        text="about"
        borderClr="#f9fafb"
        bgImg={bgImg}
        nrl={nrl}
        nrlMd={nrlMd}
      />

      <div
        className={`md:min-h-screen flex flex-col  `}
        style={{ background: bgClr }}
      >
        <div className="relative h-fit flex items-center lg:justify-center  mb-6 pointer-events-none">
          <video
            src={web2.AboutMov}
            autoPlay
            loop
            controls
            className="w-full h-fit object-cover "
            type="video/x-matroska"
          ></video>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-mt-9 leading-6 sm:leading-8 text-[1.3rem] sm:text-3xl md:text-5xl lg:text-8xl z-10 text-center font-semibold">
            Just like fingerprints, <br /> your design <br /> should be unique.
          </div>
        </div>

        <div className={`border-y-4 border-black divide-y-4 divide-black`}>
          {aboutItems.map(({ url, label, details, audioSrc }, index) => (
            <AboutCard
              key={index}
              url={url}
              index={index}
              bgClr={bgClr}
              nrl={nrl}
              nrlMd={nrlMd}
              classNameLabel="font-bold"
              classNameBtn="bg-red rounded-full"
              label={label}
              details={details}
              audioSrc={audioSrc}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
}

export default AboutPage;
