import React, { useState } from "react";
import LazyVideo from "../component/LazyVideo";
import ProjectInfo from "../component/ProjectInfo";
import infoText from "../component/infoText";

function Loca({ workData }) {
  const locaContents = Array.isArray(workData?.contents)
    ? workData.contents
    : [];

  const twinRows = [2, 4, 6, 9, 10, 13]; // row indexes that should have 2 images

  // Compute grouped images directly
  const groupedImages = [];
  let i = 0;

  while (i < locaContents.length) {
    if (
      twinRows.includes(groupedImages.length) &&
      i + 1 < locaContents.length
    ) {
      groupedImages.push([locaContents[i], locaContents[i + 1]]);
      i += 2;
    } else {
      groupedImages.push([locaContents[i]]);
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
                    autoPlay={title !== "ANewMoney"}
                    showPlayButton={title === "ANewMoney"}
                    muted
                    loop
                    className={`w-full object-cover h-full ${
                      title === "ANewMoney" ? "pointer-events-none" : ""
                    }`}
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

      <ProjectInfo projectInfoText={infoText.locaInfo} />
      
    </div>
  );
}

export default Loca;
