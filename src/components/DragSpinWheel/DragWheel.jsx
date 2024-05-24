import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const DragWheel = ({ dragWheelState, list }) => {
  const mode = useSelector((state) => state.common.mode);
  const { drahWheelVisibility, setDragWheelVisibility } = dragWheelState;
  const wheelRef = useRef(null);
  const [sectionhover, setSectionhover] = useState(false);

  useEffect(() => {
    // initialize the wheel
    var scope = {};
    let wheel = new Wheel(wheelRef);
    scope.wheel = wheel;
    return () => {
      delete scope.wheel;
    };
  }, []);
  return (
    <>
      <style key={"styles"}>
        {`
                .glassBg{
                    background: transparent; 
                    backdrop-filter: blur(3px); 
                }
                .spinner{
                    align-items: center;
                    position: relative;
                    
                }
                
                .outerRidgeOne::before{
                  content:"";
                  position:absolute;
                  top:0rem;
                  left:0rem;
                  height:100%;
                  width:100%;
                  border-width:2px;
                  transition:all ease 0.2s;
                  
                  pointer-events: none;
                  border-top-left-radius:100%;
                  border-color:inherit;
                  border-right-color:transparent;
                  border-bottom-color:transparent;
                }
                .outerRidgeOne:hover::before{
                  top:-0.45rem;
                  left:-0.45rem;
                  
                  
                }
                .outerRidgeTwo::before{
                  content:"";
                  position:absolute;
                  top:0rem;
                  right:0rem;
                  height:100%;
                  width:100%;
                  border-width:2px;
                  transition:all ease 0.2s;
                  
                  pointer-events: none;
                  border-top-right-radius:100%;
                  border-color:inherit;
                  border-bottom-color:transparent;
                  border-left-color:transparent;
                }
                .outerRidgeTwo:hover::before{
                  top:-0.45rem;
                  right:-0.45rem;
                  
                  
                }
                .outerRidgeThree::before{
                  content:"";
                  position:absolute;
                  bottom:0rem;
                  left:0rem;
                  height:100%;
                  width:100%;
                  border-width:2px;
                  transition:all ease 0.2s;
                  
                  pointer-events: none;
                  border-bottom-left-radius:100%;
                  border-color:inherit;
                  border-right-color:transparent;
                  border-top-color:transparent;
                }
                .outerRidgeThree:hover::before{
                  bottom:-0.45rem;
                  left:-0.45rem;
                 
                  
                }
                .outerRidgeFour::before{
                  content:"";
                  position:absolute;
                  bottom:0rem;
                  right:0rem;
                  height:100%;
                  width:100%;
                  border-width:2px;
                  transition:all ease 0.2s;
                  
                  pointer-events: none;
                  border-bottom-right-radius:100%;
                  border-color:inherit;
                  border-left-color:transparent;
                  border-top-color:transparent;
                }
                .outerRidgeFour:hover::before{
                  bottom:-0.45rem;
                  right:-0.45rem;
                  
                }
                .segmentGlass{
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }

                .redGlassDark{
                  background: rgba(244, 15, 15, 0.2);
                  
                }
                .redGlassLight{
                  background: rgba(244, 15, 15, 0.4);
                }

                .blueGlassDark{
                  background: rgba(59, 130, 246, 0.2);
                  
                }
                .blueGlassLight{
                  background: rgba(59, 130, 246, 0.4);
                  
                }
                .yellowGlassDark{
                  background: rgba(234, 179, 8,0.2);
                  
                }
                .yellowGlassLight{
                  background: rgba(234, 179, 8,0.4);
                  
                }
                .greenGlassDark{
                  background: rgba(34, 197, 94,0.2);
                  
                }
                .greenGlassLight{
                  background: rgba(34, 197, 94,0.4);
                  
                }

            
        `}
      </style>
      <motion.div key={"Wheel"} initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "linear",
              duration: 0.2,
            }} className="md:w-full max-sm:top-0 max-sm:left-0 max-sm:fixed md:absolute md:h-full max-sm:w-screen max-sm:h-screen overflow-hidden bg-transparent glassBg  flex justify-center items-center">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          ref={wheelRef}
          className="spinner max-sm:w-[14rem] max-sm:h-[14rem] w-[20rem] h-[20rem] rounded-full cursor-grab"
        >
          <div
            className={`w-full h-full rounded-full flex flex-col group bg-transparent gap-3  relative`}
          >
            <div className={`h-1/2 w-full flex gap-3 `}>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                onClick={() => {
                  list[0].helper();
                }}
                title={list[0].title}
                className={`outerRidgeOne relative border-blue-500 w-full h-full  hover:-translate-x-[10%] hover:-translate-y-[10%]  rounded-tl-full segmentGlass ${
                  mode ? "blueGlassDark" : "blueGlassLight"
                }  transition-all duration-200  cursor-pointer flex justify-center items-center`}
              >
                <i
                  className={`text-2xl text-blue-500 ${list[0].className} ${list[0].icon} -rotate-45`}
                ></i>
              </div>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                onClick={() => {
                  list[1].helper();
                }}
                title={list[1].title}
                className={`outerRidgeTwo relative border-green-500 w-full h-full hover:translate-x-[10%] hover:-translate-y-[10%] rounded-tr-full bg-blue-500 segmentGlass ${
                  mode ? "greenGlassDark" : "greenGlassLight"
                } transition-all duration-200  cursor-pointer flex justify-center items-center`}
              >
                <i
                  className={`text-2xl text-green-500 ${list[1].className} ${list[1].icon} rotate-45`}
                ></i>
              </div>
            </div>
            <div className={`h-1/2 w-full flex gap-3 `}>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                onClick={() => {
                  list[2].helper();
                }}
                title={list[2].title}
                className={`outerRidgeThree relative border-yellow-500 w-full h-full hover:-translate-x-[10%] hover:translate-y-[10%] rounded-l-full rounded-t bg-yellow-500 segmentGlass ${
                  mode ? "yellowGlassDark " : "yellowGlassLight "
                } transition-all duration-200  cursor-pointer flex justify-center items-center`}
              >
                <i
                  className={`text-2xl text-yellow-500 ${list[2].className} ${list[2].icon} -rotate-[135deg]`}
                ></i>
              </div>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                onClick={() => {
                  list[3].helper();
                }}
                title={list[3].title}
                className={`outerRidgeFour relative border-red-500 w-full h-full hover:translate-x-[10%] hover:translate-y-[10%] rounded-r-full rounded-t bg-red-500 segmentGlass ${
                  mode ? "redGlassDark" : "redGlassLight"
                } transition-all duration-200  cursor-pointer flex justify-center items-center`}
              >
                <i
                  className={`text-2xl text-red-500 ${list[3].className} ${list[3].icon} rotate-[135deg]`}
                ></i>
              </div>
            </div>
            {/* Central Ring */}
            <div
              className={`absolute ${
                sectionhover ? "scale-[85%]" : "group-hover:scale-90"
              }  transition-all duration-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/2 h-1/2 ${
                mode ? "bg-[#0B0D10]" : "bg-[#f3f3f3]"
              } rounded-full z-10  cursor-pointer flex justify-center items-center`}
              onClick={() => {
                setDragWheelVisibility(false);
              }}
            ></div>
          </div>
        </div>
        <i
          onClick={(e) => {
            setDragWheelVisibility(false);
          }}
          className={`z-20 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl ri-close-fill ${
            mode ? "text-gray-200" : "text-gray-600"
          }`}
        ></i>
      </motion.div>
    </>
  );
};

