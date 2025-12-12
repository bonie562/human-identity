import React from "react";
import { Link } from "react-router-dom";

export default function ListItems({ section, config, onClose }) {
  return (
    <div>
      <h5 className="font-bold text-2xl pb-2 uppercase">{section}</h5>

      {config.map((item, index) => {
        const { tag, label, desc, url } = item;

        const Content = (
          <div className="flex justify-between items-center w-full py-3  transition-all duration-300 group hover:pl-3 hover:bg-white/80 hover:text-black">
            <span className="capitalize font-semibold">
              {tag ? tag : label}
            </span>
            {url && (
              <svg
                className="-rotate-90 text-slate-400 group-hover:text-black transition"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M204 88v104a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h75L55.51 72.48a12 12 0 0 1 17-17L180 163V88a12 12 0 0 1 24 0"
                />
              </svg>
            )}
          </div>
        );

        return (
          <div
            key={index}
            className="border-b border-gray-700 last:border-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-white"
          >
            {url ? (
              <Link
                to={section === "work" ? url : `#${url}`}
                onClick={onClose}
                className="block w-full focus:outline-none"
              >
                {Content}
              </Link>
            ) : (
              <button
                className="block w-full text-left cursor-not-allowed opacity-50"
                disabled
              >
                {Content}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
