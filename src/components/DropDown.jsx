import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const DropDown = ({
  error = false,
  setError,
  title,
  value,
  setValue,
  list,
  visible,
  setVisible,
  generalCallback,
}) => {
  const mode = useSelector((state) => state.common.mode);
  const dropDownRef = useRef(null);
  
  return (
    <>
      <div
        className="flex flex-col w-1/2 h-fit"
        ref={dropDownRef}
        onClick={(e) => {
          console.log(title + " clicked");
          setVisible(!visible);
          e.stopPropagation();
          generalCallback();
        }}
      >
        <div
          className={`flex border justify-between items-center rounded-sm p-2 px-3  transition-all duration-300  ${
            error
              ? "border-red-500"
              : `${mode ? "border-zinc-700 hover:border-zinc-400" : ""}`
          }`}
        >
          <div
            className={`flex flex-col gap-1 text-xs transition-all duration-300`}
          >
            <p
              className={`${
                error
                  ? "text-red-500"
                  : `${mode ? "text-zinc-400" : "text-zinc-600"}`
              }`}
            >
              {title}
            </p>
            <p
              className={`${
                mode ? "text-zinc-200" : "text-zinc-800"
              } text-sm capitalize`}
            >{`${value}`}</p>
          </div>
          <i className="ri-arrow-down-s-fill text-xl cursor-pointer"></i>
        </div>
        <div
          className={`${
            visible ? "flex" : "hidden"
          } z-10 transition-all duration-300`}
        >
          <div
            className={`flex flex-col ${
              mode ? "bg-zinc-900" : "bg-[#f9f8f8]"
            } w-full rounded-lg overflow-hidden capitalize`}
          >
            {list.length > 0 &&
              list.map((item, idx) => (
                <p
                  key={idx}
                  className={`py-1 text-xs ${
                    mode
                      ? "hover:bg-blue-600"
                      : "hover:bg-blue-500 hover:text-white"
                  }  px-4 transition-all duration-500 cursor-pointer`}
                  onClick={() => {
                    setValue(item);
                    if (error) {
                      setError(false);
                    }
                    setVisible(false);
                  }}
                >
                  {`${item}`}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
