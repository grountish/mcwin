import { useEffect } from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import { getValidUrl } from "@/utils/validUrl";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";
import serializers from "@/utils/serializers";

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
  founders,
}) => {
  const register = () => {
    window.EventzillaBuyTickets("2138606712");
  };
  return (
    <div className="relative font-regular">
      <div className="lg:pt-40 lg:px-20 pt-12 px-7 lg:min-h-[280vh] min-h-[230vh] xl:min-h-[160vh] bg-slate-300 bg-[url('/main-section-bg.jpg')] bg-cover bg-no-repeat text-white">
        <div className="flex flex-col lg:flex-row pt-20 pb-32">
          <div className="lg:w-1/2 w-full lg:pr-10">
            <div className="text-lg">{topHeader}</div>
            <div className="border border-y border-white space-y-6 py-6 border-x-0">
              <BlockContent
                blocks={title}
                className="lg:text-6xl text-4xl font-poppinsExtraBold"
              />
              <BlockContent blocks={subtitle} className="text-xs lg:text-lg" />
            </div>
            <div className="py-10 space-y-6 text-xl">
              <div className="flex">
                <img src="/calendar.svg" alt="calendar" className="pr-3" />{" "}
                <span></span>
                <BlockContent blocks={date} />
              </div>
              <div className="flex">
                <img src="/location.svg" alt="location" className="pr-3" />{" "}
                <span></span>
                <BlockContent blocks={location} serializers={serializers} />
              </div>
            </div>
            <div className="pt-10">
              <div onClick={register}>
                <Button
                  title={buttonText}
                  classes="hover:bg-white hover:text-black"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 pt-20 lg:pt-0">
            <div className="relative">
              <video
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={getValidUrl(video)}
              />
            </div>
            <div className="text-right lg:text-left pt-2 italic">
              {videoText}
            </div>
          </div>
        </div>
        <div className="border border-t border-x-0 border-b-0 border-white flex flex-col lg:flex-row justify-between w-full lg:pt-20 pt-10">
          <div className="lg:w-80 lg:mr-20 text-center lg:text-left pb-10 lg:pb-0">
            <h4>{foundersText}</h4>
          </div>
          <div className="w-full flex-wrap flex gap-6 justify-center items-center">
            {founders.map((f, index) => {
              return (
                <img key={index} src={urlFor(f)} alt="Pictu" className="w-36" />
              );
            })}
          </div>
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default MainHero;
