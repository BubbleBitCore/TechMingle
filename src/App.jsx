import AppWrapper from "./components/AppWrapper";
import ResetScroll from "./components/ResetScroll";
import SnackBar from "./components/SnackBar";
import { useDispatch, useSelector } from "react-redux";
import "react-profile/themes/dark.min.css";
import ReactProfile from "react-profile";
import {
  changeOnlineStatus,
  changeScreenSize,
  changeSnackBarState,
  setOpenEditor,
  setProfileImage,
  setTempProfileImage,
} from "./slices/commonSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { checkScreenSize } from "./constants/screenSizeConstants";

const App = () => {
  const tempProfileImage = useSelector(
    (state) => state.common.tempProfileImage
  );
  const openEditor = useSelector((state) => state.common.openEditor);
  const onlineStatus = useSelector((state) => state.common.onlineStatus);
  const screenSize = useSelector((state) => state.common.screenSize);
  const url = window.location.href;
  const dispatch = useDispatch();
  // Offline and online Navigator
  useEffect(() => {
    // console.log(navigator.onLine)
    const handleOnlineStatus = () => {
      dispatch(changeOnlineStatus(navigator.onLine));
      // console.log(onlineStatus);
      if (!navigator.onLine) {
        dispatch(
          changeSnackBarState({
            message: "You are offline",
            icon: "ri-wifi-off-line text-red-500",
            visible: true,
          })
        );
      } else {
        dispatch(
          changeSnackBarState({
            message: "Connection restored",
            icon: "fa-solid fa-wifi text-green-500",
            visible: true,
          })
        );
      }
    };

    // handle screenSize redux global State
    window.addEventListener("resize", () => {
      dispatch(changeScreenSize(checkScreenSize()));
    });

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    if (openEditor) {
      dispatch(setOpenEditor(false));
    }
  }, [url]);
  return (
    <>
      <AppWrapper key={12} />
      {/* Reset Scroll On Route Change so that if user has scroll on other page it is  reset on route change */}
      <ResetScroll key={2} />
      {/* SnackBar */}
      <SnackBar key={3} />
      {/* to create toast messages/snackbar  */}
      {/* dispatch(changeSnackBarState({ message: "Hello guys,I'm back",icon:"remix/FontAwesome icon class",visible:true })); */}
      {/* react Image Editor */}
      {openEditor && (
        <ReactProfile
          src={tempProfileImage}
          onDone={(imageObject) => {
            dispatch(setProfileImage(imageObject.getDataURL()));
            dispatch(setOpenEditor(false));
            // console.log(imageObject.getBlob()); // image blob
          }}
          onCancel={() => {
            dispatch(setTempProfileImage(null));
            dispatch(setOpenEditor(false));
          }}
        />
      )}
    </>
  );
};

export default App;
