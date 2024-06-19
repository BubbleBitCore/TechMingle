// This page is created to test individual components
import { useState } from "react";
import FlashMsg from "../components/FlashMsg/FlashMsg";
import {
  FLASH_ERROR,
  FLASH_PENDING,
  FLASH_SUCCESS,
  FLASH_WARNING,
} from "../constants/FlashMsgConstants.js";
import { AnimatePresence } from "framer-motion";

const Test = () => {
  const [flashVisibility, setFlashVisibility] = useState(true);
  const FLASH_STATE = {
    flashVisibility,
    setFlashVisibility,
  };
  return (
    <>
      <AnimatePresence>
        {flashVisibility && (
          <FlashMsg
            key={"FlasMsg"}
            FLASH_STATE={FLASH_STATE}
            FLASH_TYPE={FLASH_ERROR}
            FLASH_TITLE={"Payment Done"}
            FLASH_MESSAGE={"Podcast transaction is successfull ,press 'Ok' to continue"}
            ONCLICK={() => {
              console.log("hello");
            }}
            enableCancel={true}
            CANCELCLICK={() => {
              console.log("cancel");
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Test;
