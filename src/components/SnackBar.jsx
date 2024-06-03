import { useDispatch, useSelector } from "react-redux";
import { changeSnackBarState } from "../slices/commonSlice";
import { useEffect } from "react";

const SnackBar = () => {
  const mode = useSelector((state) => state.common.mode);
  const snackBar = useSelector((state) => state.common.snackBar);
  const dispatch = useDispatch();
  useEffect(() => {
    if (snackBar?.visible) {
      setTimeout(() => {
        dispatch(changeSnackBarState({ visible: false }));
      }, 2500);
    }
  }, [snackBar]);
  return (
    <>
      <style>
        {`
        .snackBar{
            animation:${
              snackBar?.visible === true
                ? "snack_popup"
                : snackBar?.visible === false
                ? "snack_popout"
                : ""
            } 0.5s ease-in-out forwards;
            ${snackBar?.visible === null && `bottom:-50%;`}
        }
        @keyframes snack_popup {
          0% {
            opacity: 0;
            bottom:-50%;
          }
          100% {
            opacity: 1;
            bottom:0.75rem;
          }
        }
        @keyframes snack_popout {
          100% {
            opacity: 0;
            bottom:-100%;
          }
        }
      `}
      </style>

      <div
        className={`${mode ? "bg-[#282828]" : "bg-gray-100 border"} ${
          mode ? "text-[#bbbbbb]" : "text-black"
        }  pl-4 pr-0 flex justify-between  rounded-[0.5rem] shadow-xl sm:w-[28rem] max-sm:w-[90%] sm:bottom-5 sm:left-10 max-sm:left-1/2 max-sm:-translate-x-1/2 fixed z-[10000]  max-sm:bottom-3  snackBar transition-all duration-500`}
      >
        <div className="w-[90%]  flex gap-2 justify-center items-center py-3">
          {!snackBar.icon == "" && (
            <i className={`${snackBar.icon} text-xl`}></i>
          )}
          <p className="w-full overflow-hidden text-ellipsis select-none">
            {snackBar.message}
          </p>
        </div>
        <div className="group px-3 justify-center items-center flex relative  overflow-hidden">
          <i
            onClick={() => {
              dispatch(changeSnackBarState({ visible: false }));
            }}
            className={`ri-close-line text-xl ${
              mode ? "group-hover:text-white" : "group-hover:text-gray-500"
            } transition-all duration-500 cursor-pointer relative z-20`}
          ></i>
          <div
            className={`absolute group-hover:scale-75 scale-0 transition-all opacity-10 ${
              mode ? "bg-white" : "bg-gray-400"
            } transition-all  h-full w-full cursor-pointer rounded-full z-10`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SnackBar;
