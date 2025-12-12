import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import { CgChevronRightR } from "react-icons/cg";
import { FaPause, FaPlay } from "react-icons/fa";

export default function SwiperSlider({
  myWorkId,
  myWork,
  swiperRef,
  isPaused,
  setIsPaused,
}) {
  function toggleAutoplay() {
    if (!swiperRef.current) return;
    if (isPaused) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
    setIsPaused(!isPaused);
  }

  const WebImages = {
    Harry: "https://placehold.co/400x300/000/fff?text=Harry",
    Ron: "https://placehold.co/400x300/333/fff?text=Ron",
    Hermione: "https://placehold.co/400x300/666/fff?text=Hermione",
  };
  const slides = [
    {
      title: "Harry Potter",
      image: WebImages.Harry,
      description:
        "The boy who lived. A brave and loyal friend. Master of the Elder Wand.",
    },
    {
      title: "Ron Weasley",
      image: WebImages.Ron,
      description:
        "The loyal best friend. Always there with a joke and a helping hand.",
    },
    {
      title: "Hermione Granger",
      image: WebImages.Hermione,
      description:
        "The brightest witch of her age. Intelligent, resourceful, and kind.",
    },
  ];

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full max-w-5xl"
    >
      {myWork.map(({ id, title, img, desc, url }, index) => (
        <SwiperSlide key={index} className={`${""}`}>
          <div className="bg-white h-72 lg:h-[40rem] flex items-center justify-center px-4 lg:p-4">
            <div className="flex lg:flex-col w-full gap-4 items-center justify-center h-full">
              {/* Left Side Image */}
              <div className="flex-1 h-60 sm:h-72 md:h-80 lg:w-full lg:h-[34rem] xl:h-[6rem] rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>

              {/* Right Side Text */}
              <div className="relative flex-1 h-5/6 rounded-xl">
                {/* Botton Controls */}
                <div className="  flex justify-between items-center absolute top-0 right-2">
                  {/* Pause / Play Button */}
                  <button
                    title={isPaused ? "Resume" : "Pause"}
                    onClick={toggleAutoplay}
                    className="text-gray-600 flex justify-center items-center gap-1 text-sm border-2 border-gray-600 rounded-full w-7 aspect-square"
                  >
                    {isPaused ? <FaPlay /> : <FaPause />}
                    {/* {isPaused ? "Resume" : "Pause"} */}
                  </button>{" "}
                </div>
                <div className="flex flex-col h-full gap-3 rounded-xl p-4">
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p className="line-clamp-3 text-sm text-gray-500">{desc}</p>

                  <button className="bg-orange-600 hover:bg-orange-700 transition-colors duration-150 text-white px-3 py-1 rounded font-semibold w-fit">
                    Loca
                  </button>

                  {/* Custom Navigation Buttons */}
                  <div className="mt-auto border-t pt-2 flex justify-end gap-2">
                    <button
                      className="text-gray-500"
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      ...
                    </button>
                    <button
                      className="text-gray-700 text-2xl"
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      <CgChevronRightR />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
