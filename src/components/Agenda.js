import React from "react";
import Button from "./Button";
import { register } from "@/utils/eventZilla";

const Agenda = ({ slots }) => {
  return (
    <div className='bg-matteWhite pt-12'>
      <div className='flex lg:flex-row flex-col justify-center items-start m-auto font-regular text-deepBlue lg:px-44 md:px-20'>
        {slots?.map(({ _key, title, events }) => {
          return (
            <div key={_key} className='py-8 px-12 w-full lg:w-1/2'>
              <h1 className='pb-2 font-bold text-3xl border-b border-deepBlue'>
                {title}
              </h1>
              <div className='pt-20'>
                <div className='flex justify-between py-3'>
                  <h3>Subject & Speakers</h3>
                  <h3>Time</h3>
                </div>
                {events?.map(({ _key, name, time, speaker }) => {
                  return (
                    <div
                      key={_key}
                      className='flex pb-4 fadeIn justify-between pt-3 border-t border-deepBlue'
                    >
                      <div>
                        <h2 className='font-semibold text-2xl text-mainBlue'>
                          {name}
                        </h2>
                        {speaker && (
                          <p className='text-xs pt-2 pb-6'>{speaker}</p>
                        )}
                      </div>
                      <h2 className='font-semibold text-2xl'>{time}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full flex fadeIn py-20'>
        <div onClick={register} className='m-auto'>
          <Button
            title='Register now'
            classes='!border-mainBlue border-2 !text-mainBlue'
          />
        </div>
      </div>
    </div>
  );
};

export default Agenda;
