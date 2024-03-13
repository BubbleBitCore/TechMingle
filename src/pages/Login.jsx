import { useSelector } from "react-redux";
import Animated3DGrid from "../components/Animated3DGrid";
import video from "../assets/videos/conveyor.mp4";

const Login = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-between items-center ${
          mode ? "bg-[#0B0D10]" : "bg-[#E9CBEB]"
        } p-10 px-14`}
      >
        <div
          className={`relative w-full h-full rounded-[2rem] bg-white flex overflow-hidden p-2`}
        >
          <div className={`flex flex-1 w-full h-full bg-white`}></div>
          <div
            className={`flex flex-1 w-full h-full  rounded-[2rem] flex-col relative`}
          >
            <div
              className={`w-full flex h-20 rounded-[2rem] rounded-b-none overflow-hidden`}
            >
              <div
                className={`bg-[#E9CBEB] rounded-b-none rounded-[2rem] w-[80%] h-full `}
              ></div>
              <div
                className={`bg-white flex justify-center items-center rounded-[2rem] rounded-b-none w-[20%] h-full relative outerborder p-4`}
              >
                <div
                  className={`relative z-30 rounded-3xl bg-violet-500 w-full h-full  flex justify-center items-center cursor-pointer`}
                >
                  <p className={`text-white text-xs`}>Sign Up</p>
                </div>
              </div>
            </div>
            <div
              className={`relative w-full bg-[#E9CBEB] h-full rounded-[2rem] rounded-t-none rounded-tr-[2rem]`}
            >
              <div
                className={`absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2 h-10 bg-[#F8EFF9] rounded-xl flex p-1 px-3 justify-between  items-center`}
              >
                <div className="flex justify-center items-center">
                  <span className={`w-5 h-5 bg-purple-600 rounded-md`}></span>
                  <p className={`mx-2 text-xs font-bold text-gray-500`}>
                    JOIN TechMingle...
                  </p>
                </div>
                <div className={`h-full `}>
                  <div
                    className={`bg-white px-3 h-full rounded-md flex gap-5 justify-center items-center`}
                  >
                    <p className={`text-xs font-bold text-black`}>Enter </p>
                    <i className="text-xl ri-drag-move-line"></i>
                  </div>
                </div>
              </div>
            </div>
            <Animated3DGrid />
            {/* <div className="z-50 absolute top-0 left-0 w-full h-full">
              <video className="bg-blend-color" autoplay muted loop>
                <source src={video}  />
              </video>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
