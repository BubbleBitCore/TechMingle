// Generalized comment section for any page
import { useEffect, useRef, useState } from "react";
import img from "../../assets/images/img1.jpg";
import ClickMenu from "../ClickMenu";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Comment = () => {
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);

  const moreOptionsList = [
    {
      value: "Edit",
      icon: "ri-pencil-line",
      classes: "text-xs",
      function: () => {},
    },
    {
      value: "Delete",
      icon: "ri-delete-bin-2-line",
      classes: "text-xs",
      function: () => {},
    },
    {
      value: "Flag",
      icon: "ri-flag-line",
      classes: "text-xs",
      function: () => {},
    },
  ];
  const textareaRef = useRef(null);
  let openMenus = [];

  const setOpenMenus = (menuarray) => {
    openMenus.push(menuarray);
  };

  const [disableComment, setDisableComment] = useState(true);

  return (
    <>
      <div
        className="comment w-full flex flex-col "
        onClick={() => {
          openMenus.forEach((element) => {
            element[Object.keys(element)[0]].setMoreOptionsVisibility(false);
          });
        }}
      >
        <div
          className={`text-lg inter tracking-tighter  transition-all ${
            mode ? "text-gray-300" : "text-black"
          }`}
        >
          Comments
        </div>
        {/* Add Comment input */}

        <div className={`w-full p-2 flex-col gap-2 flex`}>
          {/* avtar */}
          <div className="flex gap-2 justify-center items-start">
            <div className="commentAvtar overflow-hidden rounded-full w-7 h-7 cursor-pointer flex-shrink-0">
              <img src={img} className="w-full h-full object-cover" alt="" />
            </div>
            <textarea
              name="comment"
              placeholder={"Add a reply.."}
              onChange={(e) => {
                const textarea = textareaRef.current;
                if (textarea) {
                  textarea.style.height = "auto"; // Reset the height
                  textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on scrollHeight
                }
                if (e.target.value.trim().length != 0) {
                  setDisableComment(false);
                } else {
                  setDisableComment(true);
                }
              }}
              ref={textareaRef}
              rows={1}
              className={`commentTextArea pb-1 w-full   border-b-2 ${
                mode ? "border-gray-100" : "border-gray-500"
              } bg-transparent  transition-all ${
                mode ? "text-gray-300" : "text-black"
              } border-0 outline-0`}
              type="text"
            />
          </div>
          <div className="flex gap-1 justify-end items-center ">
            <div
              onClick={() => {
                textareaRef.current.value = "";
                if (textareaRef.current) {
                  textareaRef.current.style.height = "auto"; // Reset the height
                  textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height based on scrollHeight
                }
              }}
              className={`${
                mode ? "hover:bg-[#242424]" : "hover:bg-gray-200"
              } cursor-pointer rounded-xl p-1 px-2 text-sm ${
                mode ? "text-gray-200" : "text-white"
              }`}
            >
              Clear
            </div>
            <div
              className={`${
                disableComment && "pointer-events-none"
              } ${
                mode ? "hover:bg-[#242424]" : "hover:bg-gray-200"
              } cursor-pointer rounded-xl p-1 px-2 text-sm ${
                mode ? "text-gray-200" : "text-white"
              }`}
            >
              Comment
            </div>
          </div>
        </div>
        {true ? (
          new Array(4).fill(0).map((_, id) => {
            const comp_id = uuidv4();
            const commentConnectorLine = "";
            return (
              <RootComment
                options={{
                  moreOptionsList,
                  openMenus,
                  setOpenMenus,
                  comp_id,
                }}
                commentConnectorLine
                key={comp_id}
              />
            );
          })
        ) : (
          <div className="w-full justify-center items-center">No comments</div>
        )}
      </div>
    </>
  );
};