class Wheel {
  constructor(ref) {
    this.wheelElm = ref.current;
    this.wheelElm.addEventListener("mousedown", (e) => {
      this.onGrab(e.clientX, e.clientY);
    });
    window.addEventListener("mousemove", (e) => {
      if (e.which == 1) this.onMove(e.clientX, e.clientY);
      else if (!this.isDragging) this.onRelease();
    });
    window.addEventListener("mouseup", this.onRelease.bind(this));

    this.wheelElm.addEventListener("touchstart", (e) => {
      this.onGrab(e.touches[0].clientX, e.touches[0].clientY);
    });
    window.addEventListener("touchmove", (e) => {
      this.onMove(e.touches[0].clientX, e.touches[0].clientY);
    });
    window.addEventListener("touchend", this.onRelease.bind(this));

    this.calculatePositions();
    window.addEventListener("resize", this.calculatePositions.bind(this));

    this.currentAngle = 0;
    this.oldAngle = 0;
    this.lastAngles = [0, 0, 0];
    this.isDragging = false;
    this.startX = null;
    this.startY = null;

    this.positionCallbacks = [];
  }

  calculatePositions() {
    this.wheelWidth = this.wheelElm.getBoundingClientRect()["width"];
    this.wheelHeight = this.wheelElm.getBoundingClientRect()["height"];
    this.wheelX =
      this.wheelElm.getBoundingClientRect()["x"] + this.wheelWidth / 2;
    this.wheelY =
      this.wheelElm.getBoundingClientRect()["y"] + this.wheelHeight / 2;
  }

  onPositionChange(callback) {
    this.positionCallbacks.push(callback);
  }

  onGrab(x, y) {
    if (!this.isSpinning) {
      this.isDragging = true;
      this.startAngle = this.calculateAngle(x, y);
    }
  }

  onMove(x, y) {
    if (!this.isDragging) return;

    this.lastAngles.shift();
    this.lastAngles.push(this.currentAngle);

    let deltaAngle = this.calculateAngle(x, y) - this.startAngle;
    this.currentAngle = deltaAngle + this.oldAngle;

    this.render(this.currentAngle);
  }

  calculateAngle(currentX, currentY) {
    let xLength = currentX - this.wheelX;
    let yLength = currentY - this.wheelY;
    let angle = Math.atan2(xLength, yLength) * (180 / Math.PI);
    return 365 - angle;
  }

  onRelease() {
    if (this.isDragging) {
      this.isDragging = false;
      this.oldAngle = this.currentAngle;

      let speed = this.lastAngles[0] - this.lastAngles[2];
      this.giveMoment(speed);
    }
  }

  giveMoment(speed) {
    let maxSpeed = 20;
    if (speed >= maxSpeed) speed = maxSpeed;
    else if (speed <= -maxSpeed) speed = -maxSpeed;

    if (speed >= 0.1) {
      speed -= 0.1;
      window.requestAnimationFrame(this.giveMoment.bind(this, speed));
      this.isSpinning = true;
    } else if (speed <= -0.1) {
      speed += 0.1;
      window.requestAnimationFrame(this.giveMoment.bind(this, speed));
      this.isSpinning = true;
    } else {
      this.isSpinning = false;
    }

    this.oldAngle -= speed;
    this.render(this.oldAngle);
  }

  render(deg) {
    this.wheelElm.style.transform = `rotate(${deg}deg)`;
    for (let callback of this.positionCallbacks) {
      callback(deg);
    }
  }
}

export default DragWheel;
