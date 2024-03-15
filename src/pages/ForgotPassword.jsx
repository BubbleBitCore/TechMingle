import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const mode = useSelector((state) => state.common.mode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForgot = async (formData) => {
    const { email } = formData;
    const sanitizedObject = {
      email: email.trim(),
    };
    console.log(sanitizedObject);
  };
  return (
    <>
      <div
        className={`w-full h-full fixed top-0 left-0  ${
          mode ? "bg-[#0B0D10]" : "bg-[#ffebeb]"
        } flex justify-center items-center`}
      >
        <form
          onSubmit={handleSubmit(handleForgot)}
          className={`md:w-[30rem] h-[55%] sm:w-[80%] w-full max-sm:h-full ${
            mode ? "bg-[#12151a]" : "bg-white"
          } rounded-xl flex items-center max-sm:justify-center  p-5 pt-7 flex-col shadow-xl `}
        >
          <h1
            className={`select-none text-3xl font-bold ${
              mode && "text-white"
            } transition-all`}
          >
            Forgot Password
          </h1>
          <p
            className={`select-none max-sm:text-sm  mt-3 md:w-[80%] text-center transition-all ${
              mode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Enter your email and we'll send you a link to get back into your
            account
          </p>
          <label
            className={`cursor-pointer text-xs font-bold mt-7 mb-2 text-left w-full ${
              mode ? "text-gray-300" : "text-black"
            } transition-all`}
            htmlFor="Email"
          >
            EMAIL
          </label>
          {/* input email */}
          <div className="w-full relative ">
            <input
              className={`${
                mode ? "bg-[#2a2a2a] text-white" : "bg-[#F3F3F3]"
              } outline-none rounded-md w-full pr-10 max-sm:pr-12 p-4 max-sm:p-3`}
              type="text"
              id="Email"
              {...register("email", {
                required: "Enter email",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "Enter valid email",
                },
              })}
            />
            <i className={`absolute top-1/2 right-3 -translate-y-1/2 ${mode?"text-white":"text-black"} transition-all ri-at-line`}></i>
          </div>
          {/* Errors */}
          {errors.email && (
            <p className="inline-flex w-full rounded-md my-2 text-sm font-medium text-red-500 ">
              {errors.email.message}
            </p>
          )}
          {/* Buttons */}
          <div className="w-full flex justify-between mt-5 max-sm:flex-col">
            <button
              type="submit"
              className={`rounded-md bg-[#007EFF] text-white p-8 py-2 text-sm`}
            >
              Reset Password
            </button>
            <div className={`max-sm:hidden flex flex-col gap-0 items-center justify-center`}>
              <span className={`transition-all  ${mode?"bg-gray-500":"bg-gray-300"} h-3 w-[2px] rounded-full`}></span>
              <p className={`text-gray-500`}>OR</p>
              <span className={`transition-all  ${mode?"bg-gray-500":"bg-gray-300"} h-3 w-[2px] rounded-full`}></span>
            </div>
            <Link to="/signup"
              className={`transition-all   ${
                mode ? " text-white" : "text-black"
              } p-5 py-2 text-sm text-center`}
            >
              Create New Account
            </Link>
          </div>
          {/* Login link */}
          <span className={`transition-all  w-full ${mode&&"text-white"} text-center text-sm font-semibold mt-5`}>
            Return to{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
