import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CreatePodcast = () => {
  const visibility = useSelector(
    (state) => state.podcast.createPodcastVisibility
  );
  const mode = useSelector((state)=>state.common.mode)
  useEffect(()=>{
    console.log(visibility)
  },[visibility])
  return (
    <>
      {visibility && (
        <div className=" z-[70] w-screen h-screen top-0 left-0 fixed bgBlur flex justify-center items-center backdrop-blur-sm">
        <div
          className={`flex flex-col w-[600px] rounded-md ${
            mode ? "bg-[#101216] text-white" : "bg-zinc-100"
          } `}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={`flex justify-between ${
              mode ? "bg-[#17191f] " : "bg-[#eff0f1]"
            } rounded-t-md p-5  px-5 items-center  select-none`}
          >
            <p className="font-bold text-md">Create a new Podcast </p>
            <div
              className={`flex justify-center items-center rounded-full transition-all duration-500 cursor-pointer`}
            >
              <i
                className={`ri-close-large-line text-lg hover:text-blue-500`}
              ></i>
            </div>
          </div>
          <div className="p-5 flex flex-col w-full gap-5 overflow-y-auto ">
            {/* title section */}
            <div className="flex flex-col gap-2 text-sm">
              <p className=" select-none">Title</p>
              <input
                type="text"
                maxLength={100}
                className={`p-1.5 px-3 rounded-md outline outline-1  bg-transparent focus:outline-2 focus:outline-blue-500 ${
                  mode
                    ? "text-gray-300 outline-zinc-700"
                    : "text-gray-600 outline-zinc-400"
                }`}
              ></input>
            </div>
            {/* description section */}
            <div className="flex flex-col gap-2 text-sm">
              <p className="select-none">Description</p>
              <textarea
                rows="4"
                
                maxLength={2000}
                className={`p-1.5 px-3 resize-none rounded-md outline outline-1  bg-transparent focus:outline-2 focus:outline-blue-500 ${
                  mode
                    ? "text-gray-300 outline-zinc-700"
                    : "text-gray-600 outline-zinc-400"
                }`}
              ></textarea>
            </div>
            {/* tags section */}
            <div
              className="flex flex-col gap-2 text-sm"
              
              
            >
              <div className="flex gap-2 items-center select-none">
                {" "}
                <p className="">Tags</p>
                <p className="text-zinc-500 text-xs">
                  (separate with spaces)
                </p>
              </div>
              <div
                className={` flex w-full outline gap-3 outline-1 select-none ${
                  mode ? "outline-zinc-700" : "outline-zinc-400"
                }  rounded-md  p-1 px-3 flex-wrap`}
              >
                
                <input
                  type="text"
                  className={`w-56 rounded-md  bg-transparent outline-none focus:border focus:border-blue-600 ${
                    mode ? "text-gray-300" : "text-gray-600"
                  }`}
                  
                ></input>
              </div>
            </div>
            <div className="flex relative min-h-56">
              
              {/* Thumbnail section */}
              <div className="flex flex-col gap-2 text-sm absolute">
                <p className=" select-none">Thumbnail</p>
                <p
                  className={`text-xs ${
                    mode ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  Select or upload a picture that shows what's in your video.
                  A good thumbnail stands out and draws viewer's attention.
                </p>
                <div className=" flex justify-center items-center border-2 border-dashed border-gray-500 w-64 h-36 mt-1">
                  <div className="relative w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      alt="Your Image Description"
                    />
                    <label
                      title="podcast thumbnail"
                      className="absolute imgChange rounded-full h-full w-full top-0 left-0 cursor-pointer "
                      htmlFor="image"
                    ></label>
                    <input
                      className="hidden"
                      id="image"
                      type="file"
                      accept="image/*"

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cancel or save sections */}
          <div
            className={`flex justify-end gap-2 rounded-b-lg border-t ${
              mode ? "border-t-zinc-800" : "border-t-zinc-300"
            }  p-3 font px-5 items-center  select-none`}
          >
            <div
              className={`flex justify-center p-1.5 px-4 text-[13px] text-white ${
                mode
                  ? "bg-[#238636] hover:bg-[#37de58]"
                  : "bg-[#2cde50] hover:bg-[#2bba47]"
              } items-center rounded-md transition-all duration-500 cursor-pointer`}
            >
              Save changes
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default CreatePodcast;
