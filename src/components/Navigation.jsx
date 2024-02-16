import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navigation = ({ navigation }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState(pathname.split("/")[1]);
  useEffect(() => {
    setSelectedItem(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <>
      <div className="w-full h-full flex justify-between items-center font-extrabold px-6 pb-2">
        <p className="text-4xl">TechMingle</p>
        <p className="flex h-12 w-12 rounded-full border border-black text-black items-center justify-center">
          <i className="ri-user-line text-3xl"></i>
        </p>
      </div>
      <div className="flex justify-between text-xl">
        {navigation
          ? navigation.length > 0 &&
            navigation.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  navigate(item.link);
                }}
                className={`flex gap-3 p-2 px-5 ${
                  item.name.toLowerCase() !== selectedItem
                    ? "hover:bg-gray-100"
                    : "   "
                } transition-all rounded-xl cursor-pointer ${
                  item.name.toLowerCase() === selectedItem
                    ? "underline underline-offset-8 "
                    : ""
                }`}
              >
                <i className={`${item.icon}`}></i>
                <p className="tracking-narrow text-black ">
                  {item.name === "" ? "Home" : item.name}
                </p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Navigation;
