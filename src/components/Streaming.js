import React, { useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import StreamMobileSection from "./StreamMobileSection";

const Streaming = ({ agenda }) => {
  const [password, setPassword] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  return (
    <div className="lg:pt-40 test lg:px-20 pt-12 px-7 pb-20 text-darkBlue min-h-[90vh]">
      {password === "AIM2025" ? (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-end lg:space-x-8">
          <div>
            <div className="lg:text-6xl hidden lg:block text-4xl font-poppinsExtraBold uppercase pt-32 lg:pt-24 pb-12 anim text-darkBlue">
              Streaming
            </div>
            <div className="flex w-full flex-col lg:flex-row justify-between lg:space-x-12">
              <div className="lg:flex hidden relative font-regular flex-col p-4 border-darkBlue rounded-2xl border text-darkBlue w-full max-h-[290px] mt-8 lg:mt-0">
                <h4 className="text-darkBlue pt-4 pb-12 font-bold">Agenda</h4>
                <div className="overflow-scroll pb-20">
                  {agenda?.map(({ _key, name, time, speaker }) => {
                    return (
                      <div
                        key={_key}
                        className={`fadeIn border-t pt-3 pb-7 ${
                          !speaker
                            ? "text-deepBlue border-t-deepBlue"
                            : "text-darkBlue border-t-darkBlue"
                        }`}
                      >
                        <div className="flex flex-row justify-between">
                          <h2 className="mr-2 font-semibold">{name}</h2>
                          <h2 className="font-semibold">{time}</h2>
                        </div>
                        <p>
                          <BlockContent blocks={speaker} />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="lg:hidden block mb-12">
                <StreamMobileSection agenda={agenda} />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[80%] flex pt-24 lg:ml-auto justify-center lg:justify-end md:justify-start lg:px-0">
            <div className="w-full fadeIn rounded-xl max-w-[700px]">
              <div className="lg:text-6xl lg:hidden block text-4xl font-poppinsExtraBold uppercase pt-32 lg:pt-24 pb-12 anim text-darkBlue">
                Streaming
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/Rws5h7urz64?si=SnGPKEXeeTXtJIBy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-between lg:flex-row flex-col pt-32 lg:min-h-[70vh]">
          <div className="lg:text-6xl text-4xl font-poppinsExtraBold uppercase pb-20 anim">
            Streaming
          </div>
          <div className="w-1/2 space-y-10">
            {wrongPassword ? (
              <h4 className="text-red-400 font-regular text-lg">
                Wrong password, try again.
              </h4>
            ) : (
              <h4 className="font-regular text-lg">Insert password</h4>
            )}
            <input
              type="password"
              value={typedPassword}
              placeholder="Password*"
              className="p-2 lg:w-[500px] w-[300px] border-b border-darkBlue text-darkBlue bg-transparent focus:outline-none font-ExtralightItalic"
              onChange={(e) => setTypedPassword(e.target.value)}
            />
            <div
              onClick={() => {
                if (typedPassword === "AIM2025") {
                  setPassword(typedPassword);
                } else {
                  setWrongPassword(true);
                  setTimeout(() => {
                    setWrongPassword(false);
                  }, 2000);
                }
              }}
            >
              <div className="w-full flex fadeIn py-20">
                <div
                  className={`flex items-center lg:px-12 px-7 lg:py-4 py-3 w-max transition duration-300 rounded-full font-poppinsExtraBold lg:text-xl text-base cursor-pointer hover:drop-shadow-md z-50 border-mainBlue border-2 text-mainBlue hover:bg-mainBlue hover:text-gray-100`}
                >
                  Go to streaming
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Streaming;
