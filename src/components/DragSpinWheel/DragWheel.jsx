import { useEffect, useRef, useState } from "react";

const DragWheel = () => {
  const wheelRef = useRef(null);
  const [sectionhover, setSectionhover] = useState(false);

  useEffect(() => {
    // initialize the wheel
    let wheel = new Wheel(wheelRef);
  }, []);
  return (
    <>
      <style>
        {`
        .glassBg{
            box-shadow: 0 0 5px 0 ; 
            background: transparent; 
            backdrop-filter: blur(1.5px); 
                }
                .spinner{
                    width: 300px;
                    height: 300px;
                    min-width: 300px;
                    min-height: 300px;
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
                  top:-0.3rem;
                  left:-0.3rem;
                  
                  
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
                  top:-0.3rem;
                  right:-0.3rem;
                  
                  
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
                  bottom:-0.3rem;
                  left:-0.3rem;
                 
                  
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
                  bottom:-0.3rem;
                  right:-0.3rem;
                  
                }

                .redGlass{
                  background: rgba(231, 48, 48, 0.2);
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(5px);
                  -webkit-backdrop-filter: blur(5px);
                }

                .blueGlass{
                  background: rgba(59, 130, 246, 0.2);
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(5px);
                  -webkit-backdrop-filter: blur(5px);
                }
                .yellowGlass{
                  background: rgba(234, 179, 8,0.2);
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(5px);
                  -webkit-backdrop-filter: blur(5px);
                }
                .greenGlass{
                  background: rgba(34, 197, 94,0.2);
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(5px);
                  -webkit-backdrop-filter: blur(5px);
                }

            
        `}
      </style>
      <div className="w-full h-full overflow-hidden bg-transparent glassBg  flex justify-center items-center">
        <div ref={wheelRef} className="spinner rounded-full cursor-grab">
          <div className="w-full h-full rounded-full flex flex-col group  gap-3  relative">
            <div className={`h-1/2 w-full flex gap-3 `}>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                className="outerRidgeOne relative border-red-500 w-full h-full  hover:-translate-x-[10%] hover:-translate-y-[10%]  rounded-tl-full redGlass  transition-all duration-200  cursor-pointer"
              ></div>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                className="outerRidgeTwo relative border-blue-500 w-full h-full hover:translate-x-[10%] hover:-translate-y-[10%] rounded-tr-full bg-blue-500 blueGlass transition-all duration-200  cursor-pointer"
              ></div>
            </div>
            <div className={`h-1/2 w-full flex gap-3 `}>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                className="outerRidgeThree relative border-yellow-500 w-full h-full hover:-translate-x-[10%] hover:translate-y-[10%] rounded-l-full rounded-t bg-yellow-500 yellowGlass transition-all duration-200  cursor-pointer"
              ></div>
              <div
                onMouseEnter={() => {
                  setSectionhover(true);
                }}
                onMouseLeave={() => {
                  setSectionhover(false);
                }}
                className="outerRidgeFour relative border-green-500 w-full h-full hover:translate-x-[10%] hover:translate-y-[10%] rounded-r-full rounded-t bg-green-500 greenGlass transition-all duration-200  cursor-pointer"
              ></div>
            </div>
            {/* Central Ring */}
            <div
              className={`absolute ${
                sectionhover ? "scale-[85%]" : "group-hover:scale-90"
              }  transition-all duration-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/2 h-1/2 bg-black rounded-full z-10 `}
            ></div>
          </div>
        </div>
      </div>
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
