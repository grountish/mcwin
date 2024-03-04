import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Day from "./Day";
import urlFor from "../utils/imageUrlBuilder";

const SectionTwo = ({ title, subtitle, days }) => {
  const dayOne = days[0];
  const dayTwo = days[1];

  return (
    <div className="min-h-screen flex flex-col items-center md:items-stretch lg:px-20 md:px-10 px-6 2xl:px-64 xl:px-20 ipadHeight">
      <div className="font-aonik flex flex-col justify-start text-left">
        <h1 className="lg:text-headline md:text-8xl text-6xl leading-none pb-6 text-mainGreen fadeUp">
          {title}
        </h1>
        <div className="lg:text-4xl md:text-2xl text-xl">
          <BlockContent blocks={subtitle} />
        </div>
      </div>
      <div className="flex lg:flex-row space-y-6 lg:space-y-0 flex-col md:py-20 py-6 justify-around items-center relative xl:px-24">
        <img
          className="absolute lg:left-4 xl:left-10 top-48 w-[600px] fadeIn hidden xl:block"
          src={urlFor(dayOne.backgroundImage)}
          alt=""
        />
        <img
          className="absolute right-6 bottom-4 md:w-[600px] h-auto fadeIn hidden xl:block"
          src={urlFor(dayTwo.backgroundImage)}
          alt=""
        />
        <Day day={dayOne} dayNumber={"DAY 01"} classes="ml-0 lg:mr-6 xl:ml-0" />
        <Day day={dayTwo} dayNumber={"DAY 02"} />
      </div>
    </div>
  );
};

export default SectionTwo;
