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

            .warningBorder{
                border-color: rgba(255, 83, 0, 0.5);
            }
            .errorBorder{
                border-color: rgba(255, 5, 5, 0.5);
            }
            .pendingBorder{
                border-color: rgba(0, 187, 255, 0.5);
            }
            .successBorder{ 
                border-color: rgba(106, 255, 93, 0.5);
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
            onClick={() => {
              setFlashVisibility(false);
            }}
            className={`z-[100] w-screen h-screen top-0 left-0 fixed bgBlur flex justify-center items-center`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`md:w-[35%] max-sm:w-[80%] max-sm:rounded-lg md:h-auto md:max-h-[40%] md:rounded-xl flex p-5 md:gap-5 max-sm:gap-2  overflow-hidden ${
                FLASH_TYPE === FLASH_WARNING
                  ? " warningBorder "
                  : FLASH_TYPE === FLASH_ERROR
                  ? " errorBorder "
                  : FLASH_TYPE === FLASH_PENDING
                  ? " pendingBorder "
                  : " successBorder "
              }  ${
                mode
                  ? "bg-[#181818]"
                  : `glass border-2 ${
                      FLASH_TYPE === FLASH_WARNING
                        ? " warningTint "
                        : FLASH_TYPE === FLASH_ERROR
                        ? " errorTint "
                        : FLASH_TYPE === FLASH_PENDING
                        ? " pendingTint "
                        : " successTint "
                    } `
              } `}
            >
              {/* icon */}
              <div
                className={`flex justify-center items-start w-[2rem] h-full`}
              >
                <i
                  className={` md:text-4xl max-sm:text-3xl ${
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
                  className={`orbitron   flex-shrink-0 md:text-3xl max-sm:text-xl ${
                    mode ? "text-gray-200" : "text-black"
                  } w-full text-ellipsis whitespace-nowrap overflow-hidden`}
                >
                  {FLASH_TITLE}{" "}
                </div>
                <div
                  className={`orbitron    w-full h-auto max-h-[15rem]  ${
                    mode ? "text-gray-400" : "text-gray-800"
                  } overflow-x-hidden overflow-y-auto max-sm:text-sm`}
                >
                  {FLASH_MESSAGE}
                </div>
                {/* action btns */}
                <div className="flex w-full md:gap-5 max-sm:gap-2 mt-2">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      ONCLICK();
                      setFlashVisibility(false);
                    }}
                    className={`orbitron   cursor-pointer md:px-5 md:py-2 max-sm:p-2 max-sm:px-3 text-sm max-sm:text-xs ${
                      mode
                        ? "bg-[#0B0D10] hover:bg-[#1b1d21] border-[#1a1a1a] border-2 text-white"
                        : "bg-white hover:bg-slate-100 border-2 border-gray-300"
                    }  rounded-lg transition-all duration-500`}
                  >
                    Ok
                  </div>
                  {enableCancel && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlashVisibility(false);
                        CANCELCLICK();
                      }}
                      className={`cursor-pointer md:px-5 md:py-2 max-sm:p-2 max-sm:px-3  max-sm:text-xs ${
                        mode
                          ? "bg-[#0B0D10] hover:bg-[#1b1d21] border-[#1a1a1a] border-2 text-white"
                          : "bg-white hover:bg-slate-100 border-2 border-gray-300"
                      } rounded-lg transition-all duration-500`}
                    >
                      Cancel
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
