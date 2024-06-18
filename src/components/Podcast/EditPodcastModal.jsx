import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditPodcastVisibility } from "../../slices/podcastSlice";
import { setOpenEditor } from "../../slices/commonSlice";
import { AnimatePresence } from "framer-motion";
import FlashMsg from "../../components/FlashMsg/FlashMsg";
import {
  FLASH_ERROR,
  FLASH_PENDING,
  FLASH_SUCCESS,
  FLASH_WARNING,
} from "../../constants/FlashMsgConstants.js";

const EditPodcastModal = ({ podcast }) => {
  const visibility = useSelector(
    (state) => state.podcast.editPodcastVisibility
  );
  const mode = useSelector((state) => state.common.mode);
  const dispatch = useDispatch();
  const tagInputRef = useRef(null);
  const [title, setTitle] = useState(podcast.title);
  const [description, setDescription] = useState(podcast.about);
  const [imgSrc, setImgSrc] = useState(podcast.thumbnail);
  const inputImageFile = useRef(null);

  const handleClose = () => {
    dispatch(setEditPodcastVisibility(false));
  };
  const [tagList, setTagList] = useState(podcast.tags);
  let suggestions = [
    "abc",
    "asd",
    "abc",
    "asd",
    "abc",
    "asd",
    "abc",
    "asd",
    "abc",
    "asd",
    "abc",
    "asd",
    "bcd",
    "cde",
    "def",
    "efg",
    "fgh",
    "ghi",
    "hij",
    "ijk",
  ];
  const [suggestionList, setSuggestionList] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // check if key is enter or space bar
  const handleKeyDown = (e) => {
    console.log(e.key);
    if (
      (e.key === " " || e.key === "Enter" || e.key === ",") &&
      e.target.value.trim() !== "" &&
      e.target.value !== " " &&
      !e.target.value.includes(",")
    ) {
      setShowSuggestions(false);
      setTagList([...tagList, e.target.value.trim()]);
      e.target.value = "";
      e.preventDefault();
    }
  };

  // check if input is changed for suggestions
  const handleInputChange = (e) => {
    if (e.target.value.trim() !== "") {
      let newSuggestions = suggestions.filter((x) =>
        x.toLowerCase().startsWith(e.target.value.trim().toLowerCase())
      );
      setSuggestionList(newSuggestions);
      if (newSuggestions.length > 0) {
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  // remove tag
  const removeTag = (itemToRemove) => {
    setTagList((prevList) => prevList.filter((item) => item !== itemToRemove));
  };

  const imageValidationAndUpload = (file) => {
    if (file) {
      const Extension = file.name
        .substring(file.name.lastIndexOf(".") + 1)
        .toLowerCase();
      const MAX_SIZE = 2097152; // 2MB in bytes
      const MAX_DIMENSION = 800; // 2000 pixels width and height

      if (
        Extension == "gif" ||
        Extension == "png" ||
        Extension == "bmp" ||
        Extension == "jpeg" ||
        Extension == "jpg"
      ) {
        if (file) {
          var size = file.size;
          if (size > MAX_SIZE) {
            // console.log("Maximum file size exceeds");
            setFlashType(FLASH_ERROR);
            setFlashTitle("Size Error");
            setFlashMsg("Image Should be less-than or equal-to 2 MB!");
            setFlashVisibility(true);
            inputImageFile.current.value = "";
            return;
          }
          const img = new Image();
          const _URL = window.URL || window.webkitURL;
          img.src = _URL.createObjectURL(file);
          img.onload = () => {
            if (img.width > MAX_DIMENSION || img.height > MAX_DIMENSION) {
              setFlashType(FLASH_ERROR);
              setFlashTitle("Dimension Error");
              setFlashMsg(
                "Dimensions Should be equal-to or less-than 800 pixels!"
              );
              setFlashVisibility(true);
              inputImageFile.current.value = "";
            } else {
              dispatch(setOpenEditor(true));
              console.log("editor open");
              setImgSrc(img.src);
            }
          };
        }
      } else {
        // console.log("Format not supported");
        setFlashType(FLASH_ERROR);
        setFlashTitle("Format Error");
        setFlashMsg("Input Image Format is not supported");
        setFlashVisibility(true);
        inputImageFile.current.value = "";
      }
    }
  };

  //  Flash messages Are handled here
  const [flashVisibility, setFlashVisibility] = useState(false);
  const FLASH_STATE = {
    flashVisibility,
    setFlashVisibility,
  };
  const [flashType, setFlashType] = useState(null);
  const [flashTitle, setFlashTitle] = useState("");
  const [flashMsg, setFlashMsg] = useState("");
  const [enableCancel , setEnableCancel] =useState(false);

  const saveChanges = () => {
    setFlashType(FLASH_SUCCESS);
    setFlashTitle("Saved");
    setFlashMsg("All changes are saved successfully.");
    setFlashVisibility(true);
  };

  const cancelChanges = () => {
    setEnableCancel(true)
    setFlashType(FLASH_WARNING);
    setFlashTitle("Unsaved Changes");
    setFlashMsg("Changes you have made will be lost if you proceed. Are you sure you want to discard these changes and continue?");
    setFlashVisibility(true);
  };

  const onOkClicked =()=>{
    dispatch(setEditPodcastVisibility(false))
  }
  return (
    <>
      <style>
        {`
        .blueGlassBg{
          background: rgba(26,43,78,0.5);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(26,43,78,0.25);
        }
        .imgChange::after{
          content:"";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:0;
          left:0;
          height:100%;
          width:100%;
          background-color: black;
          border-radius:100%;
          z-Index:1;
        }
        .imgChange::before{
          content:"Change Avatar";
          opacity:0;
          position:absolute;
          transition: all ease 0.2s;
          top:50%;
          left:50%;
          z-Index:2;
          transform:translate(-50%,-50%);
          border-radius:100%;
          color:white;
          font-size:1rem;
         
        }
          {/*Photo Editor overide Styles */ }
        .rp-editor{
          z-index:50 !important;
        }
        .toggle-container {
          --inactive-color: #1868e3;
          position: relative;
          aspect-ratio: 292/142;
          height: 1.875em;
          --active-color: #35c759;
          
        }
        .toggle-input {
          appearance: none;
          margin: 0;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        
        .toggle {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        
        .toggle-background {
          fill: var(--inactive-color);
          transition: fill 0.4s;
        }
        .toggle-input:checked + .toggle .toggle-background {
          fill: var(--active-color);
        }
        
        .toggle-circle-center {
          transform-origin: center;
          transition: transform 0.6s;
        }
        .toggle-input:checked + .toggle .toggle-circle-center {
          transform: translateX(150px);
        }
        
        .toggle-circle {
          transform-origin: center;
          backface-visibility: hidden;
          transition: transform 0.45s;
        }
        .toggle-circle.left {
          transform: scale(1);
        }
        .toggle-input:checked + .toggle .toggle-circle.left {
          transform: scale(0);
        }
        .toggle-circle.right {
          transform: scale(0);
        }
        .toggle-input:checked + .toggle .toggle-circle.right {
          transform: scale(1);
        }
        
        .toggle-icon {
          transition: fill 0.4s;
        }
        .toggle-icon.on {
          fill: var(--inactive-color);
        }
        .toggle-input:checked + .toggle .toggle-icon.on {
          fill: #fff;
        }
        .toggle-icon.off {
          fill: #eaeaec;
        }
        .toggle-input:checked + .toggle .toggle-icon.off {
          fill: var(--active-color);
        }
      `}
      </style>
      {visibility && (
        <div className="flex justify-center items-center w-full h-full rounded-lg backdrop-blur-sm transition-all duration-500">
          <div
            className={`flex flex-col w-[700px] rounded-lg ${
              mode ? "bg-[#101216] text-white" : "bg-zinc-100"
            } `}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className={`flex justify-between ${
                mode ? "bg-[#17191f] " : "bg-[#eff0f1]"
              } rounded-t-lg p-3 text-sm px-5 items-center  select-none`}
            >
              <p>Edit podcast details</p>
              <div
                className={`flex justify-center items-center rounded-full transition-all duration-500 cursor-pointer`}
              >
                <i
                  className={`ri-close-large-line text-xs hover:text-blue-500`}
                  onClick={() => {
                    handleClose();
                  }}
                ></i>
              </div>
            </div>
            <div className="p-5 flex flex-col w-full gap-5 overflow-y-auto ">
              {/* title section */}
              <div className="flex flex-col gap-2 text-sm">
                <p className=" select-none">Title</p>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className={`p-1.5 px-3 rounded-md outline outline-1  bg-transparent focus:outline-2 focus:outline-blue-500 ${
                    mode
                      ? "text-gray-300 outline-zinc-700"
                      : "text-gray-600 outline-zinc-400"
                  }`}
                ></input>
              </div>
              {/* description section */}
              <div className="flex flex-col gap-2 text-sm">
                <p className="select-none">Description</p>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className={`p-1.5 px-3 rounded-md outline outline-1  bg-transparent focus:outline-2 focus:outline-blue-500 ${
                    mode
                      ? "text-gray-300 outline-zinc-700"
                      : "text-gray-600 outline-zinc-400"
                  }`}
                ></input>
              </div>
              {/* tags section */}
              <div
                className="flex flex-col gap-2 text-sm"
                onClick={() => {
                  if (tagInputRef.current) {
                    tagInputRef.current.focus();
                  }
                }}
              >
                <div className="flex gap-2 items-center select-none">
                  {" "}
                  <p className="">Tags</p>
                  <p className="text-zinc-500 text-xs">
                    (separate with spaces)
                  </p>
                </div>
                <div
                  className={` flex w-full outline gap-3 outline-1 select-none ${
                    mode ? "outline-zinc-700" : "outline-zinc-400"
                  }  rounded-md  p-1 px-3 flex-wrap`}
                >
                  {tagList?.length > 0 &&
                    tagList.map((item, idx) => (
                      <div
                        className={`flex ${
                          mode ? "blueGlassBg" : "bg-blue-100"
                        }  hover:bg-blue-500 group hover:text-white text-[#3F8EF6] text-xs p-1 gap-1 px-3 rounded-full`}
                        key={idx}
                      >
                        <p className="">{item}</p>
                        <div
                          className={`${
                            mode ? "bg-[#162844]" : "bg-blue-200"
                          } group-hover:bg-blue-500 flex justify-center items-center text-blue-400 font-bold rounded-full p-1 px-2 mr-[-19px] mt-[-5px] mb-[-5px]`}
                        >
                          <i
                            className={`ri-close-large-line text-xs hover:text-white`}
                            onClick={() => {
                              removeTag(item);
                            }}
                          ></i>
                        </div>
                      </div>
                    ))}
                  <input
                    ref={tagInputRef}
                    type="text"
                    className={`w-56 rounded-md  bg-transparent outline-none focus:border focus:border-blue-600 ${
                      mode ? "text-gray-300" : "text-gray-600"
                    }`}
                    onKeyDown={(e) => {
                      handleKeyDown(e);
                    }}
                    onInput={(e) => {
                      handleInputChange(e);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex relative min-h-56">
                {/* suggestion section */}
                {showSuggestions && (
                  <div
                    className={`flex flex-col  mt-[-19.5px] overflow-hidden  z-50 w-full absolute  ${
                      mode
                        ? "bg-[#101216] outline-zinc-700 "
                        : "bg-zinc-100 outline-zinc-400 "
                    } outline outline-1 rounded-md`}
                  >
                    {suggestionList?.length > 0 &&
                      suggestionList.map((item, idx) => (
                        <div
                          className={` ${
                            idx === suggestionList.length - 1
                              ? ""
                              : mode
                              ? "border-b border-zinc-700"
                              : "border-b border-zinc-400"
                          }
                              hover:bg-blue-500  `}
                          key={idx}
                          onClick={() => {
                            setTagList([...tagList, item]);
                            if (tagInputRef.current) {
                              tagInputRef.current.value = "";
                            }
                            setShowSuggestions(false);
                          }}
                        >
                          <p
                            className={`p-1.5 px-2 text-xs  ${
                              mode
                                ? "text-gray-300"
                                : "text-gray-600 hover:text-white"
                            }`}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                  </div>
                )}
                {/* Thumbnail section */}
                <div className="flex flex-col gap-2 text-sm absolute">
                  <p className=" select-none">Thumbnail</p>
                  <p
                    className={`text-xs ${
                      mode ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    Select or upload a picture that shows what's in your video.
                    A good thumbnail stands out and draws viewer's attention.
                  </p>
                  <div className=" flex justify-center items-center border-2 border-dashed border-gray-500 w-64 h-36 mt-1">
                    <div className="relative w-full h-full">
                      <img
                        src={imgSrc}
                        className="w-full h-full object-cover"
                        alt="Your Image Description"
                      />
                      <label
                        title="podcast thumbnail"
                        className="absolute imgChange rounded-full h-full w-full top-0 left-0 cursor-pointer "
                        htmlFor="image"
                      ></label>
                      <input
                        ref={inputImageFile}
                        className="hidden"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          imageValidationAndUpload(e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* cancel or save sections */}
            <div
              className={`flex justify-end gap-2 rounded-b-lg border-t ${
                mode ? "border-t-zinc-800" : "border-t-zinc-300"
              }  p-3 font px-5 items-center  select-none`}
            >
              <div
                className={`flex justify-center p-1.5 px-4 text-[13px] ${
                  mode
                    ? "bg-[#1d1f27]"
                    : "bg-zinc-300 hover:bg-zinc-400 text-zinc-700 hover:text-white"
                } items-center rounded-md transition-all duration-500 cursor-pointer`}
              onClick={cancelChanges}>
                Cancel
              </div>
              <div
                className={`flex justify-center p-1.5 px-4 text-[13px] text-white ${
                  mode
                    ? "bg-[#238636] hover:bg-[#37de58]"
                    : "bg-[#2cde50] hover:bg-[#2bba47]"
                } items-center rounded-md transition-all duration-500 cursor-pointer`}
                onClick={saveChanges}
              >
                Save changes
              </div>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
        {flashVisibility && (
          <FlashMsg
            key={"FlasMsg"}
            FLASH_STATE={FLASH_STATE}
            FLASH_TYPE={flashType}
            FLASH_TITLE={flashTitle}
            FLASH_MESSAGE={flashMsg}
            ONCLICK={onOkClicked}
            CANCELCLICK={() => {}}
            enableCancel ={enableCancel}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EditPodcastModal;
