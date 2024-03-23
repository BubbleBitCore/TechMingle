import song from "../assets/songs/random.mp3";
import believer from "../assets/songs/believer.mp3";
import carnival from "../assets/songs/carnival.mp3";
import despacito from "../assets/songs/despacito.mp3";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useEffect, useRef } from "react";
import { formatNumber } from "../utils/conversion";
import SkeletonPopularPodcast from "../components/Podcast/SkeletonPopularPodcast";
import SkeletonTrendingPodcast from "../components/Podcast/SkeletonTrendingPodcast";
import SkeletonPopularCategory from "../components/Podcast/SkeletonPopularCategory";
import SkeletonList from "../components/Podcast/SkeletonList";

const Podcasts = ({ Header }) => {
  const popularPodcastStatus = "";
  const trendingPodcastStatus = "";
  const nowPlayingStatus = "";
  const trendingthisWeekStatus = "";
  const popularPodcastcategoryStatus = "";
  const popularPodcastersStatus = "";
  const recentFavouriteStatus = "";
  const mode = useSelector((state) => state.common.mode);
  const [trendingPodcastIdx, setTrendingPodcastIdx] = useState([0, 1, 2]);
  const [popularPodcastIdx, setPopularPodcastIdx] = useState([0, 1, 2]);
  const [popularPodcastcategoryIdx, setPopularPodcastcategoryIdx] = useState([
    0, 1, 2, 3, 4,
  ]);
  const player = useRef();
  let [playerPaused, setPlayerPaused] = useState(false);

  // dummy song which currently being played
  const [nowPlaying, setNowPlaying] = useState({
    title: "Spiritual Awakening",
    artist: "Dr. Erin Fall Haskell",
    thumbnail: img1,
    duration: 50, //in minutes
    audio: despacito,
  });

  // top 1 trending podcast in the week
  const trendingThisWeek = {
    title: "Good Life project",
    artist: "Elizabeth",
    thumbnail: img2,
    duration: 50, //in minutes
    audio: song,
  };

  const popularPodcastcategory = [
    "All",
    "Exclusive",
    "News & Politics",
    "Music",
    "Business",
    "health",
    "Exclusive",
  ];

  const popularcategories = [
    {
      name: "Buisness",
      icon: "fa-regular fa-clock",
      count: 190,
    },
    {
      name: "Music",
      icon: "fa-solid fa-headphones",
      count: 1900,
    },
    {
      name: "Education",
      icon: "fa-solid fa-book",
      count: 190,
    },
    {
      name: "Hapiness",
      icon: "fa-regular fa-face-smile",
      count: 190,
    },
    {
      name: "Buisness",
      icon: "fa-regular fa-clock",
      count: 190,
    },
    {
      name: "Music",
      icon: "fa-solid fa-headphones",
      count: 190,
    },
    {
      name: "Education",
      icon: "fa-solid fa-book",
      count: 190,
    },
  ];

  const popularPodcasters = [
    {
      name: "John Doe",
      profileurl: img1,
      followers: 1234,
    },
    {
      name: "Micheal John",
      profileurl: img2,
      followers: 1226,
    },
  ];

  const PopularPodcasts = [
    {
      title: "How to face big decisions 1",
      artist: "TOM HEART 1",
      duration: " 1hr 11 min",
      thumbnail: img1,
      audio: despacito,
      category: "Exclusive",
    },
    {
      title: "How to face big decisions 2",
      artist: "TOM HEART 2",
      duration: " 1hr 12 min",
      thumbnail: img2,
      audio: believer,
      category: "Exclusive",
    },
    {
      title: "How to face big decisions 3",
      artist: "TOM HEART 3",
      duration: " 1hr 13 min",
      thumbnail: img3,
      audio: carnival,
      category: "News & Politics",
    },
    {
      title: "How to face big decisions 4",
      artist: "TOM HEART 4",
      duration: " 1hr 14 min",
      thumbnail: img1,
      audio: despacito,
      category: "Music",
    },
    {
      title: "How to face big decisions 5",
      artist: "TOM HEART 5",
      duration: " 1hr 15 min",
      thumbnail: img2,
      audio: believer,
      category: "other",
    },
    {
      title: "How to face big decisions 6",
      artist: "TOM HEART 6",
      duration: " 1hr 16 min",
      thumbnail: img3,
      audio: carnival,
      category: "Music",
    },
  ];

  const recentlyPlayed = [
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: despacito,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: carnival,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: believer,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: despacito,
    },
  ];

  const favourites = [
    {
      title: "despacito",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: carnival,
    },
    {
      title: "believer",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: despacito,
    },
    {
      title: "carnival",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: believer,
    },
    {
      title: "despacito",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: carnival,
    },
    {
      title: "believer",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: despacito,
    },
  ];

  const trendingPodcasts = [
    {
      title: "How to face big decisions1",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: carnival,
      category: "Inspiration",
    },
    {
      title: "How to face big decisions2",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: despacito,
      category: "Teach",
    },
    {
      title: "How to face big decisions3",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: believer,
      category: "Culture",
    },
    {
      title: "How to face big decisions4",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: carnival,
      category: "Teach",
    },
    {
      title: "How to face big decisions5",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: despacito,
      category: "Teach",
    },
    {
      title: "How to face big decisions6",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: believer,
      category: "Teach",
    },
  ];

  // list to display on use selection of tab
  const [tabList, setTabList] = useState(recentlyPlayed);
  const [selectedtab, setSelectedtab] = useState("recentlyPlayed");

  useEffect(() => {
    if (selectedtab === "myFavourites") {
      setTabList(favourites);
    } else {
      setTabList(recentlyPlayed);
    }
  }, [selectedtab]);

  const trendingPodcastCategory = [
    "Inspiration",
    "Drama",
    "Culture",
    "Teach",
    "Crime",
    "fashion",
  ];

  // user category selection in popular podcast & trending podcast
  const [selectedPopularPodcastCategory, setSelectedPopularPodcastCategory] =
    useState(popularPodcastcategory[0]);
  const [selectedTrendingPodcastCategory, setSelectedTrendingPodcastCategory] =
    useState(trendingPodcastCategory[0]);

  // created list based on user selection in popular podcast & trending podcast
  const [selectedPopularPodcastList, setSelectedPopularPodcastList] =
    useState(PopularPodcasts);
  const [selectedTrendingPodcastList, setSelectedTrendingPodcastList] =
    useState(trendingPodcasts);

  const containerStyle = mode
    ? { backgroundColor: "black", transition: "all 0.5s ease" }
    : {};

  // functions for carousel
  const updateIdxLeft = (arr, list) => {
    let updatedIdx = arr;
    if (list.length > 2) {
      if (arr[0] === 0) {
        return;
      } else {
        updatedIdx = arr.map((idx) => idx - 1);
      }

      if (
        JSON.stringify(list) === JSON.stringify(selectedTrendingPodcastList)
      ) {
        setTrendingPodcastIdx(updatedIdx);
      } else if (
        JSON.stringify(list) === JSON.stringify(selectedPopularPodcastList)
      ) {
        setPopularPodcastIdx(updatedIdx);
      } else if (
        JSON.stringify(list) === JSON.stringify(popularPodcastcategory)
      ) {
        setPopularPodcastcategoryIdx(updatedIdx);
      }
    }
  };
  const updateIdxRight = (arr, list) => {
    let updatedIdx = arr;
    if (list.length > 2) {
      if (arr[arr.length - 1] === list.length - 1) {
        return;
      } else {
        updatedIdx = arr.map((idx) => idx + 1);
      }
      if (
        JSON.stringify(list) === JSON.stringify(selectedTrendingPodcastList)
      ) {
        setTrendingPodcastIdx(updatedIdx);
      } else if (
        JSON.stringify(list) === JSON.stringify(selectedPopularPodcastList)
      ) {
        setPopularPodcastIdx(updatedIdx);
      } else if (
        JSON.stringify(list) === JSON.stringify(popularPodcastcategory)
      ) {
        setPopularPodcastcategoryIdx(updatedIdx);
      }
    }
  };

  useEffect(() => {
    let list;
    if (selectedPopularPodcastCategory === "All") {
      list = PopularPodcasts;
    } else {
      list = PopularPodcasts.filter(
        (prev) => prev.category === selectedPopularPodcastCategory
      );
    }

    setSelectedPopularPodcastList(list);
  }, [selectedPopularPodcastCategory]);

  useEffect(() => {
    if (selectedPopularPodcastList) {
      let idxArray = [];
      if (selectedPopularPodcastList.length === 1) {
        idxArray = [0];
      } else if (selectedPopularPodcastList.length === 2) {
        idxArray = [0, 1];
      } else {
        idxArray = [0, 1, 2];
      }
      setPopularPodcastIdx(idxArray);
    }
  }, [selectedPopularPodcastList]);

  useEffect(() => {
    let list = trendingPodcasts.filter(
      (prev) => prev.category === selectedTrendingPodcastCategory
    );
    setSelectedTrendingPodcastList(list);
  }, [selectedTrendingPodcastCategory]);

  useEffect(() => {
    if (selectedTrendingPodcastList.length > 0) {
      let idxArray = [];
      if (selectedTrendingPodcastList.length === 1) {
        idxArray = [0];
      } else if (selectedTrendingPodcastList.length === 2) {
        idxArray = [0, 1];
      } else {
        idxArray = [0, 1, 2];
      }
      setTrendingPodcastIdx(idxArray);
    }
  }, [selectedTrendingPodcastList]);

  return (
    <div className="flex flex-col h-full w-full pr-8 max-sm:px-4 select-none ">
      <Header urlName="Podcast" />
      <style>{`/* Audio component styles */
.rhap_container {
  box-shadow: 0 0 0 0 !important;
}
.rhap_progress-indicator {
  background-color: white !important;
  width: 18px !important;
  height: 18px !important;
  border: 4px solid rgb(48, 46, 46);
}
.rhap_progress-filled {
  background-color: rgb(48, 46, 46) !important;
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

.rhap_container .dark {
  background-color: transparent !important;
}
#rhap_current-time {
  color: gray;
}
.rhap_total-time {
  color: gray !important;
}`}</style>
      <div
        className={`flex h-full w-full sm:px-4 ${
          mode ? "bg-zinc-950" : "bg-gray-50"
        } rounded-xl overflow-y-auto transition-all duration-500 max-sm:relative`}
      >
        <div className="flex max-lg:h-auto  max-xl:flex-col h-full w-full 2xl:gap-12 gap-6 p-4 max-sm:p-2 max-sm:px-0 rounded-xl overflow-y-auto ">
          {/* left section */}
          <div className="flex flex-col gap-6 w-3/4 max-xl:w-full  ">
            {/* Trending this week div */}
            <div className="flex max-sm:flex-col sm:h-2/5 gap-6 w-full ">
              <div
                className={`${
                  mode ? " bg-black" : "bg-white"
                } flex flex-col gap-4 w-1/4 max-sm:w-full rounded-xl shadow-lg  p-4 transition-all duration-500`}
              >
                <p
                  className={`${
                    mode ? "text-white" : "text-black"
                  } text-sm font-bold select-none transition-all duration-500`}
                >
                  Trending this week
                </p>
                <div className="h-full w-full flex items-center rounded-xl">
                  {trendingthisWeekStatus === "loading" ? (
                    <div className="w-full h-full flex">
                      {new Array(1).fill(0).map((_, key) => (
                        <SkeletonTrendingPodcast key={key} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1 max-sm:w-full cursor-pointer">
                      <div className="flex w-full h-[95%] max-sm:min-h-48 relative ">
                        <img
                          className="w-full h-full rounded-xl object-cover"
                          src={trendingThisWeek.thumbnail}
                          alt={trendingThisWeek.title}
                        />
                        <div className="flex absolute  bg-gray-50 right-2 text-xs rounded-md px-2 top-2">
                          {trendingThisWeek.duration} min
                        </div>
                        <i
                          className={` ${
                            JSON.stringify(nowPlaying) ==
                              JSON.stringify(trendingThisWeek) && !playerPaused
                              ? "ri-pause-mini-line font-bold"
                              : "ri-play-fill "
                          } flex   text-black absolute text-xl bg-white hover:bg-gray-200 transition-all px-2 p-1 rounded-full right-4 bottom-2 cursor-pointer`}
                          onClick={() => {
                            if (
                              JSON.stringify(nowPlaying) ==
                              JSON.stringify(trendingThisWeek)
                            ) {
                              if (playerPaused) {
                                player.current.audio.current.play();
                                setPlayerPaused(false);
                              } else {
                                player.current.audio.current.pause();
                                setPlayerPaused(true);
                              }
                            } else {
                              setNowPlaying(trendingThisWeek);
                              player.current.audio.current.play();
                              setPlayerPaused(false);
                            }
                          }}
                        ></i>
                        <div className="flex flex-col absolute bottom-2 left-2 sm:text-xs text-white">
                          <p className="font-bold text-sm">
                            {trendingThisWeek.title}
                          </p>
                          <p>{trendingThisWeek.artist}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Trending podcast category wise */}
              <div
                className={`${
                  mode ? "bg-black text-white" : "bg-white"
                } flex flex-col w-full max-sm:h-fit sm:w-3/4 gap-4 rounded-xl shadow-lg  p-4 transition-all duration-500`}
              >
                <div className="flex w-full justify-between ">
                  <div className="flex gap-4 items-center max-sm:justify-between max-sm:w-full">
                    <p className="text-sm font-bold select-none">
                      Trending podcast in
                    </p>
                    <select
                      className={`${
                        mode ? "bg-black" : "bg-white"
                      }  border-none outline-none text-sm cursor-pointer transition-all duration-500`}
                      name="category"
                      onChange={(e) => {
                        setSelectedTrendingPodcastCategory(e.target.value);
                      }}
                    >
                      {trendingPodcastCategory?.map((item, idx) => (
                        <option value={item} key={idx} className="capitalize">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="max-sm:hidden flex gap-2 items-center">
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      }  rounded-md h-6 w-6 flex items-center justify-center transition-all duration-500`}
                    >
                      <i
                        className={` ri-arrow-drop-left-line text-3xl cursor-pointer `}
                        onClick={() => {
                          updateIdxLeft(
                            trendingPodcastIdx,
                            selectedTrendingPodcastList
                          );
                        }}
                      ></i>
                    </div>
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center transition-all duration-500`}
                    >
                      <i
                        className="ri-arrow-drop-right-line text-3xl cursor-pointer"
                        onClick={() => {
                          updateIdxRight(
                            trendingPodcastIdx,
                            selectedTrendingPodcastList
                          );
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="flex w-full max-sm:gap-4 gap-6 rounded-md px-2 max-sm:px-0 overflow-x-hidden max-sm:overflow-x-scroll snap-mandatory snap-x">
                  {trendingPodcastStatus === "loading" ? (
                    <div className="max-sm:hidden w-full h-full gap-8 py-1 flex justify-between items-center">
                      {new Array(3).fill(0).map((_, key) => (
                        <SkeletonTrendingPodcast key={key} />
                      ))}
                    </div>
                  ) : selectedTrendingPodcastList?.length > 0 ? (
                    trendingPodcastIdx?.map((idx) => (
                      <div
                        className=" cursor-pointer max-sm:min-h-48 max-sm:hidden flex flex-col gap-1 w-1/3 max-sm:py-2 max-sm:min-w-full"
                        key={idx}
                      >
                        {selectedTrendingPodcastList[idx] && (
                          <div className="flex w-full h-2/3 max-sm:h-full relative">
                            <img
                              className="w-full h-full rounded-xl object-cover"
                              src={selectedTrendingPodcastList[idx].thumbnail}
                              alt={selectedTrendingPodcastList[idx].title}
                            />
                            <i
                              className={`${
                                mode ? "text-black " : "bg-gray-50 "
                              } flex ri-heart-line absolute  rounded-full px-1 right-2 top-2 hover:bg-red-400 cursor-pointer transition-all duration-500`}
                            ></i>
                            <i
                              className={`${
                                JSON.stringify(nowPlaying) ==
                                  JSON.stringify(
                                    selectedTrendingPodcastList[idx]
                                  ) && !playerPaused
                                  ? "ri-pause-mini-line font-bold"
                                  : "ri-play-fill "
                              } flex text-white absolute hover:bg-zinc-800 lg:text-xl md:text-xs  bg-black px-2 p-1 rounded-full right-2 bottom-2 cursor-pointer`}
                              onClick={() => {
                                if (
                                  JSON.stringify(nowPlaying) ==
                                  JSON.stringify(
                                    selectedTrendingPodcastList[idx]
                                  )
                                ) {
                                  if (playerPaused) {
                                    player.current.audio.current.play();
                                    setPlayerPaused(false);
                                  } else {
                                    player.current.audio.current.pause();
                                    setPlayerPaused(true);
                                  }
                                } else {
                                  setNowPlaying(
                                    selectedTrendingPodcastList[idx]
                                  );
                                  player.current.audio.current.play();
                                  setPlayerPaused(false);
                                }
                              }}
                            ></i>
                          </div>
                        )}
                        {selectedTrendingPodcastList[idx] && (
                          <p className="text-xs font-bold ">
                            {selectedTrendingPodcastList[idx].title}
                          </p>
                        )}

                        {selectedTrendingPodcastList[idx] && (
                          <div
                            className={`  ${
                              mode ? "text-zinc-600" : "text-gray-500"
                            } flex justify-between items-center text-xs font-bold `}
                          >
                            <p>{selectedTrendingPodcastList[idx].artist}</p>
                            <span>
                              <i className="ri-time-fill"></i>
                              {selectedTrendingPodcastList[idx].duration}
                            </span>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="max-sm:hidden flex h-full w-full p-20 justify-center items-center">
                      <p
                        className={`${
                          mode ? "text-zinc-500" : "text-gray-500"
                        } text-xs text-zinc-500`}
                      >
                        No podcasts available
                      </p>
                    </div>
                  )}
                  {/* for mobile version we will display all podcast cards of particular category  */}
                  {trendingPodcastStatus === "loading" ? (
                    <div className="sm:hidden w-full h-full">
                      {new Array(1).fill(0).map((_, key) => (
                        <SkeletonTrendingPodcast key={key} />
                      ))}
                    </div>
                  ) : selectedTrendingPodcastList?.length > 0 ? (
                    selectedTrendingPodcastList.map((item, idx) => (
                      <div
                        className="sm:hidden max-sm:min-h-48 flex flex-col gap-1 w-1/3 max-sm:py-2 max-sm:min-w-full snap-center"
                        key={idx}
                      >
                        {item && (
                          <div className="flex w-full h-2/3 max-sm:h-full relative">
                            <img
                              className="w-full h-full rounded-xl object-cover"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                            <i
                              className={`${
                                mode ? "text-black " : "bg-gray-50 "
                              } flex ri-heart-line absolute  rounded-full px-1 right-2 top-2 hover:bg-red-400 cursor-pointer transition-all duration-500`}
                            ></i>
                            <i
                              className={`${
                                JSON.stringify(nowPlaying) ==
                                  JSON.stringify(item) && !playerPaused
                                  ? "ri-pause-mini-line font-bold"
                                  : "ri-play-fill "
                              } flex text-white absolute lg:text-xl md:text-xs  bg-black px-2 p-1 rounded-full right-2 bottom-2 cursor-pointer`}
                              onClick={() => {
                                if (
                                  JSON.stringify(nowPlaying) ==
                                  JSON.stringify(item)
                                ) {
                                  if (playerPaused) {
                                    player.current.audio.current.play();
                                    setPlayerPaused(false);
                                  } else {
                                    player.current.audio.current.pause();
                                    setPlayerPaused(true);
                                  }
                                } else {
                                  setNowPlaying(item);
                                  player.current.audio.current.play();
                                  setPlayerPaused(false);
                                }
                              }}
                            ></i>
                          </div>
                        )}
                        {item && (
                          <p className="text-xs font-bold ">{item.title}</p>
                        )}

                        {item && (
                          <div
                            className={`  ${
                              mode ? "text-zinc-600" : "text-gray-500"
                            } flex justify-between items-center text-xs font-bold `}
                          >
                            <p>{item.artist}</p>
                            <span>
                              <i className="ri-time-fill"></i>
                              {item.duration}
                            </span>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="sm:hidden flex h-full w-full  py-[100px] justify-center items-center">
                      <p
                        className={`${
                          mode ? "text-zinc-500" : "text-gray-500"
                        } text-xs text-zinc-500`}
                      >
                        No podcasts available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${
                mode ? "bg-black text-white" : "bg-white"
              } flex flex-col max-lg:h-auto sm:px-6 p-4 max-sm:h-3/5 w-full rounded-xl shadow-lg transition-all duration-500`}
            >
              {/* Popular podcasts section */}
              <div className="flex flex-col gap-2 h-1/2 max-lg:h-auto w-full pb-2">
                <div className="flex w-full items-center justify-between">
                  <div className="flex sm:gap-4 max-sm:justify-between max-sm:w-full">
                    <p className="text-sm font-bold select-none">
                      Popular podcasts
                    </p>
                    <select
                      onChange={(e) => {
                        setSelectedPopularPodcastCategory(e.target.value);
                      }}
                      className={` ${
                        mode ? "bg-black text-white " : "bg-white text-gray-500"
                      }  text-xs outline-none lg:hidden  font-bold transition-all duration-500`}
                      name="category"
                    >
                      {popularPodcastcategory?.length > 0 ? (
                        popularPodcastcategory.slice(0, 6).map((item, idx) => (
                          <option value={item} key={idx} className="capitalize">
                            {item}
                          </option>
                        ))
                      ) : (
                        <p>No categories found</p>
                      )}
                    </select>
                  </div>

                  <div className="flex max-lg:hidden gap-4 justify-between text-sm text-gray-500 font-bold w-[45%]">
                    {popularPodcastcategoryIdx[0] > 0 ? (
                      <div
                        className={`${
                          mode
                            ? "bg-black hover:bg-zinc-900"
                            : "hover:bg-gray-200"
                        } rounded-md h-5 w-5 ml-[-30px] flex items-center justify-center transition-all duration-500`}
                      >
                        <i
                          className="ri-arrow-drop-left-fill  text-xl cursor-pointer"
                          onClick={() => {
                            updateIdxLeft(
                              popularPodcastcategoryIdx,
                              popularPodcastcategory
                            );
                          }}
                        ></i>
                      </div>
                    ) : null}
                    <div className="flex min-w-full justify-between ">
                      {popularPodcastcategory?.length > 0 ? (
                        popularPodcastcategoryIdx.slice(0, 5).map((idx) => (
                          <p
                            className={`${
                              selectedPopularPodcastCategory ===
                              popularPodcastcategory[idx]
                                ? mode
                                  ? "text-zinc-200 border-zinc-200 hover:text-zinc-200 "
                                  : "text-gray-900 border-gray-900 hover:text-gray-900"
                                : mode
                                ? " hover:text-zinc-300 border-transparent text-zinc-500 "
                                : "hover:text-gray-800 border-transparent text-gray-500"
                            } select-none cursor-pointer border-b-2 transition-all duration-200 capitalize`}
                            key={idx}
                            onClick={() => {
                              setSelectedPopularPodcastCategory(
                                popularPodcastcategory[idx]
                              );
                            }}
                          >
                            {popularPodcastcategory[idx]}
                          </p>
                        ))
                      ) : (
                        <p>No categories found</p>
                      )}
                    </div>

                    {popularPodcastcategoryIdx[4] <
                    popularPodcastcategory.length - 1 ? (
                      <div
                        className={`${
                          mode
                            ? "bg-black hover:bg-zinc-900"
                            : " hover:bg-gray-200"
                        } rounded-md h-5 w-5 flex items-center justify-center cursor-pointer transition-all duration-500 `}
                      >
                        <i
                          className="ri-arrow-drop-right-fill text-xl"
                          onClick={() => {
                            updateIdxRight(
                              popularPodcastcategoryIdx,
                              popularPodcastcategory
                            );
                          }}
                        ></i>
                      </div>
                    ) : null}
                  </div>

                  <div className="max-sm:hidden flex gap-2 items-center">
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center transition-all duration-500`}
                    >
                      <i
                        className="ri-arrow-drop-left-line text-3xl cursor-pointer"
                        onClick={() => {
                          updateIdxLeft(
                            popularPodcastIdx,
                            selectedPopularPodcastList
                          );
                        }}
                      ></i>
                    </div>
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center cursor-pointer transition-all duration-500 `}
                    >
                      <i
                        className="ri-arrow-drop-right-line text-3xl"
                        onClick={() => {
                          updateIdxRight(
                            popularPodcastIdx,
                            selectedPopularPodcastList
                          );
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full  gap-4 rounded-md justify-start items-center max-sm:overflow-x-scroll snap-mandatory snap-x">
                  {popularPodcastStatus === "loading" ? (
                    <div className="max-sm:hidden w-full h-full flex justify-between items-center">
                      {new Array(3).fill(0).map((_, key) => (
                        <SkeletonPopularPodcast key={key} />
                      ))}
                    </div>
                  ) : selectedPopularPodcastList?.length > 0 ? (
                    popularPodcastIdx.map((idx) => (
                      <div
                        className=" cursor-pointer max-sm:hidden flex h-full  max-lg:flex-col w-1/3 justify-center lg:items-center gap-3 max-sm:min-w-full overflow-hidden "
                        key={idx}
                      >
                        <div className="max-lg:w-full max-lg:pr-4  max-sm:pr-0">
                          {selectedPopularPodcastList[idx] && ( // Check if selectedPopularPodcastList[idx] is defined
                            <img
                              className=" w-20 h-20 max-sm:h-40 max-lg:w-full object-cover rounded-xl"
                              src={selectedPopularPodcastList[idx].thumbnail}
                              alt={selectedPopularPodcastList[idx].title}
                            />
                          )}
                        </div>
                        {selectedPopularPodcastList[idx] && ( // Check if selectedPopularPodcastList[idx] is defined
                          <div className="flex flex-col pt-2 gap-2">
                            <p className="text-xs font-bold">
                              {selectedPopularPodcastList[idx].title}
                            </p>
                            <p
                              className={`${
                                mode ? "text-zinc-600" : "text-gray-400"
                              } text-xs font-bold`}
                            >
                              {selectedPopularPodcastList[idx].artist}
                            </p>
                            <div
                              className={`${
                                mode
                                  ? "bg-zinc-900 hover:bg-zinc-800"
                                  : "bg-gray-100 hover:bg-gray-200"
                              } flex justify-center items-center px-2 gap-2 rounded-md mb-2 text-xs w-fit transition-all duration-500`}
                            >
                              <i
                                className={`${
                                  JSON.stringify(nowPlaying) ===
                                    JSON.stringify(
                                      selectedPopularPodcastList[idx]
                                    ) && !playerPaused
                                    ? " ri-pause-circle-line "
                                    : " ri-play-circle-line "
                                } text-2xl cursor-pointer`}
                                onClick={() => {
                                  if (
                                    JSON.stringify(nowPlaying) ===
                                    JSON.stringify(
                                      selectedPopularPodcastList[idx]
                                    )
                                  ) {
                                    if (playerPaused) {
                                      player.current.audio.current.play();
                                      setPlayerPaused(false);
                                    } else {
                                      player.current.audio.current.pause();
                                      setPlayerPaused(true);
                                    }
                                  } else {
                                    setNowPlaying(
                                      selectedPopularPodcastList[idx]
                                    );
                                    player.current.audio.current.play();
                                    setPlayerPaused(false);
                                  }
                                }}
                              ></i>
                              {selectedPopularPodcastList[idx].duration}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="max-sm:hidden flex h-full w-full p-[38px] justify-center items-center">
                      <p
                        className={`${
                          mode ? "text-zinc-500" : "text-gray-500"
                        } text-xs text-zinc-500`}
                      >
                        No podcasts available
                      </p>
                    </div>
                  )}

                  {/* for mobile version we will display all podcast cards of particular category  */}
                  {popularPodcastStatus === "loading" ? (
                    <div className="w-full h-full sm:hidden">
                      {new Array(1).fill(0).map((_, key) => (
                        <SkeletonPopularPodcast key={key} />
                      ))}
                    </div>
                  ) : selectedPopularPodcastList?.length > 0 ? (
                    selectedPopularPodcastList.map((item, idx) => (
                      <div
                        className="sm:hidden flex h-full max-sm:min-h-48  max-lg:flex-col w-1/3 justify-center lg:items-center gap-3 max-sm:min-w-full overflow-hidden snap-center "
                        key={idx}
                      >
                        <div className="max-lg:w-full max-lg:pr-4  max-sm:pr-0">
                          {item && ( // Check if selectedPopularPodcastList[idx] is defined
                            <img
                              className=" w-20 h-20 max-sm:h-40 max-lg:w-full object-cover rounded-xl"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                          )}
                        </div>
                        {item && ( // Check if selectedPopularPodcastList[idx] is defined
                          <div className="flex flex-col pt-2 gap-2">
                            <p className="text-xs font-bold">{item.title}</p>
                            <p
                              className={`${
                                mode ? "text-zinc-600" : "text-gray-400"
                              } text-xs font-bold`}
                            >
                              {item.artist}
                            </p>
                            <div
                              className={`${
                                mode
                                  ? "bg-zinc-900 hover:bg-zinc-800"
                                  : "bg-gray-100 hover:bg-gray-200"
                              } flex justify-center items-center px-2 gap-2 rounded-md mb-2 text-xs w-fit transition-all duration-500`}
                            >
                              <i
                                className={`${
                                  JSON.stringify(nowPlaying) ===
                                    JSON.stringify(item) && !playerPaused
                                    ? " ri-pause-circle-line "
                                    : " ri-play-circle-line "
                                } text-2xl cursor-pointer`}
                                onClick={() => {
                                  if (
                                    JSON.stringify(nowPlaying) ===
                                    JSON.stringify(item)
                                  ) {
                                    if (playerPaused) {
                                      player.current.audio.current.play();
                                      setPlayerPaused(false);
                                    } else {
                                      player.current.audio.current.pause();
                                      setPlayerPaused(true);
                                    }
                                  } else {
                                    setNowPlaying(item);
                                    player.current.audio.current.play();
                                    setPlayerPaused(false);
                                  }
                                }}
                              ></i>
                              {item.duration}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="sm:hidden flex h-full w-full  py-[100px] justify-center items-center">
                      <p
                        className={`${
                          mode ? "text-zinc-500" : "text-gray-500"
                        } text-xs text-zinc-500`}
                      >
                        No podcasts available
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <hr
                className={`${
                  mode ? "border-zinc-900" : "border-gray-100"
                } border transition-all duration-500`}
              ></hr>
              {/* Popular podcasts category section */}
              <div className="flex max-sm:flex-col h-1/2 max-lg:h-auto gap-12 w-full sm:p-4 max-sm:py-4">
                <div className="flex flex-col w-2/3 max-lg:w-1/2 max-sm:w-full gap-4 max-lg:h-auto">
                  <p className="text-sm font-bold  select-none ">
                    Popular categories
                  </p>
                  <div
                    className={` flex max-lg:flex-wrap max-sm:flex-nowrap gap-3 max-sm:gap-8 sm:justify-between items-center h-full max-lg:h-fit  max-sm:overflow-x-scroll py-2`}
                  >
                    {popularPodcastcategoryStatus === "loading" ? (
                      <div className="flex gap-8 h-full w-full max-sm:hidden overflow-x-auto justify-between items-center">
                        {new Array(6).fill(0).map((_, key) => (
                          <SkeletonPopularCategory key={key} />
                        ))}
                      </div>
                    ) : popularcategories ? (
                      popularcategories.length > 6 ? (
                        popularcategories.slice(0, 5).map((item, idx) => (
                          <div
                            className={`max-sm:hidden relative flex flex-col items-center justify-center gap-2`}
                            key={idx}
                          >
                            <div
                              className={`${
                                mode
                                  ? "bg-zinc-900 hover:bg-zinc-800"
                                  : "bg-cyan-50 hover:bg-cyan-100"
                              }  p-2 rounded-md select-none transition-all duration-500`}
                            >
                              <i
                                className={`${item.icon} ${
                                  mode
                                    ? "text-zinc-300 font-bold hover:text-zinc-100 "
                                    : "text-black bg-cyan-50 hover:bg-cyan-100"
                                } px-2 rounded-md text-2xl cursor-pointer transition-all duration-500`}
                              ></i>
                            </div>
                            <div
                              className={`${
                                mode
                                  ? "bg-blue-700 border-blue-600"
                                  : "bg-red-500 border-red-500 text-white"
                              }  border flex items-center justify-center rounded-full p-[0.18rem] absolute mt-[-70px] mr-[-55px]`}
                            >
                              <p className={` text-[8px]`}>
                                {formatNumber(item.count)}
                              </p>
                            </div>
                            <p className="text-xs font-bold">{item.name}</p>
                            {/* <p
                              className={`${
                                mode ? "text-zinc-700" : "text-gray-400"
                              } text-xs font-bold  `}
                            >
                              {item.count} Podcats
                            </p> */}
                          </div>
                        ))
                      ) : (
                        popularcategories.slice(0, 6).map((item, idx) => (
                          <div
                            className={`max-sm:hidden flex flex-col items-center justify-center gap-1`}
                            key={idx}
                          >
                            <div
                              className={`${
                                mode
                                  ? "bg-zinc-900 hover:bg-zinc-800"
                                  : "bg-cyan-50 hover:bg-cyan-100"
                              }  p-2 px-4 rounded-md select-none transition-all duration-500`}
                            >
                              <i
                                className={`${item.icon} ${
                                  mode
                                    ? "text-zinc-300 font-bold hover:text-zinc-100 "
                                    : "text-black bg-white "
                                } px-1 rounded-md text-lg cursor-pointer transition-all duration-500`}
                              ></i>
                            </div>
                            <p className="text-xs font-bold">{item.name}</p>
                            <p
                              className={`${
                                mode ? "text-zinc-700" : "text-gray-400"
                              } text-xs font-bold  `}
                            >
                              {item.count} Podcats
                            </p>
                          </div>
                        ))
                      )
                    ) : (
                      <p>No popular category</p>
                    )}

                    {popularPodcastcategoryStatus === "loading" ? (
                      <div className="flex justify-between gap-2 h-full w-full sm:hidden ">
                        {new Array(3).fill(0).map((_, key) => (
                          <SkeletonPopularCategory key={key} />
                        ))}
                      </div>
                    ) : (
                      popularcategories?.map((item, idx) => (
                        <div
                          className={`sm:hidden relative flex flex-col pt-3 items-center justify-center gap-1`}
                          key={idx}
                        >
                          <div
                            className={`${
                              mode
                                ? "bg-zinc-900 hover:bg-zinc-800"
                                : "bg-cyan-50 hover:bg-cyan-100"
                            }  p-3 rounded-md select-none transition-all duration-500`}
                          >
                            <i
                              className={`${item.icon} ${
                                mode
                                  ? "text-zinc-300 font-bold hover:text-zinc-100 "
                                  : "text-black bg-white "
                              } px-1 rounded-md text-2xl cursor-pointer transition-all duration-500`}
                            ></i>
                          </div>
                          <div
                            className={`${
                              mode
                                ? "bg-blue-500 border-blue-600"
                                : "bg-red-500 border-red-500 text-white"
                            }  border flex items-center justify-center rounded-full p-1 absolute mt-[-72px] mr-[-50px]`}
                          >
                            <p className={` text-[8px]`}>
                              {formatNumber(item.count)}
                            </p>
                          </div>
                          <p className="text-xs font-bold">{item.name}</p>
                        </div>
                      ))
                    )}
                    {popularPodcastcategoryStatus === "loading" ? (
                      <></>
                    ) : (
                      <div
                        className={`${
                          mode
                            ? "bg-zinc-900 hover:bg-zinc-800"
                            : "bg-gray-800 hover:bg-gray-700"
                        } ${
                          popularcategories.length > 6 ? "" : "hidden"
                        } max-sm:hidden flex flex-col  p-3 px-5 rounded-xl text-white font-bold text-xs items-center justify-center cursor-pointer transition-all duration-500`}
                      >
                        <p>show</p>
                        <p>all</p>
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    )}
                  </div>
                </div>
                {/* Popular podcasters section */}
                <div className="flex  flex-col w-1/3 max-lg:w-1/2 max-sm:w-full gap-4 ">
                  <p className="text-sm font-bold select-none">
                    Popular Podcasters
                  </p>
                  <div className="w-full h-full flex flex-col lg:justify-center">
                    {popularPodcastersStatus === "loading" ? (
                      new Array(2)
                        .fill(0)
                        .map((_, key) => <SkeletonList key={key} />)
                    ) : popularPodcasters?.length > 0 ? (
                      popularPodcasters.slice(0, 2).map((item, idx) => (
                        <div
                          className={`${
                            mode ? "hover:bg-zinc-900" : "hover:bg-gray-100"
                          } flex w-full justify-between lg:items-center select-none p-2 pr-3 rounded-md cursor-pointer`}
                          key={idx}
                        >
                          <div className="flex gap-2 items-center ">
                            <div className="w-7 h-7 flex bg-black rounded-full">
                              <img
                                className="w-7 h-7 object-cover rounded-full"
                                src={item.profileurl}
                                alt={`${item.name}'s profile`}
                              />
                            </div>
                            <p className="text-xs font-bold">{item.name}</p>
                          </div>
                          <div>
                            <p
                              className={`${
                                mode ? "text-zinc-600" : "text-gray-400"
                              } text-xs font-bold transition-all duration-500`}
                            >
                              {item.followers} followers
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No Podcaster found</p>
                    )}
                    <div
                      className={`${
                        mode
                          ? "bg-zinc-900 hover:bg-zinc-800"
                          : "bg-[color:var(--popular-podcast-category-icon)] hover:bg-[#b9f2f8]"
                      }  flex gap-2 items-center px-6 p-1 mt-1 text-xs w-fit self-center rounded-md cursor-pointer transition-all duration-500`}
                    >
                      <p>View More</p>{" "}
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="flex xl:flex-col max-sm:flex-col gap-6 w-1/4 max-xl:w-full ">
            {/* Now playing podcast section */}
            {nowPlayingStatus === "loading" ? (
              <div
                className={`${
                  mode ? "bg-black text-white" : "bg-white"
                } flex xl:h-1/2 max-xl:w-1/2 max-sm:w-full gap-2 rounded-xl shadow-lg p-4 transition-all duration-500`}
              >
                {new Array(1).fill(0).map((_, key) => (
                  <SkeletonTrendingPodcast key={key} />
                ))}
              </div>
            ) : (
              <div
                className={`${
                  mode ? "bg-black text-white" : "bg-white"
                } flex flex-col xl:h-1/2 max-xl:w-1/2 max-sm:w-full sm:gap-2 sm:rounded-xl sm:shadow-lg sm:p-2 max-sm:pt-2  justify-center items-center transition-all duration-500 max-sm:absolute max-sm:bottom-0`}
              >
                <p className="max-sm:hidden font-bold">Now playing</p>
                <div className="flex sm:flex-col gap-2 w-full h-1/2 mt-1 justify-center items-center sm:px-4">
                  <div className="w-3/4 max-sm:w-1/4 h-2/3 max-sm:h-full  cursor-pointer">
                    <img
                      className="w-full h-full rounded-lg object-cover"
                      src={nowPlaying.thumbnail}
                      alt=""
                    ></img>
                  </div>
                  <div className="flex flex-col w-full h-full max-sm:justify-between sm:justify-center sm:items-center">
                    <p className="text-md font-bold">{nowPlaying.title}</p>
                    <p className="text-sm">{nowPlaying.artist}</p>
                  </div>
                </div>

                <div className=" w-full ">
                  <AudioPlayer
                    src={nowPlaying.audio}
                    className={"shadow-none transition-all duration-500"}
                    style={containerStyle}
                    ref={player}
                    onPlay={() => {
                      setPlayerPaused(false);
                    }}
                    onPause={() => {
                      setPlayerPaused(true);
                    }}
                  />
                </div>
                {/* <div className="sm:hidden w-full ">
                  <AudioPlayer
                    layout="horizontal"
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    showJumpControls={false}
                    src={nowPlaying.audio}
                    className={"shadow-none transition-all duration-500"}
                    style={containerStyle}
                    ref={player}
                    onPlay={() => {
                      setPlayerPaused(false);
                    }}
                    onPause={() => {
                      setPlayerPaused(true);
                    }}
                  />
                </div> */}
              </div>
            )}

            {/* Recently played and wishlist section */}
            <div
              className={`${
                mode ? "bg-black text-white" : "bg-white"
              } flex flex-col xl:h-1/2 max-xl:w-1/2 max-xl:h-fit max-sm:w-full rounded-xl shadow-lg p-6 select-none transition-all duration-500 max-sm:mb-32`}
            >
              <div className="flex flex-col w-full h-fit gap-2">
                <div
                  className={`${
                    mode ? "bg-zinc-700 text-white" : "bg-gray-100"
                  }  flex text-xs text-gray-500 font-bold w-full h-fit rounded-md transition-all duration-500`}
                >
                  <p
                    onClick={() => {
                      setSelectedtab("recentlyPlayed");
                    }}
                    className={`${
                      selectedtab === "recentlyPlayed"
                        ? `${
                            mode
                              ? "bg-zinc-800 text-white "
                              : "bg-gray-800 text-white"
                          } `
                        : `${
                            mode ? "hover:bg-zinc-600" : "hover:bg-gray-200 "
                          } `
                    } py-2 rounded-md w-1/2 text-center  text-black cursor-pointer transition-all duration-500`}
                  >
                    Recently Played
                  </p>
                  <p
                    onClick={() => {
                      setSelectedtab("myFavourites");
                    }}
                    className={`${
                      selectedtab === "myFavourites"
                        ? `${
                            mode
                              ? "bg-zinc-800 text-white "
                              : "bg-gray-800 text-white"
                          } `
                        : `${
                            mode ? "hover:bg-zinc-600" : "hover:bg-gray-200 "
                          } `
                    } py-2 rounded-md w-1/2 text-center  text-black cursor-pointer transition-all duration-500`}
                  >
                    My favourites
                  </p>
                </div>
                <div className="flex flex-col w-full py-1">
                  {recentFavouriteStatus === "loading" ? (
                    new Array(4)
                      .fill(0)
                      .map((_, key) => <SkeletonList key={key} />)
                  ) : tabList && tabList.length > 0 ? (
                    selectedtab === "myFavourites" && tabList.length > 3 ? (
                      tabList.slice(0, 3).map((item, idx) => (
                        <div
                          className={`${
                            mode ? "hover:bg-zinc-900" : "hover:bg-gray-100"
                          } flex gap-4 items-center w-full p-2 rounded-md cursor-pointer`}
                          key={idx}
                          onClick={() => {
                            setNowPlaying(item);
                            player.current.audio.current.play();
                            setPlayerPaused(false);
                          }}
                        >
                          <img
                            className="w-10 h-8 rounded-md"
                            src={item.thumbnail}
                            alt="thumbnail"
                          />
                          <div className="flex flex-col text-xs w-full max-sm:gap-1">
                            <p className="capitalize">{item.title}</p>
                            <div
                              className={`${
                                mode ? "text-zinc-600" : "text-gray-400"
                              } flex justify-between`}
                            >
                              <p>{item.artist}</p>
                              <p>{item.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      tabList.slice(0, 4).map((item, idx) => (
                        <div
                          className={`${
                            mode ? "hover:bg-zinc-900" : "hover:bg-gray-100"
                          } flex gap-4 p-2 items-center w-full rounded-md cursor-pointer`}
                          key={idx}
                          onClick={() => {
                            setNowPlaying(item);
                            player.current.audio.current.play();
                            setPlayerPaused(false);
                          }}
                        >
                          <img
                            className="w-10 h-8 rounded-md"
                            src={item.thumbnail}
                            alt="thumbnail"
                          />
                          <div className="flex flex-col text-xs w-full max-sm:gap-1">
                            <p className="capitalize">{item.title}</p>
                            <div
                              className={`${
                                mode ? "text-zinc-600" : "text-gray-400"
                              } flex justify-between`}
                            >
                              <p>{item.artist}</p>
                              <p>{item.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  ) : (
                    <p>Nothing played</p>
                  )}
                </div>
                {recentFavouriteStatus === "loading" ? (
                  <div></div>
                ) : (
                  <div
                    className={`${
                      mode
                        ? "bg-zinc-900 hover:bg-zinc-800"
                        : "bg-[color:var(--popular-podcast-category-icon)] hover:bg-[#aeebf2]"
                    } ${
                      selectedtab === "recentlyPlayed" || favourites.length < 5
                        ? "hidden"
                        : ""
                    } flex gap-2 items-center px-6 py-1 text-xs w-fit self-center rounded-md cursor-pointer transition-all duration-500`}
                  >
                    <p>View More</p> <i className="fa-solid fa-angle-down"></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
