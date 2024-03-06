"use client";
import React from "react";

const Button = ({ title, classes }) => {
  return (
    <div
      className={`px-20 py-5 w-max transition duration-300 rounded-full font-poppinsExtraBold text-xl cursor-pointer hover:drop-shadow-md z-50 bg-transparent border-white border ${classes}`}
    >
      {title}
    </div>
  );
};

export default Button;
