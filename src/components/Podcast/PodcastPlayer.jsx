import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const PodcastPlayer = ({ large = false,audioRef,isPlayerPaused}) => {

  // const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const nowPlaying = useSelector((state)=>state.podcast.nowPlaying) 

  useEffect(() => {
    // Control playback based on isPlayerPaused prop
    if (isPlayerPaused) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlayerPaused]);

  useEffect(()=>{
    audioRef.current.play();
    setIsPlaying(true);
    
  },[nowPlaying])

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
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
            background: linear-gradient(to right, #302E2E 0%, #302E2E , #d3d3d3, #d3d3d3 100%);
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
        <audio
          ref={audioRef}
          src={nowPlaying.audio}
          onTimeUpdate={(e) => {
            setCurrentTime(e.target.currentTime);
          }}
          onLoadedMetadata={() => {
            setDuration(audioRef.current.duration);
          }}
          onPlay={()=>{setIsPlaying(true)}}
          onPause={()=>{setIsPlaying(false)}}
        >
        </audio>
        <div className={`${large ? "text-white" : ""} flex gap-3 w-full items-center px-4`}>
          <p className="text-xs w-[85px]">
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
        <div className={`${large ? "text-white" : ""} flex px-4 justify-between w-full items-center`}>
          <div className="flex w-1/3 items-center text-lg">
            <i className="ri-loop-left-line"></i>
          </div>
          <div className="flex w-full items-center justify-center text-lg gap-3">
            {large && (
              <div>
                <i className="ri-skip-back-fill"></i>
              </div>
            )}
            <div>
              <i className="ri-rewind-fill"></i>
            </div>
            <div>
              <i
                className={`${
                  isPlaying ? "ri-pause-circle-fill" : "ri-play-circle-fill"
                } text-4xl`}
                onClick={handlePlayPause}
              ></i>
            </div>
            <div>
              <i className="ri-speed-fill"></i>
            </div>
            {large && (
              <div>
                <i className="ri-skip-forward-fill"></i>
              </div>
            )}
          </div>
          <div className="flex w-1/3 max-w-[120px] items-center gap-1">
            <i className="ri-volume-up-fill"></i>
            <input
              type="range"
              id="vol_progress"
              className="w-full h-[4px] bg-gray-200 rounded-full cursor-pointer"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastPlayer;
