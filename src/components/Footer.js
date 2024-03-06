/* eslint-disable @next/next/no-img-element */
import urlFor from "@/utils/imageUrlBuilder";
import React from "react";

const Footer = ({ layout }) => {
  return (
    <div className='bg-matteWhite p-6 lg:p-12 fadeIn'>
      <div className='w-full flex justify-between font-regular text-darkBlue border-t lg:pt-12 pt-6 border-darkBlue'>
        <a
          className='cursor-pointer'
          href='https://mcwin.fund/'
          target='_blank'
        >
          <img
            src={urlFor(layout.footerLogo)}
            alt='logo'
            className='w-[74px] lg:w-[180px]'
          />
        </a>
        <div className='flex space-x-5 text-[8.5px] lg:text-[20px]'>
          <div className='lg:flex text-center hidden'>
            © 2024 McWin Capital Partners. <br /> All Rights Reserved.
          </div>
        </div>
        <div className='flex space-x-5 flex-col text-right text-[8.5px] lg:text-[20px]'>
          <div className='lg:hidden block'>
            © 2024 McWin Capital Partners. <br /> All Rights Reserved.
          </div>
          <div className='md:min-w-[300px]'>
            <p>For special support,</p>
            <span className='pr-1'>please contact</span>
            <a href='mailto:ir@mcwin.fund' className='font-bold'>
              ir@mcwin.fund
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
