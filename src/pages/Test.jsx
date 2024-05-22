// This page is created to test individual components
import { useState } from "react";
import DragWheel from "../components/DragSpinWheel/DragWheel";

const Test = () => {
  const [drahWheelVisibility, setDragWheelVisibility] = useState(true);
  const dragWheelState = { drahWheelVisibility, setDragWheelVisibility };
  const wheelList = [
    {
      icon: "ri-voiceprint-fill",
      className: "",
      title: "Podcasts",
      helper: () => {
        console.log("title 1");
      },
    },
    {
      icon: "ri-apps-line",
      className: "",
      title: "Articles",
      helper: () => {
        console.log("title 2");
      },
    },
    {
      icon: "ri-skull-2-fill",
      className: "",
      title: "Unknown",
      helper: () => {
        console.log("title 3");
      },
    },
    {
      icon: "ri-question-mark",
      className: "",
      title: "Unknown",
      helper: () => {
        console.log("title 4");
      },
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <DragWheel dragWheelState={dragWheelState} list={wheelList}/>
      </div>
    </>
  );
};

export default Test;
