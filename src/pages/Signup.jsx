import man2 from "../assets/images/man2.png";
import FancyButton from "../components/FancyButton";

const Signup = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center  items-center  bgGradient">
        <div className="w-[70%] h-[70vh] rounded-2xl flex justify-center items-center">
          {/* section 1 */}
          <div className="w-[60%] flex justify-center items-center h-full rounded-2xl  border-2 border-r-0 rounded-r-none  border-[#39196D] relative z-20">
            <div className="flex  flex-col justify-center items-center ">
              <i className="ri-vip-crown-2-fill  relative z-20 bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text text-8xl mb-3"></i>
              <p className="uppercase text-center relative z-20 bg-gradient-to-r from-violet-700 to-purple-300 via-indigo-400 text-transparent bg-clip-text text-6xl font-bold monsterrat mb-3">
                TECHMINGLE
              </p>
              <p className="uppercase text-center relative z-20 bg-gradient-to-r from-violet-700 to-purple-300 via-indigo-400 text-transparent bg-clip-text text-6xl font-bold monsterrat mb-3">
                FALL-ONLINE
              </p>
              <p className="uppercase text-center relative z-20 bg-gradient-to-r from-violet-700 to-purple-300 via-indigo-400 text-transparent bg-clip-text text-6xl font-bold monsterrat mb-3">
                SIGNUP-FREE
              </p>
            </div>
            {/* Text bg */}
            <div className="absolute overflow-hidden top-0 h-full w-full left-0 outlinedText z-10 orbitron text-[50vw] ">
              <i className="absolute -top-48 left-[30%] ri-gatsby-line opacity-85  "></i>
            </div>
          </div>
          {/* section 2 */}
          <div className="w-[40%] h-full rounded-2xl rounded-l-none  flex">
            {/* form */}
            <div className="w-[75%] h-full bg-white flex flex-col p-5 py-8">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  {/* avtar */}
                  <div className="w-[4vw] h-[4vw] rounded-md bg-[#8044df]">
                    <img src={man2} alt="" />
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-lg poppins ">ADMITS</p>
                    <p className="font-bold  text-4xl poppins">01</p>
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                  <input
                    className="border-none outline-none text-3xl poppins font-bold"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              {/* Divider */}
              <div className="my-3 mb-6 flex gap-2">
                {new Array(16).fill(0).map((_, key) => (
                  <span key={key} className="h-[3px] w-2 bg-gray-200"></span>
                ))}
              </div>
              {/* Other fields */}
              <div className="w-full overflow-hidden mb-3">
                <input
                  className="border-none w-full outline-none text-xl bg-[#F2F5FE] rounded-md px-3 pr-10 py-1 "
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="w-full overflow-hidden mb-3">
                <input
                  className="border-none outline-none text-xl bg-[#F2F5FE] rounded-md px-3 pr-10 py-1   "
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="w-full overflow-hidden  relative  mb-3">
                <input
                  className="border-none outline-none text-xl bg-[#F2F5FE] rounded-md px-3 pr-10 py-1   "
                  type="password"
                  placeholder="Pass"
                />
                <i className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer opacity-55 hover:opacity-100 transition-all ri-eye-fill"></i>
              </div>
              <div className="px-3 my-2">
                <p className="text-xl font-bold">DATE</p>
                <p className="text-gray-500">{new Date().toLocaleString()}</p>
              </div>
              <div className="w-full h-[10%] mt-5">
                <FancyButton text1="Create" text2="Journey" />
              </div>
            </div>
            {/* Ticket styles */}
            <div className="w-[10%] h-full relative ">
              <div className="bg-[#0F0719]  w-full h-10 absolute -top-6 rounded-full"></div>
              <div className="bg-white w-full border border-white  h-full flex justify-center items-center flex-col gap-2">
                {new Array(23).fill(0).map((_, key) => (
                  <span key={key} className="h-3 w-[2px] bg-gray-300"></span>
                ))}
              </div>
              <div className="bg-[#0F0719]  w-full h-10 absolute -bottom-6 rounded-full"></div>
            </div>
            {/* Company Text */}
            <div className="w-[15%] h-full  bg-white rounded-l-none rounded-2xl relative">
              <div className="-rotate-90 absolute 2xl:right-[65%] sm:right-1/2  bottom-1/2 translate-y-1/2 translate-x-1/2 font-bold poppins text-[2.25vw]">
                <p>
                  <i className="ri-vip-crown-2-fill mr-1 text-[#2663EB]"></i>
                  techmingle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
