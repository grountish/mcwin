/* eslint-disable @next/next/no-img-element */
import React from "react";
import urlFor from "@/utils/imageUrlBuilder";

const UCFooter = ({ layout }) => {
  return (
    <div className='w-full flex justify-between px-12 relative bottom-14 md:hidden'>
      <div></div>
      <div className='flex space-x-5'>
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

export default UCFooter;
