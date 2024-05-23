import { AnimatePresence, motion } from "framer-motion";
import Tabs from "../components/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../utils/conversion";
import BetaTest from "../components/BetaTest";
import { useSearchParams } from "react-router-dom";
import { setOpenEditor, setTempProfileImage } from "../slices/commonSlice";
import { useRef, useState } from "react";
import FlashMsg from "../components/FlashMsg/FlashMsg";
import { FLASH_ERROR } from "../constants/FlashMsgConstants";
// Account tab
const Account = () => {
  const mode = useSelector((state) => state.common.mode);
  const inputImageFile = useRef(null);
  const profileImage = useSelector((state) => state.common.profileImage);
  const dispatch = useDispatch();
  const user = "Naruto";
  const email = "naruto@gmail.com";
  const password = "naruto@gmail.com";
  const bio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const [accountVisibility, setAccountVisibility] = useState(1); // 1 for public 0 for private

  const imageValidationAndUpload = (file) => {
    if (file) {
      const Extension = file.name
        .substring(file.name.lastIndexOf(".") + 1)
        .toLowerCase();
      const MAX_SIZE = 2097152; // 2MB in bytes
      const MAX_DIMESNION = 2000; // 2000 pixels width and height

      if (
        Extension == "gif" ||
        Extension == "png" ||
        Extension == "bmp" ||
        Extension == "jpeg" ||
        Extension == "jpg"
      ) {
        if (file) {
          var size = file.size;
          if (size > MAX_SIZE) {
            // console.log("Maximum file size exceeds");
            setFlashType(FLASH_ERROR);
            setFlashTitle("Size Error");
            setFlashMsg("Image Should be less-than or equal-to 2 MB!");
            setFlashVisibility(true);
            inputImageFile.current.value="";
            return;
          }
          const img = new Image();
          const _URL = window.URL || window.webkitURL;
          img.src = _URL.createObjectURL(file);
          img.onload = () => {
            if (img.width > MAX_DIMESNION || img.height > MAX_DIMESNION) {
              // console.log(
              //   "Dimensions Should be equal or less than 2000 pixels"
              // );
              setFlashType(FLASH_ERROR);
              setFlashTitle("Dimension Error");
              setFlashMsg(
                "Dimensions Should be equal-to or less-than 2000 pixels!"
              );
              setFlashVisibility(true);
              inputImageFile.current.value="";
            } else {
              dispatch(setTempProfileImage(file));
              dispatch(setOpenEditor(true));
            }
          };
        }
      } else {
        // console.log("Format not supported");
        setFlashType(FLASH_ERROR);
        setFlashTitle("Format Error");
        setFlashMsg("Input Image Format is not supported");
        setFlashVisibility(true);
        inputImageFile.current.value="";
      }
    }
  };
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
      <style>
        {`
        .imgChange:hover::after {
          opacity:0.5;
        }
        .imgChange:hover::before {
          opacity:1;
        }
        
        .imgChange::after{
          content:"";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:0;
          left:0;
          height:100%;
          width:100%;
          background-color: black;
          border-radius:100%;
          z-Index:1;
        }
        .imgChange::before{
          content:"Change Avatar";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:50%;
          left:50%;
          z-Index:2;
          transform:translate(-50%,-50%);
          border-radius:100%;
          color:white;
          font-size:1rem;
         
        }
        {/*Photo Editor overide Styles */ }
        .rp-editor{
          z-index:30 !important;
        }
        .toggle-container {
          --inactive-color: #1868e3;
          position: relative;
          aspect-ratio: 292/142;
          height: 1.875em;
          --active-color: #35c759;
          
        }
        .toggle-input {
          appearance: none;
          margin: 0;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        
        .toggle {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        
        .toggle-background {
          fill: var(--inactive-color);
          transition: fill 0.4s;
        }
        .toggle-input:checked + .toggle .toggle-background {
          fill: var(--active-color);
        }
        
        .toggle-circle-center {
          transform-origin: center;
          transition: transform 0.6s;
        }
        .toggle-input:checked + .toggle .toggle-circle-center {
          transform: translateX(150px);
        }
        
        .toggle-circle {
          transform-origin: center;
          backface-visibility: hidden;
          transition: transform 0.45s;
        }
        .toggle-circle.left {
          transform: scale(1);
        }
        .toggle-input:checked + .toggle .toggle-circle.left {
          transform: scale(0);
        }
        .toggle-circle.right {
          transform: scale(0);
        }
        .toggle-input:checked + .toggle .toggle-circle.right {
          transform: scale(1);
        }
        
        .toggle-icon {
          transition: fill 0.4s;
        }
        .toggle-icon.on {
          fill: var(--inactive-color);
        }
        .toggle-input:checked + .toggle .toggle-icon.on {
          fill: #fff;
        }
        .toggle-icon.off {
          fill: #eaeaec;
        }
        .toggle-input:checked + .toggle .toggle-icon.off {
          fill: var(--active-color);
        }
        `}
      </style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full flex flex-col"
      >
        {/* Account Edit */}
        <div className={`w-full flex flex-col p-5 max-sm:p-2`}>
          <p
            className={`select-none text-3xl font-bold mb-5 max-sm:text-center ${
              mode ? "text-white" : "text-black"
            } transition-all`}
          >
            Profile Details
          </p>
          <div className="w-full flex gap-10 max-sm:flex-col max-sm:mb-5">
            {/* Acount details */}
            <div
              className={`max-sm:w-full max-sm:order-2 w-[35%]  flex flex-col gap-4  duration-500 transition-all`}
            >
              {/* name */}
              <label
                htmlFor="name"
                className={`select-none text-sm font-bold cursor-pointer  ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Name
              </label>
              <div className="flex flex-col relative">
                <input
                  defaultValue={user}
                  type="text"
                  id="name"
                  className={`w-full border-2 border-gray-600  p-2 pr-10 rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-all 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } duration-500`}
                />
                <i
                  className={`ri-user-line ${
                    mode ? "text-white" : "text-black"
                  } transition-all top-1/2 -translate-y-1/2 right-4 absolute cursor-pointer`}
                ></i>
              </div>
              {/* Email */}
              <label
                htmlFor="email"
                className={`select-none text-sm font-bold cursor-pointer  ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Email
              </label>
              <div className="flex flex-col relative">
                <input
                  defaultValue={email}
                  readOnly
                  type="text"
                  id="email"
                  className={`w-full border-2 border-gray-600  p-2 pr-10 rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-all 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } relative duration-500`}
                />
                <i
                  className={`ri-at-line ${
                    mode ? "text-white" : "text-black"
                  } transition-all top-1/2 -translate-y-1/2 right-4 absolute cursor-pointer duration-500`}
                ></i>
              </div>
              {/* Passsword */}
              <label
                htmlFor="password"
                className={`select-none text-sm font-bold cursor-pointer ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Password
              </label>
              <div className="flex flex-col relative">
                <input
                  defaultValue={password}
                  type="password"
                  id="password"
                  className={`w-full border-2 border-gray-600  p-2 pr-10 rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-all 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } relative duration-500`}
                />
                <i
                  className={`ri-lock-password-line ${
                    mode ? "text-white" : "text-black"
                  } transition-all top-1/2 -translate-y-1/2 right-4 absolute cursor-pointer duration-500`}
                ></i>
              </div>
            </div>
            {/* Bio */}
            <div
              className={`w-[30%]  flex flex-col gap-4 max-sm:order-3 max-sm:w-full sm:border-r sm:pr-5 ${
                mode ? "sm:border-gray-800" : "sm:border-gray-200"
              }`}
            >
              {/* name */}
              <label
                htmlFor="bio"
                className={`select-none text-sm font-bold cursor-pointer  ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Bio
              </label>
              <div className="flex flex-col relative">
                <textarea
                  placeholder="Bio"
                  type="text"
                  id="bio"
                  defaultValue={bio}
                  rows={5}
                  className={`resize-none w-full border-2 border-gray-600  p-2  rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-color 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } duration-500 text-sm`}
                />
              </div>
              {/* Password details */}
              <div
                className={`max-sm:w-full max-sm:order-3 sm:w-auto  duration-500 transition-all sm:flex flex-col sm:justify-center sm:items-center my-2`}
              >
                <p
                  className={`w-full font-bold text-xl mb-3 ${
                    mode ? "text-[#b3b3b3]" : "text-black"
                  } transition-all select-none duration-500`}
                >
                  Password Requirements
                </p>
                <div className="w-full flex flex-col">
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2">1.</span>At least 8 characters
                  </p>
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2 select-none">2.</span> At least 1
                    uppercase letter
                  </p>
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2 select-none">3.</span> At least 1
                    lowercase letter
                  </p>
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2 select-none">4.</span> Can contain
                    special symbols
                  </p>
                </div>
              </div>
            </div>
            {/* Profile Image */}
            <div className="max-sm:w-full w-[25%] max-sm:order-1  ">
              <div
                className={`w-full relative aspect-square ${
                  mode ? "bg-[#1a1a1a]" : "bg-gray-100"
                }  rounded-full transition-all duration-500`}
              >
                <img
                  src={profileImage}
                  alt=""
                  className="rounded-full object-cover bg-cover w-full h-full"
                />
                <label
                  title={user}
                  className="absolute imgChange rounded-full h-full w-full top-0 left-0 cursor-pointer "
                  htmlFor="image"
                ></label>
                <input
                  ref={inputImageFile}
                  className="hidden"
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    imageValidationAndUpload(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          {/* Action buttons */}
          <div className="flex gap-5 mt-1 max-sm:w-full">
            <button
              className={`text-sm max-sm:flex-1  p-2 px-4 hover:opacity-75 transition-all border-2 border-gray-300 rounded-md ${
                mode ? "text-gray-200" : "text-black"
              } duration-500`}
            >
              Cancel
            </button>
            <button className="max-sm:flex-1 text-sm p-2 px-4 text-white  bg-indigo-500 hover:bg-indigo-600 rounded-md transition-all">
              Save Changes
            </button>
          </div>
          <hr
            className={`my-5  border ${
              mode ? "border-[#1d1d1d]" : "border-gray-200"
            } duration-500`}
          />
          {/* Change Visibility */}
          <div className={`flex flex-col gap-2 justify-center mb-5`}>
            <p
              className={`select-none text-lg font-bold mb-1 ${
                mode ? "text-white" : "text-black"
              } duration-500`}
            >
              Account Visibility
            </p>
            {accountVisibility === 1 ? (
              <p
                className={`text-xs ${
                  mode ? "text-gray-400" : "text-gray-600 "
                }  transition-all duration-500`}
              >
                Public,Everyone can see your posts and profile information.
              </p>
            ) : (
              <p
                className={`text-xs ${
                  mode ? "text-gray-400" : "text-gray-600 "
                } transition-all duration-500`}
              >
                Private,Only approved followers can see your posts and other
                information.
              </p>
            )}
            <div className="">
              <div className="toggle-container">
                <input
                  checked={accountVisibility === 1}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAccountVisibility(1);
                    } else {
                      setAccountVisibility(0);
                    }
                  }}
                  className="toggle-input"
                  type="checkbox"
                />
                <svg
                  className="toggle"
                  viewBox="0 0 292 142"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="toggle-background"
                    d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
                  />
                  <rect
                    className="toggle-icon on"
                    x="64"
                    y="39"
                    width="12"
                    height="64"
                    rx="6"
                  />
                  <path
                    className="toggle-icon off"
                    fillRule="evenodd"
                    d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"
                  />
                  <g filter="url('#goo')">
                    <rect
                      className="toggle-circle-center"
                      x="13"
                      y="42"
                      width="116"
                      height="58"
                      rx="29"
                      fill="#fff"
                    />
                    <rect
                      className="toggle-circle left"
                      x="14"
                      y="14"
                      width="114"
                      height="114"
                      rx="58"
                      fill="#fff"
                    />
                    <rect
                      className="toggle-circle right"
                      x="164"
                      y="14"
                      width="114"
                      height="114"
                      rx="58"
                      fill="#fff"
                    />
                  </g>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      result="blur"
                      stdDeviation="10"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    />
                  </filter>
                </svg>
              </div>
            </div>
          </div>
          {/* Delete Account */}
          <div className="w-full">
            <p
              className={`select-none text-lg font-bold mb-1 ${
                mode ? "text-white" : "text-black"
              } duration-500`}
            >
              Delete Account
            </p>
            <p
              className={`text-xs ${
                mode ? "text-gray-400" : "text-gray-600 "
              } mb-5 transition-all duration-500`}
            >
              Deleting your account is permanent and this actioncannot be
              reversed.
            </p>
            <button className="bg-red-500 max-sm:w-full text-sm p-3 px-5 rounded-md text-white hover:bg-red-600 transition-all ">
              Delete Account
            </button>
          </div>
        </div>
      </motion.div>
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
          />
        )}
      </AnimatePresence>
    </>
  );
};
// Activity tab
const Activity = () => {
  const mode = useSelector((state) => state.common.mode);
  const currentSessionId = "42.105.89.18";
  const Sessions = [
    {
      platform: "Smartphone",
      Location: "Rajkot, Gujarat , India",
      IP: "127.0.0.1",
      sessionId: "42.105.89.11",
      createdAt: new Date(),
      os: "Android",
      browser: "chrome",
    },
    {
      platform: "PC",
      Location: "Gandhidham, Gujarat , India",
      IP: "127.0.0.1",
      sessionId: "42.105.89.18",
      createdAt: new Date(),
      os: "Mac",
      browser: "mozilla firefox",
    },
    {
      platform: "PC",
      Location: "Surat, Gujarat , India",
      IP: "127.0.0.1",
      sessionId: "42.105.89.13",
      createdAt: new Date(),
      os: "Windows",
      browser: "chrome",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`w-full flex flex-col gap-3  p-2 `}
      >
        {Sessions?.map((item, key) => (
          <div
            key={key}
            className={`w-full flex justify-between items-center gap-5 rounded-md max-sm:rounded-xl ${
              mode
                ? "bg-[#222222] hover:bg-[#282828]"
                : "bg-gray-100 hover:bg-[#e9e9e9]"
            } p-4 py-2 transition-all duration-500 cursor-pointer group max-sm:flex-col`}
          >
            <div className="flex items-center md:gap-5 sm:gap-2 relative  max-sm:w-full max-sm:gap-3 group">
              {/* Icon*/}
              <div
                className={`${
                  mode ? "bg-[#1a1a1a]" : "bg-gray-300"
                } rounded-full h-14 w-14 overflow-hidden flex justify-center max-sm:self-start items-center transition-color duration-500 opacity-55 group-hover:opacity-100 cursor-pointer `}
              >
                <i
                  className={`${
                    item.platform === "Smartphone"
                      ? "ri-smartphone-line "
                      : "ri-computer-line"
                  } transition-color duration-500 ${
                    mode ? "text-white" : "text-black"
                  } text-xl `}
                ></i>
              </div>
              <div className="flex max-sm:flex-col max-sm:gap-1 gap-5  sm:items-center items-start">
                {/* platform type */}
                <div className="flex gap-1 sm:gap-1 items-center">
                  {/* Status */}
                  <span
                    title={`${
                      item.sessionId === currentSessionId
                        ? "current session"
                        : "other session"
                    }`}
                    className={`h-5 w-5 border ${
                      item.sessionId === currentSessionId
                        ? "border-green-400"
                        : "border-indigo-500"
                    } rounded-full ${
                      mode ? "bg-gray-800" : "bg-white"
                    } flex sm:order-2 justify-center items-center scale-75 transition-all duration-500 `}
                  >
                    <span
                      className={`rounded-full h-3 w-3 ${
                        item.sessionId === currentSessionId
                          ? "bg-green-500"
                          : "bg-indigo-500"
                      }`}
                    ></span>
                  </span>
                  <p
                    className={`${
                      mode ? "text-gray-300" : "text-black"
                    } text-lg sm:order-1 sm:w-[13rem] w-[12rem] text-ellipsis overflow-hidden text-nowrap`}
                  >
                    Session on {item.os}
                  </p>
                </div>
                {/* Location*/}
                <div className={`flex flex-col `}>
                  <p
                    className={`${
                      mode ? "text-gray-200" : "text-black"
                    } text-sm sm:w-[15rem]  w-[13rem] text-ellipsis overflow-hidden sm:text-nowrap`}
                  >
                    {item.Location}{" "}
                    <i className="max-sm:hidden ri-map-pin-2-line font-thin"></i>
                  </p>
                </div>
                {/* Date */}
                <div
                  className={`flex  justify-center items-center sm:border-2 opacity-85 sm:rounded-full sm:border-purple-500 sm:px-2 sm:py-1 pt-2 sm:group-hover:bg-purple-500`}
                >
                  <p
                    className={`${
                      mode
                        ? "text-purple-400 sm:group-hover:text-black"
                        : "text-black"
                    } text-sm transition-all `}
                  >
                    {formatDate(item.createdAt)}
                  </p>
                </div>
                {/* IP Address*/}
                <div
                  className={`flex flex-col  sm:border-2 opacity-85 sm:rounded-full sm:border-green-500 sm:px-2 sm:py-1 sm:group-hover:bg-green-500`}
                >
                  <p
                    className={`${
                      mode
                        ? "text-green-400 sm:group-hover:text-black"
                        : "text-black"
                    } text-sm `}
                  >
                    IPv4: {item.IP}
                  </p>
                </div>
              </div>
            </div>
            {/* Actions*/}
            <div className="hidden gap-2 group-hover:flex max-sm:w-full">
              {/* Delete Session */}
              <button
                className={`p-2 text-xs px-3 sm:border-2 ${
                  mode
                    ? "sm:border-red-500 sm:hover:bg-red-500 hover:text-white sm:text-red-500 max-sm:text-white max-sm:bg-red-500 max-sm:hover:bg-red-600 "
                    : "bg-red-500 text-white"
                } transition-all   rounded-md max-sm:w-full `}
              >
                <i className={`ri-pulse-line mr-1 max-sm:hidden`}></i>{" "}
                <span className={``}>Revoke</span>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
// Notifications tab
const Notifications = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-full flex justify-center items-center py-11"
      >
        <BetaTest />
      </motion.div>
    </>
  );
};

// /settings?tab=notifications|activity|account

const Settings = ({ Header }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = [
    { name: "Account", component: Account },
    { name: "Activity", component: Activity },
    { name: "Notifications", component: Notifications },
  ];
  return (
    <>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
        <Header urlName="Settings" />
        <div className="mt-1 mb-2 h-full w-full overflow-hidden overflow-y-auto pt-3">
          <Tabs tabs={tabs} selectedTab={searchParams.get("tab")} />
        </div>
      </div>
    </>
  );
};

export default Settings;
