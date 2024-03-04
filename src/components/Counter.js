"use client";
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="text-mainPurple md:text-6xl xl:text-6xl lg:text-5xl text-3xl font-bold bg-white px-8 py-4 rounded-2xl flex space-x-3 font-interBold md:w-[510px] xl:w-[510px] lg:w-[430px] items-center justify-center">
      <div className="flex items-center flex-col">
        <p>{addLeadingZero(timeLeft.days)}</p>
        <p className="text-xs">days</p>
      </div>
      <p className="font-inter">:</p>
      <div className="flex items-center flex-col">
        <p>{addLeadingZero(timeLeft.hours)}</p>
        <p className="text-xs">hours</p>
      </div>
      <p className="font-inter">:</p>
      <div className="flex items-center flex-col">
        <p>{addLeadingZero(timeLeft.minutes)}</p>
        <p className="text-xs">minutes</p>
      </div>
      <p className="font-inter">:</p>
      <div className="flex items-center flex-col md:w-16 w-14">
        <p>{addLeadingZero(timeLeft.seconds)}</p>
        <p className="text-xs">seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
