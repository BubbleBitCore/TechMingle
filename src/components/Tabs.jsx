// Creating a Generic Tab System
import { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const Tabs = ({ tabs, selectedTab }) => {
  const mode = useSelector((state) => state.common.mode);
  const initialTab = () => {
    if (selectedTab) {
      const iTab = tabs?.filter(
        (tab) =>
          tab.name ===
          selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)
      )[0];
      if (iTab) {
        return iTab;
      }
      return tabs[0];
    }
    return tabs[0];
  };
  const [selected, setSelected] = useState(initialTab());
  return (
    <>
      <AnimatePresence>
        <div
          className={`w-full h-full overflow-hidden overflow-y-auto relative`}
        >
          {/* Tab Header */}
          <div
            className={`w-full flex items-center max-sm:gap-4 sm:gap-12 sm:border-b-2 ${
              mode ? "border-[#1d1d1d]" : "border-gray-300"
            } pb-2  sticky top-0 max-sm:overflow-hidden max-sm:overflow-x-auto z-20 ${
              mode ? "bg-[#0B0D10]" : "bg-white"
            } transition-all duration-500`}
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
                      ? "text-white underline decoration-indigo-500 max-sm:underline-offset-[6px] underline-offset-[16px]"
                      : "text-[#696F7A] hover:text-white"
                    : selected.name === tab.name
                    ? "text-black underline decoration-indigo-500 max-sm:underline-offset-[6px] underline-offset-[16px]"
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
