// This component is used as placeholder for beta components
// This component indicates that current componnet is in development

import { useSelector } from "react-redux";

const BetaTest = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      {mode ? (
        <style>
          {`
        .stripeBg {
            background-image: repeating-linear-gradient(
                45deg,
                #3E424B,
                #3E424B 50px,
                #1F2022 50px,
                #1F2022 100px
            );
            background-size: 200%;
            background-position: right;
            background-attachment: fixed;
            animation: animateBg 10s linear infinite;
        }
        @keyframes animateBg{
        100%{
            background-position: left;
        }
}`}
        </style>
      ) : (
        <style>
          {`
        .stripeBg {
            background-image: repeating-linear-gradient(
                45deg,
                #606DBC,
                #606DBC 50px,
                #465298 50px,
                #465298 100px
            );
            background-size: 200%;
            background-position: right;
            background-attachment: fixed;
            animation: animateBg 10s linear infinite;
        }
        @keyframes animateBg{
        100%{
            background-position: left;
        }
}`}
        </style>
      )}
      <div
        className={`md:w-[50vw] md:h-[60vh] max-sm:w-[90vw] max-sm:h-[60vh] sm:w-[60vw] sm:h-[50vw] stripeBg rounded-md max-sm:rounded-lg flex justify-center items-center`}
      >
        <div className={`${mode?"bg-black cursor-pointer transition-all duration-500 text-white ":"bg-indigo-300"} text-sm py-3 select-none px-5 rounded-md`}>
          The Feature is currently in Beta
        </div>
      </div>
    </>
  );
};

export default BetaTest;
