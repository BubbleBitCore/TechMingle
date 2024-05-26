import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import abs1 from "../assets/images/absfunny.jpg";
import man1 from "../assets/images/man.png";
import { AnimatePresence, motion } from "framer-motion";
import { changeSnackBarState } from "../slices/commonSlice";
import ClickMenu from "../components/ClickMenu";
import Comment from "../components/Comment/Comment";

const Article = ({ Header }) => {
  const mode = useSelector((state) => state.common.mode);
  const dispatch = useDispatch();
  const [showImgPreview, setShowImgPreview] = useState(false);
  const [following, setFollowing] = useState(false);
  const [showImgPreviewSrc, setShowImgPreviewSrc] = useState(null);
  const [likeStatus, setLikeStatus] = useState(false);
  const [dislikeStatus, setDisLikeStatus] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const caption =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam accusamus quam non ratione esse veritatis sapiente maiores quibusdam soluta, aliquid ad doloribus tempora laboriosam praesentium consequuntur voluptatem perspiciatis voluptatum, repudiandae at modi velit, totam fugit? Vitae voluptatum harum necessitatibus, totam ducimus dolor ratione alias earum beatae nulla ad voluptatibus error vel quas perferendis explicabo minus aliquam. Repudiandae soluta, consequatur vitae ea temporibus esse ex atque ratione? Error, eius illo voluptatibus velit, sed cupiditate at eligendi neque iste ratione cum debitis ab dignissimos in quis esse, voluptate nesciunt et reiciendis! Beatae deleniti amet incidunt aperiam voluptates. Sed quae ut quam nisi praesentium! Similique perferendis illo distinctio ut labore consectetur dolor nulla commodi officia, molestias quos, maxime deleniti sed numquam? Consequatur voluptatum nesciunt dolorem quisquam odio temporibus pariatur cum eius soluta, voluptatem deserunt, perspiciatis a consectetur repudiandae, inventore voluptates est dicta eveniet mollitia nihil eaque veniam doloribus obcaecati! Ratione aut tempore quibusdam aliquam quidem maiores exercitationem incidunt, provident numquam veritatis. Culpa vel natus veritatis commodi nobis explicabo reiciendis iure corrupti incidunt illo, iste distinctio sunt fugit possimus vitae. Rerum corporis quo saepe fugit eveniet pariatur delectus consequatur accusamus, obcaecati odio iusto tempore ex. Dolorem, commodi dicta doloribus mollitia, totam ipsam nobis quas sint eaque eum repellendus reprehenderit in laborum voluptatum deleniti provident odit laboriosam. Corporis quae, eaque doloremque, veniam sapiente vitae aspernatur vero autem repellat id, vel error? Ducimus obcaecati corrupti perspiciatis ipsam omnis iste sequi, excepturi, magnam nemo quasi sunt. Natus autem sint recusandae, omnis enim voluptate non culpa quo pariatur dolorum iure rerum tempore perspiciatis explicabo molestias, eos error expedita voluptates. Maxime fuga, numquam repellendus soluta veniam perspiciatis dicta iste, magni nobis nesciunt pariatur esse quos porro mollitia! Aut ab eveniet repellat labore quam, nesciunt vitae minima reiciendis? Fugit optio sunt incidunt odio illo assumenda mollitia repudiandae iste nobis dolorum!";
  const [trimCaption, setTrimCaption] = useState(
    caption.split(" ").slice(0, 50).join(" ")
  );
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
  const moreList = [
    {
      value: "Report",
      icon: "ri-flag-fill",
      classes: "",
      function: () => {
        console.log("not interested");
        setShowMore(false);
      },
    },
  ];
  const [showReadMore, setShowReadMore] = useState(false);
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
      <div
        onClick={() => {
          setShowMore(false);
        }}
        className="flex flex-col h-full w-full pr-4 max-sm:px-4"
      >
        <Header urlName="Article" />
        <div className="mt-1 mb-2 h-full w-full flex justify-center items-center overflow-hidden">
          <div
            className={`w-full h-full flex sm:flex-col max-sm:flex-col max-lg:flex-col md:flex-col lg:flex-row gap-2`}
          >
            {/* section1 */}
            <div
              className={`w-[70%] sm:w-full max-sm:w-full  md:h-full ${
                mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
              } transition-all duration-500 rounded-lg  flex flex-col overflow-hidden roundedScroll overflow-y-auto`}
            >
              {/* ArticleImage */}
              <div className="w-full md:h-[75%] max-sm:h-auto  object-cover bg-[#2d2d2d] flex justify-center items-center relative">
                <img
                  src={abs1}
                  alt=""
                  className="w-full max-h-full h-auto object-cover"
                />
                <div
                  onClick={() => {
                    setShowImgPreview(true);
                    setShowImgPreviewSrc(abs1);
                  }}
                  title={`fullscreen`}
                  className={`cursor-pointer p-2 py-1 rounded-lg absolute bottom-2 right-2  transition-all`}
                >
                  <i className="text-white text-xl ri-fullscreen-line "></i>
                </div>
              </div>

              {/* profile and actions */}
              <div
                className={`flex w-full px-2 max-sm:px-1 mt-4 max-sm:flex-wrap max-sm:justify-between`}
              >
                {/* profile avtar */}
                <div
                  className={`cursor-pointer w-[2.5rem] flex-shrink-0 h-[2.5rem] rounded-full bg-gray-300`}
                >
                  <img
                    className={`object-cover w-full h-full rounded-full`}
                    src={man1}
                    alt=""
                  />
                </div>
                {/* Profile Title and Stats */}
                <div className=" cursor-pointer flex lg:min-w-[12rem] max-sm:min-w-[8rem] flex-col max-sm:gap-0 gap-1 mx-3 max-sm:ml-0 justify-center items-start ">
                  <p
                    title="User name"
                    className={`text-black text-lg max-sm:text-sm montserrat  leading-4 font-bold max-sm:max-w-[8rem] lg:max-w-[12rem] overflow-hidden text-ellipsis text-nowrap`}
                  >
                    Naruto uzumaki
                  </p>
                  <p title={`Followers`} className={`text-xs text-gray-800`}>
                    920K <span>•</span> Followers
                  </p>
                </div>
                {/* Follow Btn */}
                <div
                  className={`w-[7rem] flex-shrink-0 flex items-center max-sm:justify-end`}
                >
                  <p
                    onClick={() => {
                      if (following) {
                        setFollowing(false);
                      } else {
                        setFollowing(true);
                      }
                    }}
                    className={`${
                      following ? "bg-blue-500" : "bg-black hover:bg-[#262626]"
                    } cursor-pointer text-sm w-auto select-none px-4 py-2 transition-all font-bold montserrat  text-white  rounded-3xl flex `}
                  >
                    {following && <i className={`ri-check-line mr-1`}></i>}{" "}
                    {following ? "Following" : "Follow"}
                  </p>
                </div>
                {/* Like, dislike and share and more*/}
                <div className="flex w-full justify-between max-sm:my-3">
                  {/* like,share,dislike */}
                  <div className={`flex gap-2 items-center`}>
                    {/* Like */}
                    <div
                      title={`Like`}
                      onClick={() => {
                        like();
                      }}
                      className={`select-none cursor-pointer px-4 py-2 text-xs hover:bg-[#d2d2d2] transition-all bg-gray-200 text-black rounded-3xl`}
                    >
                      <i
                        className={`text-sm ri-thumb-up-${
                          likeStatus ? "fill" : "line"
                        } mr-1`}
                      ></i>{" "}
                      3.6K
                    </div>
                    {/* DisLike */}
                    <div
                      title={`Dislike`}
                      onClick={() => {
                        dislike();
                      }}
                      className={`select-none cursor-pointer px-4 py-2 text-xs hover:bg-[#d2d2d2] transition-all bg-gray-200 text-black rounded-3xl`}
                    >
                      <i
                        className={`text-sm ri-thumb-down-${
                          dislikeStatus ? "fill" : "line"
                        } mr-1`}
                      ></i>{" "}
                      1K
                    </div>
                    {/* Share */}
                    <div
                      onClick={() => {
                        dispatch(
                          changeSnackBarState({
                            message: "Link copied to Clipboard",
                            icon: "ri-clipboard-fill",
                            visible: true,
                          })
                        );
                      }}
                      className={`select-none cursor-pointer px-4 py-2 text-xs hover:bg-[#d2d2d2] transition-all bg-gray-200 text-black rounded-3xl`}
                    >
                      <i className={`text-sm ri-share-forward-fill mr-1`}></i>{" "}
                      Share
                    </div>
                  </div>
                  {/* more */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (showMore) {
                        setShowMore(false);
                      } else {
                        setShowMore(true);
                      }
                    }}
                    title="more"
                    className={`cursor-pointer hover:bg-gray-200 transition-all flex justify-center items-center px-3 py-0 rounded-3xl relative`}
                  >
                    <i className={`text-black ri-more-fill`}></i>
                    <ClickMenu menu={moreList} visibility={showMore} />
                  </div>
                </div>
              </div>
              {/* Caption */}
              <div className="w-full text-sm montserrat text-gray-500 inter my-3 px-3">
                {trimCaption}{" "}
                <span
                  onClick={() => {
                    if (showReadMore) {
                      setShowReadMore(false);
                      setTrimCaption(caption.split(" ").slice(0, 50).join(" "));
                    } else {
                      setShowReadMore(true);
                      setTrimCaption(caption);
                    }
                  }}
                  className={`text-blue-600 text-xs font-bold cursor-pointer select-none`}
                >
                  {showReadMore ? "Collapse.." : "Read more.."}
                </span>
              </div>
              {/* Comments */}
              <div className="w-full px-1">
                <Comment />
              </div>
            </div>
            {/* section2 */}
            <div
              className={`md:w-[30%] sm:w-full max-sm:w-full max-md:w-full max-lg:w-full lg:h-full ${
                mode ? "bg-[#202020]" : "bg-[#F3F4F6]"
              } transition-all duration-500 rounded-lg  `}
            ></div>
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

export default Article;
