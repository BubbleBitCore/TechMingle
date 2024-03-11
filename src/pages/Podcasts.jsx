import song1 from "../assets/songs/song1.mp3";
import believer from "../assets/songs/believer.mp3";
import carnival from "../assets/songs/carnival.mp3";
import despacito from "../assets/songs/despacito.mp3";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useEffect } from "react";

const Podcasts = ({ Header }) => {
  const mode = useSelector((state) => state.common.mode);

  // dummy song which currently being played
  const [nowPlaying, setNowPlaying] = useState({
    title: "Spiritual Awakening",
    artist: "Dr. Erin Fall Haskell",
    thumbnail: img1,
    duration: 50, //in minutes
    audio: song1,
  });

  // top 1 trending podcast in the week
  const trendingThisWeek = {
    title: "Good Life project",
    artist: "Elizabeth",
    thumbnail: img2,
    duration: 50, //in minutes
    audio: song1,
  };

  const popularPodcastcategory = [
    "All",
    "Exclusive",
    "News & Politics",
    "Music",
    "Buisness",
    "health",
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
      count: 190,
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
      name: "Hapiness",
      icon: "fa-regular fa-face-smile",
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
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: despacito,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: believer,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: carnival,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: despacito,
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
  ];

  const trendingPodcasts = [
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img1,
      audio: carnival,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img2,
      audio: despacito,
    },
    {
      title: "How to face big decisions",
      artist: "TOM HEART",
      duration: " 1hr 20 min",
      thumbnail: img3,
      audio: believer,
    },
  ];

  // list to display on use selection of tab
  const [tabList, setTabList] = useState(recentlyPlayed);
  const [selectedtab, setSelectedtab] = useState("recentlyPlayed");

  const trendingPodcastCategory = [
    "Inspiration",
    "Drama",
    "Culture",
    "Teach",
    "Crime",
    "fashion",
  ];

  const containerStyle = mode ? { backgroundColor: "black" } : {};

  return (
    <div className="flex flex-col h-full w-full pr-8 max-sm:px-2 select-none ">
      <Header urlName="Podcast" />
      <div
        className={`flex h-full w-full sm:px-4 ${
          mode ? "bg-zinc-900" : "bg-gray-50"
        } rounded-xl overflow-y-auto`}
      >
        <div className="flex  max-xl:flex-col h-full w-full xl:gap-12 gap-6 p-4 max-sm:p-2 rounded-xl overflow-y-auto ">
          {/* left section */}
          <div className="flex flex-col gap-6 w-3/4 max-xl:w-full ">
            {/* Trending this week div */}
            <div className="flex max-sm:flex-col sm:h-2/5 gap-6 w-full">
              <div
                className={`${
                  mode ? " bg-black" : "bg-white"
                } flex flex-col gap-4 w-1/4 max-sm:w-full rounded-xl shadow-lg  p-4`}
              >
                <p
                  className={`${
                    mode ? "text-white" : "text-black"
                  } text-sm font-bold select-none`}
                >
                  Trending this week
                </p>
                <div className="h-full w-full flex items-center rounded-xl">
                  <div className="flex flex-col gap-1 max-sm:w-full">
                    <div className="flex w-full h-[95%] relative ">
                      <img
                        className="w-full h-full rounded-xl object-cover"
                        src={trendingThisWeek.thumbnail}
                        alt={trendingThisWeek.title}
                      />
                      <div className="flex absolute  bg-gray-50 right-2 sm:text-xs rounded-md px-2 top-2">
                        {trendingThisWeek.duration} min
                      </div>
                      <i
                        className="flex ri-play-fill text-black absolute text-xl bg-white px-2 p-1 rounded-full right-4 bottom-2"
                        onClick={() => {
                          setNowPlaying(trendingThisWeek);
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
                </div>
              </div>
              {/* Trending podcast category wise */}
              <div
                className={`${
                  mode ? "bg-black text-white" : "bg-white"
                } flex flex-col w-full max-sm:h-fit sm:w-3/4 gap-4 rounded-xl shadow-lg  p-4`}
              >
                <div className="flex w-full justify-between ">
                  <div className="flex gap-4 items-center max-sm:justify-between max-sm:w-full">
                    <p className="text-sm font-bold select-none">
                      Trending podcast in
                    </p>
                    <select
                      className={`${
                        mode ? "bg-black" : "bg-white"
                      }  border-none outline-none text-sm`}
                      name="category"
                    >
                      {trendingPodcastCategory?.map((item, idx) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className="max-sm:hidden flex gap-2 items-center">
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center `}
                    >
                      <i className="ri-arrow-drop-left-line text-3xl"></i>
                    </div>
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center `}
                    >
                      <i className="ri-arrow-drop-right-line text-3xl"></i>
                    </div>
                  </div>
                </div>
                <div className="flex w-full max-sm:gap-4 gap-6 rounded-md justify-between px-2 overflow-x-hidden cursor-grab max-sm:hover:overflow-x-scroll">
                  {trendingPodcasts?.length > 0 ? (
                    trendingPodcasts.slice(0, 3).map((item, idx) => (
                      <div
                        className="flex flex-col gap-1 w-1/3 max-sm:py-2 max-sm:min-w-full"
                        key={idx}
                      >
                        <div className="flex w-full h-2/3 max-sm:h-full relative">
                          <img
                            className="w-full h-full rounded-xl"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                          <i
                            className={`${
                              mode ? "text-black " : "bg-gray-50 "
                            } flex ri-heart-line absolute  rounded-full px-1 right-2 top-2 hover:bg-red-400`}
                          ></i>
                          <i
                            className={`flex ri-play-fill text-white absolute lg:text-xl md:text-xs  bg-black px-2 p-1 rounded-full right-2 bottom-2`}
                            onClick={() => {
                              setNowPlaying(item);
                            }}
                          ></i>
                        </div>
                        <p className="text-xs font-bold">{item.title}</p>
                        <div className="flex justify-between items-center text-xs">
                          <p>{item.artist}</p>
                          <span>
                            <i className="ri-time-fill"></i>
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${
                mode ? "bg-black text-white" : "bg-white"
              } flex flex-col sm:px-6 p-4 sm:h-3/5 w-full rounded-xl shadow-lg `}
            >
              {/* Popular podcasts section */}
              <div className="flex flex-col gap-2 h-1/2 max-lg:h-fit w-full pb-2">
                <div className="flex w-full items-center justify-between">
                  <div className="flex sm:gap-4 max-sm:justify-between max-sm:w-full">
                    <p className="text-sm font-bold select-none">
                      Popular podcasts
                    </p>
                    <select
                      className={` ${
                        mode ? "bg-black text-white " : "bg-white text-gray-500"
                      }  text-xs outline-none lg:hidden  font-bold`}
                      name="category"
                    >
                      {popularPodcastcategory?.length > 0 ? (
                        popularPodcastcategory.slice(0, 6).map((item, idx) => (
                          <option value={item} key={idx}>
                            {item}
                          </option>
                        ))
                      ) : (
                        <p>No categories found</p>
                      )}
                    </select>
                  </div>

                  <div className="flex max-lg:hidden gap-6 text-sm text-gray-500 font-bold ">
                    {popularPodcastcategory?.length > 0 ? (
                      popularPodcastcategory.slice(0, 5).map((item, idx) => (
                        <p
                          className={`${
                            mode ? "hover:text-white" : "hover:text-black"
                          } select-none `}
                          key={idx}
                        >
                          {item}
                        </p>
                      ))
                    ) : (
                      <p>No categories found</p>
                    )}
                  </div>

                  <div className="max-sm:hidden flex gap-2 items-center">
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center `}
                    >
                      <i className="ri-arrow-drop-left-line text-3xl"></i>
                    </div>
                    <div
                      className={`${
                        mode
                          ? "bg-black hover:bg-zinc-900"
                          : "bg-gray-200 hover:bg-gray-400"
                      } rounded-md h-6 w-6 flex items-center justify-center `}
                    >
                      <i className="ri-arrow-drop-right-line text-3xl"></i>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full  gap-4 rounded-md justify-between items-center cursor-grab max-sm:overflow-hidden max-sm:hover:overflow-x-scroll snap-mandatory snap-x">
                  {PopularPodcasts?.length > 0 ? (
                    PopularPodcasts.slice(0, 3).map((item, idx) => (
                      <div
                        className="flex max-lg:flex-col w-full justify-center lg:items-center gap-3 max-sm:min-w-full"
                        key={idx}
                      >
                        <div className="max-lg:w-full max-lg:pr-4 max-sm:pr-0">
                          <img
                            className="w-20 h-20 max-sm:h-40 max-lg:w-full object-cover rounded-xl"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-xs font-bold">{item.title}</p>
                          <p className="text-xs text-gray-400 font-bold">
                            {item.artist}
                          </p>
                          <div
                            onClick={() => setNowPlaying(item)}
                            className={`${
                              mode
                                ? "bg-zinc-900 hover:bg-zinc-800"
                                : "bg-gray-100 hover:bg-gray-200"
                            } flex justify-center items-center px-2 gap-2 rounded-md mb-2 text-xs w-fit`}
                          >
                            <i className="ri-play-circle-line text-2xl"></i>
                            {item.duration}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              <hr className="border border-gray-100"></hr>
              {/* Popular podcasts category section */}
              <div className="flex max-sm:flex-col h-1/2 gap-12 w-full p-4">
                <div className="w-2/3 max-sm:w-full">
                  <p className="text-sm font-bold select-none ">
                    Popular categories
                  </p>
                  <div className="flex gap-4 items-center justify-between h-full  max-sm:overflow-x-hidden max-sm:hover:overflow-x-auto">
                    {popularcategories?.map((item, idx) => (
                      <div
                        className="flex flex-col items-center justify-center gap-1"
                        key={idx}
                      >
                        <div
                          className={`${
                            mode ? "bg-white" : "bg-cyan-200"
                          } bg-white p-2 px-4 rounded-md select-none`}
                        >
                          <i
                            className={`${item.icon} ${
                              mode
                                ? "text-black font-bold"
                                : "text-black bg-white"
                            } px-1 rounded-md text-lg`}
                          ></i>
                        </div>
                        <p className="text-xs font-bold">{item.name}</p>
                        <p className="text-xs">{item.count} Podcats</p>
                      </div>
                    ))}
                    <div
                      className={`${
                        mode ? "bg-zinc-900" : "bg-gray-800"
                      } max-sm:hidden flex flex-col  p-3 px-5 rounded-xl text-white font-bold text-xs items-center justify-center`}
                    >
                      <p>show</p>
                      <p>all</p>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </div>
                </div>
                {/* Popular podcasters section */}
                <div className="w-1/3 max-sm:w-full ">
                  <p className="text-sm font-bold select-none">
                    Popular Podcasters
                  </p>
                  <div className="w-full h-full flex flex-col gap-3 justify-center">
                    {popularPodcasters?.length > 0 ? (
                      popularPodcasters.slice(0, 2).map((item, idx) => (
                        <div
                          className="flex w-full justify-between items-center select-none"
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
                            <p className="text-xs font-bold text-gray-500">
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
                          ? "bg-zinc-900"
                          : "bg-[color:var(--popular-podcast-category-icon)]"
                      }  flex gap-2 items-center px-6 p-1 text-xs w-fit self-center rounded-md`}
                    >
                      <p>View More</p>{" "}
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right se section */}
          <div className="flex xl:flex-col max-sm:flex-col gap-6 w-1/4 max-sm:w-full max-xl:w-full">
            {/* Now playing podcast section */}
            <div
              className={`${
                mode ? "bg-black text-white" : "bg-white"
              } flex flex-col xl:h-1/2 gap-2 rounded-xl shadow-lg p-2 justify-center items-center`}
            >
              <p className="font-bold">Now playing</p>
              <div className="w-2/3 h-1/3 mt-1">
                <img
                  className="w-full h-full rounded-lg"
                  src={nowPlaying.thumbnail}
                  alt={nowPlaying.name}
                ></img>
              </div>

              <p className="text-sm font-bold">{nowPlaying.title}</p>
              <p className="text-xs">{nowPlaying.artist}</p>
              <div className="w-full">
                <AudioPlayer
                  autoPlay
                  src={nowPlaying.audio}
                  className={"shadow-none"}
                  style={containerStyle}
                />
              </div>
            </div>
            {/* Recently played and wishlist section */}
            <div
              className={`${
                mode ? "bg-black text-white" : "bg-white"
              } flex flex-col xl:h-1/2 rounded-xl shadow-lg p-6 select-none`}
            >
              <div className="flex flex-col w-full h-full gap-2">
                <div
                  className={`${
                    mode ? "bg-zinc-700 text-white" : "bg-gray-100"
                  }  flex text-xs text-gray-500 font-bold w-full h-fit rounded-md`}
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
                    } py-2 rounded-md w-1/2 text-center  text-blck `}
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
                    } py-2 rounded-md w-1/2 text-center  text-black`}
                  >
                    My favourites
                  </p>
                </div>
                <div className="flex flex-col w-full gap-4 py-2 px-2 ">
                  {tabList?.length > 0 ? (
                    tabList.slice(0, 3).map((item, idx) => (
                      <div
                        className="flex gap-4 items-center w-full"
                        key={idx}
                        onClick={() => {
                          setNowPlaying(item);
                        }}
                      >
                        <img
                          className="w-10 h-8 rounded-md"
                          src={item.thumbnail}
                          alt="thumbnail"
                        ></img>
                        <div className="flex flex-col text-xs w-full max-sm:gap-1">
                          <p className="font-bold">{item.name}</p>
                          <div className="flex justify-between">
                            <p>{item.artist}</p>
                            <p>{item.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Nothing played</p>
                  )}
                </div>
                <div
                  className={`${
                    mode
                      ? "bg-zinc-900"
                      : "bg-[color:var(--popular-podcast-category-icon)]"
                  }  flex items-center px-6 py-1 text-xs w-fit self-center rounded-md`}
                >
                  <p>View More</p> <i className="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
