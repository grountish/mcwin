import React from "react";
import SeparatorRight from "./SeparatorRight";
import BlockContent from "@sanity/block-content-to-react";
import QandA from "./QandA";

const SectionFive = ({ title, subtitle, questions }) => {
  return (
    <div>
      <SeparatorRight color={"#001325"} />
      <div className="bg-lightBlack min-h-[120vh] md:px-10 lg:px-20 xl:px-20 px-6 text-white flex lg:flex-row flex-col md:justify-between justify-center w-full 2xl:px-64 ipadHeight">
        <div className="flex flex-col font-aonik w-full">
          <h1 className="md:text-headline text-6xl pt-20 leading-none pb-4 fadeUp">
            {title}
          </h1>
          <div className="md:text-4xl text-xl leading-none">
            {subtitle && <BlockContent blocks={subtitle} />}
          </div>
        </div>
        <div className="flex flex-col text-center w-full mx-auto md:pt-20 pt-3 pb-56">
          <div className="container lg:mx-auto">
            <div className="mb-8 overflow-hidden">
              {questions?.map((question, i) => {
                return <QandA question={question} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <SeparatorRight
        color={"#17CAC6"}
        classes={"absolute -translate-y-[199px]"}
      />
    </div>
  );
};

export default SectionFive;
