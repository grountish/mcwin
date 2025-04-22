import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import Button from "./Button";
import Link from "next/link";

const ImageInfoCTACollection = ({
  title,
  subtitle,
  CTATitle,
  CTAURL,
  collection,
}) => {
  return (
    <div className="relative font-regular flex flex-col lg:py-40 py-24 text-darkBlue bg-white">
      <div className="flex flex-col lg:flex-row pt-20 px-7 lg:px-20">
        {/* LEFT TEXT BLOCK */}
        <div className="w-full lg:w-[20%]">
          <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6 anim">
            <BlockContent blocks={title} />
          </div>
          <div className="anim pb-6">
            <BlockContent blocks={subtitle} className="text-xs lg:text-lg" />
          </div>
          {CTATitle && CTAURL && (
            <div className="pt-10">
              <Button
                link={CTAURL}
                title={CTATitle}
                classes="hover:bg-white hover:text-black fadeIn"
              />
            </div>
          )}
        </div>

        {/* RIGHT COLLECTION BLOCK */}
        <div className="w-full lg:w-[80%] flex justify-end items-start pt-12 lg:pt-0">
          <div className="flex flex-wrap gap-x-8 gap-y-10 justify-start" style={{ maxWidth: 'calc(261px * 3 + 32px * 2)' }}>
            {collection.map((section, index) => (
              <div
                key={index}
                className="flex flex-col justify-between text-darkBlue border border-darkBlue rounded-2xl overflow-hidden fadeIn w-[261px]"
              >
                <div className="flex flex-col justify-between">
                  {section.image && (
                    <div
                      className="rounded-t-2xl w-full aspect-[3/2] bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${urlFor(section.image)})`,
                      }}
                    ></div>
                  )}
                  <div className="px-4 flex flex-col pt-4">
                    <div className="text-xs pb-2">
                      <BlockContent blocks={section.topSecondaryTitle} />
                    </div>
                    <div className="font-poppinsExtraBold text-lg pb-2">
                      <BlockContent blocks={section.title} />
                    </div>
                    <div className="text-xs pb-4">
                      <BlockContent blocks={section.subtitle} />
                    </div>
                  </div>
                </div>
                <div className="pt-6 text-center px-4 pb-4">
                  <Link href={section.buttonUrl} target="_blank">
                    <div className="flex items-center justify-center transition duration-300 rounded-full font-poppinsExtraBold text-base cursor-pointer hover:drop-shadow-md z-50 text-darkBlue hover:text-deepBlue hover:border-deepBlue bg-transparent border-darkBlue border px-6 py-3 w-full">
                      {section.buttonTitle}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInfoCTACollection;
