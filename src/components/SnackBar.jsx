import { useDispatch, useSelector } from "react-redux";
import { changeSnackBarState } from "../slices/commonSlice";
import { motion } from "framer-motion";
import { useState } from "react";

const SnackBar = () => {
  const mode = useSelector((state) => state.common.mode);
  const snackBar = useSelector((state) => state.common.snackBar);
  const dispatch = useDispatch();
  return (
    <>
      {snackBar?.visible && (
        <motion.div
          initial={{ y: "20vh", scale: 0 }}
          animate={{ y: "0", scale: 1 }}
          transition={{ duration: 0.1, type: "tween" }}
          className={`${mode ? "bg-[#282828]" : "bg-gray-300 border"} ${
            mode ? "text-[#bbbbbb]" : "text-black"
          }  m-2 px-4 max-w-72 overflow-hidden fixed max-sm:left-2 left-10 bottom-10 max-sm:bottom-2 rounded-md min-w-[25%] min-h-[3rem] flex  items-center z-50 justify-between transition-all duration-500 shadow-sm max-sm:min-w-[75%]`}
        >
          <div className="w-[90%]  flex gap-2 justify-center items-center">
            <i className={`${snackBar.icon} text-xl`}></i>
            <p className="w-full overflow-hidden text-ellipsis select-none">
              {snackBar.message}
            </p>
          </div>
          <i
            onClick={() => {
              dispatch(changeSnackBarState({ visible: false }));
            }}
            class={`ri-close-line text-xl ${
              mode ? "hover:text-white" : "hover:text-gray-500"
            } transition-all cursor-pointer`}
          ></i>
        </motion.div>
      )}
    </>
  );
};

export default SnackBar;
