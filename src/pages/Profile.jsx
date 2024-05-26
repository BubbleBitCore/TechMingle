import bgwall from "../assets/images/userBgWall.jpg";
import man1 from "../assets/images/man.png";
import man2 from "../assets/images/man2.png";
import man3 from "../assets/images/man3.png";
import man4 from "../assets/images/zap.png";
import absfunny from "../assets/images/absfunny.jpg";
import absfunny2 from "../assets/images/absfunny2.jpg";
import absfunny3 from "../assets/images/absfunny3.jpg";

import { formatNumber } from "../utils/conversion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClickMenu from "../components/ClickMenu";
import { changeSnackBarState } from "../slices/commonSlice";
import DragWheel from "../components/DragSpinWheel/DragWheel";
import { AnimatePresence } from "framer-motion";

const Profile = ({ Header }) => {
  const mode = useSelector((state) => state.common.mode);
  const [readMoreEnable, setReadMoreEnable] = useState(true);
  const [moreListVisibility, setMoreListVisibility] = useState(false);
  const disptach = useDispatch();
  const [dragWheelVisibility, setDragWheelVisibility] = useState(false);
  const dragWheelState = { dragWheelVisibility, setDragWheelVisibility };
  const wheelList = [
    {
      icon: "ri-voiceprint-fill",
      className: "",
      title: "Podcasts",
      helper: () => {
        console.log("title 1");
      },
    },
    {
      icon: "ri-apps-line",
      className: "",
      title: "Articles",
      helper: () => {
        console.log("title 2");
      },
    },
    {
      icon: "ri-skull-2-fill",
      className: "",
      title: "Unknown",
      helper: () => {
        console.log("title 3");
      },
    },
    {
      icon: "ri-question-mark",
      className: "",
      title: "Unknown",
      helper: () => {
        console.log("title 4");
      },
    },
  ];
  const moreList = [
    {
      value: "Share",
      icon: "ri-share-fill",
      classes: "",
      function: () => {
        // Copying url in clipboard
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => {
            // URL COPIED
            disptach(
              changeSnackBarState({
                message: "Profile copied",
                icon: "ri-clipboard-fill",
                visible: true,
              })
            );
          })
          .catch((error) => {
            console.error("Failed to copy URL: ", error);
          });
      },
    },
  ];

  const userBio =
    "Lead Software Engineer at Apple | Crafting digital dreams and orchestrating innovation, I'm the lead software maestro at Apple, where magic meets technology! 🌟 With a keyboard as my wand and lines of code as my spells, I conjure up the future of software excellence. ";

  const bioReadMoreHandle = (bio) => {
    return !readMoreEnable
      ? bio
      : bio.split(" ").slice(0, 15).join(" ") + "...";
  };

  const removeClickMenus = () => {
    setMoreListVisibility(false);
  };
  useEffect(() => {
    window.addEventListener("click", removeClickMenus);
    return () => {
      window.removeEventListener("click", removeClickMenus);
    };
  });
  return (
    <>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4 relative">
        <Header urlName="Profile" />
        <div className="mt-1 mb-2 h-fit w-full overflow-hidden  overflow-y-auto">
          <div className="h-auto w-full flex max-sm:flex-col gap-10 md:px-10 overflow-y-auto">
            {/* Main */}
            <div className={`w-[65%] overflow-hidden max-sm:w-full`}>
              {/* Profile */}
              <div
                className={`w-full mb-5 flex flex-col ${
                  mode ? "bg-[#1a1a1a]" : "bg-[#f6f6f6]"
                } rounded-2xl relative transition-all duration-500`}
              >
                {/* Bg-wall */}
                <div
                  className={"w-full h-[13rem] rounded-t-2xl overflow-hidden"}
                >
                  <img
                    src={bgwall}
                    alt={""}
                    className={`object-cover h-full w-full`}
                  ></img>
                </div>
                {/* profile content */}
                <div
                  className={`flex justify-between p-5 pt-14 relative gap-4`}
                >
                  {/* main info */}
                  <div className={`flex flex-col`}>
                    <h1
                      className={`text-2xl font-bold ${
                        mode ? "text-white" : "text-black"
                      } mb-1 select-none transition-all duration-500`}
                    >
                      Naruto uzumaki
                    </h1>
                    {/* Bio */}
                    <div
                      className={`text-xs ${
                        mode ? "text-gray-400" : "text-gray-600"
                      } mb-2 select-none  `}
                    >
                      <p className={`transition-all duration-500 `}>
                        {bioReadMoreHandle(userBio)}

                        <span
                          onClick={() => setReadMoreEnable(!readMoreEnable)}
                          className="w-fit text-xs cursor-pointer text-blue-500 hover:underline transition-all ml-2"
                        >
                          {readMoreEnable ? "more" : "show less"}
                        </span>
                      </p>
                    </div>
                    <div className={`flex gap-5 select-none mb-4`}>
                      <p className="flex gap-1 text-xs text-gray-500 items-center">
                        <span className={`text-blue-500 text-lg font-bold`}>
                          {formatNumber(6467)}
                        </span>
                        <span>followers</span>
                      </p>
                      <p className="flex gap-1 text-xs text-gray-500 items-center">
                        <span className={`text-blue-500 text-lg font-bold`}>
                          {formatNumber(500)}
                        </span>
                        <span>following</span>
                      </p>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2 max-sm:flex-col">
                      <div className="flex gap-2">
                        <button
                          className={`rounded-lg md:px-10 px-6 py-2 bg-blue-500 text-white text-xs hover:bg-blue-400 transition-all `}
                        >
                          <i className={`ri-user-add-line text-white`}></i>{" "}
                          Follow
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMoreListVisibility(true);
                          }}
                          className={`rounded-lg md:px-4 px-3 py-2 border-2 border-blue-500 text-blue-500 text-xs hover:text-blue-400 transition-all hover:border-blue-400 relative`}
                        >
                          <i className={`ri-more-line mr-1 font-bold `}></i>{" "}
                          More
                          <div className={`absolute top-[150%] -right-2`}>
                            <ClickMenu
                              menu={moreList}
                              visibility={moreListVisibility}
                            />
                          </div>
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDragWheelVisibility(true);
                          }}
                          title={"Enter the Horixon"}
                          className={`rounded-lg md:px-4 px-3 py-2  ${
                            mode
                              ? "text-white md:bg-[#303030] hover:bg-[#3e3e3e]"
                              : "text-black md:bg-[#e7e7e7] hover:bg-[#e0e0e0]"
                          } group transition-all duration-500`}
                        >
                          <div className="flex">
                            <i className="ri-infinity-line"></i>{" "}
                            <div
                              className={`md:group-hover:w-[4rem] max-sm:w-[4rem] md:w-0 overflow-hidden transition-all duration-500`}
                            >
                              Horixon
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* sideicons */}
                  <div className={`flex flex-col gap-2 md:mr-10 mt-2`}>
                    <div className={`flex gap-2  items-center`}>
                      <div
                        className={`bg-blue-400 rounded-[0.25rem] h-5 w-5 flex justify-center items-center `}
                      >
                        <i className={`text-white ri-apple-fill text-xs`}></i>
                      </div>
                      <p
                        className={`text-sm font-bold ${
                          mode ? "text-gray-400" : "text-black"
                        } transition-all duration-500 select-none`}
                      >
                        Apple
                      </p>
                    </div>
                    <div className={`flex gap-2  items-center `}>
                      <div
                        className={`bg-black rounded-[0.25rem] h-5 w-5 flex justify-center items-center`}
                      >
                        <i className={`text-white ri-blaze-fill text-xs`}></i>
                      </div>
                      <p
                        className={`text-sm font-bold ${
                          mode ? "text-gray-400" : "text-black"
                        } transition-all duration-500 select-none`}
                      >
                        Blaze
                      </p>
                    </div>
                  </div>

                  {/* User Avatar */}
                  <div
                    className={`absolute -top-12 w-24 h-24 left-5 rounded-full bg-white overflow-hidden flex justify-center items-center group cursor-pointer`}
                  >
                    <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-gray-300 overflow-hidden flex justify-center items-center">
                      <img
                        src={man1}
                        className={`group-hover:scale-110 transition-all w-full h-full object-cover`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* recent Activity */}
              <div
                className={`flex w-full ${
                  mode ? "bg-[#1a1a1a]" : "bg-[#f6f6f6]"
                } rounded-2xl p-5 flex-col mb-5 transition-all duration-500 max-sm:justify-center max-sm:items-center`}
              >
                <p
                  className={`text-xl font-bold mb-5 ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-500 max-sm:self-start`}
                >
                  Activity
                </p>
                <div className={`flex flex-wrap gap-6 max-sm:justify-center`}>
                  {/* Activity */}
                  <div
                    className={`sm:w-80 h-56 max-sm:w-[19rem]   ${
                      mode ? "bg-gray-950" : "bg-white"
                    } rounded-xl flex flex-col group cursor-pointer overflow-hidden transition-all duration-500`}
                  >
                    <div
                      className={"w-full h-[70%] object-cover overflow-hidden"}
                    >
                      <img
                        className={`w-full h-full object-cover group-hover:scale-105 transition-all`}
                        src={absfunny}
                        alt=""
                      />
                    </div>
                    <div className="w-full p-2 flex justify-between">
                      <div className={`flex flex-col w-[90%] gap-1`}>
                        <div className="flex gap-2  items-center w-full">
                          <p
                            className={`text-sm text-indigo-400 font-bold text-nowrap overflow-hidden text-ellipsis`}
                          >
                            夢は大きい方がいいです
                          </p>
                          <span
                            className={`h-[.3rem] w-[.3rem] bg-gray-500 rounded-full`}
                          ></span>
                          <p
                            className={`text-xs text-nowrap overflow-hidden text-ellipsis ${
                              mode ? "text-orange-400" : "text-black"
                            }`}
                          >
                            Podcast
                          </p>
                        </div>
                        <p
                          className={`text-gray-400 text-xs overflow-hidden text-nowrap text-ellipsis`}
                        >
                          Talk with Steve jobs{" "}
                        </p>
                      </div>
                      <i
                        title="save"
                        className={`cursor-pointer ri-bookmark-fill ${
                          mode
                            ? "text-white hover:text-gray-400"
                            : "text-gray-500 hover:text-black"
                        }  transition-all duration-500`}
                      ></i>
                    </div>
                  </div>

                  {/* Activity */}
                  <div
                    className={`sm:w-80 h-56 max-sm:w-[19rem]   ${
                      mode ? "bg-gray-950" : "bg-white"
                    } rounded-xl flex flex-col group cursor-pointer overflow-hidden transition-all duration-500`}
                  >
                    <div
                      className={"w-full h-[70%] object-cover overflow-hidden"}
                    >
                      <img
                        className={`w-full h-full object-cover group-hover:scale-105 transition-all`}
                        src={absfunny2}
                        alt=""
                      />
                    </div>
                    <div className="w-full p-2 flex justify-between">
                      <div className={`flex flex-col w-[90%] gap-1`}>
                        <div className="flex gap-2  items-center w-full">
                          <p
                            className={`text-sm text-indigo-400 font-bold text-nowrap overflow-hidden text-ellipsis`}
                          >
                            Search for Light
                          </p>
                          <span
                            className={`h-[.3rem] w-[.3rem] bg-gray-500 rounded-full`}
                          ></span>
                          <p
                            className={`text-xs text-nowrap overflow-hidden text-ellipsis ${
                              mode ? "text-orange-400" : "text-black"
                            }`}
                          >
                            Podcast
                          </p>
                        </div>
                        <p
                          className={`text-gray-400 text-xs overflow-hidden text-nowrap text-ellipsis`}
                        >
                          Join us as we navigate the depths of the human
                          experience, exploring the realms of spirituality,
                          personal growth, and holistic well-being
                        </p>
                      </div>
                      <i
                        title="save"
                        className={`cursor-pointer ri-bookmark-fill ${
                          mode
                            ? "text-white hover:text-gray-400"
                            : "text-gray-500 hover:text-black"
                        }  transition-all duration-500`}
                      ></i>
                    </div>
                  </div>

                  {/* Activity */}
                  <div
                    className={`sm:w-80 h-56 max-sm:w-[19rem]   ${
                      mode ? "bg-gray-950" : "bg-white"
                    } rounded-xl flex flex-col group cursor-pointer overflow-hidden transition-all duration-500`}
                  >
                    <div
                      className={"w-full h-[70%] object-cover overflow-hidden"}
                    >
                      <img
                        className={`w-full h-full object-cover group-hover:scale-105 transition-all`}
                        src={absfunny3}
                        alt=""
                      />
                    </div>
                    <div className="w-full p-2 flex justify-between">
                      <div className={`flex flex-col w-[90%] gap-1`}>
                        <div className="flex gap-2  items-center w-full">
                          <p
                            className={`text-sm text-indigo-400 font-bold text-nowrap overflow-hidden text-ellipsis`}
                          >
                            Planning to Escape
                          </p>
                          <span
                            className={`h-[.3rem] w-[.3rem] bg-gray-500 rounded-full`}
                          ></span>
                          <p
                            className={`text-xs text-nowrap overflow-hidden text-ellipsis ${
                              mode ? "text-orange-400" : "text-black"
                            }`}
                          >
                            Podcast
                          </p>
                        </div>
                        <p
                          className={`text-gray-400 text-xs overflow-hidden text-nowrap text-ellipsis`}
                        >
                          {" "}
                          The out-of-this-world space horror comedy that will
                          have you laughing, gasping, and questioning your
                          travel plans to Pluto!
                        </p>
                      </div>
                      <i
                        title="save"
                        className={`cursor-pointer ri-bookmark-fill ${
                          mode
                            ? "text-white hover:text-gray-400"
                            : "text-gray-500 hover:text-black"
                        }  transition-all duration-500`}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className={`flex flex-col w-[30%] gap-5 max-sm:w-full`}>
              {/* People recommended */}
              <div
                className={`w-full ${
                  mode ? "bg-[#1a1a1a]" : "bg-[#f6f6f6]"
                } rounded-2xl p-5 transition-all duration-500`}
              >
                <p
                  className={`text-xl font-bold ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-500 select-none`}
                >
                  People
                </p>
                <hr
                  className={`my-2 mb-4 border-t ${
                    mode ? "border-gray-700" : "border-gray-300 "
                  } trasnition-all duration-500`}
                />
                {/* People */}
                <div className="w-full flex flex-col gap-6">
                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer  `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man1}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm   font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          Tefari Sans
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Principal Designer at Google
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man2}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          Timber Lake
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Manager at Teflon
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man3}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          Sam Christine
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Actor , Public Figure
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man4}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          John Mark
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Content Creator
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man1}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          Will Smith
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Producer at HollyWood
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man2}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          Jimmy Sugar
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Sr. Product Designer at Spotify
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  {/* Person */}
                  <div
                    className={`flex gap-2 justify-between items-center select-none w-full cursor-pointer `}
                  >
                    <div className="flex gap-2 w-[70%]">
                      <div
                        className={`w-9 h-9 ${
                          mode ? "bg-blue-500" : " bg-blue-200"
                        } transition-all duration-500 rounded-full flex overflow-hidden justify-center items-center flex-shrink-0 `}
                      >
                        <img
                          src={man2}
                          className={`rounded-full object-cover h-full w-full`}
                          alt=""
                        />
                      </div>
                      <div className={`flex flex-col w-[80%] `}>
                        <p
                          className={`lg:text-base sm:text-sm font-bold  text-nowrap text-ellipsis overflow-hidden ${
                            mode ? "text-white" : "text-black"
                          } transition-all duration-500`}
                        >
                          Jimmy Sugar
                        </p>
                        <p
                          className={`text-xs text-gray-400 text-nowrap text-ellipsis overflow-hidden`}
                        >
                          Sr. Product Designer at Spotify
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      title="Follow"
                    >
                      <button
                        className={`group rounded-lg h-7 w-7 border-2 ${
                          mode
                            ? "border-white hover:bg-white"
                            : "border-black hover:bg-black"
                        }  transition-all duration-500`}
                      >
                        <i
                          className={`transition-all duration-500 ri-add-line ${
                            mode
                              ? "text-white group-hover:text-black"
                              : "text-black group-hover:text-white"
                          } text-sm`}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Interests */}
              <div
                className={`w-full ${
                  mode ? "bg-[#1a1a1a]" : "bg-[#f6f6f6]"
                } rounded-2xl p-5 transition-all duration-500`}
              >
                <p
                  className={`text-xl font-bold mb-5 select-none ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-500`}
                >
                  Interests
                </p>
                <div className={`flex flex-wrap w-full select-none gap-2`}>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Hollywood
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Tech
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Business
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Space
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Podcasts
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Corporate
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    Star Talk
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    fandom
                  </p>
                  <p
                    className={`rounded-full cursor-pointer px-3 py-1 text-xs  ${
                      mode
                        ? "text-white hover:bg-white hover:text-black  border-white"
                        : "text-black border-black hover:bg-black hover:text-white"
                    } transition-all duration-500 text-black border `}
                  >
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DragWheel */}
        <AnimatePresence>
          {dragWheelVisibility && (
            <DragWheel dragWheelState={dragWheelState} list={wheelList} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Profile;
