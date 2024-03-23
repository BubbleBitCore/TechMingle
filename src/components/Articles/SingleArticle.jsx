import React from 'react';
import { useSelector } from 'react-redux';
import { singleBlog } from '../../assets';

const SingleArticle = () => {
  const mode = useSelector((state) => state.common.mode);
  return (
    <main>
      <div>
        <div className="w-full h-32 md:h-64 lg:h-96 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center transform transition-all rounded-lg shadow-md dark:shadow-none"
            src={singleBlog}
            alt="singleBlog"
          />

          <div
            className={`${
              mode ? 'bg-black hover:bg-zinc-900' : 'bg-white hover:bg-gray-200'
            } rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transition-all duration-500 bg-slate-500 absolute top-20 left-1/2 transform -translate-x-1/2`}
          >
            <i className="ri-arrow-drop-right-fill text-2xl text-white"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleArticle;
