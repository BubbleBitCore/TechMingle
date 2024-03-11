import React, { useEffect, useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { useDispatch, useSelector } from "react-redux";
import ClickMenu from "./ClickMenu";
import { changeMode, changeSnackBarState } from "../slices/commonSlice";

const Header = ({ urlName }) => {
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);
  const dispatch = useDispatch();
  // Notifications menu is handled here
  const [notiVisiblity, setNotiVisibility] = useState(false);
  const notificationList = [
    {
      value: "Notification1",
      icon: "ri-moon-line",
      classes: "",
      function: () => {},
    },
    {
      value: "Notification2",
      icon: "ri-moon-line",
      classes: "",
      function: () => {},
    },
  ];

  const [modeListVisiblity, setModeListVisibility] = useState(false);
  const modeList = [
    {
      value: "Light",
      icon: "ri-sun-line",
      classes: "",
      function: () => {
        dispatch(changeMode(false));
      },
    },
    {
      value: "Dark",
      icon: "ri-moon-line",
      classes: "",
      function: () => {
        dispatch(changeMode(true));
      },
    },
    {
      value: "System",
      icon: "ri-settings-2-fill",
      classes: "",
      function: () => {
        dispatch(
          changeMode(
            window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
          )
        );
      },
    },
  ];

  const [userListVisiblity, setUserListVisibility] = useState(false);
  const userList = [
    {
      value: "Profile",
      icon: "ri-star-smile-line",
      classes: "",
      function: () => {},
    },
    {
      value: "Settings",
      icon: "ri-settings-4-line",
      classes: "",
      function: () => {},
    },
    {
      value: "Logout",
      icon: "ri-shut-down-line",
      classes: "text-red-500",
      function: () => {},
    },
  ];

  const removeClickMenus = () => {
    setNotiVisibility(false);
    setModeListVisibility(false);
    setUserListVisibility(false);
  };
  useEffect(() => {
    window.addEventListener("click", removeClickMenus);
    return () => {
      window.removeEventListener("click", removeClickMenus);
    };
  });

  return (
    <>
      <div className="flex w-full justify-between items-center font-extrabold mb-2 pr-3 max-sm:pr-0">
        <div
          className={`flex max-sm:text-2xl  text-3xl gap-3 select-none ${
            mode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-gradient"
              : "text-black"
          }`}
        >
          <MobileSidebar />
          {urlName}
        </div>
        <div className="flex gap-2  justify-center items-center font-normal ">
          {/* Notification icon */}
          <div
            className={`hover:cursor-pointer flex h-12 w-12 rounded-full     items-center justify-center relative max-sm:h-8 max-sm:w-8
             ${mode ? "text-gray-200" : "text-black"} transition-all`}
            title="notifications"
            onClick={(e) => {
              e.stopPropagation();
              removeClickMenus();
              setNotiVisibility(true);
              dispatch(changeSnackBarState({ message: "Hello guys,I'm back",visible:true }));
            }}
          >
            <i className="hover:opacity-100 opacity-65 transition-all ri-notification-3-line text-2xl"></i>
            <ClickMenu menu={notificationList} visibility={notiVisiblity} />
            {/* If there are any notifications */}
            {true && (
              <span className="bg-red-500 opacity-100 h-[0.55rem] w-[0.55rem] max-sm:top-0 max-sm:right-1 rounded-full absolute top-3 right-3"></span>
            )}
          </div>
          {/* Vertical divider */}
          <span
            className={`border-2 border-l ${
              mode ? "border-[#2b2b2b]" : "border-gray-200"
            } h-9`}
          ></span>
          {/* Mode icon */}
          <div
            className={`hover:cursor-pointer flex h-12 w-12 rounded-full items-center justify-center relative max-sm:h-8 max-sm:w-8 ${
              mode ? "text-gray-200" : "text-black"
            } transition-all `}
            title="mode"
            onClick={(e) => {
              e.stopPropagation();
              removeClickMenus();
              setModeListVisibility(true);
            }}
          >
            <i
              className={`${
                mode ? " ri-moon-line" : "ri-sun-line"
              } font-normal text-2xl hover:opacity-100 opacity-65 transition-all`}
            ></i>
            <ClickMenu menu={modeList} visibility={modeListVisiblity} />
          </div>
          {/* User icon */}
          <div
            className={`hover:cursor-pointer flex h-12 w-12  rounded-full items-center justify-center  max-sm:h-8 max-sm:w-8 relative ${
              mode ? "text-gray-400 " : "text-black"
            } transition-all `}
            title="user"
            onClick={(e) => {
              e.stopPropagation();
              removeClickMenus();
              setUserListVisibility(true);
            }}
          >
            <div
              className={`h-[95%] rounded-full w-[95%] ${
                mode ? "bg-[#1c1c1c]" : "bg-gray-200"
              } flex justify-center items-center transition-all`}
            >
              <i
                className={`ri-user-line font-normal text-2xl max-sm:text-lg ${
                  mode && "hover:text-white"
                }`}
              ></i>
              <ClickMenu menu={userList} visibility={userListVisiblity} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
