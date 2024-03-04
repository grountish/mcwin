import urlFor from "@/utils/imageUrlBuilder";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Arrow from "./Arrow";

const SectionFour = ({ title, subtitle, image, companyLogos, email }) => {
  return (
    // agregar min-h-screen al padre cuando devolvamos los logos
    <div className="lg:p-20 md:px-10 p-6 2xl:px-64 xl:px-20">
      <div className="flex w-full justify-between pb-20 lg:pb-0">
        <div className="pt-10 fadeIn">
          <h1 className="text-mainGreen md:text-[120px] text-6xl font-aonik leading-none fadeUp">
            {title}
          </h1>
          <h2 className="text-black lg:text-[32px] text-2xl font-aonik w-11/12 py-3">
            {subtitle}
          </h2>
          <h3 className="text-black lg:text-2xl md:text-lg xs:text-base text-xl w-11/12 pt-4">
            Email&nbsp;
            <a className="cursor-pointer underline" href={`mailto:${email}`}>
              {email}
            </a>
            <br />
            to explore opportunities.
          </h3>
        </div>
        <div className="hidden lg:block fadeIn">
          <img src={urlFor(image)} alt="" className="w-[800px]" />
        </div>
      </div>
      {/* <div className="items-center lg:hidden grid grid-cols-2 justify-center">
        {companyLogos.map((logo, index) => (
          <div className="w-[125px] px-4 py-8 m-auto" key={index}>
            <img src={urlFor(logo)} alt="logo" />
          </div>
        ))}
      </div> */}
      {/* <div className="items-center hidden lg:flex">
        <div className="prev rotate-180">
          <Arrow color="#524DF6" />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide className="!my-auto" key={index}>
              <div
                className="slide flex w-[125px] my-auto items-center justify-center mx-6 p-2 h-full"
                key={index}
              >
                <img
                  src={urlFor(logo)}
                  alt="logo"
                  className="w-auto m-auto self-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next">
          <Arrow color="#524DF6" />
          <div />
        </div>
      </div> */}
    </div>
  );
};

export default SectionFour;
