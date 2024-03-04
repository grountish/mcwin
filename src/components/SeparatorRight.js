import React from "react";

const SeparatorRight = ({ color, classes }) => {
  return (
    <div
      style={{
        borderLeft: "100vw solid transparent",
        borderBottom: `200px solid ${color || "white"}`,
      }}
      className={`w-full h-[150px] ${classes}`}
    ></div>
  );
};
export default SeparatorRight;
