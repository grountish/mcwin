import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import serializers from "@/utils/serializers";

const QandA = ({ question }) => {
  const [open, setOpen] = useState(false);
  const [animationParent] = useAutoAnimate();

  return (
    <div
      key={question._key}
      className="py-4 cursor-pointer last:border-b border-t first:border-none fadeIn"
      ref={animationParent}
    >
      <>
        <div className="text-lg">
          <div
            className="flex items-start justify-between w-full text-left"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="flex items-center">
              <div className="hover:text-secondary-400 text-xl font-bold">
                {question.question}
              </div>
            </div>
            <span className="flex items-center ml-6 h-7">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={` ${
                  open ? "-rotate-45" : "rotate-0"
                } h-6 w-6 transform transition ease duration-500 text-white`}
              >
                <path
                  d="M8.73518 11.432H0.96518V7.90405H8.73518V0.134047H12.2212V7.90405H20.0332V11.432H12.2212V19.202H8.73518V11.432Z"
                  className=" fill-current"
                />
              </svg>
            </span>
          </div>
        </div>
        {open && (
          <div className={`py-6 mt-2 text-base text-left`}>
            <BlockContent blocks={question.answer} serializers={serializers} />
          </div>
        )}
      </>
    </div>
  );
};

export default QandA;
