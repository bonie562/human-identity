import React, { useState } from "react";
import LazyVideo from "../component/LazyVideo";
import ProjectInfo from "../component/ProjectInfo";
import infoText from "../component/infoText";

function Creatir({ workData }) {
  const creatirContents = Array.isArray(workData?.contents)
    ? workData.contents
    : [];

  const twinRows = [4, 6, 7, 8]; // row indexes that should have 2 images

  // Compute grouped images directly
  const groupedImages = [];
  let i = 0;

  while (i < creatirContents.length) {
    if (
      twinRows.includes(groupedImages.length) &&
      i + 1 < creatirContents.length
    ) {
      groupedImages.push([creatirContents[i], creatirContents[i + 1]]);
      i += 2;
    } else {
      groupedImages.push([creatirContents[i]]);
      i += 1;
    }
  }
  
 

  return (
    <div className="mb-20">
      <div>
        {groupedImages.map((group, index) => (
          <div
            key={index}
            className={`grid gap-2 my-2 md:my-6 md:gap-6 lg:my-10 lg:gap-10 ${
              group.length === 2 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {group.map(({ id, title, img, type }) => (
              <div key={id}>
                {type === "video" ? (
                  <LazyVideo
                    src={img}
                    autoPlay
                    muted
                    loop
                    className={`w-full object-cover h-full`}
                  />
                ) : (
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className={` w-full object-cover h-full pointer-events-none`}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <ProjectInfo projectInfoText={infoText.creatirInfo} />
      
    </div>
  );
}

export default Creatir;
