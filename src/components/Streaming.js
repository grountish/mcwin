import React, { useState } from 'react';
import Button from './Button';

const Streaming = ({ events }) => {
  const [password, setPassword] = useState('');
  const [typedPassword, setTypedPassword] = useState('');

  return (
    <div className="lg:pt-40 test lg:px-20 pt-12 px-7 pb-48 bg-slate-300 bg-[url('/main-section-bg-min.jpg')] bg-cover bg-no-repeat text-white">
      {password === 'password' ? (
        <>
          <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pt-24 pb-20 anim">
            Streaming
          </div>
          <div className="flex w-full flex-col md:flex-row justify-between md:space-x-12">
            <div className="w-full">
              <iframe
                className="w-full h-full fadeIn aspect-video rounded-xl"
                src="https://www.youtube.com/embed/t-99hr9Vp74"></iframe>
            </div>
            <div
              className="flex relative bg-nightBlue font-regular flex-col p-4 border-deepBlue rounded-2xl border text-white
             w-full md:w-[500px] max-h-[600px] mt-8">
              <h4 className="text-white pt-4 pb-8">Schedule</h4>
              <div className="overflow-scroll pb-20">
                {events.map(({ _key, name, time, speaker }) => {
                  return (
                    <div key={_key} className="flex pb-8 fadeIn">
                      <h2 className="w-2/12 font-semibold">{time}</h2>
                      <h2 className="w-6/12 border-t-white border-t mr-2 font-ExtralightItalic">
                        {name}
                      </h2>
                      <p className="w-4/12 border-t-white border-t font-semibold">
                        {speaker}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex w-full justify-between pt-32 min-h-[70vh]">
          <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-20 anim">
            Streaming
          </div>
          <div className="w-1/2 space-y-10">
            <h4 className=" font-regular text-lg">Insert password</h4>
            <input
              type="password"
              value={typedPassword}
              placeholder="Password"
              className=" p-2 w-[500px] border-b botder-white text-white bg-transparent focus:outline-none"
              onChange={(e) => setTypedPassword(e.target.value)}
            />
            <div onClick={() => setPassword(typedPassword)}>
              <Button
                title="Go to streaming"
                classes="hover:bg-white hover:text-black"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Streaming;
