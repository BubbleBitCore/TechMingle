import { useSelector, useDispatch } from "react-redux";
import { setAddToPlaylistVisibility } from "../../slices/podcastSlice";
import { useEffect, useState } from "react";
import { changeSnackBarState } from "../../slices/commonSlice";
const AddToPlaylistModel = ({ playlist }) => {
  const mode = useSelector((state) => state.common.mode);
  const visibility = useSelector(
    (state) => state.podcast.addToPlayListVisibility
  );
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState([]);
  const handleCheckboxChnage = (e) => {
    console.log(e.target.value);
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItems((prevItems) => [...prevItems, value]);
      dispatch(
        changeSnackBarState({
          message: `added to ${value}`,
          icon: "ri-clipboard-line text-blue-500",
          visible: true,
        })
      );
    } else {
      setCheckedItems((prevItems) => prevItems.filter((item) => item != value));
      dispatch(
        changeSnackBarState({
          message: `removed from ${value}`,
          icon: "ri-clipboard-line text-blue-500",
          visible: true,
        }))
    }
  };

  const [playlistTitle, setPlaylistTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [createPlayListVisibility, setCreatePlayListVisibility] =
    useState(false);

    const HandleCreateplaylist =() => {
      if (playlistTitle !== "") {
        setCreatePlayListVisibility(!createPlayListVisibility);
        dispatch(setAddToPlaylistVisibility(false));
        console.log(playlistTitle);
        dispatch(
          changeSnackBarState({
            message: `added to ${playlistTitle}`,
            icon: "ri-clipboard-line text-blue-500",
            visible: true,
          })
        );
      } else {
        setErrorMessage("Required");
      }
    }

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  useEffect(() => {
    console.log(createPlayListVisibility);
  }, [createPlayListVisibility]);

  useEffect(()=>{
    if(playlist !== ""){
      setErrorMessage("")
    }
  },[playlistTitle])
  return (
    <>
      <style>
        {`
            .blueGlassBg:hover{
                background: rgba(68,91,128,0.5);
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(68,91,128,0.25);
            }`}
      </style>
      {visibility && playlist?.length > 0 && (
        <div className=" z-[70] flex justify-center items-center w-full h-full rounded-lg backdrop-blur-sm transition-all duration-500">
        <div
          className={`flex flex-col min-w-56 ${
            mode ? "bg-zinc-900 text-white" : "bg-zinc-200 text-black"
          } p-3 px-4 rounded-xl gap-5`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={`flex justify-between items-center text-sm`}>
            <p className={`pl-2`}>Save video to..</p>
            <div
              className={`flex justify-center items-center ${
                mode ? "hover:text-zinc-500" : "hover:text-zinc-300"
              } rounded-full px-1 transition-all duration-500 cursor-pointer`}
            >
              <i
                className={`ri-close-large-line text-xl`}
                onClick={() => {
                  dispatch(setAddToPlaylistVisibility(false));
                }}
              ></i>
            </div>
          </div>
          <div className="flex flex-col pr-2">
            {playlist.map((item, idx) => (
              <div className={`flex justify-between items-center`} key={idx}>
                <div className="flex gap-3 text-md items-center ">
                  <div
                    className={`flex justify-center items-center blueGlassBg rounded-full w-10 h-10`}
                  >
                    <input
                      type="checkbox"
                      className={`w-5 h-5  transition-all duration-500 cursor-pointer`}
                      value={item}
                      onChange={handleCheckboxChnage}
                    />
                  </div>

                  <p className="capitalize">{item}</p>
                </div>
                <i className="ri-lock-2-line"></i>
              </div>
            ))}
          </div>
          {!createPlayListVisibility && (
            <div
              className="flex gap-2 items-center px-2 cursor-pointer"
              onClick={() => {
                setCreatePlayListVisibility(!createPlayListVisibility);
              }}
            >
              <i className="ri-add-line text-2xl"></i>
              <p className="text-sm">Create a new Playlist</p>
            </div>
          )}

          {createPlayListVisibility && (
            <div className="flex flex-col gap-4 pb-2 text-sm text-zinc-400 transition-all duration-500">
              <div className="flex flex-col px-2">
                <input
                  type="text"
                  placeholder="Playlist title..."
                  onChange={(e) => {
                    setPlaylistTitle(e.target.value);
                  }}
                  maxLength={100}
                  className={`bg-transparent outline-none border-b ${errorMessage ?"border-red-600": "border-zinc-300"} `}
                />
              <div className={`flex w-full py-1 justify-between ${errorMessage ? "text-red-600" :""}`}>
                  <p className="text-xs">{errorMessage}</p>
                  <p className="text-xs">{`${playlistTitle.length}/100`}</p>
                </div>
              </div>
              <div className="flex flex-col text-sm px-2">
                <select
                  type="text"
                  className={`bg-transparent outline-none border-b border-zinc-300 capitalize cursor-pointer ${
                    mode ? "bg-zinc-800 " : ""
                  }`}
                >
                  <option>private</option>
                  <option>public</option>
                </select>
              </div>
              <div
                className="flex self-end text-center p-2 px-3 text-xs capitalize cursor-pointer blueGlassBg rounded-full text-blue-400 font-bold"
                onClick={HandleCreateplaylist}
              >
                create
              </div>
            </div>
          )}
        </div>
        </div>
      )}
    </>
  );
};

export default AddToPlaylistModel;
