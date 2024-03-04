import React from "react";

const Arrow = ({ color }) => {
  return (
    <div className="cursor-pointer">
      <svg
        width="30"
        height="60"
        viewBox="0 0 46 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.96289 2.52152L43.4968 44.0554"
          stroke={color}
          strokeWidth="4.4098"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="M1.96289 83.2502L43.4968 41.7163"
          stroke={color}
          strokeWidth="4.4098"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Arrow;
