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
    <div className="font-regular flex flex-col lg:pt-40 pt-24 bg-white pb-12 md:pb-24">
      
      <div className="flex flex-col lg:flex-row items-start pt-20 px-7 lg:px-20 text-darkBlue">
        
        {/* LEFT TEXT BLOCK */}
        <div className="w-full lg:w-[35%]">
          <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6 anim ipad-landscape:text-5xl">
            <BlockContent blocks={title} />
          </div>
          <div className="anim pb-6">
            <BlockContent blocks={subtitle} className="text-base lg:text-lg" />
          </div>
          {CTATitle && (
            <button
              onClick={register}
              className="flex items-center lg:px-12 px-7 lg:py-4 ipad-landscape:px-8 ipad-landscape:py-3 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-darkBlue hover:text-deepBlue hover:border-deepBlue bg-transparent border-darkBlue border-2"
            >
              {CTATitle}
            </button>
          )}
        </div>

        {/* RIGHT SPEAKERS BLOCK */}
        <div className="w-full lg:w-[65%] md:w-full flex justify-end items-start lg:pt-0 pt-12">
          <div 
            className="grid gap-y-10 w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            }}
          >
            {collection.map(({ image, title, subtitle, logo }, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-center anim"
              >
                {/* IMAGE ALWAYS ON TOP, FIXED SIZE */}
                <div
                  className="rounded-xl w-full lg:max-w-[256px] md:max-w-[200px] aspect-square bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${urlFor(image)})` }}
                ></div>

                {/* TEXT BELOW IMAGE */}
                <div className="w-full flex flex-col items-center pt-4">
                  <div className="text-mainBlue font-poppinsExtraBold text-lg leading-none pb-2">
                    {title && <BlockContent blocks={title} />}
                  </div>
                  <div className="w-10/12 text-center text-base pb-3">
                    {subtitle && <BlockContent blocks={subtitle} />}
                  </div>
                  <img
                    className="h-[15px] object-contain"
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
