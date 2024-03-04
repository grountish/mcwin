import React from "react";

const SeparatorRight = ({ color, classes }) => {
  return (
    <div
      className={`w-screen absolute bottom-0 bg-no-repeat bg-bottom bg-cover  h-[150px] translate-y-1}`}
      style={{
        backgroundImage: `url('/separator.svg')`,
      }}
    ></div>
  );
};
export default SeparatorRight;
