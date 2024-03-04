/* eslint-disable @next/next/no-img-element */
import urlFor from "@/utils/imageUrlBuilder";
import React from "react";

const Footer = ({ layout }) => {
  return (
    <div className="w-full bg-background flex justify-between md:px-12 p-6 md:py-10 font-regular text-darkBlue">
      <a
        className="cursor-pointer"
        href="https://algorand.foundation"
        target="_blank"
      >
        <img src={urlFor(layout.footerLogo)} alt="logo" />
      </a>
      <div className="flex space-x-5">
        <div className="flex text-center">
          © 2024 McWin Capital Partners. <br /> All Rights Reserved.
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="text-right">
          <p>For special support,</p>
          <span className="pr-1">please contact</span>
          <a href="mailto:ir@mcwin.fund" className="font-bold">
            ir@mcwin.fund
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
