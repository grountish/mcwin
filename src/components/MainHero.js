"use client";
import BlockContent from "@sanity/block-content-to-react";
import { getValidUrl } from "@/utils/validUrl";
import serializers from "@/utils/serializers";
import { register } from "@/utils/eventZilla";

const MainHero = ({
  title,
  topHeader,
  subtitle,
  date,
  location,
  buttonText,
  video,
  videoText,
  foundersText,
}) => {
  return (
    <div>
      <div className="relative font-regular">
        <div className="md:pt-48 test lg:px-20 pt-20 px-7 bg-white bg-cover bg-no-repeat text-darkBlue">
          <div className="flex flex-col lg:flex-row pt-24 md:pt-[3vh] md:pb-28 pb-10">
            <div className="lg:w-1/2 w-full lg:pr-10">
              <div className="text-xl md:text-2xl fadeIn">{topHeader}</div>
              <div className="space-y-6 py-6 border-x-0">
                <BlockContent
                  blocks={title}
                  className="lg:text-6xl text-4xl font-poppinsExtraBold anim drop-shadow-xl"
                />
                <div className="flex flex-col">
                  <span className="font-poppinsExtraBold text-2xl leading-[30px] tracking-normal">
                    EMPOWERING FOOD EVOLUTION
                  </span>
                  <span className="font-regular text-2xl leading-[30px] tracking-normal">
                    Innovate | Solve | Scale
                  </span>
                </div>
                <div className="anim w-[80%]">
                  <BlockContent
                    blocks={subtitle}
                    className="text-xs lg:text-lg"
                  />
                </div>
              </div>
              <div className="py-[3vh] space-y-6 text-xl">
                <div className="flex">
                  <img src="/calendar.svg" alt="calendar" className="pr-3" />
                  <div className="underlined fadeIn">
                    <BlockContent blocks={date} className="fadeIn" />
                  </div>
                </div>
                <div className="flex">
                  <img src="/location.svg" alt="location" className="pr-3" />
                  <div className="underlined fadeIn">
                    <BlockContent blocks={location} serializers={serializers} />
                  </div>
                </div>
              </div>
              <div className="pt-4 fadeIn">
                <button
                  onClick={register}
                  className="flex items-center lg:px-12 px-7 lg:py-4 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-darkBlue hover:text-deepBlue hover:border-deepBlue bg-transparent border-darkBlue border-2"
                >
                  {buttonText}
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 pt-20 lg:pt-[36px]">
              <div className="relative rounded-lg">
                <video
                  poster="/video-placeholder.jpg"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover rounded-lg drop-shadow-lg anim"
                  src={getValidUrl(video)}
                />
              </div>
              <div className="text-right pt-2 test anim font-bold">
                {videoText}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background section with responsive image */}
      <div
        className="relative md:py-20 lg:px-20 px-7 py-20 bg-cover bg-center bg-no-repeat
                   bg-[url('/bg_banner_home_mobile.jpg')]
                   md:bg-[url('/bg_banner_home_desk.jpg')]"
      >
        <div className="flex flex-col gap-10 justify-between w-full text-white">
          <div className="w-4/5 mx-auto font-regular md:text-2xl text-md md:leading-[30px] tracking-normal text-center">
            <span>
              The McWin Founders and Partners – Henry McGovern, Steve K.
              Winegar, Guillaume Charlin, Martin Davalos, Harry Goss and Troy
              Weeks will all be in attendance.
            </span>
          </div>
          <h4 className="w-3/5 mx-auto font-poppinsBold md:text-3xl text-xl md:leading-[34px] tracking-normal text-center uppercase">
            {foundersText}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
