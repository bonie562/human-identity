import React, { useEffect } from "react";
import ContactCard from "../component/ContactCard";
import ProjectInfo from "../component/ProjectInfo";
import infoText from "../component/infoText";
import BackToTop from "../component/BackToTop";

function Bimbeat({ workData }) {
  const bimbeatContents = Array.isArray(workData?.contents)
    ? workData.contents
    : [];
  console.log((window.scrollY = 30));
  const twinRows = [1, 8, 10, 11, 14];

  const groupedImages = [];
  let i = 0;

  while (i < bimbeatContents.length) {
    if (
      twinRows.includes(groupedImages.length) &&
      i + 1 < bimbeatContents.length
    ) {
      groupedImages.push([bimbeatContents[i], bimbeatContents[i + 1]]);
      i += 2;
    } else {
      groupedImages.push([bimbeatContents[i]]);
      i += 1;
    }
  }

  return (
    <div className="mb-20">
      <div>
        {groupedImages.map((group, index) => (
          <div
            key={index}
            className={`grid gap-2 md:gap-6 lg:gap-10 mb-8 ${
              group.length === 2 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {group.map(({ id, title, img, type }) => (
              <div key={id}>
                {type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full pointer-events-none"
                  >
                    <source src={img} />
                  </video>
                ) : (
                  <img
                    src={img}
                    alt={title}
                    className="w-full pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <ProjectInfo projectInfoText={infoText.bimbeatInfo} />
      {/* <BackToTop /> */}
    </div>
  );
}

export default Bimbeat;
