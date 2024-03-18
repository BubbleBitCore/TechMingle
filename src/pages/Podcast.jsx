import React from "react";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

const Podcast = () => {
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <Header urlName="Podcast" />
      <div className="mt-1 mb-2 h-full w-full ">
        <Spinner />
      </div>
    </div>
  );
};

export default Podcast;
