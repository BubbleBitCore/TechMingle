import { useSearchParams } from "react-router-dom";
import Tabs from "../components/Tabs";
import { episodes } from "../constants/podcastdata";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClickMenu from "../components/ClickMenu";
import { formatDuration, formatNumber } from "../utils/conversion";
import {
  setNowPlaying,
  setIsPlaying,
  setAddToPlaylistVisibility,
  setEditPodcastVisibility,
  setPodcastToEdit,
  setCreatePodcastVisibility,
} from "../slices/podcastSlice";
import { useNavigate } from "react-router-dom";
import man from "../assets/images/man.png";
import { Link } from "react-router-dom";
import { changeSnackBarState } from "../slices/commonSlice";
import AddToPlaylistModel from "../components/Podcast/AddToPlaylistModel";
import EditPodcastModal from "../components/Podcast/EditPodcastModal";
import { AnimatePresence } from "framer-motion";
import FlashMsg from "../components/FlashMsg/FlashMsg";
import { FLASH_WARNING } from "../constants/FlashMsgConstants.js";
import podcastMike from "../assets/images/podcastMike.png";
import CreatePodcast from "../components/Podcast/CreatePodcast.jsx";

const Podcasts = () => {
  const podcastList = episodes;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.common.mode);
  const [selectedPodcast, setSelectedPodcast] = useState([]);
  const [moreVisibility, setMoreVisibility] = useState(
    Array(podcastList.length).fill(false)
  );
  const [durations, setDurations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  //  Flash messages Are handled here
  const [flashVisibility, setFlashVisibility] = useState(false);
  const FLASH_STATE = {
    flashVisibility,
    setFlashVisibility,
  };
  const [flashType, setFlashType] = useState(null);
  const [flashTitle, setFlashTitle] = useState("");
  const [flashMsg, setFlashMsg] = useState("");

  const moreList = [
    {
      value: "Add to playlist",
      icon: "ri-play-list-add-line",
      classes: "min-w-[150px]",
      function: () => {
        dispatch(setAddToPlaylistVisibility(true));
        setMoreVisibility(false);
      },
    },
    {
      value: "Share",
      icon: "ri-share-forward-line",
      classes: "",
      function: () => {
        sharePodcast(selectedId);
        setMoreVisibility(false);
        dispatch(
          changeSnackBarState({
            message: "Link copied to clipboard",
            icon: "ri-clipboard-line text-blue-500",
            visible: true,
          })
        );
      },
    },
    {
      value: "Edit",
      icon: "ri-pencil-line",
      classes: "",
      function: () => {
        dispatch(setPodcastToEdit(selectedPodcast));
        dispatch(setEditPodcastVisibility(true));
        setMoreVisibility(false);
      },
    },
    {
      value: "Delete",
      icon: "ri-delete-bin-2-line",
      classes: "",
      function: () => {
        deletePodcast(selectedId);
        setMoreVisibility(false);
        setFlashType(FLASH_WARNING);
        setFlashTitle("Confirm Deletion");
        setFlashMsg(
          "Are you sure you want to delete this podcast? This action cannot be undone."
        );
        setFlashVisibility(true);
      },
    },
  ];

  const removeClickMenus = () => {
    setMoreVisibility(Array(podcastList.length).fill(false));
  };
  useEffect(() => {
    window.addEventListener("click", removeClickMenus);
    return () => {
      window.removeEventListener("click", removeClickMenus);
    };
  });

  // delete podcast
  const deletePodcast = (id) => {
    // console.log(id);
  };

  // share podcast
  const sharePodcast = (id) => {
    const url = `http://localhost:3000/podcast/${id}`;
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    const calculateDurations = async () => {
      const newDurations = await Promise.all(
        podcastList.map((item) => {
          return new Promise((resolve) => {
            const audio = new Audio(item.audio);
            audio.addEventListener("loadedmetadata", () => {
              resolve(audio.duration);
            });
          });
        })
      );
      setDurations(newDurations);
    };
    calculateDurations();
  }, [podcastList]);

  return (
    <>
      <style>
        {`
        .glassDark {
          background: rgba(13,13,15,0.5);
          }`}
      </style>
      <div className="flex justify-center w-full pt-2 sm:px-4 relative ">
        <div className="max-sm:flex max-sm:flex-col  max-sm:w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
          {podcastList.length > 0
            ? podcastList.map((item, idx) => (
                <div key={idx} className="hover:text-white group">
                  <div className="w-full">
                    {/* image div */}
                    <div className="w-64 xl:w-56 2xl:w-60 max-sm:w-full sm:h-40 rounded-xl relative">
                      <img
                        src={item.thumbnail}
                        className="w-full h-full object-cover rounded-xl cursor-pointer"
                        onClick={() => {
                          dispatch(setNowPlaying(item));
                          dispatch(setIsPlaying(true));
                          navigate("/podcast/1");
                        }}
                      />
                      <p className="absolute bottom-1 right-1 glassDark p-1 px-2 sm:text-xs rounded-md transition-all duration-500 text-white">
                        {durations[idx]
                          ? formatDuration(durations[idx])
                          : "00:00"}
                      </p>
                    </div>
                    <div className="flex w-full justify-between">
                      <div className="w-[90%] pt-3">
                        <p
                          className={`sm:text-sm ${
                            mode ? "text-zinc-200" : "text-black text-bold"
                          } text-nowrap overflow-hidden text-ellipsis`}
                        >
                          {item.title}
                        </p>
                        <p className={`text-zinc-500 text-xs`}>
                          {`${formatNumber(item.views)} views`}
                        </p>
                      </div>
                      <div
                        className={`text-transparent py-3 text-xl ${
                          mode
                            ? `group-hover:text-white ${
                                moreVisibility[idx] ? "text-white" : ""
                              }`
                            : `group-hover:text-black ${
                                moreVisibility[idx] ? "text-black" : ""
                              }`
                        } relative cursor-pointer`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const newVisibility = Array(podcastList.length).fill(
                            false
                          );
                          newVisibility[idx] = !moreVisibility[idx];
                          setMoreVisibility(newVisibility);
                          setSelectedPodcast(item);
                          setSelectedId(item.id);
                        }}
                      >
                        <i className="ri-more-2-line" title="More"></i>
                        <ClickMenu
                          menu={moreList}
                          visibility={moreVisibility[idx]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <AnimatePresence>
        {flashVisibility && (
          <FlashMsg
            key={"FlasMsg"}
            FLASH_STATE={FLASH_STATE}
            FLASH_TYPE={flashType}
            FLASH_TITLE={flashTitle}
            FLASH_MESSAGE={flashMsg}
            ONCLICK={() => {}}
            CANCELCLICK={() => {}}
            enableCancel={true}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Playlists = () => {
  const playlistList = episodes;
  const navigate = useNavigate();
  const mode = useSelector((state) => state.common.mode);
  const [moreVisibility, setMoreVisibility] = useState(
    Array(playlistList.length).fill(false)
  );
  const moreList = [
    {
      value: "Delete",
      icon: "ri-delete-bin-2-line",
      classes: "",
      function: () => {
        setMoreVisibility(false);
        setFlashType(FLASH_WARNING);
        setFlashTitle("Confirm Deletion");
        setFlashMsg(
          "Are you sure you want to delete this playlist? This action cannot be undone."
        );
        setFlashVisibility(true);
      },
    },
  ];

  //  Flash messages Are handled here
  const [flashVisibility, setFlashVisibility] = useState(false);
  const FLASH_STATE = {
    flashVisibility,
    setFlashVisibility,
  };
  const [flashType, setFlashType] = useState(null);
  const [flashTitle, setFlashTitle] = useState("");
  const [flashMsg, setFlashMsg] = useState("");

  return (
    <>
      <div className="flex justify-center w-full sm:px-4 relative ">
        <div className="max-sm:flex max-sm:flex-col  max-sm:w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
          {/* card design */}
          {playlistList.map((item, idx) => (
            <div className="flex flex-col group" key={idx}>
              <div className="flex flex-col px-8 items-center justify-end">
                <div
                  className={`flex bg-zinc-400 w-64 h-[10rem] border-[3px] ${
                    mode ? "border-[#0B0D10]" : "border-white"
                  }   rounded-xl z-30 absolute overflow-hidden transition-all duration-500`}
                onClick={()=>{
                  navigate("/podcastplaylist/1")
                }}>
                  <img
                    className="flex w-full h-full object-cover cursor-pointer"
                    src={item.thumbnail}
                  />
                </div>
                <div
                  className={`flex w-[15.75rem] h-[10.25rem] border-2 ${
                    mode ? "border-[#0B0D10]" : "border-white"
                  } rounded-2xl z-20 absolute  opacity-50 ${mode ? "bg-zinc-200" : "bg-zinc-400"} transition-all duration-500`}
                ></div>
                <div
                  className={`flex opacity-30 ${mode ? "bg-zinc-300 " : "bg-zinc-400"} w-[15rem] h-[10.5rem] border-2 ${
                    mode ? "border-[#0B0D10]" : "border-white"
                  } rounded-2xl z-10 transition-all duration-500`}
                ></div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col pt-2">
                  <p className={`${mode ? "text-white" : "text-black"} text-sm`}>{item.title}</p>
                  <div className={`flex ${mode ? "text-zinc-400" : "text-zinc-700"} text-xs`}>
                    <p>{item.artist}</p>
                    <div className="flex justify-center items-center px-2">
                      <div className="flex w-[3px] h-[3px] bg-gray-400 rounded-full"></div>
                    </div>
                    <p>Playlist</p>
                  </div>
                </div>
                <div
                  className={`text-transparent py-3 text-xl ${
                    mode
                      ? `group-hover:text-white ${
                          moreVisibility[idx] ? "text-white" : ""
                        }`
                      : `group-hover:text-black ${
                          moreVisibility[idx] ? "text-black" : ""
                        }`
                  } relative cursor-pointer`}
                  onClick={(e) => {
                    e.stopPropagation();
                    const newVisibility = Array(playlistList.length).fill(
                      false
                    );
                    newVisibility[idx] = !moreVisibility[idx];
                    setMoreVisibility(newVisibility);
                  }}
                >
                  <i className="ri-more-2-line" title="More"></i>
                  <ClickMenu menu={moreList} visibility={moreVisibility[idx]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {flashVisibility && (
          <FlashMsg
            key={"FlasMsg"}
            FLASH_STATE={FLASH_STATE}
            FLASH_TYPE={flashType}
            FLASH_TITLE={flashTitle}
            FLASH_MESSAGE={flashMsg}
            ONCLICK={() => {}}
            CANCELCLICK={() => {}}
            enableCancel={true}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const UserPodcasts = ({ Header }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const createPodcastVisibility = useSelector(
    (state) => state.podcast.createPodcastVisibility
  );
  const mode = useSelector((state) => state.common.mode);
  const dispatch = useDispatch();
  const addToPlayListVisibility = useSelector(
    (state) => state.podcast.addToPlayListVisibility
  );
  const editPodcastVisibility = useSelector(
    (state) => state.podcast.editPodcastVisibility
  );
  const podcastToEdit = useSelector((state) => state.podcast.podcastToEdit);
  const tabs = [
    { name: "Podcasts", component: Podcasts },
    { name: "Playlists", component: Playlists },
  ];
  const [genre, setGenre] = useState([
    { name: "Comedy" },
    { name: "Society and culture" },
    { name: "News" },
    { name: "True Crime" },
    { name: "Sports" },
  ]);
  const [language, setLanguage] = useState([
    "Hindi",
    "English",
    "Bihari",
    "German",
    "Spanish",
  ]);
  const playList = ["list1", "list2", "list3", "list4"];
  const removeClickMenus = () => {
    dispatch(setAddToPlaylistVisibility(false));
    dispatch(setEditPodcastVisibility(false));
  };
  useEffect(() => {
    window.addEventListener("click", removeClickMenus);
    return () => {
      window.removeEventListener("click", removeClickMenus);
    };
  });

  return (
    <>
      <div className="flex flex-col h-full w-full max-sm:px-4 sm:pr-4 relative max-sm:overflow-y-auto">
        <Header />
        <div className="flex flex-col pb-2 sm:px-8 w-full  overflow-hidden overflow-y-auto">
          <div className="flex max-sm:flex-col sm:justify-between">
            <div className="flex max-sm:flex-col w-full  gap-4 items-center pb-5 ">
              <Link
                className="flex rounded-full w-32 h-32 bg-gray-300 justify-center"
                to="/profile"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={man}
                />
              </Link>
              <div className="flex flex-col sm:w-[90%] gap-2">
                <p
                  className={`text-3xl font-extrabold max-sm:text-center ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  Naruto Uzumaki
                </p>
                <div
                  className={`flex max-sm:flex-col max-sm:items-center gap-4 ${
                    mode ? "text-zinc-400" : "text-gray-600"
                  } text-sm px-1  select-none`}
                >
                  <div className="flex gap-4">
                    <div className="flex gap-1">
                      <p className="font-bold ">{formatNumber(2111111)}</p>{" "}
                      <p>Followers</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div
                        className={`w-[1px] h-[20px] ${
                          mode ? "bg-zinc-600" : "bg-gray-900"
                        }  rounded-full`}
                      ></div>
                    </div>
                    <div className="flex gap-1">
                      <p className="font-bold">{formatNumber(101)} </p>{" "}
                      <p>Podcasts</p>
                    </div>
                    <div className="flex justify-center items-center max-sm:hidden">
                      <div
                        className={`w-[1px] h-[20px] ${
                          mode ? "bg-zinc-600" : "bg-gray-900"
                        }  rounded-full`}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center  gap-2 ">
                    <i className="ri-user-voice-line font-bold"></i>
                    <div className="flex gap-2 text-xs">
                      {language.length > 0 && <p>{language.join(", ")}</p>}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 text-xs flex-wrap select-none">
                  {genre.length > 0 &&
                    genre.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-1.5 ${
                          mode ? "bg-zinc-900 text-zinc-400" : "bg-gray-100"
                        } px-4 rounded-full transition-all duration-500`}
                      >
                        <p>{item.name}</p>
                      </div>
                    ))}
                </div>

                <div className="flex select-none max-sm:justify-center gap-6 max-sm:px-4 max-sm:mt-3">
                  <Link
                    to="/profile"
                    className="flex max-sm:gap-2 p-1.5 px-3 text-xs sm:bg-blue-600 max-sm:outline max-sm:outline-blue-500 hover:outline-none max-sm:hover:outline-blue-300  sm:hover:bg-blue-500 rounded-md text-white max-sm:text-zinc-400 text-center justify-center"
                  >
                    <p>view profile</p>
                    <i className="ri-arrow-right-double-line"></i>
                  </Link>
                  <div
                    className="flex max-sm:gap-2 sm:hidden p-1.5 px-3 text-xs cursor-pointer sm:bg-blue-600 max-sm:outline max-sm:outline-green-600 hover:outline-none max-sm:hover:outline-green-400  sm:hover:bg-blue-500 rounded-md text-white max-sm:text-zinc-400 text-center justify-center"
                    onClick={() => {
                      dispatch(setCreatePodcastVisibility(true));
                      // console.log(createPodcastVisibility);
                    }}
                  >
                    <i className="ri-add-large-fill"></i>
                    <p>create</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-sm:hidden flex-col justify-center w-36 max-sm:w-20 ">
              <div
                className="flex flex-col items-center sm:p-2 cursor-pointer"
                onClick={() => {
                  dispatch(setCreatePodcastVisibility(true));
                  // console.log(createPodcastVisibility);
                }}
              >
                <svg
                  viewBox="-10 -10 120 120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="imgPattern"
                      patternUnits="userSpaceOnUse"
                      width="100"
                      height="100"
                    >
                      <image
                        href={podcastMike}
                        x="0"
                        y="8"
                        width="100"
                        height="80"
                      />
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#imgPattern)" />
                  <path
                    id="circlePath"
                    d="M 10, 50
            a 40,40 0 1,1 80,0
            40,40 0 1,1 -80,0
          "
                    fill="none"
                  />
                  <text>
                    <textPath
                      href="#circlePath"
                      className={` select-none`}
                      fill={mode ? "white" : "black"}
                    >
                      Create my ⭐ own Podcast ⭐
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-full w-full sm:overflow-hidden">
            <Tabs
              tabs={tabs}
              selectedTab={searchParams.get("tab")}
              tabHeaderZIdx={`[60]`}
            />
          </div>
        </div>
        {addToPlayListVisibility && (
          <div className="flex w-full h-full justify-center z-70 items-center absolute">
            <AddToPlaylistModel playlist={playList} />
          </div>
        )}
        {editPodcastVisibility && podcastToEdit && (
          <div className="flex w-full h-full justify-center z-70 items-center absolute">
            <EditPodcastModal podcast={podcastToEdit} />
          </div>
        )}
        {createPodcastVisibility && (
          <div className="flex w-full h-full justify-center z-70 items-center absolute">
            <CreatePodcast podcast={podcastToEdit} />
          </div>
        )}
      </div>
    </>
  );
};

export default UserPodcasts;
