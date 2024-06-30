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
import people from "../assets/images/people.jpg";
import { changeMode } from "../slices/commonSlice.js";
import man from "../assets/images/man.png";
import man3 from "../assets/images/man3.png";
import man2 from "../assets/images/man2.png";
import punk1 from "../assets/images/punk1.webp";
import punk2 from "../assets/images/punk2.webp";
import punk3 from "../assets/images/punk3.webp";
import punk4 from "../assets/images/punk4.webp";
import punk5 from "../assets/images/punk5.webp";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import spotify from "../assets/images/spotify.png";
import netflix from "../assets/images/netflix.png";
import microphone from "../assets/images/microphone.png";
import facemodel from "../assets/images/facemodel.png";

import Matter from "matter-js";
import { useDispatch, useSelector } from "react-redux";
import debounce from "../utils/debounce.js";
import { mobileScreen } from "../constants/screenSizeConstants.js";

const Home = ({ Header }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const section1CanvasRef = useRef(null);
  const s1ContainerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const mode = useSelector((state) => state.common.mode);
  const screenSize = useSelector((state) => state.common.screenSize);
  // Canvas related Global States
  const engineRef = useRef(null); // sun moon world canvas
  const renderRef = useRef(null); // sun moon world canvas

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

    // Clear existing renderer if it exists
    if (renderRef.current) {
      Matter.Render.stop(renderRef.current);
      Matter.World.clear(engineRef.current.world);
      Matter.Engine.clear(engineRef.current);
      renderRef.current.canvas.remove();
      renderRef.current.canvas = null;
      renderRef.current.context = null;
      renderRef.current.textures = {};
    }

    const runner = Runner.create();
    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: section1CanvasRef.current,
      engine,
      options: {
        background: "transparent",
        width: s1ContainerRef.current.clientWidth,
        height: s1ContainerRef.current.clientHeight,
        wireframes: false,
      },
    });
    renderRef.current = render;
    engineRef.current = engine;

    // create item
    const createItem1 = ({
      x: stringX,
      y: stringY,
      length: stringLength,
      texture = "",
    }) => {
      const group = Body.nextGroup(true);
      const string = Composites.stack(
        stringX,
        stringY,
        screenSize === mobileScreen ? 9 : 12,
        1,
        2,
        2,
        (x, y) =>
          Bodies.rectangle(x, y, stringLength / 2, 2, {
            collisionFilter: { group },
            render: {
              fillStyle: "#808080",
              strokeStyle: "#808080",
            },
          })
      );

      const firstBody = string.bodies[0];
      const lastBody = string.bodies[string.bodies.length - 1];
      const item = Bodies.circle(
        lastBody.position.x,
        lastBody.position.y + 57,
        screenSize === mobileScreen ? 28 : 45,
        {
          collisionFilter: { group },
          label: "sun",
          render: {
            sprite: {
              texture,
              xScale: screenSize === mobileScreen ? 0.3 : 0.5,
              yScale: screenSize === mobileScreen ? 0.3 : 0.5,
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
            fillStyle: "#808080",
            strokeStyle: "#808080",
          },
        })
      );

      const firstBody = string.bodies[0];
      const lastBody = string.bodies[string.bodies.length - 1];
      const item = Bodies.circle(
        lastBody.position.x,
        lastBody.position.y + 57,
        screenSize === mobileScreen ? 28 : 45,
        {
          collisionFilter: { group },
          label: "moon",
          render: {
            sprite: {
              texture,
              xScale: screenSize === mobileScreen ? 0.25 : 0.5,
              yScale: screenSize === mobileScreen ? 0.25 : 0.5,
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

    // handling events
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "touchstart",
      mouseConstraint.mouse.mousedown
    );
    mouseConstraint.mouse.element.removeEventListener(
      "touchmove",
      mouseConstraint.mouse.mousemove
    );
    mouseConstraint.mouse.element.removeEventListener(
      "touchend",
      mouseConstraint.mouse.mouseup
    );

    mouseConstraint.mouse.element.addEventListener(
      "touchstart",
      mouseConstraint.mouse.mousedown,
      { passive: true }
    );
    mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
      if (mouseConstraint.body) {
        mouseConstraint.mouse.mousemove(e);
      }
    });
    mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
      if (mouseConstraint.body) {
        mouseConstraint.mouse.mouseup(e);
      }
    });

    World.add(world, mouseConstraint);

    Runner.run(runner, engine);
    Render.run(render);
  };

  const [scrollTimer, setScrollTimer] = useState(null);
  useEffect(() => {
    hangingImagesS1();
    initCircularText();

    // handling screen resize events
    const handleResize = debounce(() => {
      section1CanvasRef.current.childNodes[0].width =
        s1ContainerRef.current.clientWidth;
      section1CanvasRef.current.childNodes[0].height =
        s1ContainerRef.current.clientHeight;
      hangingImagesS1();
      // window.location.reload();
    }, 300);

    // handling scrollbar
    const removeScrollBar = () => {
      if (mainContainerRef.current) {
        mainContainerRef.current.classList.add("hideScrollBar");
      }
    };
    const addScrollBar = () => {
      if (mainContainerRef.current) {
        mainContainerRef.current.classList.remove("hideScrollBar");
      }
    };
    mainContainerRef.current.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      addScrollBar();
    });
    mainContainerRef.current.addEventListener("scrollend", () => {
      setScrollTimer(
        setTimeout(() => {
          removeScrollBar();
        }, 2500)
      );
    });

    const deviceOrient = (event) => {
      if (event.accelerationIncludingGravity.x || event.accelerationIncludingGravity.y) {
        console.log(event.accelerationIncludingGravity.x);
        console.log(event.accelerationIncludingGravity.y);
        const { x, y } = event.accelerationIncludingGravity;
        engineRef.current.gravity.x = -x/10;
        engineRef.current.gravity.y = y/10;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDowns);
    window.addEventListener("devicemotion", deviceOrient);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDowns);
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        Matter.World.clear(engineRef.current.world);
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, []);

  const handleKeyDowns = (event) => {
    // carouselSection4 keylisteners
    if (event.keyCode === 39) {
      nextButton();
    } else if (event.keyCode === 37) {
      prevButton();
    }
  };

  // carouselSection4
  const carouselContainerRef = useRef(null);

  let [translated, setTranslated] = useState(0);
  let [rotated, setRotated] = useState(0);
  let [activeCarouselImage, setActiveCarouselImage] = useState(3);

  const prevButton = () => {
    if (translated > -31) {
      carouselContainerRef.current.style.transform = `translateX(${
        -1 * translated + 31
      }rem)`;
      setTranslated((translated -= 31));
      circularTextRef.current.style.transform = `rotate(${
        -1 * rotated + 75
      }deg)`;
      setRotated((rotated -= 75));
      setActiveCarouselImage(activeCarouselImage - 1);
    }
  };
  const nextButton = () => {
    if (translated < 93) {
      carouselContainerRef.current.style.transform = `translateX(-${
        translated + 31
      }rem)`;

      setTranslated((translated += 31));
      circularTextRef.current.style.transform = `rotate(-${rotated + 75}deg)`;
      setRotated((rotated += 75));
      setActiveCarouselImage(activeCarouselImage + 1);
    }
  };
  // circular text
  const circularTextRef = useRef(null);

  const initCircularText = () => {
    const text = circularTextRef.current;
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  };

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
        .heartLight {
          -webkit-filter: drop-shadow(2px 2px 0 #fff) drop-shadow( 0px -4px  #fff)
                          drop-shadow(-2px -2px 0 #fff);
          filter: drop-shadow(2px 2px  #fff) drop-shadow( 0px -4px  #fff)
                  drop-shadow(-2px 2px  #fff);
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
        .heartTextMobile::after{
        content:"lovely";
          position:absolute;
          top:50%;
          left:50%;
          color:#FF1694;
          font-size:0.8rem;
          font-family:konya;
          transform:translate(-50%,-50%);
        }
        /* speechbox */
        .speechboxSpike {
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 3;
          margin: 0;
          position: relative;
          min-height: 60px;
          padding-block: 4px;
          
        }
        .speechboxSpike:after {
          content: "";
          bottom: -32px;
          right: 70px;
          position: absolute;
          display: block;
          width: 38px;
          height: 26px;
          border-radius: 0 0 30px 38px;
          border-color:white;
          box-shadow: 14px 14px 0px 11px #D8B4FE;
          transform: rotate(-90deg);
          z-index: -1;
        }
        .curvedBorder{
          border-radius: 40px;
        }
        .curvedBorderB1{
          border-radius: 60px;
        }
        .speechboxSpike2:after {
          content: "";
          bottom: -32px;
          right: 70px;
          position: absolute;
          display: block;
          width: 38px;
          height: 26px;
          border-radius: 0 0 30px 38px;
          border-color:transparent;
          box-shadow: 14px 17px 0px 6px #BBF7D0;
          transform: rotate(-90deg);
          z-index: -1;
        }
        /* infinite scrolling */
        .horizontal-scrolling-items {
          display: flex;
          width: 2600px;
          animation-duration: 40s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .horizontalScrollFront{
          animation-name: infiniteScroll;
        }
        .horizontalScrollRev{
          animation-name: infiniteScrollRev;
        }
        .horizontal-scrolling-items__item {
          white-space: nowrap;
        }
        
        @keyframes infiniteScroll {
          from {transform: translateX(0)}
          to {transform: translateX(-50%)}
        }
        @keyframes infiniteScrollRev {
          from {transform: translateX(-50%)}
          to {transform: translateX(0%)}
        }
        .rotateY{
          transform:rotateY(180deg);
        }
        .glass{
          background: rgba(255, 255, 255, 0.13);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5.7px);
          -webkit-backdrop-filter: blur(5.7px);
        }
        .carousel::before{
          content:"";
          position:absolute;
          height:100%;
          width:45%;
          background: rgb(11,13,16);
          background: linear-gradient(90deg, rgba(11,13,16,1) 0%, rgba(11,13,16,0.8828781512605042) 54%, rgba(255,255,255,0) 100%);
          top:0;
          left:0;
          z-Index:60;
        }
        .carousel::after{
          content:"";
          position:absolute;
          height:100%;
          width:45%;
          background: rgb(11,13,16);
          background: linear-gradient(270deg, rgba(11,13,16,1) 0%, rgba(11,13,16,0.8828781512605042) 54%, rgba(255,255,255,0) 100%);
          top:0;
          right:0;
          z-Index:50;
        }
        .carouselLight::before{
          content:"";
          position:absolute;
          height:100%;
          width:45%;
          background: rgb(11,13,16);
          background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8828781512605042) 20%, rgba(255,255,255,0) 55%);
          top:0;
          left:0;
          z-Index:60;
        }
        .carouselLight::after{
          content:"";
          position:absolute;
          height:100%;
          width:45%;
          background: rgb(11,13,16);
          background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8828781512605042) 20%, rgba(255,255,255,0) 55%);
          top:0;
          right:0;
          z-Index:50;
        }
        .transitionEaseBackOut{
          transition: all 800ms;
          transition-timing-function: cubic-bezier(0.7, 0.4, 0, 1);
        }

        /* curved text */
        
        .text {
          position: absolute;
          width: 100%;
          height: 100%;
          font-family: consolas;
          font-size: 17px;
        }
        
        .text span {
          position: absolute;
          left: 50%;
          font-size: 0.8rem;
          transform-origin: 0 100px;
          font-family:Orbitron;
        }
        
        /* fade gradient */
        .fadeGradient::before{
          content:"";
          position:absolute;
          bottom:40%;
          height:32%;
          width:100%;
          left:0;
          background: rgb(11,13,16);
          background: linear-gradient(0deg, rgba(11,13,16,1) 0%, rgba(11,13,16,0.8016456582633054) 52%, rgba(255,255,255,0) 100%);
          z-Index:100;
          
        }
        .fadeGradientLight::before{
          content:"";
          position:absolute;
          bottom:40%;
          height:32%;
          width:100%;
          left:0;
          background: rgb(11,13,16);
          background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8016456582633054) 52%, rgba(255,255,255,0) 100%);
          z-Index:100;
          
        }
        /* Carousel Image Active CSS */
        .carouselImg{
          filter:blur(2px) ;
        }
        .carouselContainer-2 img:nth-child(2){
          filter:blur(0px) !important;
        }
        .carouselContainer-3 img:nth-child(3){
          filter:blur(0px) !important;
        }
        .carouselContainer-4 img:nth-child(4){
          filter:blur(0px) !important;
        }
        .carouselContainer-5 img:nth-child(5){
          filter:blur(0px) !important;
        }
        .carouselContainer-6 img:nth-child(6){
          filter:blur(0px) !important;
        }

        /* Scrollbar */
        html{
          scrollbar-transition:smooth;
        }
        .scrollTransition::-webkit-scrollbar{
          width:9px;
          transition:width 1s ease ;
        }
        .hideScrollBar::-webkit-scrollbar{
          width:0;
        }
        .scrollTransition::-webkit-scrollbar-thumb:hover{
          cursor:pointer;
        }
        
      `}
      </style>
      <div className="flex flex-col h-full w-full pr-4 max-sm:p-0 ">
        {/* <Header urlName="TechMingle" /> */}
        <div
          ref={mainContainerRef}
          className="mt-1 mb-2 h-full w-full overflow-hidden overflow-y-auto scrollTransition "
        >
          {/* section1 */}
          <div
            ref={s1ContainerRef}
            className={`select-none w-full h-full  flex flex-col relative justify-center items-center `}
          >
            {/* row 1 */}
            <div
              className={`flex md:gap-3 max-md:gap-2 relative max-sm:mt-24 z-20 pointer-events-none`}
            >
              {/* text */}
              <div
                className={`aspira ${
                  mode ? "text-white" : "text-gray-800"
                } transition-all duration-200 lg:text-8xl md:text-7xl max-md:text-7xl max-sm:text-4xl`}
              >
                unite
              </div>
              {/* circles and arrows */}
              <div
                className={`flex z-30 relative gap-0 justify-center items-center`}
              >
                {/* green circle */}
                <div
                  className={`rounded-full lg:w-[6rem] lg:h-[6rem] md:w-[3.5rem] md:h-[3.5rem] max-md:w-[3.5rem] max-md:h-[3.5rem] max-sm:h-[3rem] max-sm:w-[3rem] flex justify-center items-center bg-green-400`}
                >
                  {/* arrow */}
                  <p
                    className={`text-white aspira lg:text-8xl md:text-7xl max-md:text-7xl max-sm:text-5xl`}
                  >
                    →
                  </p>
                </div>
                <div
                  className={`gradient lg:w-[19rem] lg:h-[6rem] md:w-[14rem] md:h-[3.5rem] max-md:w-[14rem] max-md:h-[3.5rem] max-sm:h-[3rem] max-sm:w-[8rem] rounded-[5rem] flex justify-end items-center overflow-hidden`}
                >
                  <div
                    className={`${
                      mode ? "bg-white" : "bg-gray-800"
                    } transition-all duration-200 w-[65%] max-sm:w-[70%]  h-full rounded-[6rem] flex gap-1 justify-center items-center`}
                  >
                    <div
                      className={`lg:w-[5.5rem] lg:h-[5.5rem] md:w-[3rem] md:h-[3rem] max-md:w-[3rem] max-md:h-[3rem] max-sm:h-[2rem] max-sm:w-[2rem] flex-shrink-0 ${
                        mode ? "bg-white" : "bg-gray-800"
                      } transition-all duration-200 rounded-full shadow-2xl relative max-sm:scale-80`}
                    >
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
                    <div
                      className={`lg:w-[5.5rem] md:w-[4rem] max-md:w-[4rem] max-sm:w-[2.3rem] lg:h-[5.5rem] md:h-[4rem] max-md:h-[4rem] max-sm:h-[2.3rem]  flex justify-center items-center flex-shrink-0 ${
                        mode ? "bg-white" : "bg-gray-800"
                      } transition-all duration-200 rounded-full`}
                    >
                      <p
                        className={`lg:text-[5rem] md:text-[3rem] max-md:text-[3rem] max-sm:text-[2.5rem] leading-[1]`}
                      >
                        😅
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* bordered right line */}
              <div
                className={`absolute rounded-[2rem] max-sm:rounded-[1rem] lg:-right-[4rem] md:-right-[4.5rem] max-md:-right-[4.5rem] max-sm:-right-[2.5rem] top-1/2 max-sm:top-1/3  border-l-0 md:h-[4.6rem]  lg:h-[6rem] max-md:h-[4.6rem] max-sm:h-[4rem] border-4 w-[10rem] max-sm:w-[4rem] z-10 ${
                  mode ? "border-white" : "border-gray-800"
                } transition-all duration-200 border-dashed `}
              ></div>
            </div>
            {/* row 2 */}
            <div
              className={`flex gap-3 items-center relative pointer-events-none`}
            >
              {/* yellow circle */}
              <div
                className={`rounded-full lg:w-[5.5rem] lg:h-[5.5rem] md:w-[4rem] max-md:w-[4rem] md:h-[4rem] max-md:h-[4rem] max-sm:h-[3.4rem] max-sm:w-[3.4rem] flex justify-center items-center bg-yellow-300 mr-10 max-sm:mr-5`}
              >
                <div
                  className={`lg:h-[1rem] lg:w-[1rem] md:h-[0.75rem] md:w-[0.75rem] max-md:h-[0.75rem] max-md:w-[0.75rem] border-2 border-white drop-shadow-xl shadow-2xl bg-blue-500 rounded-full z-50`}
                ></div>
              </div>
              {/* transparent div */}
              <div
                className={`glass absolute lg:left-[3.5rem] md:left-[3rem] max-md:left-[3rem] max-sm:left-[2.5rem] rounded-[5rem] border-b-0 border-r-0 border-l-0 border-2 lg:h-[3rem] lg:w-[6.5rem] md:h-[2.5rem] md:w-[5rem] max-md:h-[2.5rem] max-md:w-[5rem] max-sm:h-[2rem] max-sm:w-[3.5rem] ${
                  mode ? "border-white" : "border-gray-200"
                } transition-all duration-200 flex justify-center items-center`}
              >
                <div
                  className={`w-[50%] h-1 rounded-xl  ${
                    mode ? "bg-white" : "bg-gray-400"
                  } transition-all duration-200 `}
                ></div>
              </div>
              {/* text */}
              <div
                className={`aspira ${
                  mode ? "text-white" : "text-gray-800"
                } transition-all duration-200  lg:text-8xl md:text-7xl max-md:text-7xl max-sm:text-4xl`}
              >
                elevate
              </div>
              {/* bordered rounded div */}
              <div
                className={`rounded-[5rem] border-4 lg:h-[3rem] md:h-[2.5rem] max-md:h-[2.5rem] max-sm:h-[2rem] flex justify-center items-center lg:w-[9rem] md:w-[7rem] max-md:w-[7rem] max-sm:w-[5.5rem] ${
                  mode ? "border-white" : "border-gray-500"
                } transition-all duration-200  bg-[#0B0D10] z-30 relative`}
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
            <div className={`flex relative z-20 pointer-events-none`}>
              {/* bordered line div */}
              <div
                className={`lg:w-[10rem] md:w-[8rem] max-md:w-[8rem] max-sm:w-[3rem] relative lg:h-[6.5rem] md:h-[5rem] max-md:h-[5rem] max-sm:h-[4.5rem] border-4 border-dashed rounded-tl-none rounded-br-none border-t-0 border-r-0 ${
                  mode ? "border-white" : "border-gray-800"
                } transition-all duration-200 rounded-[2rem] -top-1/2 max-sm:-top-[46%] lg:left-[6rem] md:left-[4.8rem] max-md:left-[4.8rem] max-sm:left-[1.9rem] mr-10 max-sm:mr-5 `}
              ></div>
              {/* circles */}
              <div
                className={`relative w-[5rem]  lg:mr-14 md:mr-8 max-md:mr-8 max-sm:mr-6`}
              >
                {/* cicle1 */}
                <div
                  className={`rounded-full lg:w-[5.5rem] md:w-[4.5rem] max-md:w-[4.5rem] max-sm:w-[3.5rem] lg:h-[5.5rem] md:h-[4.5rem] max-md:h-[4.5rem] max-sm:h-[3.5rem] flex justify-center items-center row3Gradient`}
                ></div>
                {/* circle2 */}
                <div
                  className={`rounded-full lg:w-[5.5rem] md:w-[4.5rem] max-md:w-[4.5rem] max-sm:w-[3.5rem] max-sm:h-[3.5rem] lg:h-[5.5rem] md:h-[4.5rem] max-md:h-[4.5rem] flex justify-center items-center bg-blue-300 absolute top-0 left-1/2 shadow-2xl`}
                ></div>
                {/* transaparent div */}
                <div
                  className={`glass top-1/2 max-sm:top-[40%] absolute left-1/2 max-sm:left-[40%] -translate-x-1/4 -translate-y-[60%] rounded-[5rem] border-b-0 border-r-0 border-l-0 border-2 lg:h-[3rem] md:h-[2.5rem] max-md:h-[2.5rem] max-sm:h-[2rem] lg:w-[5.5rem] md:w-[5rem] max-md:w-[5rem] max-sm:w-[4rem]  border-white flex justify-end items-center `}
                >
                  <div
                    className={`w-[60%] h-[2rem] max-sm:h-[1.5rem] rounded-3xl  bg-white mr-2 shadow-xl flex justify-center items-center lg:text-2xl md:text-xl max-md:text-xl max-sm:text-sm aspira font-bold`}
                  >
                    <p>×</p>{" "}
                  </div>
                </div>
              </div>
              {/* text */}
              <div
                className={`aspira ${
                  mode ? "text-white" : "text-gray-800"
                } transition-all duration-200  lg:text-8xl md:text-7xl max-md:text-7xl max-sm:text-4xl ml-2 max-sm:ml-0`}
              >
                together
              </div>
            </div>
            {/* row 4 */}
            {/* text row */}
            <div
              className={`flex flex-col justify-center items-center my-6 pointer-events-none relative z-20`}
            >
              <p
                className={`${
                  mode ? "text-gray-500" : "text-gray-400"
                } transition-all duration-200  lg:text-sm md:text-xs max-md:text-xs max-sm:mx-10 max-sm:text-center`}
              >
                Welcome to TechMingle where people connect and innovation
                thrives.
              </p>
              <p
                className={`${
                  mode ? "text-gray-500" : "text-gray-400"
                } transition-all duration-200  lg:text-sm md:text-xs max-md:text-xs max-sm:mx-10 max-sm:text-center max-sm:hidden`}
              >
                Dive into a vibrant community and share groundbreaking ideas
              </p>
              {/* sparkles */}
              <img
                src={sparkleGreen}
                alt=""
                className={` absolute scale-[0.2] max-sm:scale-[0.1] lg:-left-[15rem] md:-left-[13rem] max-md:-left-[13rem] lg:-top-[9rem] md:-top-[7rem] max-md:-top-[7rem] max-sm:-left-[6.5rem] max-sm:-top-[9rem]`}
              />
              <img
                src={sparkleBlue}
                alt=""
                className={` absolute scale-[0.2] max-sm:scale-[0.1]  lg:-right-[15rem] md:-right-[13rem] max-md:-right:[13rem] lg:-top-[9rem] md:-top-[7rem] max-md:-top-[7rem] max-sm:-right-[6.5rem] max-sm:-top-[9rem]`}
              />
              <img
                src={sparkleYellow}
                alt=""
                className={` absolute scale-[0.13] max-sm:scale-[0.09]  lg:-left-[10rem] md:-left-[7rem] max-md:-left-[7rem]  lg:-top-[3rem] md:-top-[3rem] max-md:-top-[4rem] max-sm:-left-[2.5rem]`}
              />
              <img
                src={sparklePink}
                alt=""
                className={` absolute scale-[0.13] max-sm:scale-[0.09] lg:-right-[10rem] md:-right-[7rem] max-md:-right-[7rem]  lg:-top-[3rem] md:-top-[3rem] max-md:-top-[4rem] max-sm:-right-[2.5rem]`}
              />
            </div>
            {/* row 5 */}
            <div
              onClick={() => {
                navigate("/signup");
              }}
              className={`cursor-pointer z-20   lg:text-[10px] md:text-[9px] max-md:text-[9px] rounded-3xl lg:px-5 lg:py-3 md:px-4 md:py-3 max-md:px-4 max-md:py-3 ${
                mode
                  ? "bg-white hover:bg-gray-200 text-black"
                  : "bg-black hover:bg-gray-800 text-white"
              } transition-all duration-200  font-bold`}
            >
              Try it for free
            </div>
            {/* row 6 Sponsor */}
            <div
              className={`flex lg:gap-5 md:gap-4 max-md:gap-4 absolute lg:bottom-10 md:bottom-14 max-md:bottom-14 max-sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none justify-center items-center max-sm:scale-[0.8]`}
            >
              <img
                src={google}
                className={`invert-[20%] ${
                  mode ? "opacity-100" : "opacity-30"
                } transition-all duration-200 lg:h-[2.75rem] md:h-[2.5rem] max-md:h-[2.5rem]`}
                alt=""
              />
              <img
                src={netflix}
                className={`invert-[20%] ${
                  mode ? "opacity-100" : "opacity-30"
                } transition-all duration-200 lg:h-[2.5rem] md:h-[2.3rem] max-md:h-[2.3rem]`}
                alt=""
              />
              <img
                src={facebook}
                className={`invert-[20%] ${
                  mode ? "opacity-100" : "opacity-30"
                } transition-all duration-200 lg:h-[2.3rem] md:h-[2rem] max-md:h-[2rem] lg:my-2 md:my-1 max-md:my-1`}
                alt=""
              />
              <img
                src={spotify}
                className={`invert-[20%] ${
                  mode ? "opacity-100" : "opacity-30"
                } transition-all duration-200 lg:h-[1.5rem] md:h-[1.2rem] max-md:h-[1.3rem]`}
                alt=""
              />
            </div>
            {/* canvas */}
            <div
              ref={section1CanvasRef}
              className="absolute overflow-hidden top-0 left-0  w-full h-full"
            ></div>
          </div>
          {/* section 2 */}
          <div
            className={`select-none  overflow-hidden w-full h-full max-sm:h-auto flex flex-col mb-16 `}
          >
            {/* part1 */}
            <div
              className={`border ${
                mode ? "border-[#3b3b3b]" : "border-gray-400"
              } transition-all duration-200  border-t-0 border-x-0 w-full flex justify-center items-center`}
            >
              {/* text */}
              <p
                className={`font-bold monsterrat xl:text-[10rem] lg:text-[8rem] md:text-[6rem] sm:text-[5rem] max-sm:text-[13vw] ${
                  mode ? "text-white" : "text-black"
                } transition-all duration-200 `}
              >
                REA
                <span className={`relative `}>
                  D{/* heart */}
                  <span
                    className={`absolute  ${
                      screenSize === mobileScreen
                        ? "heartTextMobile"
                        : "heartText"
                    }  bottom-[30%] -right-3  rotate-[6deg] `}
                  >
                    <img
                      src={heart}
                      className={`xl:h-[4rem] md:h-[3rem] sm:h-[2rem] max-sm:h-[1.5rem] ${
                        mode ? "heart" : "heartLight"
                      } drop-shadow-2xl`}
                      alt=""
                    />
                  </span>
                </span>{" "}
                & LOVE
              </p>
            </div>
            {/* part2 */}
            <div
              className={`md:flex  w-full justify-between items-center md:mt-10 max-sm:mt-5 max-md:mt-5 md:px-10 max-md:px-10 max-sm:px-5`}
            >
              <div className={`flex gap-4 `}>
                <p
                  className={`${
                    mode ? "text-gray-300" : "text-gray-500"
                  } transition-all duration-200  text-sm monsterrat`}
                >
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
              <div
                className={`flex md:gap-14 max-md:justify-between max-sm:justify-between max-md:mt-3 max-sm:mt-3 `}
              >
                <div className={`flex flex-col`}>
                  <p className={`text-sm text-[#e86c5c] font-bold  monsterrat`}>
                    95%
                  </p>
                  <p
                    className={`text-sm  ${
                      mode ? "text-gray-300" : "text-gray-500"
                    } transition-all duration-200 monsterrat`}
                  >
                    more reading
                  </p>
                </div>
                <div className={`flex flex-col`}>
                  <p className={`text-sm text-[#e86c5c] font-bold  monsterrat`}>
                    91%
                  </p>
                  <p
                    className={`text-sm  ${
                      mode ? "text-gray-300" : "text-gray-500"
                    } transition-all duration-200 monsterrat`}
                  >
                    better habbits
                  </p>
                </div>
              </div>
            </div>
            {/* part3 */}
            <div
              className={`flex max-sm:flex-col w-full  h-[35rem] justify-between max-sm:justify-normal items-center mt-12 max-sm:relative`}
            >
              {/* p-1 */}
              <div
                className={`relative flex-shrink-0 max-sm:absolute max-sm:-right-32 max-sm:bottom-52 max-sm:h-[10rem] max-sm:scale-[0.35] w-[25rem] max-sm:order-3`}
              >
                {/* ribbon1 */}
                <div
                  className={`w-[23rem] h-[7rem] overflow-hidden rounded-lg bg-[#56A681] flex justify-between -rotate-90 absolute -bottom-[3rem] -left-[5rem] max-sm:-left-[2rem]`}
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
                  className={`w-[23rem] h-[7rem]  rounded-lg bg-[#EAB4C7] flex justify-between -rotate-[79deg] absolute -bottom-[3rem] left-[6rem]`}
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
                className={`w-full h-full max-sm:h-[14rem] flex justify-center max-sm:order-1 items-center relative `}
              >
                {/* man img */}
                <div
                  className={`xl:h-[38rem] md:h-[40rem] absolute md:-top-[14rem] max-sm:-top-[6rem] max-sm:left-[1rem] z-20 lg:block md:hidden`}
                >
                  <img
                    src={home3DModel}
                    alt=""
                    className={`w-full h-full aspect-auto object-cover`}
                  />
                </div>
                <div
                  className={`lg:flex absolute items-end w-fit z-10  left-[22rem] bottom-[1rem] konya ${
                    mode ? "text-pink-300" : "text-pink-500"
                  } transition-all duration-200   max-sm:bottom-[3rem] max-sm:left-[1rem] md:hidden max-md:hidden pointer-events-none`}
                >
                  <p className={`konya text-[6rem] max-sm:text-[2rem]`}>W</p>
                  <p className={`konya text-5xl max-sm:text-[2rem]`}>elcome</p>
                </div>
              </div>
              {/* p-3 */}
              <div
                className={`flex-shrink-0 flex-col gap-10 max-sm:order-2  w-[25rem] max-md:w-full  flex justify-center  relative`}
              >
                <p
                  className={`${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-200  font-bold text-5xl max-sm:text-[2.5rem] xl:pl-[5rem] md:pl-[4rem] max-md:pl-[3rem] max-sm:pl-[2rem] relative z-30`}
                >
                  Books & <br />
                  Podcasts <br />
                  in 5 min
                </p>
                <div
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className={`text-white  text-xs ${
                    mode ? "bg-pink-400" : "bg-pink-500"
                  } rounded-md px-5 py-3 cursor-pointer hover:bg-pink-500 transition-all xl:ml-[5rem] lg:ml-[5rem] md:ml-[4.3rem] max-md:ml-[3.5rem] lg:w-fit max-sm:w-[83%] max-md:w-[95%] max-sm:justify-center max-sm:items-center max-sm:flex max-sm:ml-[2rem]`}
                >
                  <p className={`inter`}>Start for free</p>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* section 3 */}
          <div
            className={`w-full h-full flex flex-col pt-10  overflow-hidden px-10 `}
          >
            {/* part 1 */}
            <div className={`flex gap-2 justify-between w-full h-[60%] `}>
              {/* p-1 */}
              <div className={`flex  h-full w-[55%]   gap-7`}>
                {/* img */}
                <div
                  className={`h-full w-[80%] rounded-3xl flex-shrink-0 overflow-hidden relative`}
                >
                  <img
                    src={people}
                    className={`object-cover h-full w-full `}
                    alt=""
                  />
                  <div
                    className={`bg-white cursor-pointer absolute top-5 right-5 rounded-xl flex justify-center items-center px-3 py-[0.3rem]`}
                  >
                    <p className={`text-[10px]  inter`}> Explore Our Service</p>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/login");
                    }}
                    className={`cursor-pointer bg-white flex justify-center items-center rounded-full h-[2rem] w-[2rem] bottom-5 absolute right-16`}
                  >
                    <i className="text-black ri-user-line"></i>
                  </div>
                  <div
                    className={`cursor-pointer bg-white flex justify-center items-center rounded-full h-[2rem] w-[2rem] bottom-5 absolute right-5`}
                  >
                    <i className="ri-loop-left-line text-black"></i>
                  </div>
                </div>
                {/* akriti(thing) */}
                <div
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className={`h-[7rem] cursor-pointer flex flex-col gap-2 w-[5rem] ${
                    mode ? "bg-[#282828]" : "bg-[#4a4a4a]"
                  } transition-all duration-200  rounded-3xl justify-center items-center`}
                >
                  <div
                    className={`w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full bg-purple-300`}
                  >
                    <div
                      className={`flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-xl bg-purple-100`}
                    >
                      <div
                        className={`flex justify-center items-center rotate-45 w-[1.85rem] h-[1.85rem] rounded-lg bg-purple-300`}
                      >
                        <div
                          className={`flex justify-center items-center rotate-45 w-[1.65rem] h-[1.65rem] rounded-lg bg-purple-100`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className={`text-[10px] text-center text-gray-300`}>
                    Sign Up <br /> Free
                  </div>
                </div>
              </div>
              {/* p-2 */}
              <div className={`flex flex-col h-full w-[40%]  `}>
                {/* p1 */}
                <div className={`flex w-full justify-end gap-6`}>
                  <p
                    className={`text-xs ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 text-end`}
                  >
                    Collaborate in real-time <br />
                    and share ideas
                  </p>
                  <div className={`w-[7.5rem]    relative`}>
                    <div
                      className={`absolute top-0 left-0 bg-gray-100 h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full`}
                    >
                      {" "}
                      <img
                        src={man}
                        className={`object-cover h-full w-full`}
                        alt=""
                      />{" "}
                    </div>
                    <div
                      className={`absolute top-0 left-6 bg-gray-100 h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full`}
                    >
                      {" "}
                      <img
                        src={man2}
                        className={`object-cover h-full w-full`}
                        alt=""
                      />{" "}
                    </div>
                    <div
                      className={`absolute top-0 left-12 bg-gray-100 h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full`}
                    >
                      {" "}
                      <img
                        src={man3}
                        className={`object-cover h-full w-full`}
                        alt=""
                      />{" "}
                    </div>
                    <div
                      className={`absolute top-0 left-[72px] bg-gray-100 h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full`}
                    >
                      {" "}
                      <img
                        src={man}
                        className={`object-cover h-full w-full`}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                </div>
                {/* p2 */}
                <div className={`flex w-full flex-col`}>
                  {/* bubble1 */}
                  <div className={`w-full flex justify-end mt-10`}>
                    <div className="speechbox relative">
                      <div
                        className={`speechboxSpike  flex-col  w-[20rem] border-2 bg-purple-300 rounded-[4rem]`}
                      >
                        <div
                          className={`w-full overflow-hidden curvedBorderB1 flex flex-col gap-0`}
                        >
                          {/* text-1 */}
                          <div className={`w-full overflow-hidden`}>
                            <div className="horizontal-scrolling-items horizontalScrollFront">
                              <div className="horizontal-scrolling-items__item select-none text-4xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>

                              <div className="horizontal-scrolling-items__item select-none text-4xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>
                            </div>
                          </div>
                          {/* text-2 */}
                          <div className={`w-full overflow-hidden`}>
                            <div className="horizontal-scrolling-items horizontalScrollRev">
                              <div className="horizontal-scrolling-items__item select-none text-4xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>

                              <div className="horizontal-scrolling-items__item select-none text-4xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>
                            </div>
                          </div>
                          {/* text-3 */}
                          <div className={`w-full overflow-hidden`}>
                            <div className="horizontal-scrolling-items horizontalScrollFront">
                              <div className="horizontal-scrolling-items__item select-none text-4xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>

                              <div className="horizontal-scrolling-items__item select-none text-4xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* bubble2 */}
                  <div className={`w-full flex rotateY justify-end mt-10`}>
                    <div className="speechbox relative">
                      <div
                        className={`speechboxSpike2  flex-col  w-[13rem] border-none bg-green-200 rounded-[4rem]`}
                      >
                        <div
                          className={`w-full overflow-hidden curvedBorder flex flex-col gap-0`}
                        >
                          {/* text-1 */}
                          <div className={`w-full overflow-hidden  rotateY`}>
                            <div className="horizontal-scrolling-items horizontalScrollFront">
                              <div className="horizontal-scrolling-items__item select-none text-2xl">
                                Aim high, even if you miss, you land among the
                                stars.&nbsp;
                              </div>

                              <div className="horizontal-scrolling-items__item select-none text-2xl">
                                Aim high, even if you miss, you land among the
                                stars.&nbsp;
                              </div>
                            </div>
                          </div>
                          {/* text-2 */}
                          <div className={`w-full overflow-hidden rotateY`}>
                            <div className="horizontal-scrolling-items horizontalScrollRev">
                              <div className="horizontal-scrolling-items__item select-none text-2xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>

                              <div className="horizontal-scrolling-items__item select-none text-2xl">
                                If everyone is moving forward together, then
                                success takes care of itself.&nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* p-3 */}
                <div className={`flex w-full justify-end `}>
                  <p
                    className={`text-xs ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 text-end`}
                  >
                    Connecting people <br />
                    bridging worlds
                  </p>
                </div>
              </div>
            </div>
            {/* part 2 */}
            <div className={`flex flex-col w-full h-[40%] mt-16`}>
              <p
                className={`text-xs ${
                  mode ? "text-white" : "text-gray-800"
                } transition-all duration-200 `}
              >
                Harmonize Your Potential
              </p>
              {/* text-1 */}
              <div className={`flex gap-1 mt-2 justify-between items-center`}>
                <div
                  className={`text-6xl font-bold uppercase ${
                    mode ? "text-white" : "text-gray-800"
                  } transition-all duration-200 monsterrat`}
                >
                  Catch
                  <span
                    className={`text-orange-500 font-bold uppercase  monsterrat`}
                  >
                    the
                  </span>
                  wave <span className={`inter text-7xl`}>:</span>{" "}
                  <span className={``}>Trending</span>
                </div>
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                  className={`flex gap-2 cursor-pointer group`}
                >
                  <div
                    className={`w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center`}
                  >
                    <i className="ri-arrow-right-up-line text-4xl group-hover:scale-90  transition-all"></i>
                  </div>
                  <div
                    className={`px-4 py-1 h-[3rem] ${
                      mode
                        ? "bg-white hover:bg-gray-200  text-black"
                        : "bg-black hover:bg-gray-800 text-white "
                    } transition-all duration-200 rounded-full text-sm  flex justify-center items-center select-none  `}
                  >
                    {" "}
                    <p className={`inter`}>Start Collaboration</p>{" "}
                  </div>
                </div>
              </div>
              {/* text-2 */}
              <div className={`flex gap-1 mt-5  items-center`}>
                <div
                  className={`text-6xl font-bold uppercase ${
                    mode ? "text-white" : " text-black "
                  } transition-all duration-200 monsterrat`}
                >
                  Stronger
                </div>
                <div className={`flex gap-2 mx-5`}>
                  <div
                    className={`h-[2.75rem] w-[2.75rem] ${
                      mode ? "bg-white" : " bg-pink-300 "
                    } transition-all duration-200  overflow-hidden rounded-full`}
                  >
                    <img
                      src={man2}
                      className={`object-cover h-full w-full`}
                      alt=""
                    />
                  </div>
                  <div
                    className={`h-[2.75rem] w-[2.75rem] ${
                      mode ? "bg-white" : " bg-purple-300 "
                    } transition-all duration-200  overflow-hidden rounded-full`}
                  >
                    <img
                      src={man3}
                      className={`object-cover h-full w-full`}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={`text-6xl font-bold uppercase ${
                    mode ? "text-white" : " text-black "
                  } transition-all duration-200 monsterrat`}
                >
                  Better{" "}
                  <span
                    className={`text-purple-400 font-bold uppercase  monsterrat`}
                  >
                    connections
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* section 4 */}
          <div
            className={`h-full w-full  relative overflow-hidden ${
              mode ? "carousel" : "carouselLight"
            } `}
          >
            <div
              className={`${
                mode ? "bg-[#0B0D10]" : " bg-white"
              } transition-all duration-200   rounded-[50%] w-[110%] -translate-x-[5%] h-[15rem] absolute  -translate-y-1/2 left-0 z-[50] flex  justify-center items-end pb-10 `}
            >
              <div
                className={`w-full flex gap-10 select-none justify-center items-center`}
              >
                <p
                  className={`orbitron text-lg ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-200`}
                >
                  Simulation
                </p>
                <p
                  className={`orbitron text-lg ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-200`}
                >
                  Sandbox
                </p>
                <p
                  className={`orbitron text-4xl ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-200 mx-10`}
                >
                  Meta
                </p>
                <p
                  className={`orbitron text-lg ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-200`}
                >
                  Arcade
                </p>
                <p
                  className={`orbitron text-lg ${
                    mode ? "text-white" : "text-black"
                  } transition-all duration-200`}
                >
                  OpenWorld
                </p>
              </div>
            </div>
            {/* controls */}
            {/* right */}
            <div
              onClick={() => {
                nextButton();
              }}
              className={`cursor-pointer absolute top-1/2 -right-8 rounded-full ${
                mode ? "glass" : " bg-gray-200"
              } -translate-y-1/2 h-[4rem] w-[4rem] flex justify-start items-center z-[60]`}
            >
              <i
                className={`ri-arrow-right-s-line ${
                  mode ? "text-white" : "text-black"
                } transition-all duration-200 text-4xl`}
              ></i>
            </div>
            {/* left */}
            <div
              onClick={() => {
                prevButton();
              }}
              className={`cursor-pointer absolute top-1/2 -left-8 rounded-full ${
                mode ? "glass" : " bg-gray-200"
              } -translate-y-1/2 h-[4rem] w-[4rem] flex justify-end items-center z-[60]`}
            >
              <i
                className={`ri-arrow-left-s-line ${
                  mode ? "text-white" : "text-black"
                } transition-all duration-200 text-4xl`}
              ></i>
            </div>
            {/* Main carousel */}
            <div className={`w-full h-full overflow-hidden`}>
              <div
                ref={carouselContainerRef}
                className={`h-full w-full carouselContainer-${activeCarouselImage}  flex gap-4 relative duration-500 transitionEaseBackOut`}
              >
                <img
                  src={punk5}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem] absolute -translate-x-[31rem]  object-cover`}
                  alt=""
                />
                <img
                  src={punk1}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem]  object-cover `}
                  alt=""
                />
                <img
                  src={punk2}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem]  object-cover`}
                  alt=""
                />
                <img
                  src={punk3}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem]  object-cover`}
                  alt=""
                />
                <img
                  src={punk4}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem]  object-cover`}
                  alt=""
                />
                <img
                  src={punk5}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem]  object-cover`}
                  alt=""
                />
                <img
                  src={punk1}
                  className={`h-full carouselImg transitionEaseBackOut w-[30rem]  object-cover`}
                  alt=""
                />
              </div>
            </div>
            <div
              className={`${
                mode ? "bg-[#0B0D10]" : " bg-white"
              } transition-all duration-200 rounded-[50%] w-[110%] -translate-x-[5%] h-[15rem] absolute bottom-0  translate-y-1/2 left-0 z-[50] flex justify-center items-start ${
                mode ? "fadeGradient" : "fadeGradientLight"
              }`}
            >
              <div className={`absolute flex justify-center items-center`}>
                <div className="circle relative scale-[1.7] w-[200px] h-[200px] rounded-[100vmax] flex justify-center items-center ">
                  <div
                    className={`text-xs ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 orbitron absolute top-[40%] left-1/2 -translate-x-1/2   rounded-[100vmax] w-full  text-center`}
                  >
                    Choose Character
                  </div>
                  <div
                    ref={circularTextRef}
                    className={`text ${
                      mode ? "text-white" : "text-gray-300 "
                    } transitionEaseBackOut`}
                  >
                    <p>Sirus • Spis • Mark • Sid • Xerx •</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section 5 */}
          <div className={`h-full w-full  overflow-hidden pt-[1rem] `}>
            <div className={`w-full h-full flex flex-col justify-between`}>
              <div className={`select-none flex flex-col px-[10.5rem]`}>
                {/* title */}
                <div
                  className={`w-full flex justify-center gap-5 items-center`}
                >
                  <span
                    className={`uppercase ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200  monsterrat font-bold text-[12rem] leading-[1] text-center`}
                  >
                    P
                  </span>
                  <img src={microphone} className={`h-[10rem]`} alt="" />
                  <span
                    className={`uppercase ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 monsterrat font-bold text-[12rem] leading-[1] text-center`}
                  >
                    D
                  </span>
                  <span
                    className={`uppercase ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 monsterrat font-bold text-[12rem] leading-[1] text-center`}
                  >
                    C
                  </span>
                  <span
                    className={`uppercase ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 monsterrat font-bold text-[12rem] leading-[1] text-center`}
                  >
                    A
                  </span>
                  <span
                    className={`uppercase ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 monsterrat font-bold text-[12rem] leading-[1] text-center`}
                  >
                    S
                  </span>
                  <span
                    className={`uppercase ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 monsterrat font-bold text-[12rem] leading-[1] text-center`}
                  >
                    T
                  </span>
                </div>
                {/* second info */}
                <div className={`flex justify-between items-center`}>
                  <p
                    className={`text-4xl font-bold monsterrat ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-200 uppercase`}
                  >
                    Experience
                  </p>
                  <div
                    className={`rounded-3xl bg-white flex h-[2.5rem] items-center cursor-pointer`}
                    onClick={() => {
                      navigate("/podcasts/landing");
                    }}
                  >
                    <div
                      className={`rounded-full  h-[2.5rem] w-[2.5rem] flex justify-center items-center`}
                    >
                      <div
                        className={`rounded-full h-[2.2rem] w-[2.2rem] bg-black flex justify-center items-center `}
                      >
                        <i className="ri-play-mini-fill text-white "></i>
                      </div>
                    </div>
                    <div
                      className={`rounded-full bg-[#ed7c40] h-full w-[9rem] flex justify-center items-center `}
                    >
                      <p className={`text-black text-xs font-bold uppercase`}>
                        Start listening
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* bg-[#ED7C40] */}
              <div className={` h-[42%] w-full relative `}>
                {/* image */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 -top-[60%] z-20`}
                >
                  <img
                    src={facemodel}
                    className={`w-full h-full object-cover `}
                    alt=""
                  />
                </div>
                {/* ribbons */}
                <div className={`w-full h-full relative overflow-hidden`}>
                  {/* ribbon1 */}
                  <div
                    className={`select-none -rotate-[2deg] absolute top-14 -translate-x-[2rem] w-full flex flex-nowrap `}
                  >
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-emerald-300`}
                    >
                      Business{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-blue-400`}
                    >
                      Technology{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-yellow-400`}
                    >
                      Science{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-purple-400`}
                    >
                      Art{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-green-400`}
                    >
                      Economics{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-pink-400`}
                    >
                      Horror{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-teal-400`}
                    >
                      Drama{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-purple-600`}
                    >
                      Hollywood{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-indigo-400`}
                    >
                      SelfGrow{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 bg-yellow-300`}
                    >
                      Healthcare{" "}
                      <i
                        className={`ri-mic-fill text-black ml-3 text-nowrap`}
                      ></i>
                    </div>
                  </div>
                  {/* ribbon 2 */}
                  <div
                    className={`select-none rotate-[2deg] absolute bottom-2 translate-x-[2rem] w-full flex flex-nowrap flex-row-reverse z-50`}
                  >
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200  border-r-0`}
                    >
                      Business{" "}
                      <i
                        className={`ri-hashtag   ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Technology{" "}
                      <i
                        className={`ri-hashtag    ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Science{" "}
                      <i
                        className={`ri-hashtag   ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Art{" "}
                      <i
                        className={`ri-hashtag   ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Economics{" "}
                      <i
                        className={`ri-hashtag   ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Horror{" "}
                      <i
                        className={`ri-hashtag ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Drama{" "}
                      <i
                        className={`ri-hashtag  ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2  ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Hollywood{" "}
                      <i
                        className={`ri-hashtag  ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      SelfGrow{" "}
                      <i
                        className={`ri-hashtag  ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                    <div
                      className={`uppercase flex text-base  monsterrat font-bold px-5 py-2 glass border-2 ${
                        mode
                          ? "border-white text-white"
                          : "border-gray-600 text-gray-800"
                      } transition-all duration-200 border-r-0`}
                    >
                      Healthcare{" "}
                      <i
                        className={`ri-hashtag  ${
                          mode ? "text-white" : "text-black"
                        } transition-all duration-200 ml-3 text-nowrap`}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div
            className={`h-[80%] relative w-full overflow-hidden  flex gap-14 flex-col  px-10`}
          >
            {/* main footer */}
            <div className={` flex justify-between w-full my-10`}>
              {/* list */}
              <div className={` flex gap-10`}>
                <div className={`flex flex-col gap-4`}>
                  <h2
                    className={`text-sm ${
                      mode ? "text-gray-400" : "text-gray-600 font-bold"
                    }`}
                  >
                    Product
                  </h2>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Feature
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Integration
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Templates
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Docs
                  </p>
                </div>
                <div className={`flex flex-col gap-4`}>
                  <h2
                    className={`text-sm ${
                      mode ? "text-gray-400" : "text-gray-600 font-bold"
                    } transition-all duration-200`}
                  >
                    Company
                  </h2>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    About
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Career
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Forum
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Blog
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Youtube
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Community
                  </p>
                </div>
                <div className={`flex flex-col gap-4`}>
                  <h2
                    className={`text-sm ${
                      mode ? "text-gray-400" : "text-gray-600 font-bold"
                    }`}
                  >
                    Legal
                  </h2>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Security
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Terms of use
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    Privacy policy
                  </p>
                  <p
                    className={`text-xs relative z-10 ${
                      mode ? "text-white" : "text-gray-800"
                    } transition-all duration-200 cursor-pointer hover:underline select-none`}
                  >
                    terms of interoggation
                  </p>
                </div>
              </div>
              {/* actions */}
              <div className={`flex flex-col justify-between`}>
                {/* email subscribe */}
                <div className={`flex flex-col`}>
                  <p
                    className={`text-sm ${
                      mode ? "text-gray-400" : "text-gray-600 font-bold"
                    } transition-all duration-200 uppercase mb-2`}
                  >
                    Join Our Mailing list
                  </p>
                  <div
                    className={`relative z-10 rounded-3xl flex ${
                      mode ? "bg-white" : "bg-gray-100"
                    } transition-all duration-200 w-[17rem] p-[2px] h-[2.5rem] overflow-hidden`}
                  >
                    <input
                      type="text"
                      placeholder={`Enter your email address`}
                      className={`w-[70%] bg-transparent rounded-3xl text-xs placeholder-black h-full border-none outline-none px-3`}
                    />
                    <div
                      className={`w-[30%] cursor-pointer bg-purple-400 flex justify-center items-center rounded-3xl`}
                    >
                      <p className={`text-xs  select-none `}>Say Hii</p>
                    </div>
                  </div>
                </div>
                {/* Socials */}
                <div className={`flex flex-col`}>
                  <p
                    className={`text-sm ${
                      mode ? "text-gray-400" : "text-gray-600 font-bold"
                    } transition-all duration-200 uppercase mb-2`}
                  >
                    Socials
                  </p>
                  <div className={`flex gap-3`}>
                    <div
                      className={`relative z-10 cursor-pointer w-[2rem] flex justify-center items-center h-[2rem] rounded-full ${
                        mode ? "bg-white" : "bg-black"
                      } transition-all duration-200`}
                    >
                      <i
                        className={`ri-instagram-fill ${
                          mode ? "text-black" : "text-white"
                        } transition-all duration-200`}
                      ></i>
                    </div>
                    <div
                      className={`relative z-10 cursor-pointer w-[2rem] flex justify-center items-center h-[2rem] rounded-full ${
                        mode ? "bg-white" : "bg-black"
                      } transition-all duration-200`}
                    >
                      <i
                        className={`ri-linkedin-fill ${
                          mode ? "text-black" : "text-white"
                        } transition-all duration-200`}
                      ></i>
                    </div>
                    <div
                      className={`relative z-10 cursor-pointer w-[2rem] flex justify-center items-center h-[2rem] rounded-full ${
                        mode ? "bg-white" : "bg-black"
                      } transition-all duration-200`}
                    >
                      <i
                        className={`ri-facebook-fill ${
                          mode ? "text-black" : "text-white"
                        } transition-all duration-200`}
                      ></i>
                    </div>
                    <div
                      className={`relative z-10 cursor-pointer w-[2rem] flex justify-center items-center h-[2rem] rounded-full ${
                        mode ? "bg-white" : "bg-black"
                      } transition-all duration-200`}
                    >
                      <i
                        className={`ri-twitter-x-fill ${
                          mode ? "text-black" : "text-white"
                        } transition-all duration-200`}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* trail */}
            <div className={` flex justify-between items-center w-full`}>
              <a
                href="#"
                className={`relative z-10 text-white cursor-pointer text-xs`}
              >
                © BubbleBit {new Date().getFullYear()}
              </a>
              <p
                onClick={() => {
                  mainContainerRef.current.scrollTop = 0;
                }}
                className={`relative z-10 text-white underline cursor-pointer text-xs uppercase select-none`}
              >
                BACK to TOP
              </p>
            </div>
            {/* footerCanvas */}
            <FooterCanvas />
          </div>
        </div>
      </div>
    </>
  );
};

const FooterCanvas = () => {
  const FooterRefCanvas = useRef(null);
  const objects = [
    {
      sprite: "https://i.imgur.com/RADmiFI.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 560,
      y: 500,
      width: 133,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/NwQqeng.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 905,
      y: 60,
      width: 56,
      height: 56,
    },
    {
      sprite: "https://i.imgur.com/ptUWXgO.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 30,
      y: 360,
      width: 52,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/TyOmVtt.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 60,
      y: 420,
      width: 105,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/tc3MsJP.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 800,
      y: 380,
      width: 86,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/QYNTBNr.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 220,
      y: 540,
      width: 165,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/rSnEY9Q.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 400,
      y: 490,
      width: 128,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/5BSBvSm.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 390,
      y: 440,
      width: 104,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/VEyrikN.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 170,
      y: 390,
      width: 82,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/hr9p4uV.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 360,
      y: 420,
      width: 108,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/n6TV7XG.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 300,
      y: 380,
      width: 92,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/dax8MwT.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 700,
      y: 360,
      width: 86,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/C2qPMbB.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 80,
      y: 260,
      width: 42,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/4gPcZVN.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 230,
      y: 140,
      width: 87,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/RStSwfG.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 880,
      y: 280,
      width: 40,
      height: 40,
    },
    {
      sprite: "https://i.imgur.com/YS51eIC.png",
      url: "https://github.com/BubbleBitCore/TechMingle/",
      x: 930,
      y: 480,
      width: 112,
      height: 40,
    },
  ];
  const pillWorld = () => {
    let Engine = Matter.Engine,
      Render = Matter.Render,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create an engine
    let engine = Engine.create(),
      world = engine.world;
    // create a renderer
    let render = Render.create({
      element: FooterRefCanvas.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 2,
        background: "transparent",
        wireframes: false,
      },
    });

    // create bounds
    let ground = Bodies.rectangle(
      window.innerWidth / 2 + 160,
      window.innerHeight - 105,
      window.innerWidth + 320,
      160,
      { render: { fillStyle: "transparent" }, isStatic: true }
    );
    let wallLeft = Bodies.rectangle(
      -80,
      window.innerHeight / 2,
      160,
      window.innerHeight,
      { render: { fillStyle: "transparent" }, isStatic: true }
    );
    let wallRight = Bodies.rectangle(
      window.innerWidth - 40,
      window.innerHeight / 2,
      160,
      1200,
      { render: { fillStyle: "transparent" }, isStatic: true }
    );
    let roof = Bodies.rectangle(
      window.innerWidth / 2 + 160,
      -80,
      window.innerWidth + 320,
      160,
      { render: { fillStyle: "transparent" }, isStatic: true }
    );

    // object
    let radius = 20;

    // create objects

    // art & design
    const renderedObjects = [];
    objects.forEach((obj) => {
      renderedObjects.push(
        Bodies.rectangle(obj.x, obj.y, obj.width, obj.height, {
          id: obj.sprite,
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture: obj.sprite,
              xScale: 0.5,
              yScale: 0.5,
            },
          },
          url: obj.url,
        })
      );
    });

    // Original Shape
    // let illustration = Bodies.rectangle(70, 500, 133, 40, {render: { fillStyle: arts}, chamfer: {radius: 20}})

    // add all of the bodies to the world
    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      ...renderedObjects,
    ]);

    // add mouse control
    let mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // Allow page scrolling in matter.js window
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    // Detect clicks vs. drags
    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () => {
      // console.log(click ? "click" : "drag")
    });

    // Create a On-Mouseup Event-Handler
    Events.on(mouseConstraint, "mouseup", function (event) {
      let mouseConstraint = event.source;
      let bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (let i = 0; i < bodies.length; i++) {
          let body = bodies[i];
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              let bodyUrl = body.url;
              console.log("Body.Url >> " + bodyUrl);
              // Hyperlinking feature
              if (bodyUrl != undefined) {
                //window.location.href = bodyUrl;
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
  };

  useEffect(() => {
    pillWorld();
  }, []);
  return (
    <>
      <div
        ref={FooterRefCanvas}
        className={`z-0 absolute top-0 left-0 w-full h-full`}
      ></div>
    </>
  );
};

export default Home;
