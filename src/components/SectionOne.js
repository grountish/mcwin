import React from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import { getValidUrl } from "@/utils/validUrl";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";

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
}) => {
  return (
    <div className="relative font-regular">
      <div className=" pt-40 px-20 min-h-[160vh] bg-slate-300 bg-[url('/main-section-bg.jpg')] bg-cover bg-no-repeat text-white">
        <div className="flex flex-col lg:flex-row pt-20 pb-32">
          <div className="lg:w-1/2 w-full lg:pr-10">
            <div className="text-lg">{topHeader}</div>
            <div className="border border-y border-white space-y-6 py-6 border-x-0">
              <BlockContent
                blocks={title}
                className="lg:text-6xl font-poppinsExtraBold"
              />
              <BlockContent blocks={subtitle} className="" />
            </div>
            <div className="py-10 space-y-6 text-xl">
              <div className="flex">
                <img src="/calendar.svg" alt="calendar" className="pr-3" />{" "}
                <span></span>
                {date}
              </div>
              <div className="flex">
                <img src="/location.svg" alt="location" className="pr-3" />{" "}
                <span></span>
                {location}
              </div>
            </div>
            <div className="pt-10">
              <Button
                link="#"
                title={buttonText}
                classes="hover:bg-white hover:text-black"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10">
            <div className="relative">
              <video
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={getValidUrl(video)}
              />
            </div>
            <div>{videoText}</div>
          </div>
        </div>
        <div className="border border-t border-x-0 border-b-0 border-white flex flex-col lg:flex-row justify-between w-full pt-20">
          <div className="lg:w-80 mr-20">
            <h4>{foundersText}</h4>
          </div>
          <div className="w-full flex-wrap flex gap-6">
            {founders.map((f, index) => {
              return (
                <img key={index} src={urlFor(f)} alt="Pictu" className="w-36" />
              );
            })}
          </div>
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default SectionOne;
