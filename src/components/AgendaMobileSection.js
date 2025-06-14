import React from "react";

const AgendaMobileSection = ({ slots }) => {
  let globalIndex = 0;

  return (
    <div>
      <div className="flex justify-between pb-4 border-b border-darkBlue uppercase text-xs font-semibold text-mainBlue">
        <h3>Speakers / Subject</h3>
        <h3>Time</h3>
      </div>

      {slots.map(({ _key, events }) => (
        <div key={_key}>
          {events.map(({ _key, name, time, speakers, textColor }) => {
            const hasBorder = globalIndex !== 0;
            globalIndex++;

            const colorStyle = textColor?.hex ? { color: textColor.hex } : {};

            return (
              <div
                key={_key}
                className={`flex justify-between pb-4 py-4 fadeIn pt-3 text-sm lg:text-lg ${
                  hasBorder ? "border-t border-darkBlue" : ""
                }`}
                style={colorStyle}
              >
                <div className="pr-5 flex flex-col">
                  <h2 className="font-poppinsBold">{name}</h2>
                  {speakers?.map((speaker, idx) => (
                    <div key={idx} className="mt-1">
                      <p className="font-poppinsSemiBold">{speaker.name}</p>
                      {speaker.position && (
                        <p className="text-sm font-light">{speaker.position}</p>
                      )}
                    </div>
                  ))}
                </div>
                <h2 className="font-poppinsBold text-right">{time}</h2>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default AgendaMobileSection;
