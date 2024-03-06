import React from "react";

const SeparatorRight = () => {
  return (
    <div
      className={
        "w-screen absolute bottom-0 bg-no-repeat bg-bottom bg-cover h-[150px]"
      }
      style={{
        backgroundImage: `url('/separator.svg')`,
        transform: "translateY(1px)",
      }}
    ></div>
  );
};
export default SeparatorRight;
