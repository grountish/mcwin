import React from "react";
import Button from "./Button";
import { register } from "@/utils/eventZilla";

const Agenda = ({ slots }) => {
  return (
    <div className='bg-matteWhite pt-12 bg-[url("/bg-agenda.svg")] bg-cover bg-no-repeat'>
      <div className='flex flex-col justify-center items-start m-auto font-regular lg:border lg:border-deepBlue lg:rounded-3xl text-deepBlue bg-matteWhite lg:w-[950px] lg:py-24'>
        {slots?.map(({ _key, title, events }) => {
          return (
            <div key={_key} className='py-8 px-12 w-full'>
              <h1 className='pb-2 font-bold text-3xl border-b border-deepBlue'>
                {title}
              </h1>
              <div className='pt-20'>
                <div className='grid grid-cols-3 font-semibold uppercase text-sm'>
                  <h3>Time</h3>
                  <h3>Subject</h3>
                  <h3>Speakers</h3>
                </div>

                {events?.map(({ _key, name, time, speaker }) => {
                  return (
                    <div
                      key={_key}
                      className='grid grid-cols-3 pb-4 py-4 fadeInpt-3 border-t border-deepBlue text-sm lg:text-lg'
                    >
                      <h2
                        className={`font-semibold ${
                          !speaker ? "uppercase text-mainBlue" : "text-deepBlue"
                        }`}
                      >
                        {time}
                      </h2>
                      <h2
                        className={`${
                          !speaker
                            ? "uppercase text-mainBlue font-semibold"
                            : "text-deepBlue"
                        }`}
                      >
                        {name}
                      </h2>
                      <p>{speaker}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className='w-full flex fadeIn py-20'>
          <div onClick={register} className='m-auto'>
            <Button
              title='Register now'
              classes='!border-mainBlue border-2 !text-mainBlue'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
