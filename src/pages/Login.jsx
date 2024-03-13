import { useSelector } from "react-redux";
import Animated3DGrid from "../components/Animated3DGrid";
import house from "../assets/images/renderedhouse.png";
import man from "../assets/images/man.png";
import man3 from "../assets/images/man3.png";
import man2 from "../assets/images/man2.png";
import zap from "../assets/images/zap.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);
  // For handling password show
  const [showPass, setShowPass] = useState(false);
  // Form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const { email, password } = data;
    const sanitizedObject = {
      email: email.trim(),
      password,
    };
    console.log(sanitizedObject);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-between items-center ${
          mode ? "bg-[#0B0D10]" : "bg-[#E9CBEB]"
        } p-10 px-14`}
      >
        <div
          className={`relative w-full h-full rounded-[2rem] bg-white flex overflow-hidden p-2`}
        >
          {/* Section 1 login form */}
          <div
            className={`flex flex-grow w-full h-full items-start p-8 flex-col gap-5`}
          >
            {/* Eyes icon */}
            <div className="flex justify-center items-center">
              <span
                className={`w-5 h-5 flex justify-center items-center pt-[0.35rem] bg-purple-600 rounded-md`}
              >
                <div
                  className={`h-[0.27rem] w-2 border rounded-bl-xl rounded-br-xl bg-white`}
                ></div>
                <div
                  className={`h-[0.27rem] w-2 border rounded-bl-xl rounded-br-xl bg-white`}
                ></div>
              </span>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(handleRegistration)}
              className="rounded-md h-[70%] w-full"
            >
              <h1 className="select-none poppins text-3xl font-bold w-[60%] mb-8">
                Unite & Innovate Crafting Tomorrow's Legacy
              </h1>
              <div className="w-4/5 rounded-md mb-3  bg-[#f7eaf6]">
                <input
                  className="text-black w-full rounded-md text-sm p-3  bg-transparent outline-none"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Enter email",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Enter valid email",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="rounded-md w-4/5  pb-2 mt-2 text-[0.65rem] font-medium text-red-500 ">
                  {errors.email.message}
                </p>
              )}
              <div className="relative w-4/5 rounded-md mb-3  bg-[#f7eaf6]">
                <input
                  className="w-full text-sm rounded-md p-3 bg-transparent pr-10 text-black outline-none"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Enter password",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters
                  - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                  - Can contain special characters`,
                    },
                  })}
                />
                {!showPass ? (
                  <i
                    onClick={() => setShowPass((prev) => !prev)}
                    className="absolute ri-eye-line top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPass((prev) => !prev)}
                    className="absolute ri-eye-off-line top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                  ></i>
                )}
              </div>
              {errors.password && (
                <p className=" rounded-md w-4/5  mt-2 text-[0.65rem] font-medium text-red-500 ">
                  {errors.password.message}
                </p>
              )}

              <button className="group  hover:bg-violet-600 mt-3 transition-all cursor-pointer rounded-full bg-violet-500 px-4 py-3 flex justify-center items-center gap-2">
                <p className="text-white text-xs select-none">Get started</p>
                <i className="text-sm text-white group-hover:translate-x-1/2 ri-arrow-right-line transition-all"></i>
              </button>
            </form>

            {/* infomation */}
            <div className="flex w-full  flex-col">
              {/* Stats */}
              <div className="w-full flex  gap-10">
                <div className=" flex flex-col ">
                  <h1 className={`text-xs font-bold poppins`}>
                    430,0000 Users
                  </h1>
                  <p className={`text-[0.65rem] text-gray-500`}>
                    Let's build community together
                  </p>
                </div>
                <div className=" flex flex-col">
                  <h1 className={`text-xs font-bold poppins`}>1M Users</h1>
                  <p className={`text-[0.65rem] text-gray-500`}>
                    Estimated additional reach
                  </p>
                </div>
              </div>
              {/* Range */}
              <div className="mt-5 w-1/2 h-2  rounded-full bg-[#F1EAF2] overflow-hidden">
                <div className="h-full w-1/3 rounded-full bg-[#774EE9]"></div>
              </div>
            </div>
            {/* Avtars */}
            <div className="w-full relative">
              {/* Avatar 1 */}
              <div
                className={`absolute w-8 h-8 rounded-full bg-white  overflow-hidden p-[0.2rem]`}
              >
                <div
                  className={`bg-[#F3815D] h-full w-full rounded-full overflow-hidden`}
                >
                  <img
                    className={`rounded-full cover h-full w-full scale-125`}
                    src={man}
                    alt=""
                  />
                </div>
              </div>
              {/* Avatar 2 */}
              <div
                className={`absolute z-10 left-5 w-8 h-8 rounded-full bg-white  overflow-hidden p-[0.2rem]`}
              >
                <div
                  className={`bg-[#AEDA82] h-full w-full rounded-full overflow-hidden`}
                >
                  <img
                    className={`rounded-full cover h-full w-full scale-125`}
                    src={man2}
                    alt=""
                  />
                </div>
              </div>
              {/* Avatar 3 */}
              <div
                className={`absolute z-20 left-10 w-8 h-8 rounded-full bg-white  overflow-hidden p-[0.2rem]`}
              >
                <div
                  className={`bg-[#B787F4] h-full w-full rounded-full overflow-hidden`}
                >
                  <img
                    className={`rounded-full cover h-full w-full scale-125`}
                    src={man3}
                    alt=""
                  />
                </div>
              </div>
              {/* Avatar 4 */}
              <div
                className={`absolute z-30 left-[3.75rem] w-8 h-8 rounded-full bg-white  overflow-hidden p-[0.2rem]`}
              >
                <div
                  className={`bg-[#7750E9] h-full w-full rounded-full overflow-hidden`}
                >
                  <img
                    className={`rounded-full cover h-full w-full scale-100`}
                    src={zap}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className={`flex flex-grow w-full h-full  rounded-[2rem] flex-col relative overflow-hidden`}
          >
            {/* Upper segment */}
            <div
              className={`w-full flex h-20 rounded-[2rem] rounded-b-none overflow-hidden`}
            >
              <div
                className={`bg-[#E9CBEB] z-20 rounded-b-none rounded-[2rem] w-[80%] h-full `}
              ></div>
              <div
                className={`bg-white flex justify-center items-center rounded-[2rem] rounded-b-none w-[20%] h-full relative outerborder p-4  z-20`}
              >
                <div
                  onClick={() => navigate("/signup")}
                  className={`relative z-30 rounded-3xl bg-violet-500 w-full h-full  flex justify-center items-center cursor-pointer`}
                >
                  <p className={`text-white text-xs select-none`}>Sign Up</p>
                </div>
              </div>
            </div>
            {/* lower segment */}
            <div
              className={`relative w-full bg-[#E9CBEB] h-full rounded-[2rem] rounded-t-none rounded-tr-[2rem] overflow-hidden`}
            >
              {/* Bottom bar */}
              <div
                className={`absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2 h-10 bg-[#F8EFF9] rounded-xl flex p-1 px-3 justify-between  items-center z-30`}
              >
                <div className="flex justify-center items-center">
                  <span
                    className={`w-5 h-5 flex justify-center items-center pt-[0.35rem] bg-purple-600 rounded-md`}
                  >
                    <div
                      className={`h-[0.27rem] w-2 border rounded-bl-xl rounded-br-xl bg-white`}
                    ></div>
                    <div
                      className={`h-[0.27rem] w-2 border rounded-bl-xl rounded-br-xl bg-white`}
                    ></div>
                  </span>
                  <p className={`mx-2 text-xs font-bold text-gray-500`}>
                    TechMingle is fun...
                  </p>
                </div>
                <div className={`h-full `}>
                  <div
                    className={`bg-white px-3 h-full rounded-md flex gap-5 justify-center items-center`}
                  >
                    <p className={`text-xs font-bold text-black`}>Enter </p>
                    <i className="text-xl ri-drag-move-line"></i>
                  </div>
                </div>
              </div>
              <Animated3DGrid />
              <div className="w-full h-full absolute z-20 -top-20">
                <img className="w-full " src={house} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
