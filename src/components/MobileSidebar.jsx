import Drawer from "react-modern-drawer";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigation } from "../constants/navigation";
import "react-modern-drawer/dist/index.css";

const MobileSidebar = () => {
  // For Mobile Viewport Drawer Control
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuDrawer = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const { pathname } = useLocation();
  //navigation
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(pathname.split("/")[1]);
  useEffect(() => {
    if (pathname.split("/")[1] === "") {
      setSelectedItem("home");
    } else setSelectedItem(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <>
      <div className="hidden max-sm:inline-flex justify-center ">
        <i onClick={toggleMenuDrawer} className="ri-menu-line"></i>
        <Drawer
          open={isMenuOpen}
          onClose={toggleMenuDrawer}
          direction="left"
          size="75vw"
          className="md:hidden"
          lockBackgroundScroll={true}
        >
          {/* title and buttons */}
          <div className="w-full flex flex-col h-full bg-white">
            {/* title */}
            <div className="flex justify-between p-3 mt-2">
              <div className="flex flex-col select-none">
                {/* Title */}
                <div className="flex gap-1 font-bold  text-xl items-center pl-2">
                  <i className="fa-solid fa-gears"> </i>
                  Techmingle
                </div>
              </div>
              <i
                onClick={toggleMenuDrawer}
                className="ri-close-line text-2xl text-black hover:text-[color:var(--primary-color)] transition-all font-bold"
              ></i>
            </div>
            {/* divider */}
            <hr className="border-t-2 border-gray-800 mb-3" />
            {/* buttons */}
            <div className="flex flex-col gap-1 text-black text-lg px-2">
              {navigation
                ? navigation.length > 0 &&
                  navigation.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        navigate(item.link);
                      }}
                      className={`flex gap-3 p-2 px-5 items-center ${
                        item.name.toLowerCase() !== selectedItem
                          ? "hover:bg-[color:var(--hover-gray-color)]"
                          : "   "
                      } transition-all rounded-xl cursor-pointer ${
                        item.name.toLowerCase() === selectedItem
                          ? "bg-[color:var(--primary-color)] text-white"
                          : ""
                      }`}
                    >
                      <i className={`${item.icon}`}></i>
                      <p>{item.name === "" ? "home" : item.name}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MobileSidebar;
