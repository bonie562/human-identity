import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/SideBar";
import RelatedWorks from "../component/RelatedWorks";
import Lenis from "lenis";

function ContentPage({ workData }) {
  const [scrolled, setScrolled] = useState(false);
  const [pageName, setPageName] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply Lenis smooth scrolling conditionally based on screen size
    let lenis;
    let rafId;

    const initLenis = () => {
      const isMobile = window.innerWidth < 1024;
      
      if (lenis) {
        lenis.destroy();
      }
      
      if (isMobile) {
        // For mobile/tablet: apply to window
        lenis = new Lenis({
          smooth: true,
        });
      } else {
        // For desktop: apply to scroll-container element
        const wrapper = document.getElementById("scroll-container");
        if (wrapper) {
          lenis = new Lenis({
            wrapper,
            // content: wrapper,
            smooth: true,
          });
        }
      }

      if (lenis) {
        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      }
    };

    initLenis();

    // Handle window resize
    const handleResize = () => {
      initLenis();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (lenis) {
        lenis.destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

 return (
    <div className="grid md:grid-cols-1 lg:grid-cols-[23rem_1fr] w-full  lg:*:h-screen ">
      <div className="">
        <SideBar
          workData={workData}
          scrolled={scrolled}
          pageName={pageName}
          setPageName={setPageName}
        />
      </div>
      <div id="scroll-container" className=" px-2 md:px-6  md:pt-6 lg:pr-6 overflow-y-auto">
        <Outlet />
        <RelatedWorks workData={workData} currentPage={pageName} />
      </div>
    </div>
  );
}

export default ContentPage;
