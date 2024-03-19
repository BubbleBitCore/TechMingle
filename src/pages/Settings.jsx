import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import man2 from "../assets/images/man2.png";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/conversion";

// Account tab
const Account = () => {
  const mode = useSelector((state) => state.common.mode);
  const user = "Naruto";
  const email = "naruto@gmail.com";
  const password = "naruto@gmail.com";
  return (
    <>
      <style>
        {`
        .imgChange:hover::after {
          opacity:0.5;
        }
        .imgChange:hover::before {
          opacity:1;
        }
        
        .imgChange::after{
          content:"";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:0;
          left:0;
          height:100%;
          width:100%;
          background-color: black;
          border-radius:100%;
          z-Index:1;
        }
        .imgChange::before{
          content:"Change Avatar";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:50%;
          left:50%;
          z-Index:2;
          transform:translate(-50%,-50%);
          border-radius:100%;
          color:white;
          font-size:1rem;
         
        }
        
        `}
      </style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full flex flex-col"
      >
        {/* Account Edit */}
        <div className={`w-full flex flex-col p-5 max-sm:p-2`}>
          <p
            className={`select-none text-3xl font-bold mb-5 max-sm:text-center ${
              mode ? "text-white" : "text-black"
            } transition-all`}
          >
            Profile Details
          </p>
          <div className="w-full flex gap-10 max-sm:flex-col mb-5 ">
            <div
              className={`max-sm:w-full max-sm:order-2 sm:w-[50%] flex flex-col gap-4 sm:border-r-2 sm:pr-10 select-none ${
                mode ? "sm:border-gray-600" : "sm:border-gray-200"
              } duration-500 transition-all`}
            >
              {/* name */}
              <label
                htmlFor="name"
                className={`select-none text-sm font-bold cursor-pointer  ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Name
              </label>
              <div className="flex flex-col relative">
                <input
                  defaultValue={user}
                  type="text"
                  id="name"
                  className={`w-full border-2 border-gray-600  p-2 pr-10 rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-all 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } duration-500`}
                />
                <i
                  className={`ri-user-line ${
                    mode ? "text-white" : "text-black"
                  } transition-all top-1/2 -translate-y-1/2 right-4 absolute cursor-pointer`}
                ></i>
              </div>
              {/* Email */}
              <label
                htmlFor="email"
                className={`select-none text-sm font-bold cursor-pointer  ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Email
              </label>
              <div className="flex flex-col relative">
                <input
                  defaultValue={email}
                  readOnly
                  type="text"
                  id="email"
                  className={`w-full border-2 border-gray-600  p-2 pr-10 rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-all 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } relative duration-500`}
                />
                <i
                  className={`ri-at-line ${
                    mode ? "text-white" : "text-black"
                  } transition-all top-1/2 -translate-y-1/2 right-4 absolute cursor-pointer duration-500`}
                ></i>
              </div>
              {/* Passsword */}
              <label
                htmlFor="password"
                className={`select-none text-sm font-bold cursor-pointer ${
                  mode ? "text-[#c1c1c1]" : "text-black"
                } transition-all duration-500`}
              >
                Passsword
              </label>
              <div className="flex flex-col relative">
                <input
                  defaultValue={password}
                  type="password"
                  id="password"
                  className={`w-full border-2 border-gray-600  p-2 pr-10 rounded-md outline-2 ${
                    mode ? "outline-gray-500 " : "outline-indigo-500"
                  } transition-all 
                  ${mode ? "bg-[#1a1a1a] " : "bg-white"} ${
                    mode ? "text-white " : "text-black"
                  } relative duration-500`}
                />
                <i
                  className={`ri-lock-password-line ${
                    mode ? "text-white" : "text-black"
                  } transition-all top-1/2 -translate-y-1/2 right-4 absolute cursor-pointer duration-500`}
                ></i>
              </div>
              {/* Action buttons */}
              <div className="flex gap-5 mt-1">
                <button
                  className={`text-sm p-2 px-4 hover:opacity-75 transition-all border-2 border-gray-300 rounded-md ${
                    mode ? "text-gray-200" : "text-black"
                  } duration-500`}
                >
                  Cancel
                </button>
                <button className="text-sm p-2 px-4 text-white  bg-indigo-500 hover:bg-indigo-600 rounded-md transition-all">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="max-sm:w-full max-sm:order-1 sm:w-[20%] flex justify-center items-center">
              <div
                className={`w-full relative aspect-square ${
                  mode ? "bg-[#1a1a1a]" : "bg-gray-100"
                }  rounded-full transition-all duration-500`}
              >
                <img
                  src={man2}
                  alt=""
                  className="rounded-full bg-cover w-full h-full"
                />
                <label
                  title={user}
                  className="absolute imgChange rounded-full h-full w-full top-0 left-0 cursor-pointer "
                  htmlFor="image"
                ></label>
                <input className="hidden" id="image" type="file" />
              </div>
            </div>

            {/* Password details */}
            <div
              className={`max-sm:w-full max-sm:order-3 sm:w-auto sm:pl-10 sm:border-l-2 ${
                mode ? "sm:border-gray-600" : "sm:border-gray-200"
              } duration-500 transition-all sm:flex sm:justify-center sm:items-center`}
            >
              <div
                className={`${
                  mode ? "sm:bg-[#1a1a1a]" : " sm:bg-gray-100"
                } transition-all duration-500 p-6 sm:pb-10 px-5 rounded-md `}
              >
                <p
                  className={`w-full font-bold text-xl mb-3 ${
                    mode ? "text-[#b3b3b3]" : "text-black"
                  } transition-all select-none duration-500`}
                >
                  Password Requirements
                </p>
                <div className="w-full flex flex-col">
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2">1.</span>At least 8 characters
                  </p>
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2 select-none">2.</span> At least 1
                    uppercase letter
                  </p>
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2 select-none">3.</span> At least 1
                    lowercase letter
                  </p>
                  <p className="text-xs text-gray-500 flex gap-2 select-none">
                    <span className="w-2 select-none">4.</span> Can contain
                    special symbols
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr
            className={`my-5  border ${
              mode ? "border-[#1d1d1d]" : "border-gray-200"
            } duration-500`}
          />
          {/* Delete Account */}
          <div className="w-full">
            <p
              className={`select-none text-lg font-bold mb-1 ${
                mode ? "text-white" : "text-black"
              } duration-500`}
            >
              Delete Account
            </p>
            <p
              className={`text-xs ${
                mode ? "text-gray-400" : "text-gray-600 "
              } mb-5 transition-all duration-500`}
            >
              Deleting your account is permanent and this actioncannot be
              reversed.
            </p>
            <button className="bg-red-500 text-sm p-3 px-5 rounded-md text-white hover:bg-red-600 transition-all ">
              Delete Account
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
// Activity tab
const Activity = () => {
  const mode = useSelector((state) => state.common.mode);
  const currentSessionId = "42.105.89.18";
  const Sessions = [
    {
      device: "Smartphone",
      Location: "Rajkot, Gujarat ,India",
      IP: "127.0.0.1",
      sessionId: "42.105.89.11",
      createdAt: new Date(),
    },
    {
      device: "PC",
      Location: "Gandhidham, Gujarat ,India",
      IP: "127.0.0.1",
      sessionId: "42.105.89.18",
      createdAt: new Date(),
    },
    {
      device: "PC",
      Location: "Surat, Gujarat ,India",
      IP: "127.0.0.1",
      sessionId: "42.105.89.13",
      createdAt: new Date(),
    },
  ];
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`w-full flex flex-col gap-3  p-2 `}
      >
        {Sessions?.map((item, key) => (
          <div
            className={`w-full flex justify-between items-center gap-5 rounded-md max-sm:rounded-xl ${
              mode ? "bg-[#222222] hover:bg-[#282828]" : "bg-gray-100 hover:bg-[#e9e9e9]"
            } p-4 py-2 transition-all duration-500 cursor-pointer group max-sm:flex-col`}
          >
            <div className=" flex items-center md:gap-5 sm:gap-2 max-sm:flex-col max-sm:justify-center max-sm:w-full max-sm:gap-3 group">
              {/* Icon*/}
              <div
                className={`${mode?"bg-[#1a1a1a]":"bg-gray-300"} rounded-full h-14 w-14 overflow-hidden flex justify-center items-center transition-color duration-500 opacity-55 group-hover:opacity-100 cursor-pointer max-sm:order-1`}
              >
                <i
                  className={`${
                    item.device === "Smartphone"
                      ? "ri-smartphone-line "
                      : "ri-computer-line"
                  } transition-color duration-500 ${
                    mode ? "text-white" : "text-black"
                  } text-xl `}
                ></i>
              </div>
              {/* IP Address*/}
              <div className={`flex flex-col sm:mr-10 max-sm:order-3`}>
                <p
                  className={`${mode ? "text-gray-300" : "text-black"} text-lg max-sm:text-center`}
                >
                  {item.IP}
                </p>
                <p
                  className={`${mode ? "text-gray-400" : "text-black"} text-xs`}
                >
                  {formatDate(item.createdAt)}
                </p>
              </div>
              {/* Location*/}
              <div className={`flex flex-col max-sm:order-4`}>
                <p
                  className={`${mode ? "text-gray-200" : "text-black"} text-lg`}
                >
                  {item.Location}
                </p>
              </div>
              {/* Status */}
              <span
                title={`${
                  item.sessionId === currentSessionId
                    ? "current session"
                    : "other session"
                }`}
                className={`h-5 w-5 border ${
                  item.sessionId === currentSessionId
                    ? "border-green-400"
                    : "border-indigo-500"
                } max-sm:order-2 rounded-full ${mode ?"bg-gray-800":"bg-white"} flex justify-center items-center scale-75 transition-all duration-500`}
              >
                <span
                  className={`rounded-full h-3 w-3 ${
                    item.sessionId === currentSessionId
                      ? "bg-green-500"
                      : "bg-indigo-500"
                  }`}
                ></span>
              </span>
              {/* Session Id*/}
              <div className={`flex flex-col max-sm:order-5`}>
                <p
                  className={`${
                    mode ? "text-gray-200" : "text-black"
                  } text-lg hover:text-indigo-500 transition-all duration-500`}
                >
                  <span className={`text-gray-500 cursor-pointer `}>#</span>{" "}
                  {item.sessionId}
                </p>
              </div>
            </div>
            {/* Actions*/}
            <div className="hidden gap-2 group-hover:flex max-sm:w-full">
              {/* Delete Session */}
              <button className={`p-2 text-xs px-3 sm:border-2 ${mode?"sm:border-red-500 sm:hover:bg-red-500 hover:text-white sm:text-red-500 max-sm:text-white max-sm:bg-red-500 max-sm:hover:bg-red-600 ":"bg-red-500 text-white"} transition-all   rounded-md max-sm:w-full `}>
                <i className={`ri-pulse-line mr-1 max-sm:hidden`}></i> <span className={``}>Revoke</span>
              </button>
            </div>
          </div>
        ))}
      </motion.p>
    </>
  );
};
const Notifications = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white"
      >
        Notifications
      </motion.p>
    </>
  );
};

const Settings = ({ Header }) => {
  const tabs = [
    { name: "Account", component: Account },
    { name: "Activity", component: Activity },
    { name: "Notifications", component: Notifications },
  ];
  return (
    <>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
        <Header urlName="Settings" />
        <div className="mt-1 mb-2 h-full w-full overflow-hidden overflow-y-auto pt-3">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </>
  );
};

export default Settings;
