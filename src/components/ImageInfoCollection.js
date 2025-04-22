import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import { register } from "@/utils/eventZilla";

const ImageInfoCollection = ({
  title,
  subtitle,
  CTATitle,
  collection,
  moreSpeakersText,
}) => {
  return (
    <div className="font-regular flex flex-col lg:pt-40 pt-24 bg-white">
      
      <div className="flex flex-col lg:flex-row items-start pt-20 px-7 lg:px-20 text-darkBlue">
        
        {/* LEFT TEXT BLOCK */}
        <div className="w-full lg:w-[35%]">
          <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6 anim">
            <BlockContent blocks={title} />
          </div>
          <div className="anim pb-6">
            <BlockContent blocks={subtitle} className="text-xs lg:text-lg" />
          </div>
          {CTATitle && (
            <button
              onClick={register}
              className="flex items-center lg:px-20 px-7 lg:py-5 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-darkBlue hover:text-deepBlue hover:border-deepBlue bg-transparent border-darkBlue border-2"
            >
              {CTATitle}
            </button>
          )}
        </div>

        {/* RIGHT SPEAKERS BLOCK */}
        <div className="w-full lg:w-[65%] flex justify-end items-start lg:pt-0">
          <div 
            className="grid gap-y-10 w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            }}
          >
            {collection.map(({ image, title, subtitle, logo }, index) => (
              <div
                className="flex flex-col items-center justify-center py-6 anim"
                key={index}
              >
                <div className="m-auto flex flex-col justify-center items-center text-center w-full">
                  <div
                    className="rounded-xl w-full md:max-w-[256px] aspect-square bg-cover bg-center bg-no-repeat transition-all duration-300"
                    style={{ backgroundImage: `url(${urlFor(image)})` }}
                  ></div>
                  <div className="text-mainBlue font-poppinsExtraBold text-lg pt-4 leading-none pb-2">
                    {title && <BlockContent blocks={title} />}
                  </div>
                  <div className="w-10/12 text-center text-xs pb-3">
                    {subtitle && <BlockContent blocks={subtitle} />}
                  </div>
                </div>
                <div className="m-auto">
                  <img
                    className="h-[15px] object-contain m-auto"
                    src={urlFor(logo)}
                    alt="company logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MORE SPEAKERS SECTION */}
      {moreSpeakersText && (
        <div className="w-full flex justify-center pb-10">
          <div className="flex justify-center items-center flex-col">
            <img
              src="/more-speakers.svg"
              alt="more-speakers"
              className="max-h-28 max-w-[210px] min-w-[170px]"
            />
            <h4 className="py-4 text-mainBlue text-xl">{moreSpeakersText}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageInfoCollection;
