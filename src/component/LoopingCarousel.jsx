import { useState } from "react";
import { CgChevronRightR, CgChevronLeftR } from "react-icons/cg";
import { WebImages } from "../img/website/WebImage";

const cards = [
  {
    id: 1,
    image:  WebImages.Harry,
    title: "First Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image:  WebImages.Harry,
    title: "Second Title",
    description: "Numquam placeat nobis sequi odit fuga earum quis rem.",
  },
  {
    id: 3,
    image:  WebImages.Harry,
    title: "Third Title",
    description: "Culpa iure necessitatibus, asperiores, reprehenderit pariatur.",
  },
];

export default function LoopingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="bg-white h-72 hidden md:flex items-center justify-center relative overflow-hidden">
      <div className="flex w-11/12 gap-4 items-center justify-center h-full transition-transform duration-500 ease-in-out">
        <div className="flex-1 h-5/6 rounded-xl">
          <img
            src={currentCard.image}
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 h-5/6 rounded-xl">
          <div className="flex flex-col h-full gap-3 rounded-xl p-4">
            <h3 className="font-bold text-xl">{currentCard.title}</h3>

            <p className="line-clamp-3 text-sm text-gray-500">
              {currentCard.description}
            </p>

            <button className="bg-orange-600 hover:bg-orange-700 transition-colors duration-150 text-white px-3 py-1 rounded font-semibold w-fit">
              Loca
            </button>

            <div className="mt-auto border-t pt-2 flex justify-between gap-2">
              <button onClick={handlePrev} className="text-gray-700 text-2xl">
                <CgChevronLeftR />
              </button>
              <button onClick={handleNext} className="text-gray-700 text-2xl">
                <CgChevronRightR />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
