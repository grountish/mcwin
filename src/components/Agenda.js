import { useRef } from "react";
import { register } from "@/utils/eventZilla";
import AgendaMobileSection from "./AgendaMobileSection";

const Agenda = ({ slots }) => {
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let globalEventIndex = 0;

  return (
    <div ref={topRef} className="lg:pt-40 pt-12 pb-24 relative">
      <div className="flex flex-col lg:flex-row items-start lg:space-x-12 px-7 lg:px-20">
        {/* Sidebar */}
        <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
          <h1 className="text-4xl lg:text-6xl font-poppinsExtraBold uppercase text-darkBlue pt-32 pb-6">
            Agenda
          </h1>
          <p className="text-darkBlue text-lg pb-10 lg:pb-20">
            Join us to accelerate the transformation.
          </p>
          <div onClick={register}>
            <div className="flex items-center px-7 py-3 lg:px-12 lg:py-4 transition duration-300 rounded-full font-poppinsExtraBold text-base lg:text-xl cursor-pointer hover:drop-shadow-md z-50 border-darkBlue border-2 text-darkBlue hover:bg-mainBlue hover:text-white">
              Register now
            </div>
          </div>
        </div>

        {/* Desktop agenda */}
        <div className="hidden lg:flex w-full lg:w-[70%] flex-col justify-center items-start bg-white border border-darkBlue rounded-3xl text-deepBlue lg:py-8 mt-16 lg:mt-32">
          {/* Table headers displayed ONCE */}
          <div className="w-full md:px-12 px-7 pb-4">
            <div className="grid grid-cols-7 font-semibold uppercase text-sm text-mainBlue">
              <h3 className="col-span-1">Time</h3>
              <h3 className="col-span-3">Subject</h3>
              <h3 className="col-span-3">Speakers</h3>
            </div>
          </div>

          {/* Agenda slots and events */}
          {slots?.map(({ _key, events }) => (
            <div key={_key} className="md:px-12 px-7 w-full">
              {events?.map(({ _key, name, time, speakers, textColor }) => {
                const isFirstGlobal = globalEventIndex === 0;
                globalEventIndex++;

                const colorStyle = textColor?.hex
                  ? { color: textColor.hex }
                  : {};

                return (
                  <div
                    key={_key}
                    className={`grid grid-cols-7 pb-4 py-4 fadeInpt-3 text-sm lg:text-lg font-bold ${
                      !isFirstGlobal ? "border-t border-deepBlue" : ""
                    }`}
                    style={colorStyle}
                  >
                    {/* Time */}
                    <h2 className="font-semibold col-span-1">{time}</h2>

                    {/* Subject */}
                    <h2 className="col-span-3 pr-3">{name}</h2>

                    {/* Speakers */}
                    <div className="col-span-3 space-y-2">
                      {speakers?.map((speaker, idx) => (
                        <div key={idx}>
                          <p className="font-semibold">{speaker.name}</p>
                          {speaker.position && (
                            <p className="text-sm font-light">{speaker.position}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Desktop CTA */}
          <div className="w-full flex fadeIn py-20">
            <div onClick={register} className="m-auto">
              <div className="flex items-center lg:px-12 px-7 lg:py-4 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 border-darkBlue border-2 text-darkBlue hover:bg-mainBlue hover:text-white">
                Register now
              </div>
            </div>
          </div>
        </div>

        {/* Mobile agenda */}
        <div className="block lg:hidden w-full mt-16 border border-darkBlue rounded-2xl p-8">
          <AgendaMobileSection slots={slots} />
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden w-full flex fadeIn py-20">
          <div onClick={register} className="m-auto">
            <div className="flex items-center px-7 py-3 transition duration-300 rounded-full font-poppinsExtraBold text-base cursor-pointer hover:drop-shadow-md z-50 border-darkBlue border-2 text-darkBlue hover:bg-mainBlue hover:text-white">
              Register now
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="lg:hidden flex justify-end w-full px-7">
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-darkBlue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Agenda;
