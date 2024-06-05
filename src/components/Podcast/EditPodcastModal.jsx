import { useEffect } from "react";
import { useSelector } from "react-redux";

const EditPodcastModal = ({ podcast }) => {
  const visibility = useSelector(
    (state) => state.podcast.editPodcastVisibility
  );
  const mode = useSelector((state) => state.common.mode);

  useEffect(() => {
    console.log(visibility);
  }, [visibility]);
  return (
    <>
      {visibility && (
        <div className={`flex flex-col w-[600px] h-[600px] rounded-lg bg-zinc-900`}>
          <div
            className={`flex justify-between ${
              mode ? "bg-zinc-800" : ""
            } rounded-t-lg p-2 text-sm px-4 items-center text-white`}
          >
            <p>Edit podcast details</p>
            <div
              className={`flex justify-center items-center ${
                mode ? "hover:bg-zinc-700" : "hover:bg-zinc-300"
              } rounded-full px-1 transition-all duration-500 cursor-pointer`}
            >
              <i
                className={`ri-close-large-line text-xl`}
                onClick={() => {}}
              ></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPodcastModal;
