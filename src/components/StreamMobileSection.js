import BlockContent from "@sanity/block-content-to-react";

const StreamMobileSection = ({ agenda }) => {
  return (
    <div>
      <div className="border border-darkBlue rounded-xl p-6 mt-12">
        <h2 className="text-2xl pb-3 pt-8 text-deepBlue font-bold">
          Agenda
        </h2>
        <div className="mt-6 space-y-2 h-[400px] overflow-y-auto pr-2">
          {agenda.map(({ _key, name, time, speaker }) => {
            return (
              <div
                key={_key}
                className={`lg:hidden flex justify-between py-4 border-t fadeIn text-sm lg:text-lg ${
                  !speaker ? "border-t-deepBlue" : "border-t-darkBlue"
                }`}
              >
                <div className="pr-5">
                  <h2
                    className={`font-semibold ${
                      !speaker ? "text-deepBlue" : "text-darkBlue"
                    }`}
                  >
                    {name}
                  </h2>
                  <div>
                    <BlockContent
                      blocks={speaker}
                      className="text-xs lg:text-lg"
                    />
                  </div>
                </div>
                <h2
                  className={`font-semibold ${
                    !speaker ? "text-deepBlue" : "text-darkBlue"
                  }`}
                >
                  {time}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StreamMobileSection;
