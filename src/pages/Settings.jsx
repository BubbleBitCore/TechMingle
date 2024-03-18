import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import man2 from "../assets/images/man2.png";

const Account = () => {
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
          content:"Change DP";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:50%;
          left:50%;
          z-Index:2;
          transform:translate(-50%,-50%);
          border-radius:100%;
          color:white;
          font-size:1.2rem;
         
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
          <p className="select-none text-3xl font-bold mb-5 max-sm:text-center">
            Profile Details
          </p>
          <div className="w-full flex gap-10 max-sm:flex-col">
            <div className="max-sm:w-full max-sm:order-2 sm:w-[50%] flex flex-col gap-4 sm:border-r-2 sm:border-gray-200 sm:pr-10">
              {/* name */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="select-none text-sm font-bold cursor-pointer mb-3"
                >
                  Name
                </label>
                <input
                  defaultValue={user}
                  type="text"
                  id="name"
                  className="w-full border-2 border-gray-400 p-2 pr-7 rounded-md outline-2 outline-indigo-500"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="select-none text-sm font-bold cursor-pointer mb-3"
                >
                  Email
                </label>
                <input
                  defaultValue={email}
                  readOnly
                  type="text"
                  id="email"
                  className="w-full border-2 border-gray-400 p-2 pr-7 rounded-md outline-2 outline-indigo-500"
                />
              </div>
              {/* Passsword */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="select-none text-sm font-bold cursor-pointer mb-3"
                >
                  Passsword
                </label>
                <input
                  defaultValue={password}
                  type="password"
                  id="password"
                  className="w-full border-2 border-gray-400 p-2 pr-7 rounded-md outline-2 outline-indigo-500"
                />
              </div>
              {/* Action buttons */}
              <div className="flex gap-5 mt-1">
                <button className="text-sm p-2 px-4 hover:opacity-75 transition-all border border-gray-300 rounded-md ">
                  Cancel
                </button>
                <button className="text-sm p-2 px-4 text-white  bg-indigo-500 hover:bg-indigo-600 rounded-md transition-all">
                  Save Changes
                </button>
              </div>
            </div>
            {/* Password details */}
            <div className="max-sm:w-full max-sm:order-3 sm:w-auto sm:pr-10 sm:border-r-2 sm:border-gray-200">
              <p className="w-full font-bold text-xl mb-3">
                Password Requirements
              </p>
              <div className="w-full flex flex-col">
                <p className="text-xs text-gray-500 flex gap-2">
                  <span className="w-2">1.</span>At least 8 characters
                </p>
                <p className="text-xs text-gray-500 flex gap-2">
                  <span className="w-2">2.</span> At least 1 uppercase letter
                </p>
                <p className="text-xs text-gray-500 flex gap-2">
                  <span className="w-2">3.</span> At least 1 lowercase letter
                </p>
                <p className="text-xs text-gray-500 flex gap-2">
                  <span className="w-2">4.</span> Can contain special symbols
                </p>
              </div>
            </div>
            {/* Profile Image */}
            <div className="max-sm:w-full max-sm:order-1 sm:w-[20%] ">
              <div className="w-full relative aspect-square bg-gray-100 rounded-full ">
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
          </div>
          <hr className="my-5 border border-gray-200" />
          {/* Delete Account */}
          <div className="w-full">
            <p className="select-none text-lg font-bold mb-1">Delete Account</p>
            <p className="text-xs text-gray-600 mb-5">
              Deleting your account is permanent and this actioncannot be
              reversed.
            </p>
            <button className="bg-red-500 text-sm p-3 px-5 rounded-md text-white hover:bg-red-600 transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
const Activity = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white"
      >
        Activity
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
