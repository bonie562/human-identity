import React, { useEffect, useRef, useState } from "react";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";
import "../../src/index.css";

function Header({ nrl, nrlMd, sm, md, lg, text, img }) {
  const [textDone, setTextDone] = useState(false);
  const textSpeed = 200;
  const [hasScrolled, setHasScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <header className="relative w-full h-[46rem] sm:h-fit md:h-[80rem] lg:h-[155vh] mb-32 mx-auto mt-28 border-white flex flex-col">
      <div
        className={`pt-7 md:pt-16 px-3  lg:pr-16  lg:w-full w-fit h-full  lg:h-[35rem]  ${nrlMd}`}
      >
        <TextAnimation text={`${text}`} onComplete={() => setTextDone(true)} />
      </div>
      <div className="img_box w-full md:absolute lg:relative md:-bottom-32  lg:w-[110vh]  lg:-bottom-2 mx-auto pointer-events-none">
        {textDone && (
          <motion.img
            src={img || ""}
            autoPlay
            alt="eye"
            className="w-full mx-auto object-contain"
            initial={{ opacity: 0, y: 100 }}
            whileInView={hasScrolled ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.1,
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
