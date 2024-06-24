import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCreatePodcastVisibility } from "../../slices/podcastSlice";
import { setOpenEditor } from "../../slices/commonSlice";
import { AnimatePresence } from "framer-motion";
import FlashMsg from "../../components/FlashMsg/FlashMsg";
import {
  FLASH_ERROR,
  FLASH_PENDING,
  FLASH_SUCCESS,
  FLASH_WARNING,
} from "../../constants/FlashMsgConstants.js";

const CreatePodcast = () => {
  const visibility = useSelector(
    (state) => state.podcast.createPodcastVisibility
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [podcastVisibility, setPodcastVisibility] = useState("Public");
  const [language, setLanguage] = useState("select");
  const [audioFile, setAudioFile] = useState();
  const [tagList, setTagList] = useState([]);
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
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isDescFocused, setIsDescFocused] = useState(false);
  const [isTagFocused, setIsTagFocused] = useState(false);
  const [showVisibilityDropDown, setShowVisibilityDropDown] = useState(false);
  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [tagError, setTagError] = useState(false);
  const [audioFileError, setAudioFileError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const languages = [
    "Amharic",
    "Arabic",
    "Bengali",
    "Bhojpuri",
    "Burmese",
    "English",
    "Fula",
    "French",
    "German",
    "Gujarati",
    "Hakka",
    "Hausa",
    "Hindi",
    "Italian",
    "Japanese",
    "Javanese",
    "Jin",
    "Kannada",
    "Korean",
    "Maithili",
    "Malay",
    "Malayalam",
    "Mandarin",
    "Marathi",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Pashto",
    "Romanian",
    "Russian",
    "Sindhi",
    "Spanish",
    "Sundanese",
    "Southern Min",
    "Tagalog",
    "Tamil",
    "Telugu",
    "Thai",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Vietnamese",
    "Wu",
    "Xiang",
    "Yoruba",
    "Yue",
  ];

  const mode = useSelector((state) => state.common.mode);
  const dispatch = useDispatch();
  const visibilityDropDownRef = useRef(null);
  const languageDropDownRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const inputImageFile = useRef(null);
  const tagInputRef = useRef(null);

  //  Flash messages Are handled here
  const [flashVisibility, setFlashVisibility] = useState(false);
  const FLASH_STATE = {
    flashVisibility,
    setFlashVisibility,
  };
  const [flashType, setFlashType] = useState(null);
  const [flashTitle, setFlashTitle] = useState("");
  const [flashMsg, setFlashMsg] = useState("");
  const [enableCancel, setEnableCancel] = useState(false);
  const [enablePromiseFlash, setEnablePromiseFlash] = useState(false);
  const [settlePromise, setSettlePromise] = useState(false);

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

  // create podcast is handled here
  const createPodcast = () => {
    if (title.trim().length == 0) {
      setTitle("");
      setTitleError(true);
    }
    if (description.length == 0) {
      setDescription("");
      setDescError(true);
    }
    if (!imgSrc) {
      setThumbnailError(true);
    }
    if (language === "select") {
      setLanguageError(true);
    }
    if (tagList.length < 1) {
      
      setTagError(true);
    }
    if (!audioFile) {
      setAudioFileError(true);
      setError("Please select a podcast.");
    } else if (
      title.trim().length > 0 &&
      description.trim().length > 0 &&
      imgSrc.length > 0 &&
      language !== "select" &&
      tagList.length >= 1 &&
      audioFile
    ) {
      setFlashType(FLASH_WARNING);
      setFlashTitle("Warning!");
      setFlashMsg(
        "Please ensure all content is properly licensed and adheres to our community guidelines before publishing. Failure to comply may result in content removal and account suspension."
      );
      setFlashVisibility(true);
      setEnableCancel(true);
      setEnablePromiseFlash(true);
    }
  };

  useEffect(()=>{
    console.log(tagList);
  },[tagList])

  // on Ok clicked on flash msg
  const onOkClicked = () => {
    dispatch(setCreatePodcastVisibility(false));
  };

  // remove tag
  const removeTag = (itemToRemove) => {
    setTagList((prevList) => prevList.filter((item) => item !== itemToRemove));
  };

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

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        visibilityDropDownRef.current &&
        !visibilityDropDownRef.current.contains(event.target)
      ) {
        setShowVisibilityDropDown(false);
      }
      if (
        languageDropDownRef.current &&
        !languageDropDownRef.current.contains(event.target)
      ) {
        setShowLanguageDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibilityDropDownRef, languageDropDownRef]);

  // handle thumbnail error
  useEffect(() => {
    if (thumbnailError) {
      if (imgSrc.length > 0) {
        setThumbnailError(false);
      }
    }
  }, [imgSrc]);

  useEffect(() => {
    setTimeout(() => {
      setSettlePromise(true);
    }, 5000);
  }, []);

  // drag and drop functionality

  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    handleChange(files);
  };

  const handleChange = (files) => {
    // const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("audio/")) {
        console.log("Selected file:", file);
        podcastUploadFile(file);
        setAudioFileError(false);
        // Process the audio file here
        setError("");
      } else {
        setError("Please select only audio files.");
      }
    }
  };

  // Reset dragActive state on any file change
  useEffect(() => {
    const inputElement = document.getElementById("audioInput");
    const handleResetDragActive = () => setDragActive(false);
    if (inputElement) {
      inputElement.addEventListener("change", handleResetDragActive);
    }
    return () => {
      inputElement.removeEventListener("change", handleResetDragActive);
    };
  }, []);

  // uploading podcast
  const podcastUploadFile = (file) => {
    setAudioFile(file);
    setError("");
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10; // Increase progress by 10% every 100ms
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        console.log("File upload successful");
      }
    }, 100);
  };

  return (
    <>
      <style>
        {`.blueGlassBg{
          background: rgba(26,43,78,0.5);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(26,43,78,0.25);
        }`}
      </style>
      {visibility && (
        <div className=" z-[70] w-screen h-screen top-0 left-0 fixed bgBlur flex justify-center items-center backdrop-blur-sm">
          <div
            className={`flex flex-col w-[600px] max-h-[600px] rounded-md transition-all duration-300 ${
              mode ? "bg-[#101216] text-white" : "bg-zinc-100"
            } `}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* header */}
            <div
              className={`flex justify-between  rounded-t-md p-4  px-5 items-center  select-none`}
            >
              <p className="text-sm">Create a new Podcast </p>
              <div
                className={`flex justify-center items-center rounded-full transition-all duration-500 cursor-pointer`}
              >
                <i
                  className={`ri-close-large-line text-md hover:text-blue-500`}
                  onClick={() => {
                    dispatch(setCreatePodcastVisibility(false));
                  }}
                ></i>
              </div>
            </div>
            <div className="border-t h-[0.2px] w-full border-zinc-700"></div>
            {/* main content */}
            <div className="flex flex-col gap-5 p-6 w-full overflow-hidden overflow-y-auto">
              <div
                className={`flex flex-col justify-between items-center select-none py-2 pt-12 bg-zinc-900 w-full min-h-72 ${
                  audioFileError
                    ? "border border-red-500"
                    : dragActive
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex">
                  <i className="ri-netease-cloud-music-line text-8xl h-17 text-gray-400"></i>
                </div>
                <div
                  className={`${
                    audioFile ? "hidden" : "flex"
                  } flex-col gap-2 justify-center items-center`}
                >
                  <label
                    htmlFor="audioInput"
                    className="text-xs bg-blue-500 px-4 p-2 hover:bg-blue-400 cursor-pointer transition-all duration-500 rounded-sm "
                  >
                    Choose podcast
                  </label>
                  <input
                    type="file"
                    name="podcastAudio"
                    id="audioInput"
                    accept="audio/*"
                    className="hidden"
                    onChange={(e) => {
                      handleChange(e.target.files);
                    }}
                  />
                  <p className="text-xs text-zinc-300">
                    or, drop the file here
                  </p>
                  {error && <p className="text-xs text-red-500">{error}</p>}
                </div>

                {audioFile && uploadProgress !== 100 && (
                  <div className="flex w-full flex-col gap-3 text-sm pb-10 items-center">
                    <p>{`${audioFile.name}`}</p>
                    <div className="flex min-w-full px-16">
                      <div className="flex bg-slate-100 h-1.5 w-full rounded-md">
                        <div
                          className="flex h-full bg-blue-500 rounded-md"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                    <p>{`Uploading - ${uploadProgress}`}</p>
                  </div>
                )}
                {uploadProgress === 100 && (
                  <div className="flex flex-col justify-center items-center mb-10 gap-3">
                    {!error && <p>File Uploaded Successfully !</p>}
                    <label
                      htmlFor="changeAudioInput"
                      className="text-xs bg-blue-500 px-4 p-2 hover:bg-blue-400 cursor-pointer transition-all duration-500 rounded-sm "
                    >
                      Change
                    </label>
                    <input
                      type="file"
                      name="podcastAudio"
                      id="changeAudioInput"
                      accept="audio/*"
                      className="hidden"
                      onChange={(e) => {
                        handleChange(e.target.files);
                      }}
                    />
                    {error && <p className="text-xs text-red-500">{error}</p>}
                  </div>
                )}
                {!audioFile && (
                  <p className="text-[11px] text-zinc-400">
                    Maximum file size: 50MB
                  </p>
                )}
              </div>
              {/* title div */}
              <div
                className={`flex flex-col gap-1 w-full justify-center rounded-sm p-2 px-4 border transition-all duration-500 ${
                  mode
                    ? ` ${
                        isTitleFocused
                          ? "text-blue-400 border-blue-500 "
                          : `${
                              titleError
                                ? "text-red-500 border-red-500"
                                : "text-zinc-300 border-zinc-700 hover:border-zinc-400"
                            }`
                      } `
                    : " border-zinc-200"
                }   `}
              >
                <div className={`flex gap-2 items-center `}>
                  <p className={`text-xs select-none`}>Title (required)</p>
                  <i className="ri-question-line "></i>
                </div>
                <input
                  type="text"
                  value={title}
                  placeholder="Add title"
                  maxLength={150}
                  onFocus={() => {
                    setIsTitleFocused(true);
                    if (titleError) setTitleError(false);
                  }}
                  onBlur={() => setIsTitleFocused(false)}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className={`outline-none border-none bg-transparent text-sm ${
                    mode
                      ? "text-zinc-300 placeholder-zinc-500"
                      : " border-zinc-200"
                  }`}
                />
                <div className="flex w-full justify-end text-xs">
                  <p>{`${title.length}/150`}</p>
                </div>
              </div>
              {/* Description div */}
              <div
                className={`flex flex-col gap-1 w-full justify-center rounded-sm p-2 px-4 border transition-all duration-5300 ${
                  mode
                    ? ` ${
                        isDescFocused
                          ? "text-blue-400 border-blue-500 "
                          : `${
                              descError
                                ? "text-red-500 border-red-500"
                                : "text-zinc-300 border-zinc-700 hover:border-zinc-400"
                            }`
                      } `
                    : " border-zinc-200"
                } `}
              >
                <div className={`flex gap-2 items-center`}>
                  <p className={`text-xs select-none`}>
                    Description (required)
                  </p>
                  <i className="ri-question-line "></i>
                </div>
                <textarea
                  rows={4}
                  placeholder="Add description"
                  value={description}
                  maxLength={1000}
                  onFocus={() => {
                    setIsDescFocused(true);
                    if (descError) setDescError(false);
                  }}
                  onBlur={() => setIsDescFocused(false)}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className={`py-1 outline-none resize-none border-none bg-transparent text-sm ${
                    mode
                      ? "text-zinc-300 placeholder-zinc-500"
                      : " border-zinc-200"
                  }`}
                />
                <div className="flex w-full justify-end text-xs">
                  <p>{`${description.length}/1000`}</p>
                </div>
              </div>
              {/* tags div */}
              <div className="flex flex-col gap-1">
                <div
                  className={`flex flex-col gap-1 w-full justify-center rounded-sm p-2 px-4 border transition-all duration-500 ${
                    mode
                      ? ` ${
                          isTagFocused
                            ? "text-blue-400 border-blue-500 "
                            : `${
                                tagError
                                  ? "text-red-500 border-red-500"
                                  : "text-zinc-300 border-zinc-700 hover:border-zinc-400"
                              }`
                        } `
                      : " border-zinc-200"
                  }   `}
                  onClick={() => {
                    if (tagInputRef.current) {
                      tagInputRef.current.focus();
                    }
                  }}
                >
                  <div className={`flex gap-2 items-center `}>
                    <p className={`text-xs select-none`}>
                      Tags (minimun 1 tag is required)
                    </p>
                    <i className="ri-question-line "></i>
                  </div>
                  <div
                    className={` flex w-full gap-3 select-none rounded-md  p-1  flex-wrap`}
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
                            } group-hover:bg-blue-500 flex justify-center items-center text-blue-400 font-bold rounded-full px-2 mr-[-19px] mt-[-4px] mb-[-4px] cursor-pointer`}
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
                    {tagList.length < 15 && (
                      <input
                        ref={tagInputRef}
                        type="text"
                        maxLength={20}
                        className={`w-40 px-1 rounded-md  bg-transparent outline-none focus:border focus:border-blue-600 ${
                          mode ? "text-gray-300" : "text-gray-600"
                        }`}
                        onKeyDown={(e) => {
                          handleKeyDown(e);
                        }}
                        onInput={(e) => {
                          handleInputChange(e);
                        }}
                        onFocus={() => {
                          setIsTagFocused(true);
                          if (tagError) setTagError(false);
                        }}
                        onBlur={() => setIsTagFocused(false)}
                      ></input>
                    )}
                  </div>
                  <div className="flex w-full justify-between text-xs pt-2">
                    <p>{`tag length : ${
                      tagInputRef.current ? tagInputRef.current.value.length : 0
                    }/20`}</p>
                    <p>{`tags : ${tagList.length}/15`}</p>
                  </div>
                </div>
                {/* suggestion section */}
                {showSuggestions && (
                  <div
                    className={`flex flex-col overflow-hidden w-full bg-zinc-900 rounded-lg`}
                  >
                    {suggestionList?.length > 0 &&
                      suggestionList.map((item, idx) => (
                        <div
                          className={`hover:bg-blue-500  `}
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
              </div>
              {/* Thumbnail section */}
              <div
                className={`flex flex-col gap-2 text-sm ${
                  thumbnailError ? "text-red-500" : ""
                }`}
              >
                <div className={`flex gap-2 items-center `}>
                  <p className={`text-sm select-none`}>Thumbnail (required)</p>
                  <i className="ri-question-line text-lg"></i>
                </div>
                <p
                  className={`text-xs ${
                    mode ? "text-zinc-500" : "text-gray-600"
                  }`}
                >
                  Upload a picture that represents your podcast.
                </p>
                <div
                  className={`flex justify-center items-center border-2 border-dashed  w-64 h-36 mt-1 ${
                    thumbnailError ? "border-red-500" : "border-zinc-700"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={imgSrc}
                      className="w-full h-full object-cover"
                      alt="thumbnail"
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
              {/* Visibiltiy & language*/}
              <div className="flex w-full gap-8">
                {/* visibility */}
                <div
                  className="flex flex-col w-1/2"
                  ref={visibilityDropDownRef}
                >
                  <div
                    className={`flex border  justify-between items-center rounded-sm p-2 px-3  transition-all duration-300 ${
                      mode ? "border-zinc-700 hover:border-zinc-400" : ""
                    }`}
                    onClick={() => {
                      setShowVisibilityDropDown(!showVisibilityDropDown);
                    }}
                  >
                    <div
                      className={`flex flex-col gap-1 text-xs transition-all duration-300`}
                    >
                      <p className={`text-zinc-400`}>Visibility</p>
                      <p
                        className={`text-zinc-200 text-sm capitalize`}
                      >{`${podcastVisibility}`}</p>
                    </div>
                    <i className="ri-arrow-down-s-fill text-xl cursor-pointer"></i>
                  </div>
                  {showVisibilityDropDown && (
                    <div className="flex z-10 transition-all duration-300">
                      <div className="flex flex-col bg-zinc-900 w-full rounded-lg overflow-hidden capitalize">
                        <p
                          className="py-1 text-xs hover:bg-blue-600 px-4 transition-all duration-100"
                          onClick={() => {
                            setPodcastVisibility("private");
                            setShowVisibilityDropDown(false);
                            console.log("private");
                          }}
                        >
                          Private
                        </p>
                        <p
                          className="py-1 text-xs hover:bg-blue-600 px-4 transition-all duration-100"
                          onClick={() => {
                            setPodcastVisibility("public");
                            setShowVisibilityDropDown(false);
                            console.log("public");
                          }}
                        >
                          Public
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {/* language */}
                <div className="flex flex-col w-1/2" ref={languageDropDownRef}>
                  <div
                    className={`flex border justify-between items-center rounded-sm p-2 px-3  transition-all duration-300  ${
                      languageError
                        ? "border-red-500"
                        : `${
                            mode ? "border-zinc-700 hover:border-zinc-400" : ""
                          }`
                    }`}
                    onClick={() => {
                      setShowLanguageDropDown(!showLanguageDropDown);
                    }}
                  >
                    <div
                      className={`flex flex-col gap-1 text-xs transition-all duration-300`}
                    >
                      <p
                        className={`${
                          languageError ? "text-red-500" : "text-zinc-400"
                        }`}
                      >
                        Language
                      </p>
                      <p
                        className={`text-zinc-200 text-sm capitalize`}
                      >{`${language}`}</p>
                    </div>
                    <i className="ri-arrow-down-s-fill text-xl cursor-pointer"></i>
                  </div>
                  {showLanguageDropDown && (
                    <div className="flex z-10 transition-all duration-300">
                      <div className="flex flex-col bg-zinc-900 w-full rounded-lg overflow-hidden capitalize">
                        {languages.length > 0 &&
                          languages.map((item, idx) => (
                            <p
                              className="py-1 text-xs hover:bg-blue-600 px-4 transition-all duration-100"
                              onClick={() => {
                                setLanguage(item);
                                if (languageError) {
                                  setLanguageError(false);
                                }
                                setShowLanguageDropDown(false);
                              }}
                            >
                              {`${item}`}
                            </p>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* create section */}
            <div className="border-t border-zinc-700"></div>
            <div
              className={`flex justify-end rounded-b-md p-4  px-5 ${
                mode ? "text-zinc-500" : ""
              } items-center  select-none`}
            >
              <p
                className="hover:text-blue-500 cursor-pointer transition-all duration-500"
                onClick={createPodcast}
              >
                CREATE
              </p>
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
            enableCancel={enableCancel}
            enablePromiseFlash={enablePromiseFlash}
            promiseSettled={settlePromise}
            postPromiseFlashType={FLASH_SUCCESS}
            postPromiseEnableCancel={false}
            postPromiseTitle={"Success !"}
            postPromiseMessage={
              "Your podcast has been created successfully! Press 'OK' to continue."
            }
            postPromiseCancelClick={() => {
              console.log("Post Promise cancel");
            }}
            postPromiseOnClick={() => {
              dispatch(setCreatePodcastVisibility(false))
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CreatePodcast;
