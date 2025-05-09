import { register } from "@/utils/eventZilla";
import AgendaMobileSection from "./AgendaMobileSection";
import BlockContent from "@sanity/block-content-to-react";

const Agenda = ({ slots }) => {
  return (
    <div className='lg:pt-40 pt-12'>
      <div className='flex flex-col justify-center items-start m-auto font-regular bg-white lg:border lg:border-deepBlue lg:rounded-3xl text-deepBlue lg:w-[950px] lg:py-24'>
        {slots?.map(({ _key, title, events }) => {
          return (
            <div key={_key} className='py-8 md:px-12 px-7 w-full'>
              <h1 className='pb-2 font-bold text-3xl border-b border-deepBlue'>
                {title}
              </h1>
              <div className='pt-20'>
                <div className='md:grid grid-cols-7 font-semibold uppercase text-sm text-mainBlue pb-4 hidden'>
                  <h3 className='col-span-1'>Time</h3>
                  <h3 className='col-span-3'>Subject</h3>
                  <h3 className='col-span-3'>Speakers</h3>
                </div>
                {/* desk version */}
                {events?.map(({ _key, name, time, speaker }) => {
                  return (
                    <div
                      key={_key}
                      className='hidden md:grid grid-cols-7 pb-4 py-4 fadeInpt-3 border-t border-deepBlue text-sm lg:text-lg'
                    >
                      <h2
                        className={`font-semibold col-span-1 ${
                          !speaker ? "uppercase text-mainBlue" : "text-deepBlue"
                        }`}
                      >
                        {time}
                      </h2>
                      <h2
                        className={`col-span-3 pr-3 ${
                          !speaker
                            ? "uppercase text-mainBlue font-semibold"
                            : "text-deepBlue"
                        }`}
                      >
                        {name}
                      </h2>
                      <div className='col-span-3'>
                        <BlockContent
                          blocks={speaker}
                          className='text-xs lg:text-lg'
                        />
                      </div>
                    </div>
                  );
                })}
                {/* mobile version */}
                <AgendaMobileSection events={events} />
              </div>
            </div>
          );
        })}
        <div className='w-full flex fadeIn py-20'>
          <div onClick={register} className='m-auto'>
            <div
              className={`flex items-center lg:px-12 px-7 lg:py-4 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 border-mainBlue border-2 text-mainBlue hover:bg-mainBlue hover:text-gray-100`}
            >
              Register now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
