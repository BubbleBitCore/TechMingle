import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CreatePodcast = () => {
  const visibility = useSelector(
    (state) => state.podcast.createPodcastVisibility
  );
  useEffect(()=>{
    console.log(visibility)
  },[visibility])
  return (
    <>
      {visibility && (
        <div className="flex w-full h-full backdrop-blur-sm justify-center items-center">
            <div className="flex bg-gray-500 w-64 h-64 "></div>
        </div>
      )}
    </>
  );
};

export default CreatePodcast;
