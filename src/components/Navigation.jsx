import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navigation = ({ navigation }) => {
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
          <i className="ri-grid-fill text-3xl text-gray-600 mt-2"></i>
        </div>
        {navigation
          ? navigation.length > 0 &&
            navigation.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  navigate(item.link);
                }}
                className={`flex p-2 items-center justify-center select-none ${
                  item.name.toLowerCase() !== selectedItem
                    ? "hover:bg-gray-100  border-l-4 border-transparent"
                    : " border-l-4 border-[color:var(--primary-color)]"
                } transition-all rounded-r-md cursor-pointer ${
                  item.name.toLowerCase() === selectedItem
                    ? "text-[color:var(--primary-color)]"
                    : "text-[color:var(--icon-gray-color)]"
                }`}
              >
                <div className="flex sm:flex-col items-center">
                  <i className={`${item.icon} text-2xl`}></i>
                  <p className="tracking-narrow text-gray-700 ">
                    {item.name === "" ? "Home" : item.name}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Navigation;
