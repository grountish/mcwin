import React, { useState } from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";

const StreamMobileSection = ({ agenda }) => {
  const [showAll, setshowAll] = useState(false);
  //force deploy test
  return (
    <div>
      <h2 className='text-2xl border-b border-white pb-3 mb-12 pt-8'>Agenda</h2>
      <div className='border border-deepBlue rounded-xl p-6 bg-nightBlue'>
        {agenda
          ?.slice(0, showAll ? agenda.length : 7)
          .map(({ _key, name, time, speaker }) => {
            return (
              <div
                key={_key}
                className={`md:hidden flex justify-between pb-4 py-4 fadeInpt-3 border-t ${
                  !speaker ? "border-t-deepBlue" : "border-t-white"
                } text-sm lg:text-lg`}
              >
                <div className='pr-5'>
                  <h2
                    className={`font-semibold ${
                      !speaker ? "text-deepBlue " : "text-white"
                    }`}
                  >
                    {name}
                  </h2>
                  <div>
                    <BlockContent
                      blocks={speaker}
                      className='text-xs lg:text-lg'
                    />
                  </div>
                </div>
                <h2
                  className={`font-semibold ${
                    !speaker ? "text-deepBlue" : "text-white"
                  }`}
                >
                  {time}
                </h2>
              </div>
            );
          })}
        {!showAll && (
          <div className='w-full flex md:hidden fadeIn'>
            <div onClick={() => setshowAll(true)} className='m-auto w-full'>
              <Button
                title='View All'
                hasIcon
                classes='!bg-mainBlue !text-white !text-lg !text-semibold !w-full !justify-center !border-none'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamMobileSection;
