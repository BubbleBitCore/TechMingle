import { useSelector } from "react-redux";

const ClickMenu = ({ menu, visibility }) => {
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);
  return (
    <>
      {visibility && menu?.length > 0 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex justify-center items-center flex-col gap-1 rounded-md absolute top-full right-0 ${
            mode ? "bg-[#181818]" : "bg-gray-100 "
          } transition-all overflow-hidden  max-w-52  p-1 py-2 z-50`}
        >
          {menu?.map((item, key) => (
            <p
              onClick={item.function}
              key={key}
              className={`select-none rounded-md w-full  p-2 pr-3 text-sm ${
                mode ? "hover:bg-[#242424]" : "hover:bg-gray-200 "
              } ${
                mode ? "text-gray-400" : "text-gray-600"
              } overflow-hidden text-ellipsis ${item.classes} transition-all`}
            >
              {item?.icon && <i className={`${item.icon} mr-2 font-normal`} />}
              {item.value}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default ClickMenu;
