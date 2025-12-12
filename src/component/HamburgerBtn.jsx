import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import List from "./List";

export default function HamburgerBtn({ scrollY, myWork }) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getButtonSizeClasses = () => {
    if (windowWidth > 900) {
      return scrollY > 1700
        ? "text-black w-16 h-16 md:w-14 md:h-16 py-3 md:py-4 rounded"
        : "w-12 h-12";
    } else {
      return scrollY > 1000
        ? "text-black w-16 h-16 md:w-14 md:h-16 py-3 md:py-4 rounded"
        : "w-12 h-12";
    }
  };

  // Close on ESC
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div className="relative z-50 isolate ">
      {/* Hamburger Toggle Button */}
      <button
        className={`pointer-events-auto flex items-center justify-center z-50 transition-all duration-300 mix-blend-difference ${getButtonSizeClasses()}`}
        onClick={() => setOpen(!open)}
      >
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={windowWidth < 700 ? 24 : 32}
        />
      </button>

      {/* Animated Menu Overlay */}
      {open && (
        <div
          className={`fixed inset-0 flex justify-center items-center bg-black text-white z-40 transition-all duration-300 ease-in-out ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          {/* Optional Close Button in Menu */}
          <header className="absolute top-4 right-8 z- hover:bg-white/80 hover:text-black  transition duration-200">
            <Hamburger toggled={open} toggle={setOpen} size={24} />
          </header>

          <main className="flex justify-center items-center w-full max-w-[90vh] h-full px-4">
            <List myWork={myWork} onClose={() => setOpen(false)} />
          </main>
        </div>
      )}
    </div>
  );
}
