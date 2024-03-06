import React from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import { getValidUrl } from "@/utils/validUrl";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";

const TitleSubtitleCTA = ({
  title,
  topHeader,
  subtitle,
  date,
  location,
  buttonText,
}) => {
  return (
    <div className='relative font-regular'>
      <div className="lg:pt-40 lg:px-20 pt-12 px-7 lg:min-h-[280vh] min-h-[230vh] xl:min-h-[160vh] bg-slate-300 bg-[url('/main-section-bg.jpg')] bg-cover bg-no-repeat text-white">
        <div className='flex flex-col lg:flex-row pt-20 pb-32'>
          <div className='lg:w-1/2 w-full lg:pr-10'>
            <div className='text-lg'>{topHeader}</div>
            <div className='border border-y border-white space-y-6 py-6 border-x-0'>
              <BlockContent
                blocks={title}
                className='lg:text-6xl text-4xl font-poppinsExtraBold'
              />
              <BlockContent blocks={subtitle} className='text-xs lg:text-lg' />
            </div>
            <div className='py-10 space-y-6 text-xl'>
              <div className='flex'>
                <img src='/calendar.svg' alt='calendar' className='pr-3' />{" "}
                <span></span>
                {date}
              </div>
              <div className='flex'>
                <img src='/location.svg' alt='location' className='pr-3' />{" "}
                <span></span>
                {location}
              </div>
            </div>
            <div className='pt-10'>
              <Button
                link='#'
                title={buttonText}
                classes='hover:bg-white hover:text-black'
              />
            </div>
          </div>
        </div>
      </div>
      <SeparatorRight />
    </div>
  );
};

export default TitleSubtitleCTA;
