import React from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "@/utils/imageUrlBuilder";
import SeparatorRight from "./SeparatorRight";

const TitleSubtitleCTA = ({
  title,
  subtitle,
  CTATitle,
  CTAURL,
  backgroundImage,
}) => {
  return (
    <div className='relative font-regular'>
      <div
        className={`lg:pt-40 lg:px-20 pt-12 px-7 bg-cover bg-no-repeat text-white`}
        style={{ backgroundImage: `url(${urlFor(backgroundImage)})` }}
      >
        <div className='flex flex-col lg:flex-row pt-20 pb-32'>
          <div className='lg:w-1/2 w-full lg:pr-10'>
            <div className='lg:text-6xl text-4xl font-poppinsExtraBold text-deepBlue uppercase pb-6'>
              <BlockContent blocks={title} />
            </div>
            <BlockContent blocks={subtitle} className='text-xs lg:text-lg' />
            <div className='pt-10'>
              <Button
                link={CTAURL}
                title={CTATitle}
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