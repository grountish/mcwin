import React from "react";

const AgendaMobileSection = ({ slots }) => {
  let globalIndex = 0;

  return (
    <div>
      {/* Column headers */}
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
                className={`flex justify-between pb-4 py-4 fadeInpt-3 text-sm lg:text-lg ${
                  hasBorder ? "border-t border-darkBlue" : ""
                }`}
                style={colorStyle}
              >
                {/* Left: Subject and Speakers */}
                <div className="pr-5 flex flex-col">
                  <h2 className="font-bold">{name}</h2>
                  {speakers?.map((speaker, idx) => (
                    <div key={idx} className="mt-1">
                      <p className="font-semibold">{speaker.name}</p>
                      {speaker.position && (
                        <p className="text-sm font-light">{speaker.position}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right: Time */}
                <h2 className="font-bold text-right">{time}</h2>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default AgendaMobileSection;
