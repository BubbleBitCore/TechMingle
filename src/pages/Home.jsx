import React from "react";
import HomeCards from "../components/HomeCards";
import homeSection from "../constants/homeSection";
import poopicon from "../assets/images/mdi_emoji-poop.png";
import poopright from "../assets/images/mdi_emoji-poop opp.png";

const Home = ({Header}) => {
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <Header urlName="TechMingle"/>
      <div className="mt-1 mb-2 h-full w-full">content</div>
    </div>
  );
};

export default Home;
