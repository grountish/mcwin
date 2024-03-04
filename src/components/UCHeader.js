import React from "react";
import urlFor from "@/utils/imageUrlBuilder";

const UCHeader = ({ layout }) => {
  return (
    <div className='w-full flex justify-between items-center px-12 py-10 absolute top-0 left-0 z-10 fadeIn'>
      <div>
        <img
          src={urlFor(layout.mainLogo)}
          alt='logo'
          className='md:w-60 w-40'
        />
      </div>
      <div className='md:flex space-x-5 hidden'>
        {layout.socialLogos.map(({ logo, logoURL }, i) => {
          return (
            <a
              href={logoURL}
              key={`logo-${i}`}
              className='cursor-pointer'
              target='_blank'
            >
              <img src={urlFor(logo)} alt='logo' className='w-7' />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default UCHeader;
