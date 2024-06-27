// This page is created to test individual components
import { useState } from "react";
import DropDown from "../components/DropDown";

const Test = () => {
  const [podcastVisibility, setPodcastVisibility] = useState("Public");
  const [language,setLanguage] = useState("English");
  const languages = ["Hindi","English","Marathi","Spanish"];
  return (
    <>
      <DropDown
        title={"Visibility"}
        value={podcastVisibility}
        setValue={setPodcastVisibility}
        list={["Private", "Public"]}
      ></DropDown>

      <DropDown
        title={"Language"}
        value={language}
        setValue={setLanguage}
        list={languages}
      ></DropDown>
    </>
  );
};

export default Test;
