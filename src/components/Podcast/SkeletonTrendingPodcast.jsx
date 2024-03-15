import React from "react";
import { useSelector } from "react-redux";

const SkeletonTrendingPodcast = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div
        className={`${
          mode
            ? "bg-zinc-900 border-t border-transparent"
            : "bg-white shadow-md border-t border-gray-200 "
        } flex flex-col items-stretch gap-3 basis-full h-full min-h-40 p-4 max-sm:p-8 rounded-md overflow-hidden max-sm:flex-col max-sm:basis-full max-sm:h-64 transition-all duration-500`}
      >
        <div
          className={`${
            mode ? "dark" : ""
          } w-full rounded-md skeleton max-sm:w-full max-sm:h-[80%] h-[60%] transition-all duration-500`}
        ></div>
        <div
          className={`flex flex-col w-[80%] gap-2 max-sm:w-full max-sm:justify-center transition-all duration-500`}
        >
          <h2
            className={`${
              mode ? "dark" : ""
            } w-full min-h-4 max-sm:min-h-6 max-sm:w-[90%] rounded-sm skeleton transition-all duration-500`}
          ></h2>
          <p
            className={` ${
              mode ? "dark" : ""
            } w-[120%] min-h-4 max-sm:hidden rounded-sm max-sm:w-[90%] skeleton transition-all duration-500`}
          ></p>
        </div>
      </div>
    </>
  );
};

export default SkeletonTrendingPodcast;
