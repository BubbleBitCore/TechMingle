import { useSelector } from "react-redux";
import robot from "../assets/images/404 robot.png";

import barcode from "../assets/images/barcode.png";

const PageNotFound = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div
        className={`w-full h-full flex relative justify-center items-center overflow-hidden`}
      >
        <p
          className={` text-[2vw] orbitron absolute top-[10%] left-[10%] ${
            mode && "text-white"
          } transition-all`}
        >
          It looks
        </p>
        <p
          className={`text-[2vw] orbitron absolute top-[15%] left-[12%] ${
            mode && "text-white"
          } transition-all`}
        >
          you're lost
        </p>
        <div
          className={` flex justify-center items-center relative gap-[6rem] max-sm:gap-[2rem]`}
        >
          <p
            className={`relative  ${
              mode ? "text-white" : "text-[#333333]"
            } transition-all z-20 text-[25vw]  paytone  shadow-sm`}
          >
            4
          </p>
          <p
            className={`relative  ${
              mode ? "flickerNeonText " : "text-[#333333]"
            } transition-all z-20 text-[25vw]  paytone  shadow-sm`}
          >
            0
          </p>
          <p
            className={`relative ${
              mode ? "text-white" : "text-[#333333]"
            } transition-all z-20 text-[25vw]  paytone  shadow-sm`}
          >
            4
          </p>
          <div
            className={`z-30 absolute w-[30vw] top-40 right-5 `}
          >
            <img className={` w-full`} src={robot} alt="" />
          </div>
        </div>
        <img
          className={`z-30 absolute w-[15vw] -bottom-10 right-5 ${
            mode && "invert"
          }`}
          src={barcode}
          alt=""
        />
      </div>
    </>
  );
};

export default PageNotFound;
