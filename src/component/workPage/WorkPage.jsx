import React, { Fragment, useEffect, useRef, useState } from "react";
import SlideInHeader from "../SlideINHeader";
import "./WorkPage.css";
import WorkCard from "../../component/WorkCard";
import "../WorkCard.css";
import Header from "../Header";
import { motion, useInView } from "framer-motion";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import web2 from "../../img/web 2/web2";
import icons from "../../img/icons/icons";
import HamburgerBtn from "../HamburgerBtn";

function WorkPage({ bgImg, sm, md, lg, nrl, nrlMd, headerData, myWork }) {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });

  const [isExpand, setIsExpand] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [moreIndex, setMoreIndex] = useState(5);
  const swiperRef = useRef(null);
  const { text, img } = headerData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Limit scale between 1 and 0 based on scroll
  const maxScroll = 800; // after 100px of scroll
  const scale = Math.max(0, 1 - scrollY / maxScroll);
  const imgScale = Math.max(0.8, 1 - scrollY / (maxScroll * 4));

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  // Track which dividers are in view
  const [inViews, setInViews] = useState([]);

  function handleCardClick(id) {
    const index =
      Array.isArray(myWork) && myWork.findIndex((item) => item.id === id);
    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setIsPaused(true);
    if (!isPaused) swiperRef.current.autoplay.stop();
  }

  // function handleMoreIndex() {
  //   setMoreIndex(!isExpand ? myWork.length : 4);
  // }

  const renderItem = (item, index) => {
    if (item.isImage) {
      return (
        <div
          key={item.id}
          className="overflow-hidden mb-8 md:mb-[9.8rem] sm:h-[30rem] md:h-fit lg:h-fit lg:mb-[20.99rem] xl:h-fit"
        >
          <video
            src={web2.HandEye}
            autoPlay
            loop
            alt="Inserted Visual"
            className="w-full h-full object-cover"
          ></video>
        </div>
      );
    }

    const { id, title, img, vid, tag, date, desc, url } = item;

    const heightClass =
      index === 0 || index === displayedItems.length - 1
        ? "sm:h-[32rem] lg:h-[50rem] xl:h-[52rem]"
        : index === 1 || index === displayedItems.length - 2
        ? "sm:h-[20rem] lg:h-[40rem] xl:h-[43.5rem]"
        : "sm:h-[30rem] lg:h-[30rem] xl:h-[43.5rem]";

    return (
      <Link to={url}>
        <WorkCard
          key={id}
          id={id}
          title={title}
          desc={desc}
          url={url}
          nrl={nrl}
          nrlMd={nrlMd}
          img={img}
          vid={vid}
          handleCardClick={handleCardClick}
          isInView={isInView}
          idx={index}
          motion={motion}
          heightClass={heightClass}
          tag={tag}
          date={date}
        />
      </Link>
    );
  };

  const workSlice = myWork.slice(0, moreIndex);
  const imageInsertIndex = 1; // 3rd position (0-based index)
  const imageItem = {
    isImage: true,
    id: "inserted-image",
    img: "https://placehold.co/300x200/gray/white?text=Ad+Image",
  };

  const displayedItems = [
    ...workSlice.slice(0, imageInsertIndex),
    imageItem,
    ...workSlice.slice(imageInsertIndex),
  ];

  // useEffect(() => {
  //   const observerList = [];

  //   horizontalRef.current.forEach((ref, i) => {
  //     if (ref) {
  //       const observer = new IntersectionObserver(
  //         ([entry]) => {
  //           if (entry.isIntersecting) {
  //             setInViews((prev) => {
  //               const updated = [...prev];
  //               updated[i] = true;
  //               return updated;
  //             });
  //             observer.disconnect;
  //           }
  //         },
  //         { threshold: 0.2 }
  //       );

  //       observer.observe(ref);
  //       observerList.push(observer);
  //     }
  //   });
  //   return () => observerList.forEach((obs) => obs.disconnect());
  // }, [moreIndex]);
  return (
    <div
      className={`flex flex-col text-white`}
      style={{ background: `${bgImg}` }}
    >
      <nav
        className={`fixed top-0 z-20 w-full flex justify-between transition-all duration-300 pointer-events-none ${
          scrollY > 50
            ? "bg-none  md:pr-5 items-center"
            : "bg-transparent py-4 px-5 items-center"
        }`}
      >
        <Link className="logo flex items-center gap-2">
          <motion.img
            src={icons.HandIdentity}
            alt="logo"
            className={`pointer-events-auto ${
              scrollY > 100
                ? "md:p-3 rounded-full w-20 "
                : "w-12 lg:w-20 "
            }`}
            animate={{ scale: imgScale }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="origin-left font-medium text-white hidden md:block md:text-2xl lg:text-[2rem]"
            animate={{ scale }}
            transition={{ duration: 0.3 }}
            style={{
              opacity: scale,
              whiteSpace: "nowrap",
            }}
          >
            Human Identity
          </motion.div>
        </Link>
        <HamburgerBtn scrollY={scrollY} myWork={myWork} />
      </nav>

      {/* Header Section */}
      <Header
        sm={sm}
        md={md}
        lg={lg}
        nrl={nrl}
        nrlMd={nrlMd}
        text={text}
        img={img}
      />

      {/* Section Header */}
      <section className="text-black">
        <SlideInHeader
          text="work"
          borderClr={"white"}
          nrl={nrl}
          nrlMd={nrlMd}
        />

        {/* Work Card */}
        <div className="bg-gray-100 w-full">
          <div className="space-y-2 lg:gap-4 w-full">
            <div className="bg-white">
              {/* <div
                className={`grid grid-cols-2 items-center sm:h-16 ${nrl} ${nrlMd} px-3 md:px-10 py-3`}
              >
                <h4 className="text-black md:text-base lg:text-xl font-semibold">
                  Available Work
                </h4>
                {displayedItems.length > 5 &&
                  (!isExpand ? (
                    <button
                      className="flex items-center gap-1 text-orange-600 justify-self-end hover:text-orange-700 transition-colors duration-150 text-base"
                      onClick={() => {
                        setIsExpand(true);
                        handleMoreIndex();
                      }}
                    >
                      View All
                      <span>
                        <CgArrowTopRight className="text-xl" />
                      </span>
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-1 text-orange-600 justify-self-end hover:text-orange-700 transition-colors duration-150 text-base"
                      onClick={() => {
                        setIsExpand(false);
                        handleMoreIndex();
                      }}
                    >
                      Collapse
                      <span>
                        <CgArrowDownR className="text-xl" />
                      </span>
                    </button>
                  ))}
              </div> */}

              <div ref={containerRef} className="p-3 md:p-10">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="flex gap-9 w-full"
                  columnClassName="masonry-column"
                >
                  {/* First Column with 2 items */}
                  <div className="flex flex-col justify-between h-full">
                    {displayedItems.slice(0, 2).map((item, index) => {
                      return <Fragment key={item.id}>{renderItem(item, index)}</Fragment>; // Reuse rendering logic
                    })}
                  </div>

                  {/* Second Column with 3 items */}
                  <div className="flex flex-col justify-between h-full">
                    {displayedItems.slice(2, 5).map((item, index) => {
                      return <Fragment key={item.id}>{renderItem(item, index + 2)}</Fragment>; // Adjust index for proper height logic
                    })}
                  </div>
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkPage;
