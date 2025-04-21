import React from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";

const TitleSubtitleCTA = ({ title, subtitle, CTATitle, CTAURL }) => {
  return (
    <div className="relative font-regular bg-white">
      <div className="py-36 lg:px-20 px-7 text-darkBlue min-h-screen">
        <div className="flex flex-col lg:flex-row pt-20 pb-32">
          <div className="lg:w-1/2 w-full lg:pr-10">
            <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6 anim">
              <BlockContent blocks={title} />
            </div>
            <div className="anim">
              <BlockContent blocks={subtitle} className="text-xs lg:text-lg" />
            </div>
            {CTAURL || CTATitle ? (
              <div className="pt-10">
                <a href={CTAURL}>
                  <div className="flex items-center lg:px-20 px-7 lg:py-5 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-darkBlue hover:text-deepBlue hover:border-deepBlue bg-transparent border-darkBlue border">
                    {CTATitle}
                  </div>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSubtitleCTA;
