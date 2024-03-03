import techFrenzy from "../assets/images/techFrenzypeople.png";
import tablet from "../assets/images/tabletcrud.png";
import gaming from "../assets/images/gaming.png";
import interview from "../assets/images/interview.png";
import groupcall from "../assets/images/onlineGroupCall.png";
import article from "../assets/images/blogarticles.png";

const sections = [
    {
      image: techFrenzy,
      heading: "Place for competition among minds",
      cardtitle: "Tech-frenzy",
      isAvailable: false,
      btnColor: "bg-[#9FEEA7]",
      btnHoverColor: "bg-[#9FEEA7]",
      link: "/tech-frenzy",
    },
    {
      image: gaming,
      heading: "Play games to focus on tactics",
      cardtitle: "Gaming",
      isAvailable: false,
      btnColor: "bg-[#BFC0DD]",
      btnHoverColor: "bg-[#BFC0DD]",
      link: "/gaming",
    },
    {
      image: interview,
      heading: "Show for individuals for personality",
      cardtitle: "Podcast",
      isAvailable: true,
      btnColor: "bg-[#EAB0EC]",
      btnHoverColor: "bg-[#EAB0EC]",
      link: "/podcasts",
    },
    {
      image: article,
      heading: "Unlock the world by reading articles",
      cardtitle: "Articles",
      isAvailable: false,
      btnColor: "bg-[#E9C888]",
      btnHoverColor: "bg-[#E9C888]",
      link: "/articles",
    },
    {
      image: groupcall,
      heading: "Place to attend great minds",
      cardtitle: "Workshops",
      isAvailable: false,
      btnColor: "bg-[#88D7E9]",
      btnHoverColor: "bg-[#88D7E9]",
      link: "/workshops",
    },
    {
      image: tablet,
      heading: "Code books, projects, case studies etc",
      cardtitle: "Books",
      isAvailable: false,
      btnColor: "bg-[#E3B3B3]",
      btnHoverColor: "bg-[#E3B3B3]",
      link: "/books",
    },
  ];

export default sections;