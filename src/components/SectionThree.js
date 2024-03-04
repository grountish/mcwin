import React from "react";
import SeparatorRight from "./SeparatorRight";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../utils/imageUrlBuilder";
import Button from "./Button";

const SectionThree = ({ title, address, map, buttonText, buttonURL }) => {
  return (
    <div className="relative">
      <SeparatorRight color={"#524DF6"} classes={"translate-y-[1px]"} />
      <div className="bg-mainPurple md:min-h-[125vh] ipadHeight lg:pl-20 md:px-10 pt-6 pb-52 lg:pt-0 md:pb-0 lg:pr-20 pl-6 pr-6 text-white flex lg:flex-row flex-col lg:justify-between md:justify-start justify-center w-full 2xl:px-64 xl:px-20">
        <div className="flex flex-col font-aonik md:py-10 lg:py-40 w-full fadeUp">
          <h1 className="xl:text-headline text-[86px] md:text-[100px] lg:pt-20 leading-none pb-4">
            {title}
          </h1>
          <div className="text-4xl md:p-0 pr-6">
            <BlockContent blocks={address} />
          </div>
          <Button
            title={buttonText}
            link={buttonURL}
            color={"text-mainPurple hover:text-white"}
            bgColor={"bg-white hover:bg-mainGreen"}
            classes={"!px-12 !px-16"}
          />
        </div>
        <div>
          <img
            className="w-full md:w-5/6 lg:w-full lg:pt-20 pt-8 fadeIn"
            src={urlFor(map)}
            alt="section3_background"
          />
        </div>
      </div>
      <SeparatorRight classes={"-translate-y-[199px] absolute"} />
    </div>
  );
};

export default SectionThree;
