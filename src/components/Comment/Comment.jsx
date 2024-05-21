// Generalized comment section for any page
import { useEffect, useRef, useState } from "react";
import img from "../../assets/images/img1.jpg";
import ClickMenu from "../ClickMenu";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { changeSnackBarState } from "../../slices/commonSlice";
import { useDispatch } from "react-redux";

const Comment = () => {
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);

  const textareaRef = useRef(null);
  let openMenus = [];

  const setOpenMenus = (menuarray) => {
    openMenus.push(menuarray);
  };

  const [disableComment, setDisableComment] = useState(true);

  return (
    <>
      <div
        className="comment w-full flex flex-col px-2"
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

        <div className={`w-full py-2 flex-col gap-2 flex`}>
          {/* avtar */}
          <div className="flex gap-2 justify-center items-start">
            <div className="commentAvtar overflow-hidden rounded-full w-7 h-7 cursor-pointer flex-shrink-0">
              <img src={img} className="w-full h-full object-cover" alt="" />
            </div>
            <textarea
              name="comment"
              placeholder={"Add a comment.."}
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
                mode ? "border-gray-500" : "border-gray-500"
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
                mode ? "hover:bg-[#242424]" : "hover:bg-[#F3F4F6]"
              } cursor-pointer rounded-xl p-1 px-2 text-sm ${
                mode ? "text-gray-200" : "text-black"
              }`}
            >
              Clear
            </div>
            <div
              className={`${disableComment && "pointer-events-none"} ${
                mode ? "hover:bg-[#242424]" : "hover:bg-[#F3F4F6]"
              } cursor-pointer rounded-xl p-1 px-2 text-sm ${
                mode ? "text-gray-200" : "text-black"
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
            const padd = "px-2";
            return (
              <RootComment
                options={{
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

const RootComment = ({ options, commentConnectorLine, padd }) => {
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);
  const [moreOptionsVisibility, setMoreOptionsVisibility] = useState(false);
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);
  const [dislikeStatus, setDisLikeStatus] = useState(false);
  const [disableReply, setDisableReply] = useState(true);
  const [showReplies, setShowReplies] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [disableEditBtn, setDisableEditBtn] = useState(true);
  const [editCommentText, setEditCommentText] = useState("Sasuke Uchiha");
  const editTextareaRef = useRef(null);
  const dispatch = useDispatch();
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

  const moreOptionsList = [
    {
      value: "Edit",
      icon: "ri-pencil-line",
      classes: "text-xs",
      function: () => {
        setShowEdit(true);
        setMoreOptionsVisibility(false);
      },
    },
    {
      value: "Delete",
      icon: "ri-delete-bin-2-line",
      classes: "text-xs",
      function: () => {
        deleteComment(comp_id);
        setMoreOptionsVisibility(false);
        dispatch(
          changeSnackBarState({
            message: "Comment Deleted",
            icon: "ri-chat-delete-line",
            visible: true,
          })
        );
      },
    },
    {
      value: "Flag",
      icon: "ri-flag-line",
      classes: "text-xs",
      function: () => {
        setMoreOptionsVisibility(false);
        dispatch(
          changeSnackBarState({
            message: "Feature currently in beta",
            icon: "ri-flask-line",
            visible: true,
          })
        );
      },
    },
  ];

  const [comment, setComment] = useState("");
  const textareaRef = useRef(null);
  const { openMenus, setOpenMenus, comp_id } = options;

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
              padd={""}
              key={comp_id}
            />
          </div>
        </div>
      </>
    );
  };

  const deleteComment = (commentId) => {
    // delete logic goes here
    console.log(commentId);
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
        className={`rootComments flex gap-3 w-full my-2  ${padd} `}
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
            className={`commentAvtar z-10 ${commentConnectorLine} relative  rounded-full w-7 h-7 cursor-pointer flex-shrink-0`}
          >
            <img
              src={img}
              className="w-full z-10 relative h-full rounded-full object-cover"
              alt=""
            />
          </div>
          {/* Separator line */}
          <div className="flex flex-col  h-[95%] items-center overflow-hidden">
            <span
              className={`w-[0.1rem] h-[1rem] ${
                mode ? "bg-gray-500" : "bg-gray-300"
              } transition-all`}
            ></span>
            <i
              title="show replies"
              className={`ri-${showReplies ? "close" : "add"}-circle-line ${
                mode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-black"
              } transition-all duration-100 cursor-pointer `}
              onClick={() =>
                showReplies ? setShowReplies(false) : setShowReplies(true)
              }
            ></i>
            {showReplies && (
              <span
                className={`w-[0.1rem] h-[100%] ${
                  mode ? "bg-gray-500" : "bg-gray-300"
                } transition-all`}
              ></span>
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
            <div
              className={`text-sm  ${
                mode ? "text-gray-400" : "text-black"
              } transition-all font-bold hover:underline cursor-pointer`}
            >
              naruto uzumaki
            </div>
            {/* Time */}
            <div className="flex gap-2 text-xs">
              <span
                className={`font-bold ${
                  mode ? "text-gray-300" : "text-black"
                } transition-all`}
              >
                •
              </span>
              <span
                className={`${
                  mode ? "text-gray-300" : "text-black"
                } transition-all`}
              >
                12 hr.ago
              </span>
            </div>
          </div>
          {/* comment */}
          {!showEdit ? (
            <div
              className={`${
                mode ? "text-gray-300" : "text-black"
              } transition-all`}
            >
              {editCommentText}
            </div>
          ) : (
            <div className={`w-full py-2 flex-col gap-2 flex`}>
              <textarea
                name="edit"
                value={editCommentText}
                placeholder={"Write Something..."}
                onChange={(e) => {
                  setEditCommentText(e.target.value.trim());
                  const textarea = editTextareaRef.current;
                  if (textarea) {
                    textarea.style.height = "auto"; // Reset the height
                    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on scrollHeight
                  }
                  if (e.target.value.trim().length != 0) {
                    setDisableEditBtn(false);
                  } else {
                    setDisableEditBtn(true);
                  }
                }}
                ref={editTextareaRef}
                rows={1}
                className={`commentTextArea pb-1 w-full   border-b-2 ${
                  mode ? "border-gray-500" : "border-gray-500"
                } bg-transparent  transition-all ${
                  mode ? "text-gray-300" : "text-black"
                } border-0 outline-0`}
                type="text"
              />
              <div className="flex gap-1 justify-end items-center ">
                <div
                  onClick={() => {
                    setShowEdit(false);
                  }}
                  className={`${
                    mode ? "hover:bg-[#242424]" : "hover:bg-[#F3F4F6]"
                  } cursor-pointer rounded-xl p-1 px-2 text-sm ${
                    mode ? "text-gray-200" : "text-black"
                  }`}
                >
                  Cancel
                </div>
                <div
                  onClick={() => {
                    setShowEdit(false);
                  }}
                  className={`${disableEditBtn && "pointer-events-none"} ${
                    mode ? "hover:bg-[#242424]" : "hover:bg-[#F3F4F6]"
                  } cursor-pointer rounded-xl p-1 px-2 text-sm ${
                    mode ? "text-gray-200" : "text-black"
                  }`}
                >
                  Edit
                </div>
              </div>
            </div>
          )}

          {/* Comment Action */}
          <div className="flex gap-1 text-sm">
            {/* like */}
            <div
              onClick={like}
              title="like"
              className={`flex justify-center items-center gap-1 ${
                mode
                  ? "text-gray-300 hover:bg-[#242424] "
                  : "text-black hover:bg-gray-200 "
              } transition-all p-1 px-2 cursor-pointer rounded-xl`}
            >
              {/* like icon  */}
              <i
                className={`ri-thumb-up-${likeStatus ? "fill" : "line"}  `}
              ></i>
              {/* like count */}
              <span className="text-xs">13</span>
            </div>
            {/* dislike */}
            <div
              title="dislike"
              onClick={dislike}
              className={`flex justify-center items-center gap-1 ${
                mode
                  ? "text-gray-300 hover:bg-[#242424]"
                  : "text-black hover:bg-gray-200 "
              } transition-all p-1 px-2 cursor-pointer rounded-xl`}
            >
              {/* dislike icon  */}
              <i
                className={`ri-thumb-down-${dislikeStatus ? "fill" : "line"}  `}
              ></i>
              {/* dislike count */}
              <span className="text-xs">13</span>
            </div>
            {/* Reply */}
            <div
              onClick={() => {
                setOpenCommentInput(true);
              }}
              className={`flex justify-center items-center gap-1 ${
                mode
                  ? "hover:bg-[#242424]  text-gray-300 "
                  : "hover:bg-gray-200"
              } p-1 px-2 cursor-pointer rounded-xl text-xs font-bold`}
            >
              Reply
            </div>
            {/* More */}
            <div
              title="More"
              className={`flex justify-center items-center gap-1 ${
                mode
                  ? "hover:bg-[#242424]  text-gray-300 "
                  : "hover:bg-gray-200"
              } p-1 px-2 cursor-pointer rounded-xl text-xs font-bold relative`}
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
                className={`commentTextArea pb-1 w-full  border-b-2 ${
                  mode ? "border-gray-500" : "border-gray-500"
                } bg-transparent  transition-all ${
                  mode ? "text-gray-300" : "text-black"
                }  border-0 outline-0`}
                type="text"
              />
            </div>
            <div className="flex gap-1 justify-end items-center ">
              <div
                onClick={() => {
                  setOpenCommentInput(false);
                  setComment("");
                }}
                className={`${
                  mode ? "hover:bg-[#242424]" : "hover:bg-[#F3F4F6]"
                } cursor-pointer rounded-xl p-1 px-2  ${
                  mode ? "text-gray-200" : "text-white"
                } text-xs`}
              >
                Cancel
              </div>
              <div
                className={`${disableReply && "pointer-events-none"} ${
                  mode ? "hover:bg-[#242424]" : "hover:bg-[#F3F4F6]"
                } cursor-pointer rounded-xl p-1 px-2 text-xs ${
                  mode ? "text-gray-200" : "text-white"
                }`}
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
