import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function SlideINHeader({ text, borderClr, nrl, nrlMd, bgImg }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: "fit-content",
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <div
      className=""
      style={{ borderTop: `40px solid ${borderClr}`, background: `${bgImg}` }}
    >
      <motion.div
        ref={ref}
        initial={{ width: "100%" }}
        animate={controls}
        className="flex justify-end overflow-hidden my-1"
        style={{ background: borderClr }}
      >
        <div
          className={`py-1 ${nrl} ${nrlMd} grid place-items-center sm:h-[4rem] md:h-[5rem] tb:h-[9rem] w-fit pr-16 md:pr-28 tb:pr-72`}
        >
          <h1 className="text-4xl sm:text-6xl -mb-2 md:-mb-4 md:text-7xl lg:text-9xl font-bold uppercase">
            {text}
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

export default SlideINHeader;
