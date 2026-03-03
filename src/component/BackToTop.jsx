import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop({ scrollRef }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const target = scrollRef.current;
    if (!target) return;

    const handleScroll = () => {
      setShowButton(target.scrollTop > 200);
    };

    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="absolute bottom-4 right-4 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
