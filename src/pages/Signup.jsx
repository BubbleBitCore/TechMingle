import { Link, useSearchParams } from "react-router-dom";
import man2 from "../assets/images/man2.png";
import FancyButton from "../components/FancyButton";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import OTPDrawer from "../components/OTPDrawer";

const Signup = () => {
  const [openOTPDrawer, setOpenOTPDrawer] = useState(false);
  const [passType, setPassType] = useState("password");
  const [eyeClass, setEyeClass] = useState("ri-eye-off-line");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("otp")) {
      setOpenOTPDrawer(true);
    }
  }, []);

  const togglePass = () => {
    if (eyeClass === "ri-eye-line") {
      setEyeClass("ri-eye-off-line");
      setPassType("password");
    } else {
      setEyeClass("ri-eye-line");
      setPassType("text");
    }
  };
  const handleRegistration = async (formData) => {
    const { mobileNo, email, password, name } = formData;
    const sanitizedObject = {
      name: name.trim(),
      mobileNo: parseInt(mobileNo),
      email: email.trim(),
      password,
    };
    console.log(sanitizedObject);
    setSearchParams({ otp: email });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center  items-center  bgGradient">
        <div className="w-[70%] h-[75vh] max-sm:h-full max-sm:w-full rounded-2xl flex justify-center items-center">
          {/* section 1 */}
          <div className="glowBlock w-[60%] h-full rounded-2xl p-[0.2rem] pr-0 max-sm:hidden">
            <div className=" w-full flex justify-center items-center h-full rounded-2xl   border-r-0 rounded-r-none  bg-[#210C27] relative z-20">
              <div className="flex  flex-col justify-center items-center ">
                <i className="ri-vip-crown-2-fill  relative z-20 bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text text-[5vw] mb-3"></i>
                <p className="uppercase text-center relative z-20 bg-gradient-to-r from-violet-700 to-purple-300 via-indigo-400 text-transparent bg-clip-text text-[4vw] leading-[1] font-bold monsterrat mb-3 select-none">
                  TECHMINGLE
                </p>
                <p className="uppercase text-center relative z-20 bg-gradient-to-r from-violet-700 to-purple-300 via-indigo-400 text-transparent bg-clip-text text-[4vw] leading-[1] font-bold monsterrat mb-3 select-none">
                  FALL-ONLINE
                </p>
                <p className="uppercase text-center relative z-20 bg-gradient-to-r from-violet-700 to-purple-300 via-indigo-400 text-transparent bg-clip-text text-[4vw] leading-[1] font-bold monsterrat mb-3 select-none">
                  SIGNUP-FREE
                </p>
              </div>
              {/* Text bg */}
              <div className="absolute overflow-hidden top-0 h-full w-full left-0 outlinedText z-10 orbitron text-[50vw] ">
                <i className="absolute -top-48 left-[30%] ri-gatsby-line opacity-85  "></i>
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div className="w-[40%] max-sm:w-full h-full rounded-2xl rounded-l-none  flex">
            {/* form */}
            <form
              onSubmit={handleSubmit(handleRegistration)}
              className="w-[75%] max-sm:w-full h-full bg-white flex flex-col p-5 pr-1 pt-8 pb-1 max-sm:pt-5"
            >
              {/* Mobile titles */}
              <div className="sm:hidden w-full flex mb-5 gap-2">
                <i className="select-none text-4xl ri-vip-crown-2-fill mr-1 text-yellow-500"></i>
                <h1 className="text-4xl font-bold monsterrat">TechMingle</h1>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  {/* avtar */}
                  <div className="w-[4vw] h-[4vw] max-sm:w-[3rem] max-sm:h-[3rem] rounded-md bg-[#8044df]">
                    <img src={man2} alt="" />
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-lg max-sm:text-xl max-sm:text-gray-500 poppins select-none">
                      ADMITS
                    </p>
                    <p className="font-bold  max-sm:text-5xl text-4xl poppins select-none">
                      01
                    </p>
                  </div>
                </div>
                <div className="w-full overflow-hidden ">
                  <input
                    className="w-full select-none border-none outline-none text-3xl poppins font-bold"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Enter Name",
                      pattern: {
                        value: /[\S\s]+[\S]+/,
                        message: "Enter valid name",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <p className="inline-flex sm:hidden items-center rounded-md mb-2  text-[0.65rem] leading[1] font-medium text-red-500 mr-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              {/* Divider */}
              <div className="my-3 mb-6  flex gap-2 ">
                {new Array(16).fill(0).map((_, key) => (
                  <span
                    key={key}
                    className="h-[3px] w-2 max-sm:w-4 bg-gray-200"
                  ></span>
                ))}
              </div>
              {/* Other fields */}
              <div className="w-full overflow-hidden mb-3">
                <input
                  className="select-none border-none w-full outline-none text-xl bg-[#F2F5FE] rounded-md px-3 pr-10 py-1 "
                  type="text"
                  placeholder="Mobile"
                  {...register("mobileNo", {
                    required: "Enter Mobile No.",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Enter valid Mobile No.",
                    },
                  })}
                />
              </div>
              {errors.mobileNo && (
                <p className="inline-flex sm:hidden items-center rounded-md  mb-2 text-[0.65rem] leading[1] font-medium text-red-500 ">
                  {errors.mobileNo.message}
                </p>
              )}

              <div className="w-full overflow-hidden mb-3">
                <input
                  className="select-none border-none w-full outline-none text-xl bg-[#F2F5FE] rounded-md px-3 pr-10 py-1   "
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
                <p className="inline-flex sm:hidden items-center rounded-md  mb-2 text-[0.65rem] leading[1] font-medium text-red-500 ">
                  {errors.email.message}
                </p>
              )}

              <div className="w-full overflow-hidden  relative  mb-3">
                <input
                  className="select-none border-none w-full outline-none text-xl bg-[#F2F5FE] rounded-md px-3 pr-10 py-1   "
                  type={passType}
                  placeholder="Pass"
                  {...register("password", {
                    required: "Enter password",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `at least 8 characters
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                    - Can contain special characters`,
                    },
                  })}
                />
                <i
                  onClick={togglePass}
                  className={`absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer opacity-55 hover:opacity-100 transition-all ${eyeClass}`}
                ></i>
              </div>
              {errors.password && (
                <p className="inline-flex sm:hidden items-center rounded-md mb-2  text-[0.65rem] leading[1] font-medium text-red-500 ">
                  {errors.password.message}
                </p>
              )}
              <div className="px-3 mt-2">
                <p className="select-none font-bold">DATE</p>
                <p className="select-none text-gray-400 text-xs">
                  {new Date().toLocaleString()}
                </p>
              </div>
              <div className="max-sm:fixed max-sm:bottom-10 max-sm:left-1/2 max-sm:-translate-x-1/2  w-full max-sm:w-[90%] h-[10%] mt-10 max-sm:h-[8%]">
                <FancyButton text1="Create" text2="Journey" />
              </div>
              <p className="max-sm:fixed max-sm:bottom-3  max-sm:left-1/2 max-sm:-translate-x-1/2 text-sm w-full text-center mt-2 select-none">
                Already have an account ?{" "}
                <Link
                  className="text-violet-500 hover:underline underline-offset-2 cursor-pointer"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
            {/* Ticket styles */}
            <div className="w-[10%] h-full relative max-sm:hidden ">
              <div className="bg-[#0F0719]  w-full h-10 absolute -top-6 rounded-full"></div>
              <div className="bg-white w-full border border-white  h-full flex justify-center items-center flex-col gap-2">
                {new Array(23).fill(0).map((_, key) => (
                  <span key={key} className="h-3 w-[2px] bg-gray-300"></span>
                ))}
              </div>
              <div className="bg-[#0F0719]  w-full h-10 absolute -bottom-6 rounded-full"></div>
            </div>
            {/* Company Text */}
            <div className="max-sm:hidden w-[15%] h-full  bg-white rounded-l-none rounded-2xl relative">
              <div className="select-none -rotate-90 absolute 2xl:right-[65%] sm:right-1/2  bottom-1/2 translate-y-1/2 translate-x-1/2 font-bold poppins text-[2.25vw]">
                <p>
                  <i className="select-none ri-vip-crown-2-fill mr-1 text-[#2663EB]"></i>
                  techmingle
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* formErrors */}
        <div className="absolute max-sm:hidden bottom-10 left-1/2 -translate-x-1/2 flex gap-5  w-[70%]">
          {(errors.name ||
            errors.email ||
            errors.password ||
            errors.mobileNo) && (
            <p className="text-indigo-500 text-[0.65rem] leading[1] max-sm:hidden">
              Errors:
            </p>
          )}
          {errors.name && (
            <p className="inline-flex items-center rounded-md   text-[0.65rem] leading[1] font-medium text-red-500 mr-1">
              {errors.name.message}
            </p>
          )}
          {errors.mobileNo && (
            <p className="inline-flex items-center rounded-md   text-[0.65rem] leading[1] font-medium text-red-500 ">
              {errors.mobileNo.message}
            </p>
          )}
          {errors.email && (
            <p className="inline-flex items-center rounded-md   text-[0.65rem] leading[1] font-medium text-red-500 ">
              {errors.email.message}
            </p>
          )}

          {errors.password && (
            <p className="inline-flex items-center rounded-md   text-[0.65rem] leading[1] font-medium text-red-500 ">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {/* OTP Drawer */}
      <OTPDrawer open={openOTPDrawer} setOpen={setOpenOTPDrawer} />
    </>
  );
};

export default Signup;
