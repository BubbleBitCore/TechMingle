import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const mode = useSelector((state) => state.common.mode);
  const { id, token } = useParams();
  const [passType, setPassType] = useState("password");
  const [confPassType, setConfPassType] = useState("password");
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");

  // backgroung blob animation logic
  const container = useRef(null);
  const blob = useRef(null);

  const blobMove = (dets) => {
    let half = blob.current.offsetWidth / 2;
    blob.current.style.left = `${dets.x - half}px`;
    blob.current.style.top = `${dets.y - half}px`;
  };
  useEffect(() => {
    if (container != null && blob != null) {
      container.current.addEventListener("mousemove", blobMove);
    }
    return () => {
      container.current.removeEventListener("mousemove", blobMove);
    };
  }, []);

  return (
    <>
      <div
        ref={container}
        className={`w-full h-full fixed top-0 left-0 ${
          mode ? "bg-[#0B0D10]" : "bg-white"
        } flex justify-center items-center`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex justify-center items-center flex-col gap-10 w-[25rem] max-sm:w-[90%]`}
        >
          <p
            className={`select-none uppercase text-4xl ${
              mode ? "text-white" : "text-black"
            } font-bold`}
          >
            RESET PASSWORD
          </p>
          {/* inputs */}
          <div className="flex gap-5 flex-col w-full">
            {/* input 1 */}
            <div className={`w-full relative`}>
              {/* <input
                type={passType}
                placeholder="New Password"
                className={`select-none bg-gray-200 w-full rounded-md py-2 outline-none px-4 `}
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
              /> */}

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: `at least 8 characters
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                - Can contain special characters`,
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type={passType}
                    placeholder="New Password"
                    className={`select-none bg-gray-200 w-full rounded-md py-2 outline-none px-4 `}
                  />
                )}
              />
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  if (passType === "password") {
                    setPassType("text");
                  } else {
                    setPassType("password");
                  }
                }}
                className={`cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 text-black"
                } ${
                  passType === "password" ? "ri-eye-line" : "ri-eye-off-line"
                }`}
              ></i>
            </div>
            {errors.password && (
              <p className="inline-flex items-center rounded-md text-xs font-medium text-red-500 ">
                Password: {errors.password.message}
              </p>
            )}

            {/* input 2 */}
            <div className={`w-full relative`}>
              {/* <input
                type={confPassType}
                placeholder="Confirm Password"
                className={`select-none bg-gray-200 w-full rounded-md py-2 outline-none px-4 `}
                {...register("confpassword", {
                  required: "Enter password",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: `at least 8 characters
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                - Can contain special characters`,
                  },
                })}
              /> */}

              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: `at least 8 characters
                  - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                  - Can contain special characters`,
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type={confPassType}
                    placeholder="Confirm Password"
                    className={`select-none bg-gray-200 w-full rounded-md py-2 outline-none px-4 `}
                  />
                )}
              />
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  if (confPassType === "password") {
                    setConfPassType("text");
                  } else {
                    setConfPassType("password");
                  }
                }}
                className={`cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 
                 text-black ${
                   confPassType === "password"
                     ? "ri-eye-line"
                     : "ri-eye-off-line"
                 }`}
              ></i>
            </div>
            {errors.confirmPassword && (
              <p className="inline-flex items-center rounded-md   text-xs font-medium text-red-500 ">
                ConfPassword: {errors.confirmPassword.message}
              </p>
            )}
            {/* Button */}
            <button
              className={` w-full px-5 py-2 ${mode ? "bg-white" : "bg-black"} ${
                mode ? "text-black" : "text-white"
              } ${
                mode ? "hover:text-white" : "hover:text-black"
              } transition-all hover:bg-transparent border rounded-md ${
                mode ? "border-white" : "border-black"
              } shadow-xl`}
            >
              Change password
            </button>
          </div>
        </form>
        <div className={`overlay ${!mode && "hidden"}`}></div>
        <div ref={blob} className={`blob  w-72 max-sm:w-48 h-72 max-sm:h-48 ${!mode && "hidden"}`}></div>
      </div>
    </>
  );
};

export default ResetPassword;
