import Spinner from "../components/Spinner";
import React, { useState } from "react";


const Articles = ({ Header }) => {
  const ArticleButton = [
    "JavaScript",
    "Css",
    "React",
    "Html",
    "DSA",
    "c++",
    "Redux",
  ];

  const [loadMore, setLoadMore] = useState(1);

  const handleCardShow = () => {
    setLoadMore(loadMore + 2);
  };

  const ArticleHeaderButton = ({ children }) => {
    return (
      <div>
        <p className="rounded-md cursor-pointer px-3 py-1 text-xs  text-black border-black hover:bg-black hover:text-white transition-all duration-500 text-black border ">
          {children}
        </p>
      </div>
    );
  };

  const [showMore, setshowMore] = useState(false);

  const handleToggleShowMore = () => {
    setshowMore(!showMore);
  };

  const Card = ({ img, title, description, icon }) => {
    return (
      <div className="flex mt-4 w-full sm:px-4 bg-white rounded-xl overflow-y-auto transition-all duration-500 ">
        <div className="max-lg:h-auto  max-xl:flex-col h-full w-full 2xl:gap-12 gap-6  max-sm:p-2 rounded-xl overflow-y-auto">
          <div className="flex gap-4">
            <div className="flex ">
              <div className="sm:w-80 h-56 max-sm:w-[19rem]   bg-white rounded-xl flex group cursor-pointer overflow-hidden transition-all duration-500">
                <div className="w-full h-full object-cover overflow-hidden">
                  <div className="object-cover w-full h-full ">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all"
                      src="/static/media/absfunny.7638ee016d99f91c5108.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full">
              <h1 className="text-2xl font-bold text-black mb-1 select-none transition-all duration-500">
                Content Tittle
              </h1>
              <div className="justify-between w-full h-full flex-col">
                <div className="text-xs text-gray-600 mb-2 select-none w-full h-full overflow-hidden overflow-y-auto">
                  <p className="transition-all duration-500 mt-5 h-20 overflow-hidden overflow-y-auto">
                    {showMore ? (
                      <>
                        Lead Software Engineer at Apple | Crafting digital
                        dreams and orchestrating innovation, I'm the lead Lead
                        Software Engineer at Apple | Crafting digital dreams and
                        orchestrating innovation
                        Lead Software Engineer at Apple | Crafting digital
                        dreams and orchestrating innovation, I'm the lead Lead
                        Software Engineer at Apple | Crafting digital dreams and
                        orchestrating innovation Lead Software Engineer at Apple | Crafting digital
                        dreams and orchestrating innovation, I'm the lead Lead
                        Software Engineer at Apple | Crafting digital dreams and
                        orchestrating innovationSoftware Engineer at Apple | Crafting digital dreams and
                        orchestrating innovation Lead Software Engineer at Apple | Crafting digital
                        dreams and orchestrating innovation, I'm the lead Lead
                        Software Engineer at Apple | Crafting digital dreams and
                        orchestrating innovationSoftware Engineer at Apple | Crafting digital dreams and
                        orchestrating innovation Lead Software Engineer at Apple | Crafting digital
                        dreams and orchestrating innovation, I'm the lead Lead
                        Software Engineer at Apple | Crafting digital dreams and
                        orchestrating innovationSoftware Engineer at Apple | Crafting digital dreams and
                        orchestrating innovation Lead Software Engineer at Apple | Crafting digital
                        dreams and orchestrating innovation, I'm the lead Lead
                        Software Engineer at Apple | Crafting digital dreams and
                        orchestrating innovation
                        
                        <span
                          className="w-fit text-xs cursor-pointer text-blue-500 hover:underline transition-all ml-2"
                          onClick={handleToggleShowMore}
                        >
                          less
                        </span>
                      </>
                    ) : (
                      <>
                        Lead Software Engineer at Apple...
                        <span
                          className="w-fit text-xs cursor-pointer text-blue-500 hover:underline transition-all ml-2"
                          onClick={handleToggleShowMore}
                        >
                          more
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <div className="flex gap-10 mt-10 ">
                <div className="text-gray-700">
                    <i className="fa-regular fa-clock mr-1"></i>
                    <span>6 min Read</span>
                  </div>

                  <div className="text-gray-700">
                  <i className="fa-regular fa-thumbs-up mr-1"></i>
                    <span>1k</span>
                  </div>

                  <div className="text-gray-700">
                  <i className="fa-regular fa-comment mr-1"></i>
                    <span>328</span>
                  </div>

                  <div className="text-gray-700">
                  <i className="fa-solid fa-share mr-1"></i>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <Header urlName="Articles" />
      <div className="mt-1 mb-2 h-full w-full ">
        {/* Article header Button */}

        <div className="flex h-full w-full sm:px-4 bg-gray-50 rounded-xl overflow-y-auto transition-all duration-500">
          <div className=" max-lg:h-auto  max-xl:flex-col h-full w-full 2xl:gap-12 gap-6 p-4 max-sm:p-2 rounded-xl overflow-y-auto ">
            <h1 className="font-bold text-lg ">Topics</h1>
            <h5 className="font-bold text-sm  mt-2">Select Topic : </h5>
            <div className="mt-4 flex flex-wrap w-full select-none gap-2 overflow-x-auto">
              {ArticleButton.map((label, index) => (
                <ArticleHeaderButton key={index} children={label} />
              ))}
            </div>

            {/* Card Component */}
            {[...Array(loadMore)].map((_, index) => (
              <Card key={index} /> // Assuming Card component needs a unique key
            ))}
            {/* rounded-md cursor-pointer px-3 py-1 text-xs  text-black border-black hover:bg-black hover:text-white transition-all duration-500 text-black border  */}
            <div className="flex items-center justify-center mt-7">
              <div className="items-center justify-center flex  rounded-md cursor-pointer px-3 py-1 text-xs text-black border-black hover:bg-black hover:text-white w-[20%] text-black transition-all duration-500 border font-bold">
                <button onClick={handleCardShow}>Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
