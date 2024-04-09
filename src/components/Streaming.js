import React from "react";

const Streaming = ({ events }) => {
  return (
    <div className="lg:pt-40 test lg:px-20 pt-12 px-7 pb-48 bg-slate-300 bg-[url('/main-section-bg-min.jpg')] bg-cover bg-no-repeat text-white">
      <div className="flex w-full justify-between space-x-12">
        <div className="w-full">
          <iframe
            className="w-full h-full fadeIn aspect-video rounded-xl"
            src="https://www.youtube.com/embed/t-99hr9Vp74"
          ></iframe>
        </div>
        <div className="flex relative bg-nightBlue font-regular flex-col p-2 border-deepBlue rounded-2xl border text-white w-[450px] max-h-[600px]">
          <h4 className="text-white py-4">Programation</h4>
          <div className="overflow-scroll pb-20">
            {events.map(({ _key, name, time, speaker }) => {
              return (
                <div key={_key} className="flex pb-8 fadeIn">
                  <h2 className="w-2/12 font-semibold">{time}</h2>
                  <h2 className="w-6/12 border-t-deepBlue border-t mr-2 font-ExtralightItalic">
                    {name}
                  </h2>
                  <p className="w-4/12 border-t-deepBlue border-t font-semibold">
                    {speaker}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-[160px] bg-red-500 z-10 rounded-2xl"
            style={{
              background:
                "linear-gradient(0deg, #030F23 35%, rgba(255,255,255,0) 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Streaming;
