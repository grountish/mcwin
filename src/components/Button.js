"use client";
import React from "react";

const Button = ({ title, link, color, bgColor, classes }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`px-4 py-2 w-max font-aonik transition duration-300 rounded-lg cursor-pointer hover:drop-shadow-md z-50 ${color} ${bgColor} ${classes}`}
    >
      {title}
    </a>
  );
};

export default Button;
