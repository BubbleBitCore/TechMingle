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
    tags: ["business", "knowledge", "experience"],
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
  };

  const mode = useSelector((state) => state.common.mode);
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
          color: rgb(54, 51, 51) !important;
          font-size: 24px !important;
        }

        .rhap_play-pause-button {
          font-size: 32px !important;
          outline:none !important;
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
        `}</style>
      <div className="w-full max-sm:px-4">
        <Header urlName="Podcast" />
      </div>

      <div
        className={`${
          mode ? "bg-zinc-950" : "bg-gray-50"
        } flex max-lg:flex-col gap-6 mt-1 w-full h-full rounded-xl  sm:px-6 sm:py-4 overflow-auto`}
      >
        {/*podcast playing div */}
        <div
          className={`${
            mode ? "bg-black" : "bg-white"
          } flex flex-col w-[75%] max-lg:w-full h-fit max-sm:h-fit sm:rounded-xl sm:shadow-lg`}
        >
          <div
            className={`flex max-sm:flex-col h-[55vh] max-sm:h-[100vh] justify-evenly backdrop-blur-xl items-center w-full relative`}
          >
            <div className="flex flex-col justify-around max-sm:h-[70%] h-full w-full max-sm:px-10 items-center ">
              <img
                className={`object-cover w-full sm:h-full rounded-t-xl max-sm:rounded-xl`}
                src={nowPlaying.thumbnail}
                alt="thumbnail"
              ></img>
              <div className=" sm:hidden flex flex-col gap-2 justify-center items-center w-[90%]">
                <p className=" whitespace-nowrap animate-scrollText ">
                  {nowPlaying.title}
                </p>
                <p>{nowPlaying.artist}</p>
              </div>
            </div>
            <div className="hidden flex-col justify-around max-sm:h-[80%] max-sm:px-8 items-center ">
              <p>Hello</p>
            </div>
            {/* adding a audio player component from react-h5-audio-player */}
            <div className="flex sm:absolute bottom-3 w-full sm:px-3">
              <div className="flex max-sm:flex-col w-full px-2 sm:backdrop-blur-3xl items-center max-sm:bottom-24 rounded-md sm:shadow-lg max-sm:fixed">
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
          </div>
          {/* user information */}
          <div className="sm:h-full flex flex-col w-full sm:p-6 px-6 sm:px-12 gap-5 ">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 justify-center items-center">
                <div className="flex w-10 h-10 rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={nowPlaying.thumbnail}
                  ></img>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-md font-bold">{nowPlaying.artist}</p>
                  <p className="text-xs text-gray-600">Followers </p>
                </div>
              </div>
              <div className="bg-blue-600 p-1 px-4 rounded-md text-white cursor-pointer hover:bg-blue-500">
                Follow
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                {nowPlaying?.tags.map((item, idx) => (
                  <p className="text-blue-600 font-bold text-sm" key={idx}>
                    #{item}
                  </p>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold cursor-pointer hover:text-gray-600 hover:underline">
                  {nowPlaying.title} , {nowPlaying.artist}
                </p>
                <div className="flex gap-4 items-center">
                  <i className="ri-thumb-up-line text-2xl text-blue-600 cursor-pointer hover:font-bold"></i>
                  <p className=" text-blue-600 font-bold">{nowPlaying.likes}</p>
                  <p>|</p>
                  <i className="ri-thumb-down-line text-2xl cursor-pointer hover:font-bold"></i>
                </div>
              </div>
              <p className="text-sm">
                <i className="ri-eye-line"></i> {nowPlaying.views}
              </p>
              <p className="text-sm">{nowPlaying.about}</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            mode ? "bg-black " : "bg-white"
          } flex flex-col w-[25%] max-lg:w-full h-fit rounded-xl shadow-lg p-2`}
        >
          {/* Top recommendation div */}
          <div className="flex flex-col h-[40vh] w-full p-4 gap-3">
            <p className="font-bold">Top recommendations</p>
            <img
              className=" h-[55%] object-cover rounded-md"
              src={topRecommended.thumbnail}
              alt="thumbnail"
            ></img>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col  w-full px-2">
                <p className="font-bold">{topRecommended.title}</p>
                <p className="text-sm text-gray-600">{topRecommended.artist}</p>
                <p className="text-xs text-gray-600 flex gap-2">
                  <i className="ri-eye-line"></i>
                  {topRecommended.views}
                </p>
              </div>
              <div className="flex">
                <i
                  className={`${
                    JSON.stringify(nowPlaying) ===
                      JSON.stringify(topRecommended) && !playerPaused
                      ? "ri-pause-circle-fill"
                      : "ri-play-circle-fill"
                  }  text-3xl hover:text-gray-700 cursor-pointer`}
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
          <div className="flex flex-col gap-3 p-4">
            <div className="flex justify-between">
              <p>Recommendations</p>
              <i className="ri-more-fill cursor-pointer"></i>
            </div>
            <hr></hr>
            {/* tags for recommendation  */}
            <div className="flex max-h-[9vh] gap-2 flex-wrap overflow-hidden">
              {nowPlaying?.tags.map((item, idx) => (
                <p
                  className="p-1 px-2 border border-black text-xs rounded-xl hover:bg-gray-200"
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>
            <hr></hr>
            {/* recommended podcasts */}
            <div className="w-full h-fit flex flex-col gap-2 justify-center items-center">
              {recommendations?.slice(0, 4).map((item, idx) => (
                <div
                  className="flex w-full p-2 gap-3  hover:bg-gray-50 rounded-md"
                  key={idx}
                >
                  <div
                    className="flex w-[30%] h-full cursor-pointer"
                    onClick={() => {
                      setNowPlaying(item);
                      player.current.audio.current.play();
                    }}
                  >
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={item.thumbnail}
                    ></img>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p className="text-xs font-bold">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.artist}</p>
                    <p className="text-xs text-gray-600 flex gap-1">
                      <i className="ri-eye-line"></i>
                      {item.views}
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
