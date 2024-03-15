import React from "react";
import { useSelector } from "react-redux";

const SkeletonList = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div
        className={`${
          mode
            ? "bg-zinc-900 border-t border-transparent"
            : "bg-white shadow-md border-t border-gray-200 "
        } flex items-stretch gap-3 p-2 rounded-md overflow-hidden basis-full max-sm:h-64 transition-all duration-500`}
      >
        <div
          className={`${
            mode ? "dark" : ""
          } w-[30%] rounded-md skeleton transition-all duration-500`}
        ></div>
        <div
          className={`flex flex-col w-[80%] gap-2 max-sm:w-full max-sm:justify-center transition-all duration-500`}
        >
          <h2
            className={`${
              mode ? "dark" : ""
            } w-full min-h-2 rounded-sm skeleton transition-all duration-500`}
          ></h2>
          <p
            className={` ${
              mode ? "dark" : ""
            } w-[80%] min-h-4 rounded-sm skeleton transition-all duration-500`}
          ></p>
        </div>
      </div>
    </>
  );
};

export default SkeletonList;