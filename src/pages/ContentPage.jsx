import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/SideBar";
import RelatedWorks from "../component/RelatedWorks";

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
