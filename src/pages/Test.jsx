// This page is created to test individual components
import { useEffect, useState } from "react";
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
  const [settlePromise, setSettlePromise] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSettlePromise(true);
    }, 5000);
  }, []);
  return (
    <>
      <AnimatePresence>
        {flashVisibility && (
          <FlashMsg
            key={"FlasMsg"}
            FLASH_STATE={FLASH_STATE}
            FLASH_TYPE={FLASH_ERROR}
            FLASH_TITLE={"Payment Done"}
            FLASH_MESSAGE={
              "Podcast transaction is successfull ,press 'Ok' to continue"
            }
            ONCLICK={() => {
              console.log("hello");
            }}
            enableCancel={true}
            CANCELCLICK={() => {
              console.log("cancel");
            }}
            enablePromiseFlash={true}
            promiseSettled={settlePromise}
            postPromiseCancelClick={() => {
              console.log("Post Promise cancel");
            }}
            postPromiseOnClick={() => {
              console.log("Post Promise ok");
            }}
            postPromiseFlashType={FLASH_SUCCESS}
            postPromiseEnableCancel={false}
            postPromiseTitle={"Update Successfull"}
            postPromiseMessage={
              "Podcast transaction is successfull ,press 'Ok' to continue"
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Test;
