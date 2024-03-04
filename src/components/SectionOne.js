import React from "react";
import Counter from "./Counter";
import Button from "./Button";
import { useState, useEffect } from "react";
import SeparatorLeft from "./SeparatorLeft";
import BlockContent from "@sanity/block-content-to-react";

const SectionOne = ({
  title,
  topHeader,
  subtitle,
  date,
  location,
  buttonText,
  video,
  videoText,
  foundersText,
  founders,
  bottomText,
}) => {
  return (
    <div className="relative pt-40 px-20 min-h-[140vh] bg-slate-300 bg-[url('/main-section-bg.jpg')] bg-cover bg-no-repeat text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="w-1/2">
          <div>{topHeader}</div>
          <div>{title}</div>
          <BlockContent blocks={subtitle} />
          <div>{date}</div>
          <div>{location}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
