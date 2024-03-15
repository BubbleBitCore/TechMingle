import React from "react";
import { useSelector } from "react-redux";

const SkeletonPopularCategory = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <div
      className={`${
        mode ? "dark" : ""
      } basis-16 h-16 rounded-md skeleton max-sm:w-full transition-all duration-500`}
    ></div>
  );
};

export default SkeletonPopularCategory;
