import crime from "../assets/icons/crime.png"
import culture from "../assets/icons/culture.png"
import drama from "../assets/icons/drama.png"
import fashion from "../assets/icons/fashion.png"
import teach from "../assets/icons/teach.png"

export const navigation = [
    {
      name: "Home", // this is blank as it is handled differently then the rest
      btnColor: "bg-[#9FEEA7]",
      icon: "fa-solid fa-house-chimney",
    },
    {
      name: "Gaming",
      link: "/gaming",
      icon: "ri-discord-fill",
    },
    {
      name: "Tech-frenzy",
      link: "/tech-frenzy",
      icon: "fa-solid fa-laptop",
    },
    { name: "Podcasts", link: "/podcasts/landing", icon: "fa-solid fa-podcast" },
    { name: "Workshops", link: "/workshops", icon: "fa-solid fa-lightbulb" },
    { name: "Books", link: "/books", icon: "fa-solid fa-book" },
    { name: "Jobs", link: "/jobs", icon: "fa-solid fa-briefcase" },
    { name: "Articles", link: "/articles", icon: "fa-regular fa-newspaper" },
    { name: "Clubs", link: "/clubs", icon: "fa-solid fa-people-group" },
  ];
  