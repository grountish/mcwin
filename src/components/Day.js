import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Arrow from "./Arrow";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Day = ({ day, dayNumber, classes }) => {
  const [showA, setshowA] = useState(true);
  const id = dayNumber.split(" ")[1];
  return (
    <div
      //overflow-scroll
      className={`mx-auto rounded-3xl relative flex font-aonik xs:p-6 p-10 text-white z-10 xl:w-[500px] lg:w-[430px] md:w-full w-[380px] xs:w-[350px] lg:h-[575px] md:h-[500px] h-[445px] ${classes}`}
      style={{
        backgroundColor: day.backgroundColor
          ? day.backgroundColor.hex
          : "transparent",
      }}
    >
      <div>
        {/* <div
          className={`absolute right-5 top-5 next-${id} ${
            showA ? "" : "hidden"
          }`}
          onClick={() => setshowA(!showA)}
        >
          <Arrow className="" color="white" />
        </div>
        <div
          className={`absolute right-5 top-5 rotate-180 prev-${id} ${
            showA ? "hidden" : ""
          }`}
          onClick={() => setshowA(!showA)}
        >
          <Arrow className="" color="white" />
        </div> */}
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: `.next-${id}`,
          prevEl: `.prev-${id}`,
        }}
      >
        <SwiperSlide className="!my-auto">
          <div className="">
            <div className="flex items-center justify-between">
              <p className="lg:text-3xl text-[22px]">PROGRAM</p>
            </div>

            <div className="flex items-end">
              <div className="lg:text-9xl text-[86px] leading-none">
                <BlockContent blocks={day.dayNumber} />
              </div>
              <div className="uppercase lg:text-2xl xl:text-3xl text-lg lg:-ml-14 md:ml-0 ml-8 mb-3">
                <BlockContent blocks={day.date} />
              </div>
            </div>

            <div className="pt-4">
              {day.schedule.slice(0, 3).map((slot) => {
                return (
                  <div
                    className="uppercase flex justify-between border-t lg:py-3 py-2 items-center lg:text-xl text-base last:border-b fadeIn"
                    key={slot._key}
                  >
                    <p>{slot.time}</p>
                    <p>{slot.activity}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!my-auto">
          <div className="flex items-center justify-between">
            <p className="lg:text-3xl text-[22px]">{dayNumber}</p>
          </div>
          <div className="pt-10">
            {day.schedule.map((slot) => {
              return (
                <div
                  className="uppercase flex justify-between border-t lg:py-3 py-2 items-center lg:text-xl text-base last:border-b"
                  key={slot._key}
                >
                  <p>{slot.time}</p>
                  <p>{slot.activity}</p>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Day;
