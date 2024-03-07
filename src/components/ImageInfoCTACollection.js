import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";
import Button from "./Button";

const ImageInfoCTACollection = ({
  backgroundImage,
  title,
  subtitle,
  CTATitle,
  CTAURL,
  collection,
}) => {
  return (
    <div className='relative'>
      <div
        className={`lg:pt-40 lg:px-20 pt-12 px-7 bg-cover bg-no-repeat'`}
        style={{ backgroundImage: `url(${urlFor(backgroundImage)})` }}
      >
        <div className='py-20'>
          <div className='lg:w-1/2 w-full lg:pr-10 text-white'>
            <div className='lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-6'>
              <BlockContent blocks={title} />
            </div>
            <BlockContent blocks={subtitle} className='text-xs lg:text-lg' />
            {CTATitle && CTAURL && (
              <div className='pt-10'>
                <Button
                  link={CTAURL}
                  title={CTATitle}
                  classes='hover:bg-white hover:text-black'
                />
              </div>
            )}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 xl:px-72 lg:px-40 py-12'>
            {collection.map((section, index) => {
              return (
                <div
                  className='flex flex-col justify-center items-center py-6'
                  key={index}
                >
                  <div
                    className='rounded-t-lg h-40 w-40 bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${urlFor(section.image)})` }}
                  ></div>
                  <div className='text-mainBlue font-poppinsExtraBold text-lg pt-4'>
                    <BlockContent blocks={section.title} />
                  </div>

                  <div className='w-1/2 text-center text-xs pb-3'>
                    <BlockContent blocks={section.subtitle} />
                  </div>

                  <img
                    className='w-20'
                    src={urlFor(section.logo)}
                    alt='company logo'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default ImageInfoCTACollection;
