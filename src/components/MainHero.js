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
    <div className="relative font-regular">
      <div className="md:pt-48 test lg:px-20 pt-20 px-7 pb-20 bg-white bg-cover bg-no-repeat text-darkBlue">
        <div className="flex flex-col lg:flex-row pt-24 md:pt-[3vh] md:pb-40 pb-10">
          <div className="lg:w-1/2 w-full lg:pr-10">
            <div className="text-xl md:text-2xl fadeIn">{topHeader}</div>
            <div className="space-y-6 py-6 border-x-0">
              <BlockContent
                blocks={title}
                className="lg:text-6xl text-4xl font-poppinsExtraBold anim  drop-shadow-xl"
              />
              <div className="anim ">
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
                <Button
                  title={buttonText}
                  classes="hover:bg-white hover:text-black border-darkBlue text-darkBlue"
                />
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
                className="w-full h-full object-cover rounded-lg drop-shadow-lg anim"
                src={getValidUrl(video)}
              />
            </div>
            <div className="text-right pt-2 font-lightItalic test anim">
              {videoText}
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full border-t-2 border-t-darkBlue">
          <h4 className="anim lg:text-2xl uppercase md:w-1/2 pt-8 pr-6">{foundersText}</h4>
          <div className="anim border-white text-lg lg:text-2xl md:w-1/2 pt-8">
            <BlockContent blocks={bottomText} />
          </div>
        </div>

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
  );
};

export default MainHero;
