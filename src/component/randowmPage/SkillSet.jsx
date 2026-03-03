import React, { useState, useEffect } from "react";

function SkillSet({
  nrl,
  nrlMd,
  borderClr,
  classNameLabel,
  videoSrc,
  label,
  type,
  id,
}) {
  return (
    <div
      id={id}
      className={`card h-auto transition-all duration-300 overflow-hidden flex flex-col py-2 my-2`}
      style={{ background: borderClr }}
    >
      <div className="group">
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 select-none items-center">
          <div
            className={`uppercase text-2xl font-semibold text-gray-900 transform group-hover:translate-x-10 transition-transform duration-200 ease-out`}
          >
            {label}
          </div>
          <div className="w-96 h-auto border border-gray-900/40 flex items-center sm:justify-self-end ">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              className="w-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
