import React, { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import sparkleGreen from "../assets/images/sparkleSvgGreen.svg";
import sparkleBlue from "../assets/images/sparkleSvgBlue.svg";
import sparkleYellow from "../assets/images/sparkleSvgYellow.svg";
import heart from "../assets/images/heart.svg";
import sparklePink from "../assets/images/sparkleSvgPink.svg";
import pattern1 from "../assets/images/pattern1.png";
import pattern2 from "../assets/images/pattern2.png";
import daisy from "../assets/images/daisy.png";
import topbadge from "../assets/images/topbadge.png";
import home3DModel from "../assets/images/home3DModel.png";
import moon from "../assets/images/moon.png";
import sun from "../assets/images/sun.png";
import { changeMode } from "../slices/commonSlice.js";

import Matter from "matter-js";
import { useDispatch } from "react-redux";

const Home = ({ Header }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const section1CanvasRef = useRef(null);

  //handling hangingimages section1
  const hangingImagesS1 = () => {
    const {
      Bodies,
      Body,
      Composite,
      Composites,
      Constraint,
      Engine,
      Mouse,
      MouseConstraint,
      Render,
      Runner,
      World,
      Events,
    } = Matter;

    const runner = Runner.create();
    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: section1CanvasRef.current,
      engine,
      options: {
        background: "transparent",
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
      },
    });

    // create item
    const createItem1 = ({
      x: stringX,
      y: stringY,
      length: stringLength,
      texture = "",
    }) => {
      const group = Body.nextGroup(true);
      const string = Composites.stack(stringX, stringY, 12, 1, 2, 2, (x, y) =>
        Bodies.rectangle(x, y, stringLength / 2, 2, {
          collisionFilter: { group },
          render: {
            fillStyle: "#fff",
            strokeStyle: "#fff",
          },
        })
      );

      const firstBody = string.bodies[0];
      const lastBody = string.bodies[string.bodies.length - 1];
      const item = Bodies.circle(
        lastBody.position.x,
        lastBody.position.y + 57,
        50,
        {
          collisionFilter: { group },
          label: "sun",
          render: {
            sprite: {
              texture,
              xScale: 0.5,
              yScale: 0.5,
            },
          },
        }
      );

      const itemConstraint = Constraint.create({
        bodyA: item,
        bodyB: lastBody,
        pointA: { x: 0, y: -57 },
        pointB: { x: 0, y: 0 },
        stiffness: 0.5,
        render: { visible: false },
      });

      Composites.chain(string, 0.49, 0, -0.49, 0, {
        stiffness: 0.7,
        length: 0,
        render: { type: "line", visible: false },
      });

      Composite.add(
        string,
        Constraint.create({
          bodyB: firstBody,
          pointA: { x: firstBody.position.x, y: firstBody.position.y },
          pointB: { x: -1, y: 0 },
          stiffness: 0.5,
        })
      );

      World.add(world, [string, item, itemConstraint]);
    };
    const createItem2 = ({
      x: stringX,
      y: stringY,
      length: stringLength,
      texture = "",
    }) => {
      const group = Body.nextGroup(true);
      const string = Composites.stack(stringX, stringY, 6, 1, 2, 2, (x, y) =>
        Bodies.rectangle(x, y, stringLength / 2, 2, {
          collisionFilter: { group },
          render: {
            fillStyle: "#fff",
            strokeStyle: "#fff",
          },
        })
      );

      const firstBody = string.bodies[0];
      const lastBody = string.bodies[string.bodies.length - 1];
      const item = Bodies.circle(
        lastBody.position.x,
        lastBody.position.y + 57,
        50,
        {
          collisionFilter: { group },
          label: "moon",
          render: {
            sprite: {
              texture,
              xScale: 0.5,
              yScale: 0.5,
            },
          },
        }
      );

      const itemConstraint = Constraint.create({
        bodyA: item,
        bodyB: lastBody,
        pointA: { x: 0, y: -57 },
        pointB: { x: 0, y: 0 },
        stiffness: 0.5,
        render: { visible: false },
      });

      Composites.chain(string, 0.49, 0, -0.49, 0, {
        stiffness: 0.7,
        length: 0,
        render: { type: "line", visible: false },
      });

      Composite.add(
        string,
        Constraint.create({
          bodyB: firstBody,
          pointA: { x: firstBody.position.x, y: firstBody.position.y },
          pointB: { x: -1, y: 0 },
          stiffness: 0.5,
        })
      );

      World.add(world, [string, item, itemConstraint]);
    };

    // sun
    createItem1({
      x: window.innerWidth * 0.1,
      y: -80,
      length: window.innerHeight * 0.055,
      texture: sun,
    });

    // moon
    createItem2({
      x: window.innerWidth * 0.8,
      y: -80,
      length: window.innerHeight * 0.055,
      texture: moon,
    });

    // mouse
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: Mouse.create(render.canvas),
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Events.on(runner, "tick", (event) => {
      if (mouseConstraint.body) {
        const { label } = mouseConstraint.body;
        if (label === "sun") dispatch(changeMode(false));
        else if (label === "moon") dispatch(changeMode(true));
      }
    });

    World.add(world, mouseConstraint);

    Runner.run(runner, engine);
    Render.run(render);
    return () => {
      World.clear(world);
      Engine.clear(engine);
    };
  };
  let clearSection1 = null;
  useEffect(() => {
    clearSection1 = hangingImagesS1();

    // handling screen resize events
    const handleResize = () => {
      section1CanvasRef.current.style.width = window.innerWidth;
      section1CanvasRef.current.style.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        }

        .heart {
          -webkit-filter: drop-shadow(2px 2px 0 #0B0D10) drop-shadow( 0px -4px  #0B0D10)
                          drop-shadow(-2px -2px 0 #0B0D10);
          filter: drop-shadow(2px 2px  #0B0D10) drop-shadow( 0px -4px  #0B0D10)
                  drop-shadow(-2px 2px  #0B0D10);
        }
        .heartText::after{
          content:"lovely";
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-80%);
          color:#FF1694;
          font-size:0.8rem;
          font-family:konya;

        }
      `}
      </style>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4 ">
        {/* <Header urlName="TechMingle" /> */}
        <div className="mt-1 mb-2 h-full w-full overflow-hidden overflow-y-auto">
          {/* section1 */}
          <div
            className={`select-none w-full h-full flex flex-col relative justify-center items-center`}
          >
            {/* row 1 */}
            <div className={`flex gap-3 relative z-20`}>
              <div className={`aspira text-white text-8xl`}>unite</div>
              <div
                className={`flex z-30 relative gap-0 justify-center items-center`}
              >
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
                        <g className="spinner_V8m1">
                          <circle
                            cx="12"
                            cy="12"
                            r="9.5"
                            fill="none"
                            strokeWidth="2"
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
            <div className={`flex gap-3 items-center relative z-20`}>
              <div
                className={`rounded-full w-[5.5rem] h-[5.5rem] flex justify-center items-center bg-yellow-300 mr-10 `}
              >
                <div
                  className={`h-[1rem] w-[1rem] border-2 border-white drop-shadow-xl shadow-2xl bg-blue-500 rounded-full z-40`}
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
                <div
                  className={`h-[0.8rem] w-[0.8rem] border-2 border-white  bg-[#3B82F6] rounded-full absolute -right-2`}
                ></div>
              </div>
            </div>
            {/* row 3 */}
            <div className={`flex relative z-20`}>
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
            <div
              className={`flex flex-col justify-center items-center my-6 relative z-20`}
            >
              <p className={`text-gray-500 text-sm `}>
                Welcome to TechMingle where people connect and innovation
                thrives.
              </p>
              <p className={`text-gray-500 text-sm `}>
                Dive into a vibrant community and share groundbreaking ideas
              </p>
              <img
                src={sparkleGreen}
                alt=""
                className={` absolute scale-[0.2] -left-[15rem] -top-[9rem]`}
              />
              <img
                src={sparkleBlue}
                alt=""
                className={` absolute scale-[0.2] -right-[15rem] -top-[9rem]`}
              />
              <img
                src={sparkleYellow}
                alt=""
                className={` absolute scale-[0.13] -left-[10rem] -top-[3rem]`}
              />
              <img
                src={sparklePink}
                alt=""
                className={` absolute scale-[0.13] -right-[10rem] -top-[3rem]`}
              />
            </div>
            {/* row 5 */}
            <div
              onClick={() => {
                navigate("/signup");
              }}
              className={`cursor-pointer z-20 hover:bg-gray-200 transition-all  text-[10px] rounded-3xl px-5 py-3 bg-white font-bold`}
            >
              Try it for free
            </div>
            {/* row 6 Sponsor */}
            <div className="flex gap-5 mt-12 relative z-20">
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
            {/* canvas */}
            <div
              ref={section1CanvasRef}
              className="section1Canvas scrol absolute top-0 left-0  z-10 w-full h-full"
            ></div>
          </div>
          {/* section 2 */}
          <div className={`select-none w-full h-full flex flex-col `}>
            {/* part1 */}
            <div
              className={`border border-[#3b3b3b]  border-x-0 w-full flex justify-center items-center`}
            >
              <p className={`font-bold monsterrat text-[10rem] text-white `}>
                REA
                <span className={`relative `}>
                  D
                  <span
                    className={`absolute heartText bottom-[30%] -right-3  rotate-[6deg] `}
                  >
                    <img
                      src={heart}
                      className={`h-[4rem] heart drop-shadow-2xl`}
                      alt=""
                    />
                  </span>
                </span>{" "}
                & LOVE
              </p>
            </div>
            {/* part2 */}
            <div
              className={`flex w-full justify-between items-center mt-10 px-10`}
            >
              <div className={`flex gap-4 `}>
                <p className={`text-gray-300 text-sm monsterrat`}>
                  More Knowledge <br /> in less 5min
                </p>
                <div className={`flex justify-center items-start`}>
                  {" "}
                  <p
                    className={`bg-green-400 text-black px-2 py-1  inter  text-xs rounded-xl`}
                  >
                    15m/day
                  </p>
                </div>
              </div>
              <div className={`flex gap-14`}>
                <div className={`flex flex-col`}>
                  <p className={`text-sm text-[#e86c5c] font-bold  monsterrat`}>
                    95%
                  </p>
                  <p className={`text-sm  text-gray-300 monsterrat`}>
                    more reading
                  </p>
                </div>
                <div className={`flex flex-col`}>
                  <p className={`text-sm text-[#e86c5c] font-bold  monsterrat`}>
                    91%
                  </p>
                  <p className={`text-sm  text-gray-300 monsterrat`}>
                    better habbits
                  </p>
                </div>
              </div>
            </div>
            {/* part3 */}
            <div
              className={`flex w-full h-[35rem] justify-between items-center mt-12 `}
            >
              {/* p-1 */}
              <div className={`relative flex-shrink-0  w-[25rem] `}>
                {/* ribbon1 */}
                <div
                  className={`w-[23rem] h-[7rem] overflow-hidden rounded-lg bg-[#56A681] flex justify-between -rotate-90 absolute -bottom-[4.8rem] -left-[5rem]`}
                >
                  <div className={`w-[5rem] f-full overflow-hidden`}>
                    <img
                      src={pattern1}
                      className={` w-[5rem] h-full grayscale`}
                      alt=""
                    />
                  </div>
                  <div className={`flex flex-col pr-5 py-2`}>
                    <p
                      className={`uppercase text-5xl font-bold text-white monsterrat`}
                    >
                      The Ark
                    </p>
                    <p className={`text-[10px] px-2 inter text-gray-200`}>
                      Siddhant Singh
                    </p>
                  </div>
                  <img
                    src={topbadge}
                    className={`absolute w-[4rem] top-16 left-[19rem]  rotate-[103deg] object-cover`}
                    alt=""
                  />
                </div>
                {/* ribbon2 */}
                <div
                  className={`w-[23rem] h-[7rem]  rounded-lg bg-[#EAB4C7] flex justify-between -rotate-[79deg] absolute -bottom-[4.8rem] left-[6rem]`}
                >
                  <div className={``}>
                    <img
                      src={pattern2}
                      className={`w-[5rem] object-cover h-full grayscale`}
                      alt=""
                    />
                  </div>
                  <div className={`flex flex-col pr-5 py-2`}>
                    <p
                      className={`uppercase text-5xl font-bold text-black monsterrat tracking-tighter`}
                    >
                      Sky War
                    </p>
                    <p className={`text-[10px] px-2 inter text-gray-800 `}>
                      Khushi kandoi
                    </p>
                  </div>
                  <img
                    src={daisy}
                    className={`absolute w-[4rem] top-10 right-10  rotate-[103deg] object-cover`}
                    alt=""
                  />
                </div>
              </div>
              {/* p-2 */}
              <div
                className={`w-full h-full  flex justify-center items-center relative `}
              >
                <img
                  src={home3DModel}
                  alt=""
                  className={`h-[38rem] absolute -top-[13rem] z-20`}
                />
                <div
                  className={`flex absolute items-end w-fit z-10  left-[22rem] bottom-[1rem] konya text-pink-300 `}
                >
                  <p className={`konya text-[6rem] `}>W</p>
                  <p className={`konya text-5xl `}>elcome</p>
                </div>
              </div>
              {/* p-3 */}
              <div
                className={`flex-shrink-0 flex-col gap-10  w-[25rem]  flex justify-center  relative`}
              >
                <p className={`text-white  font-bold text-5xl pl-[5rem]`}>
                  Books & <br />
                  Podcasts <br />
                  in 5 min
                </p>
                <div
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className={`text-white  text-xs bg-pink-400 rounded-md px-5 py-3 cursor-pointer hover:bg-pink-500 transition-all ml-[5rem] w-fit`}
                >
                  <p className={`inter`}>Start free trial</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
