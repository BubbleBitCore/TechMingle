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
     "DSA",
    "c++",
    "Redux",
    "JavaScript",
    "Css",
    "React",
    "Html",
    "JavaScript",
    "Css",
    "React",
    "Html",
    "React",
    "Html",
    "JavaScript",
    "Css",
    "React",
    "Html",
  ];

  const [loadMore, setLoadMore] = useState(4);

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
      <div className="flex mt-4 w-1/4 sm:px-4 bg-white overflow-y-auto transition-all duration-500 ">

        
        <div className="max-lg:h-auto  max-xl:flex-col h-100vh rounded-md 2xl:gap-12 gap-6 mt-3  max-sm:p-2  overflow-hidden">
         

          <div className="flex flex-col gap-4 bg-gray-50 bg-opacity-500">
            <div className="flex flex-col ">
              <div className="sm:w-80 h-56 max-sm:w-[19rem]   bg-white flex group cursor-pointer overflow-hidden transition-all duration-500">
                <div className="w-full h-full object-cover overflow-hidden">
                  <div className="object-cover w-full h-full">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all"
                      src="/static/media/absfunny.7638ee016d99f91c5108.jpg"
                      alt
                    />
                    <img
                className="rounded-full w-16 h-16 object-cover absolute border-white"
                src="https://cdn.dribbble.com/userupload/10190686/file/original-17c05317d3609c1ada08570f80a1ee96.jpg?resize=1504x1504"
                alt="Circular Image"
            />
                  </div>
                  
                </div>
              </div>
              
              <div className="flex flex-col w-full h-full">
              <h1 className="text-2xl font-bold text-black mb-1 select-none transition-all duration-500 mt-2 pl-2">
                Content Tittle
              </h1>
              <div className="justify-between w-full h-full flex-col">
                <div className="text-xs text-gray-600 mb-2 select-none w-full h-full overflow-hidden overflow-y-auto">
                  <p className="transition-all duration-500 mt-5 h-20 overflow-hidden overflow-y-auto pl-3">
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
      </div>
    );
  };

  const handleShareClick =()=>{
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(()=>{
      alert('url copied successfully')
    }).catch((err)=>{
      console.error('failed',err);
    });
  }







  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <Header urlName="Articles" />
      <div className="mt-1 mb-2 h-full w-full ">
        {/* Article header Button */}

        <div className="flex h-full w-full mt-4 bg-gray-50 rounded-xl overflow-y-auto transition-all duration-500">
          <div className=" max-lg:h-auto  max-xl:flex-col h-full w-full 2xl:gap-12 max-sm:p-2 rounded-xl overflow-y-auto ">
          <div className=" relative h-full w-full  ">
             <img className=" h-full w-full object-cover " src= "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="header-image"/>
             <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-end mb-16">
        <p className="text-gray-300  font-bold ml-10 pl-8 text-3xl">
          New Pharrell Williams<br />
          studio album is hot<br />
          as the desert
        </p>
        <p className="text-gray-500 ml-10 pl-8 mt-2">
          Lorem ipsum dolor sit amet consectetur<br/>
          Lorem ipsum dolor sit amet 
        </p>

        <div className=" flex ml-16 mt-5">
          <p className=" rounded-md cursor-pointer px-8 py-3.5 text-xs  text-white border-black  hover:text-white transition-all duration-500 text-black border bg-red-500 h-12 w-28 items-center ">
            Button
          </p>
          <div className="rounded-md items-center mt-1  cursor-pointer px-3 py-2 h-10  text-xs  text-white border-black  hover:text-white transition-all duration-500 border bg-black ml-2 ">
          <i class="fa-solid fa-bookmark"></i>         
          </div>
          <div onClick={handleShareClick}  className="rounded-md items-center mt-1  cursor-pointer px-3 py-2 h-10  text-xs  text-white border-black  hover:text-white transition-all duration-500  border bg-black ml-2 ">
          <i class="fa-solid fa-share-nodes"></i>
          </div>


        </div>



      </div>
          </div>
          <div className="gap-2 mt-4"> 
            <div className="mt-4 p-4 flex   w-full select-none gap-3  overflow-hidden overflow-x-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {ArticleButton.map((label, index) => (
                <ArticleHeaderButton key={index} children={label} />
              ))}
            </div>
            <div className="flex flex-col items-center">
            <div className="flex flex-wrap w-full justify-start">
               {/* Card Component */}
            {[...Array(loadMore)].map((_, index) => (
              <Card key={index} /> // Assuming Card component needs a unique key
            ))}
            </div>
             {/* rounded-md cursor-pointer px-3 py-1 text-xs  text-black border-black hover:bg-black hover:text-white transition-all duration-500 text-black border  */}
             <div className="flex items-center justify-center mt-7 ">
              <div className="items-center justify-center flex  rounded-md cursor-pointer px-20 py-1 text-xs text-black border-black hover:bg-black hover:text-white w-[20%] text-black transition-all duration-500 border font-bold">
                <button onClick={handleCardShow}>Load More</button>
              </div>
            </div>

            </div>
           
           
                     
          </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
