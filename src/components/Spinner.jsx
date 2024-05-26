import { useSelector } from "react-redux";

const Spinner = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div className="w-full flex justify-center h-full items-center bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="goog-te-spinner w-7 sm:w-[3%] min-w-[1rem]"
          viewBox="0 0 66 66"
        >
          <circle
            className={`goog-te-spinner-path ${mode?"spinnerDarkStroke":"spinnerLightStroke"}`}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    </>
  );
};

export default Spinner;
