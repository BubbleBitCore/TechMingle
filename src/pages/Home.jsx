import React from "react";
import HomeCards from "../components/HomeCards";
import homeSection from "../constants/homeSection";
import poopicon from "../assets/images/mdi_emoji-poop.png";
import poopright from "../assets/images/mdi_emoji-poop opp.png";

const Home = () => {
  
  return (
    <div className="flex flex-col w-full pt-6 gap-10">
      <div className="flex items-center w-full justify-center">
        <img className="w-16 h-16" src={poopicon}></img>
        <p className="text-3xl tracking-wide font-thin">
          Where tech enthusiasts and fresh minds unite to innovate thrive
        </p>
        <img className="w-16 h-16" src={poopright}></img>
      </div>

      <div className="grid grid-cols-3 gap-12 text-2xl pt-12">
        {homeSection?.map((item, idx) => (
          <HomeCards
            key={idx}
            image={item.image}
            heading={item.heading}
            cardtitle={item.cardtitle}
            isAvailable={item.isAvailable}
            btnColor={item.btnColor}
            btnHoverColor={item.btnHoverColor}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
