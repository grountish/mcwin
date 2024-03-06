import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";

const ImageInfoCollection = ({ collection }) => {
  return (
    <div className='bg-matteWhite grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 xl:px-72 lg:px-40 py-12'>
      {collection.map((section, index) => {
        return (
          <div
            className='flex flex-col justify-center items-center py-6'
            key={index}
          >
            <div
              className='rounded-full h-40 w-40 bg-cover bg-center bg-no-repeat'
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
  );
};

export default ImageInfoCollection;
