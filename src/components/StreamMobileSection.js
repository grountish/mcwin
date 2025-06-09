const StreamMobileSection = ({ agenda }) => {
  return (
    <div className="w-full">
      <div className="border border-darkBlue rounded-xl p-6 mt-12 w-full">
        <h2 className="text-2xl pb-3 pt-8 text-deepBlue font-bold">
          Agenda
        </h2>
        <div className="mt-6 space-y-2 h-[400px] overflow-y-auto pr-2 scrollbar-hide w-full" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          {agenda?.map(({ _key, name, time, speakers, textColor }) => {
            const colorStyle = textColor?.hex ? { color: textColor.hex } : {};
            
            return (
              <div
                key={_key}
                className="lg:hidden flex justify-between py-4 border-t fadeIn text-sm lg:text-lg border-t-darkBlue w-full"
                style={colorStyle}
              >
                <div className="pr-5 flex-1">
                  <h2 className="font-poppinsBold mb-1">{name}</h2>
                  {speakers?.map((speaker, idx) => (
                    <div key={idx} className="mt-1">
                      <p className="font-poppinsSemiBold text-xs lg:text-sm">{speaker.name}</p>
                      {speaker.position && (
                        <p className="text-xs font-light">{speaker.position}</p>
                      )}
                    </div>
                  ))}
                </div>
                <h2 className="font-poppinsBold whitespace-nowrap">{time}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StreamMobileSection;