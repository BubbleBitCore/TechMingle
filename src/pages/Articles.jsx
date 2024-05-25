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
  const [loading,setLoading] = useState(false);

  const handleCardShow = () => {
    setLoading(!loading);

    setTimeout(()=>{
      setLoadMore(loadMore + 4);
      setLoading(false);
    },2000);
    

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
                <div className="flex gap-10 mt-10 mx-2">
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
              <div className={`items-center justify-center flex  rounded-md cursor-pointer px-20 py-1 text-xs text-black border-black hover:bg-black hover:text-white w-[20%] text-black transition-all duration-500 border font-bold ${loading ? 'cursor-not-allowed' : ''}`}>
                <p onClick={!loading ? handleCardShow : null}>
                  {loading ? (
                   <div role="status">
                   <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                       <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                   </svg>
                   <span class="sr-only text-white">Loading...</span>
               </div>
                  ): (
                    'Load More'
                  )}
                 
                  </p>
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
