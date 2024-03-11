import { useSelector } from "react-redux";
import robot from "../assets/images/404 robot.png";

import barcode from "../assets/images/barcode.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const mode = useSelector((state) => state.common.mode);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`w-full h-full flex relative justify-center items-center overflow-hidden select-none`}
      >
        <p
          className={`max-sm:hidden  text-[2vw] orbitron absolute top-[10%] left-[10%] ${
            mode && "text-white"
          } transition-all`}
        >
          It looks
        </p>
        <p
          className={`max-sm:hidden text-[2vw] orbitron absolute top-[15%] left-[12%] ${
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
            className={`max-sm:hidden z-30 absolute w-[30vw] top-40 right-5 `}
          >
            <img className={` w-full`} src={robot} alt="" />
          </div>
        </div>
        <img
          className={`max-sm:hidden z-30 absolute w-[15vw] -bottom-10 right-5 ${
            mode && "invert"
          }`}
          src={barcode}
          alt=""
        />
        <button onClick={()=>navigate("/")} className={`cursor-pointer ${mode?"hover:bg-white":"hover:bg-black"} ${mode?"hover:text-black":"hover:text-white"} text-[1vw] max-sm:text-[3vw] orbitron absolute max-sm:left-[50%] max-sm:-translate-x-1/2 bottom-[10%] left-[10%] max-sm:bottom-[33%] z-50 ${
            mode && "text-white text-center"
          } transition-all border ${mode?"border-white":"border-black"} rounded-3xl px-8 py-2 max-sm:px-6`}>Travel Home</button>
      </div>
    </>
  );
};

export default PageNotFound;
