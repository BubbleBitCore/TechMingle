import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import img1 from "../assets/images/img1.jpg";
import despacito from "../assets/songs/despacito.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Podcast = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <style>{`
        .rhap_container {
          box-shadow: 0 0 0 0 !important;
        }
        .rhap_progress-indicator {
          background-color: white !important;
          width: 18px !important;
          height: 18px !important;
          border: 4px solid rgb(60, 57, 57) !important;
        }
        .rhap_progress-filled {
          background-color: rgb(65, 64, 64) !important;
        }
        .rhap_time {
          font-size: 12px !important;
        }

        .rhap_main-controls-button {
          color: rgb(54, 51, 51) !important;
          font-size: 24px !important;
        }

        .rhap_play-pause-button {
          font-size: 32px !important;
        }

        .rhap_repeat-button {
          font-size: 20px !important;
          color: rgb(85, 83, 83) !important;
        }

        .rhap_volume-button {
          font-size: 20px !important;
          color: rgb(85, 83, 83) !important;
        }
        .rhap_volume-button:hover {
          color: rgb(151, 145, 145) !important;
        }

        .rhap_play-pause-button:hover {
          color: rgb(72, 70, 70) !important;
        }

        .rhap_main-controls-button:hover {
          color: rgb(77, 73, 73) !important;
        }

        .rhap_repeat-button:hover {
          color: rgb(145, 138, 138) !important;
        }
        .rhap_volume-indicator {
          background-color: white !important;
          width: 12px !important;
          height: 12px !important;
          border: 3px solid rgb(48, 46, 46);
        }
        #rhap_current-time {
          color: rgb(60, 57, 57) !important;
          width: 2rem !important;
          font-weight: bold !important;
        }
        .rhap_total-time {
          color: rgb(60, 57, 57) !important;
          font-weight: bold !important;}
        .rhap_container {
          background-color: transparent !important;
        }
        `}</style>
      <Header urlName="Podcast" />
      <div
        className={`${
          mode ? "bg-zinc-950" : "bg-gray-50"
        } flex gap-6 mt-1 h-full w-full  rounded-xl  px-6 py-4 overflow-auto`}
      >
        {/*podcast playing div */}
        <div
          className={`${
            mode ? "bg-black" : "bg-white"
          } flex flex-col w-[75%] h-full  rounded-xl shadow-lg`}
        >
          <div className={`flex h-[60%] w-full relative`}>
            <img
              className={`object-cover w-full h-full rounded-t-xl`}
              src={img1}
            ></img>
            {/* adding a audio player component from react-h5-audio-player */}
            <div className="flex absolute bottom-3 w-full px-3">
              <div className="flex w-full backdrop-blur-3xl rounded-md shadow-lg">
                <AudioPlayer
                  autoPlay
                  src={despacito}
                  onPlay={(e) => console.log("onPlay")}
                  showSkipControls={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            mode ? "bg-black" : "bg-white"
          } flex w-[25%] h-full rounded-xl shadow-lg`}
        ></div>
      </div>
    </div>
  );
};

export default Podcast;
