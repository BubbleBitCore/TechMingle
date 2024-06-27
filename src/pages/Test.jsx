// This page is created to test individual components
import { useState } from "react";
import DropDown from "../components/DropDown";

const Test = () => {
  const [podcastVisibility, setPodcastVisibility] = useState("Public");
  const [language, setLanguage] = useState("English");
  const languages = ["Hindi", "English", "Marathi", "Spanish"];
  const [dropDownStatus1, setDropDownStatus1] = useState(false);
  const [dropDownStatus2, setDropDownStatus2] = useState(false);
  return (
    <>
      <div
        className="flex w-72"
        onClick={(e) => {
          e.stopPropagation();
          setDropDownStatus1(false);
          setDropDownStatus2(false);
        }}
      >
        <DropDown
          title={"Visibility"}
          value={podcastVisibility}
          setValue={setPodcastVisibility}
          list={["Private", "Public"]}
          visible={dropDownStatus1}
          setVisible={setDropDownStatus1}
          generalCallback={() => {
            setDropDownStatus2(false);
          }}
        ></DropDown>

        <DropDown
          title={"Language"}
          value={language}
          setValue={setLanguage}
          list={languages}
          visible={dropDownStatus2}
          setVisible={setDropDownStatus2}
          generalCallback={() => {
            setDropDownStatus1(false);
          }}
        ></DropDown>
      </div>
    </>
  );
};

export default Test;
