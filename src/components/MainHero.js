"use client";
import Button from "./Button";
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
  bottomText,
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
                  className="lg:text-6xl text-4xl font-poppinsExtraBold anim  drop-shadow-xl"
                />
                 <div className="flex flex-col">
                  <span className="font-poppinsExtraBold text-2xl leading-[30px] tracking-normal">EMPOWERING FOOD EVOLUTION</span>
                  <span className="font-regular text-2xl leading-[30px] tracking-normal">Innovate | Solve | Scale</span>
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
                  <img src="/calendar.svg" alt="calendar" className="pr-3" />{" "}
                  <span></span>
                  <div className="underlined fadeIn">
                    <BlockContent blocks={date} className="fadeIn" />
                  </div>
                </div>
                {/* test */}
                <div className="flex">
                  <img src="/location.svg" alt="location" className="pr-3" />{" "}
                  <span></span>
                  <div className="underlined fadeIn">
                    <BlockContent blocks={location} serializers={serializers} />
                  </div>
                </div>
              </div>
              <div className="pt-4 fadeIn">
                <div onClick={register}>
                  <button className="flex items-center lg:px-20 px-7 lg:py-5 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 text-darkBlue hover:text-deepBlue hover:border-deepBlue bg-transparent border-darkBlue border-2">
                    {buttonText}
                  </button>
                </div>
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
              <div className="text-right pt-2 font-lightItalic test anim">
                {videoText}
              </div>
            </div>
          </div>
          {/* <div className="flex md:flex-row flex-col justify-between w-full border-t-2 border-t-darkBlue">
          <h4 className="anim lg:text-2xl uppercase md:w-1/2 pt-8 pr-6">
            {foundersText}
          </h4>
          <div className="anim border-white text-lg lg:text-2xl md:w-1/2 pt-8">
            <BlockContent blocks={bottomText} />
          </div>
        </div> */}

          {/* {founders && (
            <div className="w-full flex-wrap flex md:gap-x-9 md:gap-y-4 gap-6 items-center justify-center md:justify-normal md:pb-20">
              {founders?.map(({ image, url }, index) => {
                return (
                  <a href={url} target="_blank" rel="noreferrer" key={index} className="fadeIn">
                    <img
                      key={index}
                      src={urlFor(image)}
                      alt="Pictu"
                      className="md:h-[55px] md:max-w-[133px] md:pr-4 h-10 max-w-[95px] fadeIn hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </a>
                );
              })}
            </div>
          )}
        </div>*/}
        </div>
      </div>
      <div className="md:py-20 lg:px-20 py-6 px-7 pb-20">
        <div className="flex flex-col gap-10 justify-between w-full text-white">
          <div className="w-4/5 mx-auto font-regular text-2xl leading-[30px] tracking-normal text-center">
            <span>The McWin Founders and Partners - Henry McGovern, Steve K. Winegar, Guillaume Charlin, Martin Davalos, Harry Goss and Troy Weeks will all be in attendance.</span>
          </div>
          <h4 className="w-3/5 mx-auto font-poppinsBold text-3xl leading-[34px] tracking-normal text-center uppercase">
            {foundersText}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
