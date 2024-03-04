"use client";
import React from "react";

const Button = ({ title, link, color, bgColor, classes }) => {
  return (
    <div
      className={`px-16 py-6 w-max transition duration-300 rounded-full font-bold text-xl cursor-pointer hover:drop-shadow-md z-50 bg-transparent border-white border ${classes}`}
    >
      {title}
    </div>
  );
};

export default Button;
