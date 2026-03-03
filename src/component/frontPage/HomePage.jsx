import React, { useEffect, useState } from "react";
import WorkPage from "../workPage/WorkPage";
import RandomPage from "../randowmPage/RandomPage";
import AboutPage from "../aboutPage/AboutPage";
import { WebImages } from "../../img/website/WebImage";
import Footer from "../footer/Footer";
import BackToTop from "../BackToTop"

function HomePage({headerData, workData, apiData, setApiData}) {
  const views = {
    sm: "sm:pr-20",
    md: "md:pr-28",
    lg: "lg:pr-56",
    nrl: "px-3",
    nrlMd: "md:pl-10",
  };
  const bgImg = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1)), url(${WebImages.WebBg})`;

  return (
    <div className="">
      <div className="">

        {/* Work Page */}
        <WorkPage
          bgImg={bgImg}
          sm={views.sm}
          md={views.md}
          lg={views.lg}
          nrl={views.nrl}
          nrlMd={views.nrlMd}
          headerData={apiData.headerData}
          myWork={apiData.workData}
        />

        {/* Random Page */}
        <RandomPage
          bgImg={bgImg}
          nrl={views.nrl}
          nrlMd={views.nrlMd}
          headerData={apiData.headerData}
        />

        {/* About Page */}
        <AboutPage bgImg={bgImg} nrl={views.nrl} nrlMd={views.nrlMd} />

        {/* Footer */}
        <Footer />
        {/* <BackToTop /> */}
      </div>
    </div>
  );
}

export default HomePage;
