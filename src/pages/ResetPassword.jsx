import { useSelector } from "react-redux";

const ResetPassword = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div
        className={`w-full h-full fixed top-0 left-0 ${
          mode ? "bg-[#0B0D10]" : "bg-white"
        }`}
      ></div>
    </>
  );
};

export default ResetPassword;
