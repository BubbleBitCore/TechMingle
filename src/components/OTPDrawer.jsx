import { Link } from "react-router-dom";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const OTPDrawer = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center max-sm:p-0 p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform sm:overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                <div className="bg-white px-4 pb-4 pt-1 sm:p-6 sm:pb-4 relative max-sm:rounded-lg">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                      <Dialog.Title
                        as="h3"
                        className="select-none text-lg text-left font-semibold leading-6 text-gray-900 mb-5"
                      >
                        One-Time Password
                      </Dialog.Title>
                      <div className="mt-2 flex  my-3 w-full justify-between items-center">
                        <input  type="text" className="text-3xl font-bold text-center h-16 w-16 outline-violet-500 outline-1 border border-gray-300 bg-transparent rounded-xl "/>
                        <input  type="text" className="text-3xl font-bold text-center h-16 w-16 outline-violet-500 outline-1 border border-gray-300 bg-transparent rounded-xl "/>
                        <input  type="text" className="text-3xl font-bold text-center h-16 w-16 outline-violet-500 outline-1 border border-gray-300 bg-transparent rounded-xl "/>
                        <input  type="text" className="text-3xl font-bold text-center h-16 w-16 outline-violet-500 outline-1 border border-gray-300 bg-transparent rounded-xl "/>
                      </div>
                      <div className="">
                        <p className="text-xs select-none text-gray-400 text-left">Enter the OTP Code that is sent to your registered email by Techmingle</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2  sm:hidden w-full h-1 flex justify-center items-center">
                    <span className="w-[10%]  border-t-4 rounded-full border-gray-300"></span>
                  </div>
                </div>
                <div className="sm:ml-6 px-4 text-xs cursor-pointer text-violet-600 font-bold">
                  <p className="select-none">Resend OTP</p>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                  <button
                    type="button"
                    className="select-none inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    className="select-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <div className="sm:hidden w-full mt-4 h-1 flex justify-center items-center">
                    <span className="w-[30%]  border-t-4 rounded-full border-black"></span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OTPDrawer;
