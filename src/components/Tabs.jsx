// Creating a Generic Tab System
import { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const Tabs = ({ tabs }) => {
  const mode = useSelector((state) => state.common.mode);
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <>
      <AnimatePresence>
        <div
          className={`w-full h-full overflow-hidden overflow-y-auto relative`}
        >
          {/* Tab Header */}
          <div
            className={`w-full flex items-center max-sm:gap-8 sm:gap-12 border-b-2 ${
              mode ? "border-[#1d1d1d]" : "border-gray-300"
            } pb-2  sticky top-0 max-sm:overflow-hidden max-sm:overflow-x-auto z-20 bg-white`}
          >
            {tabs?.map((tab, idx) => (
              <p
                key={idx}
                onClick={() => {
                  setSelected(tab);
                }}
                className={`${
                  mode
                    ? selected.name === tab.name
                      ? "text-white underline underline-offset-[16px]"
                      : "text-[#696F7A] hover:text-white"
                    : selected.name === tab.name
                    ? "text-black underline decoration-indigo-500 underline-offset-[16px]"
                    : "text-gray-400 hover:text-black "
                } transition-all cursor-pointer  text-lg select-none decoration-2`}
              >
                {tab.name}
              </p>
            ))}
          </div>
          {/* Tab Body */}
          <div className="w-full h-auto mt-5 max-sm:mt-3 z-10 relative">
            <selected.component />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Tabs;
