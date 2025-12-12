import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import icons from "../img/icons/icons";
import { CgArrowLeft } from "react-icons/cg";

function SideBar({ workData, pageName, setPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const newWorkData = Array.isArray(workData) && workData;

  useEffect(() => {
    const currentPath = location.pathname;

    const match = newWorkData.find(({ url }) => currentPath.includes(url));

    if (match) setPageName(match.tag);
    else setPageName("work");
  }, [location, newWorkData]);

  return (
    <div className="flex flex-col gap-7 p-2 md:pr-7 md:p-5 lg:pr-10 lg:p-6 h-full">
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <img
            title="Home"
            src={icons.HandIdentity}
            alt=""
            className="w-12 lg:w-20"
          />
        </Link>
        <button
          title="Back"
          className="text-3xl bg-grey w-10 h-10 rounded-full grid place-content-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          <CgArrowLeft />
        </button>
      </div>
      <div className="flex items-end flex-wrap justify-between">
        <div className="my-2 md:pt-4 lg:my-4">
          <h2 className="text-6xl md:text-[5rem] font-[600]  capitalize leading-[.8em] tracking-normal">
            {pageName}
          </h2>
        </div>
        <div className="flex gap-1 md:gap-3 w-fit flex-wrap">
          {newWorkData.map(({ tag, url }) => (
            <Link key={tag} to={url}>
              <button
                className={`md:text-xl capitalize h-10 px-3 font-[500] rounded-full ${
                  tag === pageName ? "text-white bg-black" : "bg-grey"
                }`}
                onLoad={() => setPageName(tag)}
              >
                {tag}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
