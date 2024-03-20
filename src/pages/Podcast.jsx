import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import believer from "../assets/songs/believer.mp3";
import carnival from "../assets/songs/carnival.mp3";
import despacito from "../assets/songs/despacito.mp3";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useRef } from "react";
import { formatNumber } from "../utils/conversion";

const Podcast = () => {
  // variables to control functions of audio player
  const player = useRef();
  let [playerPaused, setPlayerPaused] = useState(false);

  const recommendations = [
    {
      title: "How to face big decisions 1",
      artist: "TOM HEART 1",
      duration: " 1hr 11 min",
      thumbnail: img1,
      audio: despacito,
      category: "Exclusive",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    },
    {
      title: "How to face big decisions 2",
      artist: "TOM HEART 2",
      duration: " 1hr 12 min",
      thumbnail: img2,
      audio: believer,
      category: "Exclusive",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    },
    {
      title: "How to face big decisions 3",
      artist: "TOM HEART 3",
      duration: " 1hr 13 min",
      thumbnail: img3,
      audio: carnival,
      category: "News & Politics",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    },
    {
      title: "How to face big decisions 4",
      artist: "TOM HEART 4",
      duration: " 1hr 14 min",
      thumbnail: img1,
      audio: despacito,
      category: "Music",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    },
    {
      title: "How to face big decisions 5",
      artist: "TOM HEART 5",
      duration: " 1hr 15 min",
      thumbnail: img2,
      audio: believer,
      category: "other",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    },
    {
      title: "How to face big decisions 6",
      artist: "TOM HEART 6",
      duration: " 1hr 16 min",
      thumbnail: img3,
      audio: carnival,
      category: "Music",
      views: 787866,
      likes: 9882198,
      tags: ["business", "knowledge", "experience"],
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    },
  ];

  const [nowPlaying, setNowPlaying] = useState({
    title: "How to face big decisions 1",
    artist: "TOM HEART 1",
    duration: " 1hr 11 min",
    thumbnail: img1,
    audio: despacito,
    category: "Exclusive",
    views: 787866,
    likes: 9882198,
    tags: [
      "business",
      "knowledge",
      "experience",
      "business",
      "knowledge",
      "experience",
      "business",
      "knowledge",
      "experience",
    ],
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
  });

  const topRecommended = {
    title: "How to face big decisions 1",
    artist: "TOM HEART 1",
    duration: " 1hr 11 min",
    thumbnail: img2,
    audio: despacito,
    category: "Exclusive",
    views: 787866,
    likes: 9882198,
    tags: ["business", "knowledge", "experience"],
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
  };

  const mode = useSelector((state) => state.common.mode);

  const handleToggleExpand = (event) => {
    const textElement = event.currentTarget.previousElementSibling;
    textElement.classList.toggle("truncate-2-lines");
    textElement.classList.toggle("truncate-none");
    event.currentTarget.classList.toggle("hidden");
  };
  return (
    <div className="flex flex-col h-full w-full sm:pr-4">
      <style>{`
        .rhap_container {
          box-shadow: 0 0 0 0 !important;
          outline: none !important;
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
          color: white !important;
          font-size: 24px !important;
        }

        .rhap_play-pause-button {
          font-size: 32px !important;
          outline:none !important;
        }

        .rhap_repeat-button {
          font-size: 20px !important;
          color: white !important;
        }

        .rhap_volume-button {
          font-size: 20px !important;
          color: white !important;
        }
        .rhap_volume-button:hover {
          color: rgb(151, 145, 145  ) !important;
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
          color: white !important;
          width: 2rem !important;
          font-size : 15px !important;
        }
        .rhap_total-time {
          color: white !important;
          font-size : 15px !important;
        }
        .rhap_container {
          background-color: transparent !important;
        }
        .animate-scrollText{
          animation:scrollText 10s linear infinite;
        }
        @keyframes scrollText{
          0%{
            transform: translateX(100%);
          }100%{
            transform: translateX(-100%);
          }
        }
        .truncate-2-lines {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .truncate-none {
          -webkit-line-clamp: unset;
          overflow: unset;
        }
        `}</style>
      <div className="w-full max-sm:px-4">
        <Header urlName="Podcast" />
      </div>

      <div
        className={`${
          mode ? "bg-zinc-950" : "bg-gray-50"
        } flex max-lg:flex-col gap-6 mt-1 w-full h-full sm:rounded-xl  sm:px-6 sm:py-4 overflow-auto select-none`}
      >
        {/*podcast playing div */}
        <div
          className={`${
            mode ? "bg-black" : "bg-white"
          } flex flex-col w-[75%] max-lg:w-full h-fit max-sm:h-fit sm:rounded-xl sm:shadow-lg`}
        >
          <div
            className={`flex max-sm:flex-col h-[55vh] max-sm:h-[90vh] backdrop-blur-xl items-center w-full relative overflow-hidden `}
          >
            <div className="flex flex-col justify-evenly max-sm:h-[80%] h-full w-full max-sm:px-6 items-center relative z-30 ">
              <img
                className={`object-cover w-full sm:h-full rounded-t-xl max-sm:rounded-xl`}
                src={nowPlaying.thumbnail}
                alt=""
              ></img>
              <div
                className={` sm:hidden flex flex-col gap-2 justify-center items-center w-[90%]`}
              >
                <p className=" whitespace-nowrap animate-scrollText text-md">
                  {nowPlaying.title}
                </p>
                <p className="text-sm">{nowPlaying.artist}</p>
              </div>
            </div>
            <div className="hidden flex-col justify-around max-sm:h-[80%] max-sm:px-8 items-center relative z-30 ">
              <p>Hello</p>
            </div>
            {/* adding a audio player component from react-h5-audio-player */}
            <div className="flex sm:absolute bottom-3 w-full sm:px-3 relative z-30">
              <div className="flex max-sm:flex-col w-full px-2 sm:backdrop-blur-3xl items-center rounded-md sm:shadow-lg max-sm:fixed">
                <AudioPlayer
                  autoPlay
                  src={nowPlaying.audio}
                  onPlay={() => {
                    setPlayerPaused(false);
                  }}
                  onPause={() => {
                    setPlayerPaused(true);
                  }}
                  showSkipControls={true}
                  ref={player}
                />
              </div>
            </div>
            <img
              className="sm:hidden object-cover  h-full w-full absolute top-0 left-0  brightness-100 z-10"
              src={nowPlaying.thumbnail}
              alt=""
            />
            <div className="h-full w-full absolute top-0 left-0 z-20 backdrop-blur-3xl"></div>
          </div>
          {/* user information */}
          <div className="sm:h-full flex flex-col w-full sm:p-6 max-sm:pt-3 px-6 sm:px-12 gap-5 ">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 justify-center items-center">
                <div className="flex w-10 h-10 rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={nowPlaying.thumbnail}
                  ></img>
                </div>
                <div className="flex flex-col justify-center">
                  <p
                    className={`${
                      mode
                        ? "text-zinc-300 hover:text-zinc-700"
                        : "hover:text-gray-400"
                    } text-md font-bold  cursor-pointer`}
                  >
                    {nowPlaying.artist}
                  </p>
                  <p
                    className={`${
                      mode ? "text-zinc-400" : "text-gray-600"
                    } text-xs `}
                  >
                    Followers{" "}
                  </p>
                </div>
              </div>
              <div className="bg-blue-600 p-1 px-4 rounded-md text-white cursor-pointer hover:bg-blue-500">
                Follow
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1.5 flex-wrap max-w-[90%] max-sm:w-full">
                {nowPlaying?.tags.map((item, idx) => (
                  <p
                    className="text-blue-600 font-bold text-sm max-sm:text-xs"
                    key={idx}
                  >
                    #{item}
                  </p>
                ))}
              </div>

              <div className={` flex justify-between gap-2 items-center mt-2`}>
                <p
                  className={`${
                    mode ? "text-zinc-300" : "font-bold"
                  } text-lg max-sm:text-sm w-[70%] break-words  `}
                >
                  {nowPlaying.title} ,{nowPlaying.artist}
                </p>
                <div className="flex gap-2 items-center ">
                  <i className="ri-thumb-up-line text-2xl max-sm:text-lg text-blue-600 cursor-pointer hover:font-bold hover:scale-125 transform transition-transform duration-300"></i>
                  <p className=" text-blue-600 font-bold max-sm:text-sm">
                    {formatNumber(nowPlaying.likes)}
                  </p>
                  <p className={`${mode ? "text-zinc-200" : ""}`}>|</p>
                  <i
                    className={`${
                      mode ? "text-zinc-200" : ""
                    } ri-thumb-down-line text-2xl max-sm:text-lg cursor-pointer hover:font-bold hover:scale-125 transform transition-transform duration-300`}
                  ></i>
                </div>
              </div>
              <div className="flex gap-2 text-sm w-fit group hover:gap-3  hover:font-bold   hover:text-blue-600 rounded-md cursor-pointer">
                <i
                  className={`${
                    mode ? "text-zinc-200" : ""
                  } ri-eye-line group-hover:scale-110 transform transition-transform duration-300 `}
                ></i>{" "}
                <p
                  className={`${
                    mode ? "text-zinc-200" : ""
                  } group-hover:scale-110 transform transition-transform duration-300`}
                >
                  {formatNumber(nowPlaying.views)}
                </p>
              </div>
              <p>
                <p
                  className={`${
                    mode ? "text-zinc-400" : ""
                  } text-sm truncate-2-lines cursor-pointer`}
                >
                  {nowPlaying.about}
                </p>
                <p
                  className="ml-2 text-blue-600 hover:underline text-xs"
                  onClick={handleToggleExpand}
                >
                  ...more
                </p>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${
            mode ? "bg-black " : "bg-white"
          } flex flex-col w-[25%] max-lg:w-full h-fit rounded-xl shadow-lg p-2`}
        >
          {/* Top recommendation div */}
          <div className="flex flex-col h-[37.5vh] w-full p-4 gap-3">
            <p className={`${mode ? "text-zinc-300" : "font-bold"} `}>
              Top recommendations
            </p>
            <img
              className=" h-[55%] object-cover rounded-md"
              src={topRecommended.thumbnail}
              alt=""
            ></img>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col  w-full px-2 gap-1">
                <p className={`${mode ? "text-zinc-300" : ""} font-bold`}>
                  {topRecommended.title}
                </p>
                <p
                  className={`${
                    mode ? "text-zinc-500" : "text-gray-600"
                  } text-xs `}
                >
                  {topRecommended.artist}
                </p>
                <div
                  className={`${
                    mode ? "text-zinc-400 " : "text-gray-600"
                  } flex text-xs  gap-2 group hover:gap-3 hover:font-bold `}
                >
                  <i className="ri-eye-line group-hover:scale-125"></i>
                  <p className="group-hover:scale-125">
                    {formatNumber(topRecommended.views)}
                  </p>
                </div>
              </div>
              <div className="flex">
                <i
                  className={`${
                    JSON.stringify(nowPlaying) ===
                      JSON.stringify(topRecommended) && !playerPaused
                      ? "ri-pause-circle-fill"
                      : "ri-play-circle-fill"
                  } ${
                    mode
                      ? "text-white hover:text-zinc-300"
                      : "hover:text-gray-700"
                  } text-3xl  hover:scale-125 transform duration-300 transition-all cursor-pointer`}
                  onClick={() => {
                    if (
                      JSON.stringify(nowPlaying) ==
                      JSON.stringify(topRecommended)
                    ) {
                      if (playerPaused) {
                        player.current.audio.current.play();
                        setPlayerPaused(false);
                      } else {
                        player.current.audio.current.pause();
                        setPlayerPaused(true);
                      }
                    } else {
                      setNowPlaying(topRecommended);
                      player.current.audio.current.play();
                      setPlayerPaused(false);
                    }
                  }}
                ></i>
              </div>
            </div>
          </div>

          {/* Recommendations div */}
          <div className="flex flex-col gap-1 p-4">
            <div className="flex justify-between">
              <p className={`${mode ? "text-zinc-300" : ""}`}>
                Recommendations
              </p>
              <i
                className={`${
                  mode ? "text-zinc-300" : ""
                } ri-more-fill cursor-pointer`}
              ></i>
            </div>
            <hr className={`${mode ? " border border-zinc-900" : ""}`}></hr>
            {/* tags for recommendation  */}
            <div className="flex gap-2 p-2 overflow-x-hidden hover:overflow-x-scroll w-full px-2">
              {nowPlaying?.tags.map((item, idx) => (
                <p
                  className={`${
                    mode
                      ? "border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-zinc-300"
                      : " border-gray-300 hover:border-gray-800 text-gray-700 hover:text-black"
                  } p-1 px-2 cursor-pointer border  text-xs rounded-xl `}
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>

            <hr className={`${mode ? " border border-zinc-900" : ""}`}></hr>
            {/* recommended podcasts */}
            <div className="w-full h-fit flex flex-col gap-2 pt-2 justify-center items-center">
              {recommendations?.slice(0, 4).map((item, idx) => (
                <div
                  className={`${
                    mode ? "hover:bg-zinc-950" : "hover:bg-gray-50"
                  } flex w-full p-2 gap-4    rounded-md group cursor-pointer`}
                  key={idx}
                  onClick={() => {
                    setNowPlaying(item);
                    player.current.audio.current.play();
                  }}
                >
                  <div className="flex w-[30%] h-full cursor-pointer">
                    <img
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-125"
                      src={item.thumbnail}
                      alt=""
                    ></img>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p
                      className={`${
                        mode ? "text-zinc-200" : ""
                      } text-xs font-bold`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`${
                        mode ? "text-zinc-500" : "text-gray-600"
                      } text-xs  `}
                    >
                      {item.artist}
                    </p>
                    <p
                      className={`${
                        mode ? "text-gray-400" : "text-gray-600"
                      } text-xs  flex gap-1`}
                    >
                      <i className="ri-eye-line"></i>
                      {formatNumber(item.views)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
