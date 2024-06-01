import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import sparkleGreen from "../assets/images/sparkleSvgGreen.svg";
import sparkleBlue from "../assets/images/sparkleSvgBlue.svg";
import sparkleYellow from "../assets/images/sparkleSvgYellow.svg";
import sparklePink from "../assets/images/sparkleSvgPink.svg";

const Home = ({ Header }) => {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
        .gradient{   
          background-color: rgb(37, 99, 235);
          background-image: radial-gradient(at 51% 7%, rgb(236, 72, 153) 0, transparent 100%);
        }
        .spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}
        
        .glass{
          background: rgba(255, 255, 255, 0.31);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5.6px);
          -webkit-backdrop-filter: blur(5.6px);

        }
        .row3Gradient{
          background-color: rgb(167, 139, 250);
          background-image: radial-gradient(at 59% 10%, rgb(126, 34, 206) 0, transparent 37%), radial-gradient(at 68% 42%, rgb(190, 24, 93) 0, transparent 97%), radial-gradient(at 75% 69%, rgb(236, 252, 203) 0, transparent 63%), radial-gradient(at 63% 15%, rgb(165, 180, 252) 0, transparent 74%), radial-gradient(at 65% 9%, rgb(255, 237, 213) 0, transparent 35%);
      `}
      </style>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4 ">
        <Header urlName="TechMingle" />
        <div className="mt-1 mb-2 h-full w-full overflow-hidden overflow-y-auto">
          {/* section1 */}
          <div
            className={`select-none w-full h-full flex flex-col justify-center items-center`}
          >
            {/* row 1 */}
            <div className={`flex gap-3 relative`}>
              <div className={`aspira text-white text-8xl`}>unite</div>
              <div className={`flex z-30 relative gap-0 justify-center items-center`}>
                <div
                  className={`rounded-full w-[6rem] h-[6rem] flex justify-center items-center bg-green-400`}
                >
                  <p className="text-white aspira text-8xl">→</p>
                </div>
                <div
                  className={`gradient h-[6rem] w-[19rem] rounded-[5rem] flex justify-end items-center overflow-hidden`}
                >
                  <div
                    className={`bg-white w-[65%] h-full rounded-[6rem] flex gap-1 justify-center items-center`}
                  >
                    <div className="w-[5.5rem] h-[5.5rem] flex-shrink-0 bg-white rounded-full shadow-2xl relative">
                      <svg
                        width="100%"
                        height="100%"
                        stroke="#45C1FF"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g class="spinner_V8m1">
                          <circle
                            cx="12"
                            cy="12"
                            r="9.5"
                            fill="none"
                            stroke-width="2"
                          ></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="w-[5.5rem] h-[5.5rem] flex justify-center items-center flex-shrink-0 bg-white rounded-full">
                      <p className={`text-[5rem] leading-[1]`}>😅</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute rounded-[2rem] -right-[4rem] top-1/2  border-l-0  h-[6rem] border-4 w-[10rem] z-10 border-white border-dashed "></div>
            </div>
            {/* row 2 */}
            <div className={`flex gap-3 items-center relative`}>
              <div
                className={`rounded-full w-[5.5rem] h-[5.5rem] flex justify-center items-center bg-yellow-300 mr-10 `}
              >
                <div
                  className={`h-[1rem] w-[1rem] bg-blue-500 rounded-full z-40`}
                ></div>
              </div>
              <div
                className={`glass absolute left-[3.5rem] rounded-[5rem] border-b-0 border-r-0 border-l-0 border-2 h-[3rem] w-[6.5rem] border-white flex justify-center items-center`}
              >
                <div className={`w-[50%] h-1 rounded-xl  bg-white `}></div>
              </div>
              <div className={`aspira text-white text-8xl`}>elevate</div>
              <div
                className={`rounded-[5rem] border-4 h-[3rem] flex justify-center items-center w-[9rem] border-white  bg-[#0B0D10] z-30 relative`}
              >
                <div className={`w-[50%] h-1 rounded-xl  bg-white `}></div>
                <div
                  className={`w-[1rem] h-[1rem] bg-green-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
                ></div>
                <div className={`h-[0.7rem] w-[0.7rem] bg-[#3B82F6] rounded-full absolute -right-2`}></div>
              </div>
            </div>
            {/* row 3 */}
            <div className={`flex `}>
              <div
                className={`w-[10rem] relative h-[6.5rem] border-4 border-dashed rounded-tl-none rounded-br-none border-t-0 border-r-0 rounded-[2rem] -top-1/2 left-[6rem] mr-10`}
              ></div>
              <div className={`relative w-[5rem] mr-14`}>
                <div
                  className={`rounded-full w-[5.5rem] h-[5.5rem] flex justify-center items-center row3Gradient`}
                ></div>
                <div
                  className={`rounded-full w-[5.5rem] h-[5.5rem] flex justify-center items-center bg-blue-300 absolute top-0 left-1/2 shadow-2xl`}
                ></div>
                <div
                  className={`glass top-1/2 absolute left-1/2 -translate-x-1/4 -translate-y-[60%] rounded-[5rem] border-b-0 border-r-0 border-l-0 border-2 h-[3rem] w-[5.5rem] border-white flex justify-end items-center `}
                >
                  <div
                    className={`w-[60%] h-[2rem] rounded-3xl  bg-white mr-2 shadow-xl flex justify-center items-center text-2xl aspira font-bold`}
                  >
                    {" "}
                    <p>×</p>{" "}
                  </div>
                </div>
              </div>
              <div className={`aspira text-white text-8xl ml-2`}>together</div>
            </div>
            {/* row 4 */}
            <div className={`flex flex-col justify-center items-center my-6 relative`}>
              <p className={`text-gray-500 text-sm `}>
                Welcome to TechMingle where people connect and innovation
                thrives.
              </p>
              <p className={`text-gray-500 text-sm `}>
                Dive into a vibrant community and share groundbreaking ideas
              </p>
              <img src={sparkleGreen} alt="" className={` absolute scale-[0.2] -left-[15rem] -top-[9rem]`}/>
              <img src={sparkleBlue} alt="" className={` absolute scale-[0.2] -right-[15rem] -top-[9rem]`}/>
              <img src={sparkleYellow} alt="" className={` absolute scale-[0.13] -left-[10rem] -top-[3rem]`}/>
              <img src={sparklePink} alt="" className={` absolute scale-[0.13] -right-[10rem] -top-[3rem]`}/>
            </div>
            {/* row 5 */}
            <div
              onClick={() => {
                navigate("/signup");
              }}
              className={`cursor-pointer hover:bg-gray-200 transition-all  text-[10px] rounded-3xl px-5 py-3 bg-white font-bold`}
            >
              Try it for free
            </div>
            {/* row 6 Sponsor */}
            <div className="flex gap-5 mt-12">
              <p className="text-gray-700 flex justify-center items-center">
                <i className="ri-google-fill text-xl"></i>
              </p>
              <p className="text-gray-700 flex justify-center items-center">
                <i className="ri-netflix-fill text-xl"></i>
              </p>
              <p className="text-gray-700 flex justify-center items-center">
                <i className="ri-spotify-fill text-xl"></i>
              </p>
              <p className="text-gray-700 flex justify-center items-center">
                <i className="ri-facebook-fill text-xl"></i>
              </p>
              <p className="text-gray-700 flex justify-center items-center">
                <i className="ri-amazon-fill text-xl"></i>
              </p>
            </div>
          </div>
          {/* section 2 */}
          <div
          // className={`select-none w-full h-full flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
