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
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Articles = ({ Header }) => {
  const mode = useSelector((state) => state.common.mode);
  const navigate = useNavigate();
  const [showMorePeople, setShowMorePeople] = useState(false);
  const [loadingMorePeople, setLoadingMorePeople] = useState(true);
  const [showImgPreview, setShowImgPreview] = useState(false);
  const [showImgPreviewSrc, setShowImgPreviewSrc] = useState(null);
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
      <div className={`flex flex-col h-full w-full pr-4 max-sm:px-4`}>
        <Header urlName="Articles" />
        <div className="mt-1 mb-2 h-full w-full flex justify-between overflow-hidden">
          {/* section 1 */}
          <div className="max-sm:hidden flex flex-col lg:w-[20%] h-full  rounded-lg gap-4">
            {/* profile card */}
            <div
              className={`flex flex-col w-full ${
                mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
              } transition-all duration-500 rounded-lg overflow-hidden`}
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
                  className={`text-center  monsterrat font-bold max-w-[80%] overflow-hidden text-ellipsis text-nowrap ${
                    mode ? "text-white" : "text-black"
                  } duration-500 transition-all`}
                >
                  Naruto Uzumaki
                </p>
                {/* user bio */}
                <p
                  className={`max-w-[80%] overflow-hidden text-ellipsis text-nowrap text-center text-xs inter ${
                    mode ? "text-gray-500" : "text-gray-600"
                  } duration-500 transition-all`}
                >
                  Naruto Uzumaki bestfriend of sasuke
                </p>
              </div>
              {/* profile stats */}
              <div
                className={`flex border-2 ${
                  mode ? "border-[#262626]" : "border-gray-200"
                } transition-all duration-500  border-r-0 border-l-0 py-3 px-2 justify-around`}
              >
                <div
                  title={`6,613`}
                  className={`cursor-pointer flex text-center flex-col`}
                >
                  <p
                    className={`text-sm font-bold ${
                      mode ? "text-gray-300" : "text-black"
                    } duration-500 transition-all`}
                  >
                    6,613
                  </p>
                  <p className={`text-xs text-blue-500 font-bold`}>Following</p>
                </div>
                <div
                  className={`h-full border ${
                    mode ? "border-[#262626]" : "border-gray-300"
                  } duration-500 transition-all `}
                ></div>
                <div
                  title={`6,613`}
                  className={`cursor-pointer flex text-center flex-col`}
                >
                  <p
                    className={`text-sm font-bold ${
                      mode ? "text-gray-300" : "text-black"
                    } duration-500 transition-all`}
                  >
                    6,613
                  </p>
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
            <div
              className={`flex flex-col ${
                mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
              } transition-all duration-500 rounded-lg p-3`}
            >
              {/* title */}
              <div
                className={`text-sm font-bold ${
                  mode ? "text-white" : "text-black"
                } duration-500 transition-all`}
              >
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
          <div className="flex flex-col lg:w-[60%] max-sm:w-full gap-3 md:px-3 h-full rounded-lg">
            <div
              className={`w-full flex justify-center items-center ${
                mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
              } transition-all duration-500 rounded-lg p-2 px-3 `}
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
                <div
                  className={`flex w-[90%]  rounded-lg ${
                    mode ? "bg-[#2b2b2b]" : "bg-[#e4eaed]"
                  } transition-all duration-500 `}
                >
                  <input
                    type="text"
                    className={`w-full ${
                      mode ? "text-white" : "text-black"
                    } transition-all duration-500 h-[2.5rem] bg-transparent outline-none px-3`}
                    placeholder="Search anything..."
                  />
                </div>
                <div
                  title="search"
                  className={`cursor-pointer flex justify-center items-center ${
                    mode
                      ? "bg-[#2b2b2b] hover:bg-gray-300 text-white hover:text-black"
                      : "bg-[#e4eaed] hover:bg-black hover:text-white text-black"
                  } transition-all duration-500   rounded-xl h-[2.5rem] px-3`}
                >
                  <i className={`ri-search-2-line text-xl`}></i>
                </div>
              </div>
            </div>
            {/* Contents */}
            <div
              className={`w-full h-full flex flex-col gap-5 overflow-hidden overflow-y-auto roundedScroll`}
            >
              <ArticleCard
                articleImg={abs}
                imgPreviewState={{ setShowImgPreviewSrc, setShowImgPreview }}
              />
              <ArticleCard
                articleImg={abs1}
                imgPreviewState={{ setShowImgPreviewSrc, setShowImgPreview }}
              />
              <ArticleCard
                articleImg={abs3}
                imgPreviewState={{ setShowImgPreviewSrc, setShowImgPreview }}
              />
            </div>
          </div>
          {/* Section 3 */}
          <div
            className={`max-sm:hidden flex flex-col lg:w-[20%] max-md:hidden h-full  rounded-lg  `}
          >
            <div
              className={`flex flex-col w-full rounded-lg ${
                mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
              } duration-500 transition-all p-3 px-5`}
            >
              {/* title */}
              <p
                className={`select-none text-lg  ${
                  mode ? "text-white " : "text-black "
                } duration-500 transition-all font-bold`}
              >
                <span
                  className={`mr-2 cursor-pointer text-blue-600 hover:underline`}
                >
                  #
                </span>
                Top Trends
              </p>
              {/* Tags */}
              <Tags TagTitle={"TRENDING IN INDIA"} TagsData={TagsData} />
              <hr
                className={`border ${
                  mode ? "border-[#262626]" : "border-gray-300"
                } duration-500 transition-all`}
              />
              <Tags TagTitle={"TOP TRENDS"} TagsData={TagsData} />
              <hr
                className={`border ${
                  mode ? "border-[#262626]" : "border-gray-300"
                } duration-500 transition-all`}
              />
              <Tags TagTitle={"FOOTBALL • TRENDS"} TagsData={TagsData} />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showImgPreview && (
          <ImgPreview
            img={showImgPreviewSrc}
            setShowImagePreview={setShowImgPreview}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const PeopleRecommendations = () => {
  const [followed, setFollowed] = useState(false);
  const mode = useSelector((state) => state.common.mode);
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
            className={`${
              mode ? "text-white" : "text-black"
            } duration-500 transition-all text-sm font-bold max-w-[8rem] overflow-hidden text-ellipsis text-nowrap`}
          >
            Sasuke Uchiha{" "}
          </p>
          <p
            className={`${
              mode ? "text-gray-500" : "text-gray-500"
            } duration-500 transition-all text-[10px]  max-w-[8rem] overflow-hidden text-ellipsis text-nowrap`}
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
          className={`relative select-none flex-shrink-0 flex justify-center font-bold items-center rounded-3xl  px-4 py-2 text-[10px] overflow-hidden ${
            followed
              ? mode
                ? "bg-blue-500 text-white "
                : "bg-blue-500 text-white"
              : mode
              ? "bg-white text-black duration-500"
              : "bg-black text-white duration-500"
          } transition-all `}
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

const ArticleCard = ({ articleImg, imgPreviewState }) => {
  const mode = useSelector((state) => state.common.mode);
  const [showReadMore, setShowReadMore] = useState(false);
  const [articleListVisiblity, setArticleListVisiblity] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);
  const [dislikeStatus, setDisLikeStatus] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [disableAddCommentBtn, setDisableAddCommentBtn] = useState(true);
  const [comment, setComment] = useState("");
  const commonTextAreaRef = useRef(null);
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
    "Naruto Uzumaki, the energetic and boisterous protagonist of the Naruto manga and anime series, is a character who overcomes many challenges. Sealed with the Nine-Tailed Demon Fox, a powerful creature that attacked his village, Naruto is ostracized by many throughout his childhood. Despite this, Naruto dreams of becoming Hokage, the leader of his village, to gain their respect. His journey is one of friendship, perseverance, and ultimately, becoming a hero.";
  const [trimCaption, setTrimCaption] = useState(
    caption.split(" ").slice(0, 20).join(" ")
  );
  const showCaption = () => {
    return (
      <>
        {trimCaption}{" "}
        <span
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
        </span>
      </>
    );
  };

  // Handling Auto Height of textarea comment input
  useEffect(() => {
    const textarea = commonTextAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on scrollHeight
    }
  }, [comment, setShowCommentInput]);
  return (
    <>
      <div
        onClick={() => {
          setArticleListVisiblity(false);
        }}
        className={`flex py-4 ${
          mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
        } transition-all duration-500  px-3 rounded-lg gap-3 relative`}
      >
        {/* Avatar */}
        <div
          className={`sticky top-3 flex-shrink-0 w-[2.5rem] h-[2.5rem] rounded-full  ${
            mode ? "bg-[#9CA3AF]" : "bg-gray-400"
          } duration-500 transition-all cursor-pointer`}
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
            <p
              className={`text-sm ${
                mode ? "text-white" : "text-black"
              } transition-all duration-500 font-bold`}
            >
              Jiraya Sage
            </p>
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (articleListVisiblity) {
                  setArticleListVisiblity(false);
                } else {
                  setArticleListVisiblity(true);
                }
              }}
              className={`relative cursor-pointer  ${
                mode
                  ? "hover:bg-[#2b2b2b] text-white"
                  : "hover:bg-[#e3e7ee] text-black"
              } px-2 py-1 rounded-lg transition-all duration-500`}
            >
              <i title={"More"} className={`ri-more-fill `}></i>
              <ClickMenu menu={articleList} visibility={articleListVisiblity} />
            </div>
          </div>
          {/* time */}
          <p
            className={`text-[10px] inter text-gray-400 transition-all duration-500 `}
          >
            Few minutes Ago
          </p>
          {/* Article Image */}
          <div
            onClick={() => {
              imgPreviewState.setShowImgPreview(true);
              imgPreviewState.setShowImgPreviewSrc(articleImg);
              // console.log(imgPreviewState);
            }}
            className="w-full rounded-xl mt-3 max-sm:pr-[2rem] md:pr-[5rem] mb-4"
          >
            <img
              src={articleImg}
              alt=""
              className={`w-full h-auto rounded-xl object-cover`}
            />
          </div>
          {/* Caption */}
          <div
            className={`w-full text-sm max-sm:pr-[2rem] md:pr-[5rem] ${
              mode ? "text-gray-200" : "text-black"
            } duration-500 transition-all`}
          >
            {showCaption()}
          </div>
          {/* Actions */}
          <div className={`w-full flex gap-2 mt-3`}>
            {/* like */}
            <div
              onClick={like}
              title={"Like"}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center ${
                mode
                  ? "bg-[#2B2B2B] text-white hover:bg-[#353535] duration-500"
                  : "bg-gray-200 duration-500 hover:bg-[#dadada]"
              } transition-all  md:p-2 md:px-5 max-sm:p-1 max-sm:px-3 rounded-3xl `}
            >
              <i
                className={`ri-thumb-up-${
                  likeStatus ? "fill" : "line"
                }  md:text-base max-sm:text-xs`}
              ></i>{" "}
              <p className={`text-xs`}>2,331k</p>
            </div>
            {/* Dislike */}
            <div
              onClick={dislike}
              title={"Dislike"}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center ${
                mode
                  ? "bg-[#2B2B2B] text-white hover:bg-[#353535] duration-500"
                  : "bg-gray-200 duration-500 hover:bg-[#dadada]"
              } transition-all md:p-2 md:px-5 max-sm:p-1 max-sm:px-3 rounded-3xl`}
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
              onClick={() => {
                if (showCommentInput) {
                  setShowCommentInput(false);
                } else {
                  setShowCommentInput(true);
                }
              }}
              className={`select-none cursor-pointer gap-1 flex justify-center items-center ${
                mode
                  ? "bg-[#2B2B2B] text-white hover:bg-[#353535] duration-500"
                  : "bg-gray-200 duration-500 hover:bg-[#dadada]"
              } transition-all md:p-2 md:px-5 max-sm:p-1 max-sm:px-3 rounded-3xl`}
            >
              <i className="ri-message-2-line text-base"></i>{" "}
              <p className={`text-xs max-sm:hidden`}>3,129K </p>
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
              className={`select-none cursor-pointer gap-1 flex justify-center items-center ${
                mode
                  ? "bg-[#2B2B2B] text-white hover:bg-[#353535] duration-500"
                  : "bg-gray-200 duration-500 hover:bg-[#dadada] text-black"
              } transition-all md:p-2 md:px-5 max-sm:p-1 max-sm:px-3 rounded-3xl`}
            >
              <i className="ri-share-forward-fill "></i>
            </div>
          </div>
          {/* Comment Input */}
          {showCommentInput && (
            <div className={`flex gap-2 justify-center items-start  mt-5 mb-3`}>
              {/* Avtar */}
              <div
                className={`overflow-hidden rounded-full ${
                  mode ? "bg-gray-400" : "bg-gray-400"
                } w-7 h-7 cursor-pointer flex-shrink-0`}
              >
                <img src={man1} className="w-full h-full object-cover" alt="" />
              </div>
              <textarea
                name="comment"
                value={comment}
                placeholder={"Add  comment.."}
                onChange={(e) => {
                  setComment(e.target.value);
                  if (e.target.value.trim().length != 0) {
                    setDisableAddCommentBtn(false);
                  } else {
                    setDisableAddCommentBtn(true);
                  }
                }}
                ref={commonTextAreaRef}
                rows={1}
                className={`commentTextArea pb-1 resize-none w-full overflow-hidden border-b-2 ${
                  mode ? "border-gray-500" : "border-gray-500"
                } bg-transparent  transition-all ${
                  mode ? "text-gray-300" : "text-black"
                }  border-0 outline-0`}
                type="text"
              />
              <div
                onClick={() => {
                  setShowCommentInput(false);
                }}
                className={`${
                  disableAddCommentBtn
                    ? `pointer-events-none ${
                        mode
                          ? "bg-[#2a2a2a] text-white"
                          : "bg-gray-300 text-black"
                      } `
                    : `${
                        mode
                          ? "bg-white text-black duration-500"
                          : "bg-black text-white duration-500"
                      }`
                } transition-all select-none cursor-pointer rounded-3xl px-4 py-2 text-xs`}
              >
                Make
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Tags = ({ TagTitle, TagsData }) => {
  // const mode = useSelector((state) => state.common.mode);
  return (
    <>
      <div className={`flex flex-col mt-2`}>
        {/* Tag Title */}
        <p
          className={`uppercase select-none text-[12px] text-gray-400 font-bold`}
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
  const mode = useSelector((state) => state.common.mode);
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
        <div className={`cursor-pointer flex flex-col my-2`}>
          <p
            className={`text-sm font-bold ${
              mode ? "text-white" : "text-black"
            } transition-all duration-500`}
          >
            #{name}
          </p>
          <p
            className={`text-[10px] font-bold ${
              mode ? "text-gray-500" : "text-gray-400"
            } transition-all duration-500`}
          >
            {sum} Articles
          </p>
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
          className={`${
            mode
              ? "hover:bg-[#2b2b2b] text-white duration-500"
              : "hover:bg-[#e3e7ee] text-black duration-500"
          } rounded-lg relative cursor-pointer p-2 py-1 transition-all  flex justify-center items-center`}
        >
          <i className="ri-more-fill"></i>
          <ClickMenu menu={tagList} visibility={showMore} />
        </div>
      </div>
    </>
  );
};

const ImgPreview = ({ img, setShowImagePreview }) => {
  const listenForEscSpace = (e) => {
    e.preventDefault();
    if (e.keyCode === 27 || e.keyCode === 32) {
      setShowImagePreview(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", listenForEscSpace);
    return () => {
      window.removeEventListener("keydown", listenForEscSpace);
    };
  }, []);
  return (
    <>
      {img && (
        <motion.div
          onClick={() => {
            setShowImagePreview(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeIn",
          }}
          className="w-screen flex justify-center items-center h-screen overflow-hidden backdrop-blur-sm fixed top-0 left-0"
        >
          <img
            src={img}
            alt=""
            className={`max-w-[90%] h-auto max-h-[90%] object-cover`}
          />
        </motion.div>
      )}
    </>
  );
};
export default Articles;
