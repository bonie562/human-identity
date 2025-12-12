import React from "react";
import { Link } from "react-router-dom";
import { randomData } from "./data/random";
import { aboutItems } from "./data/aboutItems";
import { myWork } from "../api/api";
import ListItems from "./ListItems";

export default function List({ myWork, onClose }) {
  return (
    <div className="w-full max-h-[75vh] bg-black text-white backdrop-blur-md flex flex-col p-6 gap-10 z-50 animate-fadeIn overflow-y-auto scrollbar-hide">
      <ListItems section={"work"} config={myWork} onClose={onClose} />
      <ListItems section={"random"} config={randomData} onClose={onClose} />
      <ListItems section={"about"} config={aboutItems} onClose={onClose} />
    </div>
  );
}
