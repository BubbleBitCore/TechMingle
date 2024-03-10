import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navigation = ({ navigation }) => {
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState(pathname.split("/")[1]);
  useEffect(() => {
    if (pathname.split("/")[1] === "") {
      setSelectedItem("home");
    } else setSelectedItem(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <>
      <div className="flex flex-col justify-between text-xs h-full w-full   ">
        <div className="flex items-center justify-center">
          <i
            className={`ri-windy-line text-3xl  mt-2 ${
              mode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-gradient"
                : "text-gray-600"
            }`}
          ></i>
        </div>
        {navigation
          ? navigation.length > 0 &&
            navigation.map((item, idx) =>
              item.name !== "Settings" ? (
                <div
                  key={idx}
                  onClick={() => {
                    navigate(item.link);
                  }}
                  className={`flex p-2 items-center justify-center select-none ${
                    item.name.toLowerCase() !== selectedItem
                      ? `${
                          mode ? "hover:bg-[#212121]" : "hover:bg-gray-100 "
                        }  border-l-4 border-transparent transition-all duration-200`
                      : " border-l-4 border-[color:var(--primary-color)]"
                  } transition-all rounded-r-md cursor-pointer ${
                    item.name.toLowerCase() === selectedItem
                      ? "text-[color:var(--primary-color)]"
                      : `${mode ? "text-gray-500" : "text-[#656666]"} `
                  }`}
                >
                  <div className="flex sm:flex-col items-center">
                    <i className={`${item.icon} text-2xl`}></i>
                    <p
                      className={`tracking-narrow  ${
                        mode ? "text-gray-400" : "text-gray-700"
                      } transition-all`}
                    >
                      {item.name === "" ? "Home" : item.name}
                    </p>
                  </div>
                </div>
              ) : null
            )
          : null}
      </div>
    </>
  );
};

export default Navigation;