const RootComment = ({ options, commentConnectorLine }) => {
  const [moreOptionsVisibility, setMoreOptionsVisibility] = useState(false);
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);
  const [dislikeStatus, setDisLikeStatus] = useState(false);
  const [disableReply, setDisableReply] = useState(true);
  const [showReplies, setShowReplies] = useState(false);
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

  const [comment, setComment] = useState("");
  const textareaRef = useRef(null);
  const { moreOptionsList, openMenus, setOpenMenus, comp_id } = options;

  // Handling Auto Height of textarea comment input
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on scrollHeight
    }
  }, [comment, openCommentInput]); // Run this effect every time the text changes

  //   adding menuvisibility state to super state
  setOpenMenus({ [comp_id]: { setMoreOptionsVisibility } });

  const getReplies = (options) => {
    const comp_id = uuidv4();
    return (
      <>
        <style>
          {`
          .roundedBorder {
            
          }
      `}
        </style>
        <div className="w-full flex  relative mt-4 justify-end items-center">
          <div className="w-full flex relative">
            <RootComment
              options={{ ...options, comp_id }}
              commentConnectorLine={"commentConnectorLine"}
              key={comp_id}
            />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <style>
        {`.commentTextArea {
            overflow: hidden; 
            resize: none; 
        }`}
      </style>
      <div
        className="rootComments flex gap-3 w-full my-2  p-2 "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {/* section 1 */}
        <div
          className="flex flex-col gap-1"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {/* avtar */}
          <div
            className={`commentAvtar ${commentConnectorLine} relative  rounded-full w-7 h-7 cursor-pointer flex-shrink-0`}
          >
            <img
              src={img}
              className="w-full h-full rounded-full object-cover"
              alt=""
            />
          </div>
          {/* Separator line */}
          <div className="flex flex-col  h-[95%] items-center overflow-hidden">
            <span className="w-[0.1rem] h-[1rem] bg-gray-300"></span>
            <i
              className={`ri-${
                showReplies ? "close" : "add"
              }-circle-line text-gray-500 hover:text-black transition-all duration-100 cursor-pointer `}
              onClick={() =>
                showReplies ? setShowReplies(false) : setShowReplies(true)
              }
            ></i>
            {showReplies && (
              <span className="w-[0.1rem] h-[100%] bg-gray-300 "></span>
            )}
          </div>
        </div>

        {/* section 2 */}
        <div
          className="flex flex-col pt-[0.2rem] w-full"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="commentHeader flex gap-2">
            {/* username */}
            <div className="text-sm  font-bold hover:underline cursor-pointer">
              naruto uzumaki
            </div>
            {/* Time */}
            <div className="flex gap-2 text-xs">
              <span className="font-bold">•</span>
              <span>12 hr.ago</span>
            </div>
          </div>
          {/* comment */}
          <div>Hello Guys</div>

          {/* Comment Action */}
          <div className="flex gap-1 text-sm">
            {/* like */}
            <div
              onClick={like}
              className="flex justify-center items-center gap-1 hover:bg-gray-200 p-1 px-2 cursor-pointer rounded-xl"
            >
              {/* like icon  */}
              <i
                className={`ri-thumb-up-${
                  likeStatus ? "fill" : "line"
                } text-black `}
              ></i>
              {/* like count */}
              <span className="text-xs">13</span>
            </div>
            {/* dislike */}
            <div
              onClick={dislike}
              className="flex justify-center items-center gap-1 hover:bg-gray-200 p-1 px-2 cursor-pointer rounded-xl"
            >
              {/* dislike icon  */}
              <i
                className={`ri-thumb-down-${
                  dislikeStatus ? "fill" : "line"
                } text-black `}
              ></i>
              {/* dislike count */}
              <span className="text-xs">13</span>
            </div>
            {/* Reply */}
            <div
              onClick={() => {
                setOpenCommentInput(true);
              }}
              className="flex justify-center items-center gap-1 hover:bg-gray-200 p-1 px-2 cursor-pointer rounded-xl text-xs font-bold"
            >
              Reply
            </div>
            {/* More */}
            <div
              title="More"
              className="flex justify-center items-center gap-1 hover:bg-gray-200 p-1 px-2 cursor-pointer rounded-xl text-xs font-bold relative"
              onClick={(e) => {
                openMenus.forEach((element) => {
                  if (Object.keys(element)[0] === comp_id) {
                    element[Object.keys(element)[0]].setMoreOptionsVisibility(
                      true
                    );
                  } else {
                    element[Object.keys(element)[0]].setMoreOptionsVisibility(
                      false
                    );
                  }
                });
                e.stopPropagation();
              }}
            >
              <i className="ri-more-fill"></i>
              <ClickMenu
                menu={moreOptionsList}
                visibility={moreOptionsVisibility}
              />
            </div>
          </div>

          {/* Add Comment input */}

          <div
            className={`w-full p-2  flex-col gap-2 ${
              !openCommentInput ? "hidden " : "flex "
            }`}
          >
            {/* avtar */}
            <div className="flex gap-2 justify-center items-start">
              <div className="commentAvtar overflow-hidden rounded-full w-6 h-6 cursor-pointer flex-shrink-0">
                <img src={img} className="w-full h-full object-cover" alt="" />
              </div>
              <textarea
                name="comment"
                value={comment}
                placeholder={"Add a reply.."}
                onChange={(e) => {
                  setComment(e.target.value);
                  if (e.target.value.trim().length != 0) {
                    setDisableReply(false);
                  } else {
                    setDisableReply(true);
                  }
                }}
                ref={textareaRef}
                rows={1}
                className="commentTextArea pb-1 w-full  border-b-2 border-gray-500 border-0 outline-0"
                type="text"
              />
            </div>
            <div className="flex gap-1 justify-end items-center ">
              <div
                onClick={() => {
                  setOpenCommentInput(false);
                  setComment("");
                }}
                className="hover:bg-gray-200 cursor-pointer rounded-xl p-1 px-2 text-xs"
              >
                Cancel
              </div>
              <div
                className={`${
                  disableReply && "pointer-events-none"
                } hover:bg-gray-200 cursor-pointer rounded-xl p-1 px-2 text-xs`}
              >
                Reply
              </div>
            </div>
          </div>

          {/* Replies (if any) */}
          {showReplies && getReplies(options)}
          {showReplies && getReplies(options)}
        </div>
      </div>
    </>
  );
};

// Reply comments

export default Comment;
