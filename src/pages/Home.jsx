import React from "react";
import HomeCards from "../components/HomeCards";
import techFrenzy from "../assets/techFrenzypeople.png";
import tablet from "../assets/tabletcrud.png";
import gaming from "../assets/gaming.png";
import interview from "../assets/interview.png";
import groupcall from "../assets/onlineGroupCall.png";
import article from "../assets/blogarticles.png";
import poopicon from "../assets/mdi_emoji-poop.png";
import poopright from "../assets/mdi_emoji-poop opp.png";

const Home = () => {
  return (
    <div className="flex flex-col w-full pt-6 gap-10">
      <div className="flex items-center w-full justify-center">
        <img className="w-16 h-16" src={poopicon}></img>
        <p className="text-4xl tracking-wide font-thin">
          Where tech enthusiasts and fresh minds unite to innovate thrive
        </p>
        <img className="w-16 h-16" src={poopright}></img>
      </div>

      <div className="grid grid-cols-3 gap-12 text-2xl pt-12">
        <HomeCards
          image={techFrenzy}
          heading={"Place for competition among minds"}
          cardtitle={"Tech-frenzy"}
          isAvailable={false}
          btnColor={"bg-[#9FEEA7]"}
          btnHoverColor={"bg-[#9FEEA7]"}
          link={"/tech-frenzy"}
        />
        <HomeCards
          image={gaming}
          heading={"Play games to focus on tactics"}
          cardtitle={"Gaming"}
          isAvailable={false}
          btnColor={"bg-[#BFC0DD]"}
          btnHoverColor={"bg-[#BFC0DD]"}
          link={"/gaming"}
        />
        <HomeCards
          image={interview}
          heading={"Show for individuals for personality"}
          cardtitle={"Podcast"}
          isAvailable={true}
          btnColor={"bg-[#EAB0EC]"}
          btnHoverColor={"bg-[#EAB0EC]"}
          link={"/podcasts"}
        />
        <HomeCards
          image={article}
          heading={"Unlock the world by reading articles"}
          cardtitle={"Articles"}
          isAvailable={false}
          btnColor={"bg-[#E9C888]"}
          btnHoverColor={"bg-[#E9C888]"}
          link={"/articles"}
        />
        <HomeCards
          image={groupcall}
          heading={"Place to attend great minds"}
          cardtitle={"Workshops"}
          isAvailable={false}
          btnColor={"bg-[#88D7E9]"}
          btnHoverColor={"bg-[#88D7E9]"}
          link={"/workshops"}
        />
        <HomeCards
          image={tablet}
          heading={"Code books, projects, case studies etc"}
          cardtitle={"Books"}
          isAvailable={false}
          btnColor={"bg-[#E3B3B3]"}
          btnHoverColor={"bg-[#E3B3B3]"}
          link={"/books"}
        />
      </div>
    </div>
  );
};

export default Home;
