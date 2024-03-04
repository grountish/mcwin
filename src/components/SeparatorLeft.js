import React from "react";

const SeparatorLeft = ({ classes }) => {
  return (
    <div
      style={{
        borderRight: "100vw solid transparent",
        borderBottom: "200px solid white",
      }}
      className={`w-full h-[150px] -translate-y-[199px] ${classes}`}
    ></div>
  );
};
export default SeparatorLeft;
