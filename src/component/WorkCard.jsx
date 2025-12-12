import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WebIcons } from "../img/website/WebImage";
import { video } from "framer-motion/client";

function WorkCard({ id, title, desc, img, vid, tag, date, heightClass, idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  function getVideoType(url) {
    const ext = url.split(".").pop();
    return `video/${ext}`;
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      className={`workCard break-inside-avoid select-none cursor-pointer bg-white transition-shadow duration-300-lg md:w-full md:h-full mb-16 flex flex-col gap-5 ${heightClass}`}
      // onClick={() => {
      //   handleCardClick(id);
      // }}
    >
      <div className={`md:w-full h-fit overflow-hidden`}>
        {img ? (
          <img
            src={img}
            alt=""
            className="w-fit h-fit object-cover hover:scale-105 transition-all duration-700"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
          >
            <source src={vid} type={getVideoType(vid)} />
          </video>
        )}
      </div>
      <div className={`space-y-2.5 md:flex md:flex-col md:justify-between`}>
        <div className="*:px-3 *:tb:py-1.5 tb:text-2xl *:text-black/80 *:bg-grey *:font-[550] *:rounded-full flex gap-2 items-center text-lg">
          <button className="capitalize">{tag}</button>
          <button className="">{date}</button>
        </div>
        <p title={desc} className="text-sm sm:text-base md:text-xl lg:text-[1.7rem] !leading-[1.1]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default WorkCard;
