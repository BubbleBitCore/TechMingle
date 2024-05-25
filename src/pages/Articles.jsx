import bgwall from "../assets/images/userBgWall.jpg";
import man1 from "../assets/images/man.png";
import man2 from "../assets/images/man2.png";
import abs from "../assets/images/absfunny2.jpg";
import abs1 from "../assets/images/absfunny.jpg";
import abs3 from "../assets/images/absfunny3.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";
import ClickMenu from "../components/ClickMenu";
import { changeSnackBarState } from "../slices/commonSlice";
import { useDispatch } from "react-redux";

const Articles = ({ Header }) => {
  const navigate = useNavigate();
  const [showMorePeople, setShowMorePeople] = useState(false);
  const [loadingMorePeople, setLoadingMorePeople] = useState(true);
  const TagsData = [
    {
      tagName: "Minion",
      tagSum: "3,212k",
    },
    {
      tagName: "Popular",
      tagSum: "3,212k",
    },
  ];
  useEffect(() => {
    let loadingTimeout = null;
    if (showMorePeople) {
      loadingTimeout = setTimeout(() => {
        setLoadingMorePeople(false);
      }, [1000]);
    }
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [showMorePeople]);
  return (
    <>
      <style>
        {`
          .roundedScroll::-webkit-scrollbar-track {
            border-radius: 4px;
          }
          
          .roundedScroll::-webkit-scrollbar-thumb {
            border-radius: 4px;
          }
        `}
      </style>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
        <Header urlName="Articles" />
        <div className="mt-1 mb-2 h-full w-full flex justify-between overflow-hidden">
          {/* section 1 */}
          <div className="flex flex-col lg:w-[20%] h-full  rounded-lg gap-2">
            {/* profile card */}
            <div
              className={`flex flex-col w-full bg-[#F3F4F6] rounded-lg overflow-hidden`}
            >
              {/* bg cover */}
              <div className={`w-full relative h-[4rem]  rounded-lg`}>
                <img
                  src={bgwall}
                  className={`w-full h-full object-cover rounded-lg rounded-b-none`}
                  alt=""
                />
                <div
                  className={`cursor-pointer absolute w-[4rem] top-1/2 left-1/2 -translate-x-1/2  h-[4rem] object-cover rounded-full bg-gray-300`}
                >
                  <img
                    src={man1}
                    alt=""
                    className="w-full rounded-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Profile title */}
              <div
                className={`flex flex-col w-full justify-center items-center mt-9 mb-3`}
              >
                {/* user_name */}
                <p
                  className={`text-center  monsterrat font-bold max-w-[80%] overflow-hidden text-ellipsis text-nowrap`}
                >
                  Naruto Uzumaki
                </p>
                {/* user bio */}
                <p
                  className={`max-w-[80%] overflow-hidden text-ellipsis text-nowrap text-center text-xs inter text-gray-600`}
                >
                  Naruto Uzumaki bestfriend of sasuke
                </p>
              </div>
              {/* profile stats */}
              <div
                className={`flex border-2 border-gray-200   border-r-0 border-l-0 py-3 px-2 justify-around`}
              >
                <div
                  title={`6,613`}
                  className={`cursor-pointer flex text-center flex-col`}
                >
                  <p className={`text-sm font-bold`}>6,613</p>
                  <p className={`text-xs text-blue-500 font-bold`}>Following</p>
                </div>
                <div className={`h-full border border-gray-300`}></div>
                <div
                  title={`6,613`}
                  className={`cursor-pointer flex text-center flex-col`}
                >
                  <p className={`text-sm font-bold`}>6,613</p>
                  <p className={`text-xs text-blue-500 font-bold`}>Followers</p>
                </div>
              </div>
              {/* profile btn */}
              <div
                onClick={() => {
                  navigate("/profile");
                }}
                className={`cursor-pointer text-center w-full h-[3rem] flex justify-center items-center text-xs font-bold text-blue-600`}
              >
                {" "}
                <p>My profile</p>{" "}
              </div>
            </div>
            {/* Top people */}
            <div className={`flex flex-col bg-[#F3F4F6] rounded-lg p-3`}>
              {/* title */}
              <div className={`text-sm font-bold text-black `}>
                Follow people
              </div>
              {/* Recommendations */}
              <div className={`flex flex-col gap-3 my-3`}>
                {new Array(3).fill(0).map((_, key) => (
                  <PeopleRecommendations key={key} />
                ))}
                {showMorePeople && (
                  <>
                    {loadingMorePeople ? (
                      <Spinner />
                    ) : (
                      <>
                        <PeopleRecommendations />
                        <PeopleRecommendations />
                      </>
                    )}
                  </>
                )}
              </div>
              {/* Show more */}

              <div
                onClick={() => {
                  setLoadingMorePeople(true);
                  if (showMorePeople) {
                    setShowMorePeople(false);
                  } else {
                    setShowMorePeople(true);
                  }
                }}
                className={`text-[11px] cursor-pointer w-full font-bold tracking-tighter text-blue-500 mb-1`}
              >
                {showMorePeople ? "Show less" : "Show more"}
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col lg:w-[60%] gap-5 px-3 h-full rounded-lg">
            <div
              className={`w-full flex justify-center items-center bg-[#F3F4F6] rounded-lg p-2 px-3 `}
            >
              {/* Searchbar */}
              <div className={`flex gap-2 w-full items-center`}>
                {/* profile */}
                <div
                  className={`flex-shrink-0 w-[2.5rem] h-[2.5rem] rounded-full bg-gray-400 cursor-pointer`}
                >
                  <img
                    src={man1}
                    alt=""
                    className={`object-cover h-full w-full rounded-full`}
                  />
                </div>
                {/* Search bar */}
                <div className={`flex w-[90%]  rounded-lg bg-[#e4eaed]`}>
                  <input
                    type="text"
                    className={`w-full h-[2.5rem] bg-transparent outline-none px-3`}
                    placeholder="Search anything..."
                  />
                </div>
                <div
                  title="search"
                  className={`cursor-pointer flex justify-center items-center bg-[#e4eaed] transition-all hover:bg-black hover:text-white rounded-xl h-[2.5rem] px-3`}
                >
                  <i className={`ri-search-2-line text-xl`}></i>
                </div>
              </div>
            </div>
            {/* Contents */}
            <div
              className={`w-full h-full flex flex-col gap-5 overflow-hidden overflow-y-auto roundedScroll`}
            >
              <ArticleCard articleImg={abs} />
              <ArticleCard articleImg={abs1} />
              <ArticleCard articleImg={abs3} />
            </div>
          </div>
          {/* Section 3 */}
          <div
            className={`flex flex-col lg:w-[20%] max-md:hidden h-full  rounded-lg  `}
          >
            <div
              className={`flex flex-col w-full rounded-lg bg-[#F3F4F6] p-3 px-5`}
            >
              {/* title */}
              <p className={`select-none text-lg text-black font-bold`}>
                <span
                  className={`mr-2 cursor-pointer text-blue-600 hover:underline`}
                >
                  #
                </span>
                Top Trends
              </p>
              {/* Tags */}
              <Tags TagTitle={"TRENDING IN INDIA"} TagsData={TagsData} />
              <hr className={`border border-gray-300`} />
              <Tags TagTitle={"TOP TRENDS"} TagsData={TagsData} />
              <hr className={`border border-gray-300`} />
              <Tags TagTitle={"FOOTBALL • TRENDS"} TagsData={TagsData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PeopleRecommendations = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <>
      <style>
        {`
          .followAnim{
            animation:followCheckAnim .2s ease-in forwards;
          }
          @keyframes followCheckAnim{
            0%{
              transform:translateY(100%);
            }
            100%{
              transform:translateY(0%);
            }
          }
        `}
      </style>
      <div
        className={`cursor-pointer w-full flex justify-between items-center gap-2`}
      >
        <div
          className={`xl:w-[3rem] xl:h-[3rem] lg:h-[1.5rem] lg:w-[1.5rem] lg:hidden xl:flex hidden rounded-full bg-gray-200 flex-shrink-0`}
        >
          <img
            src={man2}
            alt=""
            className={`w-full h-full object-cover rounded-full`}
          />
        </div>
        <div className={`flex flex-col`}>
          <p
            className={`text-sm font-bold max-w-[8rem] overflow-hidden text-ellipsis text-nowrap`}
          >
            Sasuke Uchiha{" "}
          </p>
          <p
            className={`text-[10px] text-gray-500 max-w-[8rem] overflow-hidden text-ellipsis text-nowrap`}
          >
            Naruto Chronicles{" "}
          </p>
        </div>
        <div
          onClick={() => {
            if (followed) {
              setFollowed(false);
            } else {
              setFollowed(true);
            }
          }}
          className={`relative select-none flex-shrink-0 flex justify-center font-bold items-center rounded-3xl text-white px-4 py-2 text-[10px] ${
            followed ? "bg-blue-500" : "bg-black"
          }`}
        >
          {followed ? (
            <>
              Added <i className={`followAnim ri-check-line ml-1`}></i>
            </>
          ) : (
            "Follow"
          )}
        </div>
      </div>
    </>
  );
};

const ArticleCard = ({ articleImg }) => {
  const [showReadMore, setShowReadMore] = useState(false);
  const [articleListVisiblity, setArticleListVisiblity] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);
  const [dislikeStatus, setDisLikeStatus] = useState(false);
  const like = () => {
    if (likeStatus) {
      setLikeStatus(false);
    } else {
      setLikeStatus(true);
      setDisLikeStatus(false);
    }
  };
  const dislike = () => {
    if (dislikeStatus) {
      setDisLikeStatus(false);
    } else {
      setDisLikeStatus(true);
      setLikeStatus(false);
    }
  };
  const articleList = [
    {
      value: "Remove",
      icon: "ri-emotion-unhappy-line ",
      classes: "",
      function: () => {
        console.log("not interested");
        setArticleListVisiblity(false);
        dispatch(
          changeSnackBarState({
            message: "Article removed",
            icon: "ri-delete-bin-4-line",
            visible: true,
          })
        );
      },
    },
    {
      value: "Report",
      icon: "ri-prohibited-line",
      classes: "",
      function: () => {
        console.log("prohibited");
        setArticleListVisiblity(false);
        dispatch(
          changeSnackBarState({
            message: "Feature currently in beta",
            icon: "ri-instance-line",
            visible: true,
          })
        );
      },
    },
  ];
  const dispatch = useDispatch();

  const caption =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque, pariatur esse modiokaywhich perferendis, ipsa aut enim provident natus iste saepe neque. Consequuntur, reprehenderit. Aspernatur, deleniti! Voluptatibus minima quis autem eaque nulla voluptates hic culpa ducimus! Laborum beatae consequuntur laboriosam dolore sequi sed odio dolores aspernatur sit et tempora id molestiae nemo officia nesciunt cumque quae accusamus, doloribus sapiente ratione placeat, nam cum veniam. Ipsam reiciendis laborum maxime atque possimus temporibus consequuntur delectus! Id, exercitationem! Fugit quos sit et aut hic consectetur nobis tempora temporibus vel ab nihil autem, similique voluptate sapiente ipsam non vero quas quam aspernatur? Asperiores, aliquam non! Nobis ullam illum aperiam sunt perferendis odio repellendus accusantium magnam eius hic ipsa laborum incidunt, quidem eum obcaecati quae at omnis alias quod eligendi earum a delectus pariatur iure. Voluptatibus rem veritatis aspernatur eaque ipsam cum consectetur, pariatur facere tempore vitae debitis obcaecati labore tenetur praesentium velit libero necessitatibus culpa nemo deserunt fugiat repudiandae vel. Quaerat id, fugit nisi perspiciatis laudantium natus? Sapiente veniam adipisci nulla dolorum ex error corporis atque quam quidem similique laborum magni tenetur hic, ad modi, voluptatum minima laudantium quaerat fuga tempora? Id, consequuntur nisi! Eos ducimus tempore mollitia beatae corporis harum quasi nesciunt in doloremque eius illo labore possimus ea ratione, incidunt, quae molestias omnis adipisci vel repellendus ipsam exercitationem. Voluptate ad, necessitatibus minus, in natus consequatur placeat, sint harum modi cum aut incidunt temporibus reprehenderit exercitationem asperiores odio iste id saepe atque eius molestias nostrum. Eum, necessitatibus culpa! Rerum, ut! Nostrum aspernatur quae repellendus, officia sunt alias fugit quisquam dolores nihil cum in deleniti numquam! Consequatur totam repudiandae veritatis reiciendis, suscipit repellat excepturi asperiores doloribus nemo corrupti repellendus labore velit soluta dolor accusamus. Labore vitae dolorem quisquam in saepe! Consectetur delectus vel aut, officiis excepturi hic debitis rerum architecto facere earum molestiae explicabo?";
  const [trimCaption, setTrimCaption] = useState(
    caption.split(" ").slice(0, 20).join(" ")
  );
  const showCaption = () => {
    return (
      <>
        {trimCaption}{" "}
        <p
          onClick={() => {
            if (showReadMore) {
              setShowReadMore(false);
              setTrimCaption(caption.split(" ").slice(0, 20).join(" "));
            } else {
              setShowReadMore(true);
              setTrimCaption(caption);
            }
          }}
          className={`text-blue-600 text-xs font-bold cursor-pointer select-none`}
        >
          {showReadMore ? "Collapse.." : "Read more.."}
        </p>
      </>
    );
  };
  return (
    <>
      <div
        onClick={() => {
          setArticleListVisiblity(false);
        }}
        className={`flex py-4 bg-[#F3F4F6] px-3 rounded-lg gap-3 relative`}
      >
        {/* Avatar */}
        <div
          className={`sticky top-3 flex-shrink-0 w-[2.5rem] h-[2.5rem] rounded-full bg-gray-400 cursor-pointer`}
        >
          <img
            src={man2}
            alt=""
            className={`object-cover h-full w-full rounded-full`}
          />
        </div>
        {/* content */}
        <div className={`w-full flex flex-col`}>
          {/* title */}
          <div className={`w-full flex justify-between items-center`}>
            <p className={`text-sm text-black font-bold`}>Jiraya Sage</p>
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (articleListVisiblity) {
                  setArticleListVisiblity(false);
                } else {
                  setArticleListVisiblity(true);
                }
              }}
              className={`relative cursor-pointer hover:bg-[#e3e7ee] px-2 py-1 rounded-lg`}
            >
              <i title={"More"} className={`ri-more-fill `}></i>
              <ClickMenu menu={articleList} visibility={articleListVisiblity} />
            </div>
          </div>
          {/* time */}
          <p className={`text-[10px] inter text-gray-400`}>Few minutes Ago</p>
          {/* Article Image */}
          <div className="w-full rounded-xl mt-3 pr-[5rem] mb-4">
            <img
              src={articleImg}
              alt=""
              className={`w-full h-auto rounded-xl object-cover`}
            />
          </div>
          {/* Caption */}
          <div className="w-full text-sm pr-[5rem]">{showCaption()}</div>
          {/* Actions */}
          <div className={`w-full flex gap-2 mt-3`}>
            {/* like */}
            <div
              onClick={like}
              title={"Like"}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center bg-gray-200 transition-all hover:bg-[#dadada] p-2 px-5 rounded-3xl`}
            >
              <i
                className={`ri-thumb-up-${
                  likeStatus ? "fill" : "line"
                }  text-base`}
              ></i>{" "}
              <p className={`text-xs`}>2,331k</p>
            </div>
            {/* Dislike */}
            <div
              onClick={dislike}
              title={"Dislike"}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center bg-gray-200 transition-all hover:bg-[#dadada] p-2 px-5 rounded-3xl`}
            >
              <i
                className={`ri-thumb-down-${
                  dislikeStatus ? "fill" : "line"
                }  text-base`}
              ></i>{" "}
              <p className={`text-xs`}>12k</p>
            </div>
            {/* Comment */}
            <div
              title={"Comments"}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center bg-gray-200 transition-all hover:bg-[#dadada] p-2 px-5 rounded-3xl`}
            >
              <i className="ri-message-2-line text-base"></i>{" "}
              <p className={`text-xs`}>3,129K </p>
            </div>
            {/* share */}
            <div
              title={"Share"}
              onClick={() => {
                dispatch(
                  changeSnackBarState({
                    message: "Link copied to Clipboard",
                    icon: "ri-clipboard-fill",
                    visible: true,
                  })
                );
              }}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center bg-gray-200 transition-all hover:bg-[#dadada] p-2 px-3 rounded-3xl`}
            >
              <i className="ri-share-2-line"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tags = ({ TagTitle, TagsData }) => {
  return (
    <>
      <div className={`flex flex-col mt-2`}>
        {/* Tag Title */}
        <p
          className={`upperrcase select-none text-[12px] text-gray-400 font-bold`}
        >
          {TagTitle}
        </p>
        {TagsData?.map((item, key) => (
          <TagCon key={key} name={item.tagName} sum={item.tagSum} />
        ))}
      </div>
    </>
  );
};

const TagCon = ({ name, sum }) => {
  const [showMore, setShowMore] = useState(false);
  const tagList = [
    {
      value: "Remove",
      icon: "ri-prohibited-line ",
      classes: "",
      function: () => {
        console.log("not interested");
        setShowMore(false);
      },
    },
  ];
  return (
    <>
      <div
        onClick={() => {
          setShowMore(false);
        }}
        className={`flex justify-between items-center`}
      >
        <div
          className={`cursor-pointer flex flex-col my-2`}
        >
          <p className="text-sm font-bold">#{name}</p>
          <p className="text-[10px] font-bold text-gray-400">{sum} Articles</p>
        </div>
        {/* More */}
        <div
          title={"more"}
          onClick={(e) => {
            e.stopPropagation();
            if (showMore) {
              setShowMore(false);
            } else {
              setShowMore(true);
            }
          }}
          className={`hover:bg-[#e3e7ee] rounded-lg relative cursor-pointer p-2 py-1 transition-all  flex justify-center items-center`}
        >
          <i className="ri-more-fill"></i>
          <ClickMenu menu={tagList} visibility={showMore} />
        </div>
      </div>
    </>
  );
};

export default Articles;
