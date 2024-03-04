import { animationLib } from "../utils/animationLib";
import { useEffect } from "react";
import UCHeader from "@/components/UCHeader";
import UCFooter from "@/components/UCFooter";
import { getClient } from "@/lib/sanity.server";

export default function Home({ layout }) {
  useEffect(() => {
    animationLib();
  }, []);

  return (
    <div className="absolute h-screen">
      <div
        className="w-screen bg-cover bg-no-repeat h-screen flex justify-center text-center items-center lg:bg-[url('/under-construction-bg.svg')] bg-[url('/under-construction-bg-mobile.svg')]"
        style={{ backgroundPosition: "0 -7vh" }}
      >
        <div className="flex flex-col justify-center items-center m-auto space-y-4">
          <h2 className="font-inter text-mainGreen text-[20px]">
            <span className="font-interBold ">June 26 & 27 | </span>Barcelona
          </h2>
          <h2 className="font-aonik text-mainPurple lg:text-[117px] text-[72px] leading-none px-4">
            Decipher 2024
          </h2>
          <div className="space-y-4 lg:py-6 py-2">
            <h2 className="font-interExtraBold lg:text-[50px] text-4xl py-3">
              STAY TUNED
            </h2>
            <h2 className="font-inter text-mainPurple text-lg lg:text-[22px] w-3/4 lg:w-full mx-auto">
              More information will be available soon.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const layout = await getClient().fetch('*[_type == "layout"]');

  return {
    props: {
      layout: "",
    },
  };
}
