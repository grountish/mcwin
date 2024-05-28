import React, { useState } from "react";
import Button from "./Button";
import BlockContent from "@sanity/block-content-to-react";
import StreamMobileSection from "./StreamMobileSection";

const Streaming = ({ agenda }) => {
  const [password, setPassword] = useState("");
  const [typedPassword, setTypedPassword] = useState("");

  return (
    <div className="lg:pt-40 test lg:px-20 pt-12 px-7 pb-48 bg-[url('/main-section-bg-min.jpg')] bg-cover bg-no-repeat text-white min-h-[90vh]">
      {password === "password" ? (
        <>
          <div className='lg:text-6xl text-4xl font-poppinsExtraBold uppercase pt-24 pb-20 anim'>
            Streaming
          </div>
          <div className='flex w-full flex-col md:flex-row justify-between md:space-x-12'>
            <div className='w-full'>
              <iframe
                className='w-full h-full fadeIn aspect-video rounded-xl'
                src='https://www.youtube.com/embed/t-99hr9Vp74'
              ></iframe>
            </div>
            <div
              className='lg:flex hidden relative bg-nightBlue font-regular flex-col p-4 border-deepBlue rounded-2xl border text-white
             w-full md:w-[500px] max-h-[600px] mt-8 lg:mt-0'
            >
              <h4 className='text-white pt-4 pb-12'>Agenda</h4>
              <div className='overflow-scroll pb-20'>
                {agenda?.map(({ _key, name, time, speaker }) => {
                  return (
                    <div
                      key={_key}
                      className={`fadeIn border-t pt-3 pb-7 ${
                        !speaker
                          ? "text-deepBlue border-t-deepBlue"
                          : "text-white border-t-white"
                      }`}
                    >
                      <div className='flex flex-row justify-between'>
                        <h2 className='mr-2 font-semibold'>{name}</h2>
                        <h2 className='font-semibold'>{time}</h2>
                      </div>
                      <p>
                        <BlockContent blocks={speaker} />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* mobile version */}
            <div className='lg:hidden block'>
              <StreamMobileSection agenda={agenda} />
            </div>
          </div>
        </>
      ) : (
        <div className='flex w-full justify-between lg:flex-row flex-col pt-32 lg:min-h-[70vh]'>
          <div className='lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-20 anim'>
            Streaming
          </div>
          <div className='w-1/2 space-y-10'>
            <h4 className=' font-regular text-lg'>Insert password</h4>
            <input
              type='password'
              value={typedPassword}
              placeholder='Password*'
              className='p-2 lg:w-[500px] w-[300px] border-b botder-white text-white bg-transparent focus:outline-none font-ExtralightItalic'
              onChange={(e) => setTypedPassword(e.target.value)}
            />
            <div onClick={() => setPassword(typedPassword)}>
              <Button
                title='Go to streaming'
                classes='hover:bg-white hover:text-black'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Streaming;
