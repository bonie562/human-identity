import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa";
import web2 from "../../img/web 2/web2";
import CardSlider from "../CardSlider";

function ExpandableCard({
  id,
  url,
  borderClr,
  nrl,
  nrlMd,
  classNameLabel,
  classNameBtn,
  label,
  type,
  details,
  audioSrc,
  contents,
  isActive,
  onClick,
}) {
  const [isPlayed, setIsPlayed] = useState(false);
  const audioRef = useRef(null);

  function handlePlay() {
    if (!audioRef.current) return;

    if (isPlayed) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlayed(!isPlayed);
  }

  // Pause audio if card is collapsed
  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      setIsPlayed(false);
    }
  }, [isActive]);

  return (
    <div
      id={`${url}`}
      className={`card h-auto transition-all duration-300 overflow-hidden flex flex-col py-2 ${nrl} ${nrlMd} pr-3`}
      style={{ background: borderClr }}
    >
      <div className="group">
        <div
          className="w-full h-16 flex items-center justify-between select-none"
          onClick={() => {
            onClick();
          }}
        >
          <div
            className={`uppercase text-2xl font-semibold text-gray-900 transform group-hover:translate-x-10 transition-transform duration-200 ease-out ${classNameLabel} ${
              isActive && "group-hover:translate-x-0"
            }`}
          >
            {label}
          </div>

          <button
            className={`border-4 grid place-content-center border-black aspect-square w-11 rounded-full ${classNameBtn}`}
          >
            <img
              src={web2.ArrowExpand}
              alt=""
              className={`w-10 pointer-events-none ${
                isActive ? "-rotate-90" : "rotate-0"
              } transition-all duration-300 ease-in-out rounded-full m-0`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.article
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            {type === "random" && contents ? (
              <div className="flex justify-center flex-col lg:flex-row gap-10 w-full scale-75 md:scale-[.60] lg:scale-[.65] lg:-mx-[18rem] -my-[5rem] md:-my-[14rem] lg:-my-[10rem]">
                <CardSlider cardData={contents} />
                <div className="text-justify mx-4 text-[1.5rem] md:text-[2rem] lg:text-[3rem] lg:w-[63rem] -mt-4 whitespace-pre-line">
                  {details.split("\n").map((line, i) => (
                    <p key={i} className="leading-tight whitespace-pre-line">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: line.replace(
                            /<b>(.*?)<\/b>/g,
                            '<strong class="font-semibold text-[2.7rem]">$1</strong>'
                          ),
                        }}
                      />
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative mb-5 md:w-9/12 max-w-[70vh] border-2 p-4 pb-6 border-black/80 rounded-xl">
                {details
                  .split("\n")
                  .map((line) => line.trim())
                  .filter((line) => line.length > 0)
                  .map((line, i) => (
                    <p key={i} className="mb-4">
                      {line}
                    </p>
                  ))}

                <audio ref={audioRef} src={audioSrc} className="hidden" />

                <button
                  className="bg-black w-9 aspect-square rounded-full grid place-content-center absolute right-3 bottom-3 text-white disabled:bg-black/70"
                  disabled={audioSrc == ""}
                  onClick={handlePlay}
                >
                  {!isPlayed ? <FaPlay /> : <FaPause />}
                </button>
              </div>
            )}
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExpandableCard;
