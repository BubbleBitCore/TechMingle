import { useSearchParams } from "react-router-dom";
import Tabs from "../components/Tabs";
import { episodes } from "../constants/podcastdata";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ClickMenu from "../components/ClickMenu";
import { formatDuration, formatNumber } from "../utils/conversion";
import { setNowPlaying } from "../slices/podcastSlice";
import { useNavigate } from "react-router-dom";
import man from "../assets/images/man.png";
import { Link } from "react-router-dom";

const Podcasts = () => {
  const [podcastList, setPodcastList] = useState(episodes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.common.mode);
  const [moreVisibility, setMoreVisibility] = useState(
    Array(podcastList.length).fill(false)
  );
  const [durations, setDurations] = useState([]);
  const moreList = [
    {
      value: "Add to playlist",
      icon: "ri-play-list-add-line",
      classes: "min-w-[150px]",
      function: () => {},
    },
    {
      value: "Share",
      icon: "ri-share-forward-line",
      classes: "",
      function: () => {},
    },
    {
      value: "Edit",
      icon: "ri-pencil-line",
      classes: "",
      function: () => {},
    },
    {
      value: "Delete",
      icon: "ri-delete-bin-2-line",
      classes: "",
      function: () => {},
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
      <div className="flex justify-center w-full pt-2 sm:px-4">
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-5  max-sm:w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
          {podcastList.length > 0
            ? podcastList.map((item, idx) => (
                <div
                  key={idx}
                  className="hover:text-white group"
                  onDoubleClick={() => {
                    console.log("double click");
                    dispatch(setNowPlaying(item));
                    navigate("/podcast/1");
                  }}
                >
                  <div className="w-full">
                    {/* image div */}
                    <div className="w-64 xl:w-56 2xl:w-64 max-sm:w-full sm:h-40 rounded-xl relative">
                      <img
                        src={item.thumbnail}
                        className="w-full h-full object-cover rounded-xl"
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
                            ? `group-hover:text-white ${moreVisibility[idx]
                              ? "text-white":""}`
                            : `group-hover:text-black ${moreVisibility[idx]
                              ? "text-black":""}`
                        } relative cursor-pointer`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const newVisibility = Array(podcastList.length).fill(
                            false
                          );
                          newVisibility[idx] = !moreVisibility[idx];
                          setMoreVisibility(newVisibility);
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
    </>
  );
};

const Playlists = () => {
  return (
    <>
      <p className="text-white">Playlists</p>
    </>
  );
};

const UserPodcasts = ({ Header }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = useSelector((state)=>state.common.mode)
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
  return (
    <>
      <div className="flex flex-col h-full w-full max-sm:px-4 sm:pr-4">
        <Header />
        <div className="flex flex-col pb-2 w-full sm:px-8 overflow-hidden overflow-y-auto">
          <div className="flex max-sm:flex-col w-full  gap-4 items-center pb-5">
            <div className="flex rounded-full w-32 h-32 bg-gray-300 justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src={man}
              />
            </div>
            <div className="flex flex-col w-[90%] gap-2 max-sm:items-center ">
              <p className={`text-3xl font-extrabold ${mode ? "text-white":"text-black"}`}>Naruto Uzumaki</p>

              <div className={`flex max-sm:flex-col gap-4 ${mode ? "text-zinc-400":"text-gray-600" } text-sm px-1  select-none`}>
              <div className="flex gap-4"><div className="flex gap-1">
                  <p className="font-bold ">{formatNumber(2111111)}</p>{" "}
                  <p>subscribers</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className={`w-[1px] h-[20px] ${mode?"bg-zinc-600": "bg-gray-900"}  rounded-full`}></div>
                </div>
                <div className="flex gap-1">
                  <p className="font-bold">{formatNumber(101)} </p>{" "}
                  <p>Podcasts</p>
                </div>
                <div className="flex justify-center items-center max-sm:hidden">
                  <div className={`w-[1px] h-[20px] ${mode?"bg-zinc-600": "bg-gray-900"}  rounded-full`}></div>
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
                    className={`p-1.5 ${mode?"bg-zinc-900 text-zinc-400":"bg-gray-100"} px-4 rounded-full transition-all duration-500`}
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
              </div>

              <div className="flex select-none">
                <Link
                  to="/profile"
                  className="p-1.5 text-xs bg-blue-600 hover:bg-blue-500 w-24 rounded-md text-white text-center justify-center"
                >
                  view profile
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full w-full overflow-hidden">
            <Tabs tabs={tabs} selectedTab={searchParams.get("tab")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPodcasts;
