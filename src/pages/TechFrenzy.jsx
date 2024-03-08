import React from 'react';
import MobileSidebar from "../components/MobileSidebar";

const TechFrenzy = () => {
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <div className="flex w-full justify-between items-center font-extrabold pb-2">
        <div className="flex max-sm:text-2xl text-3xl gap-3 select-none">
          <MobileSidebar />
          Tech-Frenzy
        </div>
        <p className="flex h-12 w-12  rounded-full border border-black text-black items-center justify-center">
          <i className="ri-user-line text-2xl"></i>
        </p>
      </div>
      <div className="mt-1 mb-2 h-full w-full">
        content
      </div>
    </div>
  )
}

export default TechFrenzy
