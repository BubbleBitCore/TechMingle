import GlobalAudioPlayer from "./GlobalAudioPlayer";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTime,
  setIsPlaying,
  setIsRepeating,
  setVolume,
  setCurrentIdx,
  setNowPlaying,
} from "../../slices/podcastSlice";

const PodcastPlayer = ({ large = false, audioRef }) => {
  const mode = useSelector((state) => state.common.mode);
  const currentTime = useSelector((state) => state.podcast.currentTime);
  const duration = useSelector((state) => state.podcast.duration);
  const isRepeating = useSelector((state) => state.podcast.isRepeating);
  const isPlaying = useSelector((state) => state.podcast.isPlaying);
  const volume = useSelector((state) => state.podcast.volume);
  const currentIdx = useSelector((state) => state.podcast.currentIdx);
  const contextList = useSelector((state) => state.podcast.contextList);

  const dispatch = useDispatch();

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      dispatch(setIsPlaying(true));
    } else {
      dispatch(setIsPlaying(false));
    }
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value) / 100; // Convert the value to a float
    if (newVolume >= 0 && newVolume <= 1) {
      audioRef.current.volume = newVolume;
      dispatch(setVolume(newVolume));
    }
  };

  const playNext = () => {
    if(contextList.length > 1){
      if (currentIdx < contextList.length - 1) {
        dispatch(setCurrentIdx(currentIdx + 1));
        dispatch(setNowPlaying(contextList[currentIdx + 1]));
      }else if(currentIdx === contextList.length - 1){
        dispatch(setCurrentIdx(0));
        dispatch(setNowPlaying(contextList[0]));
      }
    }
  };

  const playPrevious = () => {
    if(contextList.length > 1){
      if (currentIdx > 0) {
        dispatch(setCurrentIdx(currentIdx - 1));
        dispatch(setNowPlaying(contextList[currentIdx - 1]));
      }else if(currentIdx === 0){
        dispatch(setCurrentIdx(contextList.length -1));
        dispatch(setNowPlaying(contextList[contextList.length-1]));
      }
    }
    
  };

  return (
    <>
      <style>
        {`
          .audiorange, #vol_progress {
            -webkit-appearance: none;
          }
          .audiorange::-webkit-slider-runnable-track {
            width: 100%;
            height: 5px;
            background: linear-gradient(to right, #302E2E 0%, #302E2E ${
              (currentTime / duration) * 100
            }%, #d3d3d3 ${(currentTime / duration) * 100}%, #d3d3d3 100%);
          }
          #vol_progress::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, #302E2E 0%, #302E2E ${
              volume * 100
            }%, #d3d3d3 ${volume * 100}%, #d3d3d3 100%);
          }
          .audiorange::-webkit-slider-thumb, #vol_progress::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: #fff;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 4px solid #302E2E;
            margin-top: -6px;
          }
          #vol_progress::-webkit-slider-thumb {
            width: 12px;
            height: 12px;
            border: 3px solid #302E2E;
            margin-top: -4px;
          }
        `}
      </style>

      <div className="flex flex-col w-full h-full gap-2 py-2 justify-center bg-transparent">
        <div
          className={`${large ? "text-white" : ""} flex ${
            large ? "gap-3" : "gap-1"
          } w-full items-center px-4`}
        >
          <p className={`text-xs ${large ? "" : "w-[85px]"}`}>
            {new Date(currentTime * 1000).toISOString().substr(11, 8)}
          </p>
          <input
            type="range"
            className="audiorange w-full h-[5px] rounded-[50px] cursor-pointer outline-none"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleProgressChange}
          ></input>
          <p className="text-xs">
            {new Date(duration * 1000).toISOString().substr(11, 8)}
          </p>
        </div>
        <div
          className={`${
            large ? "text-white" : ""
          } flex px-4 justify-between w-full items-center`}
        >
          <div className="flex w-1/3 items-center text-lg">
            <div
              className={`px-2 py-1 rounded-full justify-center ${
                large
                  ? "hover:text-zinc-400 text-xl"
                  : mode
                  ? "hover:bg-zinc-800"
                  : "hover:bg-zinc-100"
              } transition-all duration-500 relative flex items-center`}
              onClick={() => {
                dispatch(setIsRepeating(!isRepeating));
                console.log(isRepeating);
              }}
              title="repeat"
            >
              <i className="ri-repeat-fill "></i>
              <div
                className={`${
                  isRepeating
                    ? "opacity-0 transform scale-0"
                    : "opacity-100 transform scale-100"
                } ${
                  large
                    ? "bg-white hover:bg-zinc-400"
                    : mode
                    ? "bg-white"
                    : "bg-black"
                }  w-[1.5px] h-7 absolute rotate-45`}
              ></div>
            </div>
          </div>

          <div
            className={`flex w-full items-center justify-center text-lg ${
              large ? "gap-2" : "gap-1"
            } `}
          >
            <div
              className={`px-2 py-1 rounded-full ${
                large
                  ? "hover:text-zinc-400 text-2xl"
                  : mode
                  ? " hover:bg-zinc-800 text-xl"
                  : " hover:bg-zinc-100 text-xl"
              } transition-all duration-500`}
              onClick={playPrevious}
            >
              <i className="ri-skip-back-fill"></i>
            </div>

            {large && (
              <div
                className={`px-2 py-1 rounded-full ${
                  large
                    ? "hover:text-zinc-400 text-2xl"
                    : mode
                    ? " hover:bg-zinc-800"
                    : " hover:bg-zinc-100"
                } transition-all duration-500`}
                onClick={skipBackward}
              >
                <i className="ri-rewind-fill"></i>
              </div>
            )}
            <div>
              <i
                className={`${
                  isPlaying ? "ri-pause-circle-fill" : "ri-play-circle-fill"
                } ${
                  large
                    ? "text-5xl hover:text-zinc-400"
                    : mode
                    ? "hover:text-zinc-300 text-4xl"
                    : "hover:text-zinc-800 text-4xl"
                }  `}
                onClick={handlePlayPause}
              ></i>
            </div>
            {large && (
              <div
                className={`px-2 py-1 rounded-full ${
                  large
                    ? "hover:text-zinc-400 text-2xl"
                    : mode
                    ? " hover:bg-zinc-800 "
                    : " hover:bg-zinc-100"
                } transition-all duration-500`}
                onClick={skipForward}
              >
                <i className="ri-speed-fill "></i>
              </div>
            )}

            <div
              className={`px-2 py-1 rounded-full ${
                large
                  ? "hover:text-zinc-400 text-2xl"
                  : mode
                  ? " hover:bg-zinc-800 text-xl"
                  : " hover:bg-zinc-200 text-xl"
              } transition-all duration-500`}
              onClick={playNext}
            >
              <i className="ri-skip-forward-fill"></i>
            </div>
          </div>
          <div className="flex w-1/3 max-w-[120px] items-center ">
            <div
              className={`px-2 py-1 rounded-full ${
                mode ? " hover:bg-zinc-800" : " hover:bg-zinc-200"
              } transition-all duration-500`}
            >
              <i className="ri-volume-up-fill"></i>
            </div>

            <input
              type="range"
              id="vol_progress"
              className="w-full h-[4px] bg-gray-200 rounded-full cursor-pointer"
              value={volume * 100}
              onChange={handleVolumeChange}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastPlayer;
