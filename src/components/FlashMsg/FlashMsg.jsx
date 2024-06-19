import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  FLASH_ERROR,
  FLASH_PENDING,
  FLASH_WARNING,
} from "../../constants/FlashMsgConstants";

const FlashMsg = ({
  FLASH_TYPE,
  FLASH_STATE,
  FLASH_TITLE,
  FLASH_MESSAGE,
  ONCLICK,
  CANCELCLICK,
  enableCancel = false,
}) => {
  const mode = useSelector((state) => state.common.mode);
  const { flashVisibility, setFlashVisibility } = FLASH_STATE;
  return (
    <>
      {FLASH_TYPE != null && (
        <>
          <style key={"Styles"}>
            {`
            .bgBlur{
                backdrop-filter:blur(5px);
            }
            .glass{
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
            }
            .warningTint{
                background: rgba(255, 83, 0, 0.35);
            }
            .errorTint{
                background: rgba(255, 5, 5, 0.35);
            }
            .pendingTint{
                background: rgba(0, 187, 255, 0.35);
            }
            .successTint{ 
                background: rgba(106, 255, 93, 0.35);
            }


            .warningText{
                color: rgba(255, 83, 0,1);
            }
            .errorText{
                color: rgba(255, 5, 5,1);
            }
            .pendingText{
                color: rgba(0, 187, 255,1);
            }
            .successText{ 
                color: rgba(10, 255, 20,1);
            }
            .warningBg{
              background-color: rgba(255, 83, 0,0.85);
            }
            .errorBg{
              background-color : rgba(255, 5, 5,1);
            }
            .pendingBg{
              background-color : rgba(0, 187, 255,1);
            }
            .successBg{
              background-color : rgba(10, 255, 20,1);
            }
            
            `}
          </style>

          <motion.div
            key={"FlashDiv"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "linear",
              duration: 0.2,
            }}
            onClick={(e) => {
              e.stopPropagation()
              setFlashVisibility(false);
              CANCELCLICK();
            }}
            className={`z-[100] w-screen h-screen top-0 left-0 fixed bgBlur flex justify-center items-center`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`${
                mode ? "bg-[#181818]" : "bg-white shadow-2xl"
              } py-5 px-10 rounded-3xl flex flex-col justify-center items-center max-sm:w-[20rem]`}
            >
              {/* icon */}
              <div
                className={`flex justify-center items-start w-full h-full mb-3`}
              >
                <i
                  className={` text-3xl  ${
                    FLASH_TYPE === FLASH_WARNING
                      ? " ri-alert-fill warningText "
                      : FLASH_TYPE === FLASH_ERROR
                      ? " ri-error-warning-fill errorText "
                      : FLASH_TYPE === FLASH_PENDING
                      ? " ri-radio-button-line pendingText "
                      : " ri-checkbox-circle-fill successText "
                  }`}
                ></i>
              </div>
              {/* Msg */}
              <div
                className={`flex flex-col w-full h-full  px-2 overflow-x-hidden overflow-y-auto gap-2`}
              >
                <div
                  className={`aspira flex justify-center items-center flex-shrink-0 text-2xl font-bold   ${
                    mode ? "text-gray-200" : "text-black"
                  } w-full `}
                >
                  <p title={FLASH_TITLE} className={`max-w-[14rem] text-ellipsis whitespace-nowrap overflow-hidden `}>{FLASH_TITLE}</p>
                </div>
                <div
                  className={`font-sans w-full text-center  max-w-[18rem]  ${
                    mode ? "text-gray-400" : "text-[#898989]"
                  } overflow-x-hidden overflow-y-auto  max-sm:text-sm`}
                >
                  {FLASH_MESSAGE}
                </div>
                {/* action btns */}
                <div className="grid grid-cols-2 w-full md:gap-5 max-sm:gap-2 mt-2 max-sm:mt-4">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      ONCLICK();
                      setFlashVisibility(false);
                    }}
                    className={` font-bold  flex justify-center items-center cursor-pointer px-10 py-3  text-sm  max-sm:px-5  bg-[#f2f4f6] hover:opacity-85 rounded-3xl transition-all duration-500 ${
                      FLASH_TYPE === FLASH_WARNING
                        ? " warningBg text-white"
                        : FLASH_TYPE === FLASH_ERROR
                        ? " errorBg text-white"
                        : FLASH_TYPE === FLASH_PENDING
                        ? " pendingBg text-white"
                        : " successBg "
                    }`}
                  >
                    <span>Okay</span>
                  </div>
                  {enableCancel && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlashVisibility(false);
                        CANCELCLICK();
                      }}
                      className={`font-bold  flex justify-center items-center cursor-pointer px-10 py-3  text-sm  max-sm:px-5  bg-[#f2f4f6] hover:bg-[#eceeef] rounded-3xl transition-all duration-500 `}
                    >
                      <span>Cancel</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default FlashMsg;
