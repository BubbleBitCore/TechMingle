import React from 'react'
import MobileSidebar from './MobileSidebar'

const Header = ({urlName}) => {
  return (
    <>
      <div className="flex w-full justify-between items-center font-extrabold pb-2">
          <div className="flex max-sm:text-2xl text-3xl gap-3 select-none">
            <MobileSidebar />
            {urlName}
          </div>
          <p className="flex h-12 w-12  rounded-full border border-black text-black items-center justify-center">
            <i className="ri-user-line text-2xl"></i>
          </p>
        </div>
    </>
  )
}

export default Header
