import { AnimatePresence } from "framer-motion";
import AppWrapper from "./components/AppWrapper";
import ResetScroll from "./components/ResetScroll";
import SnackBar from "./components/SnackBar";
import { useDispatch, useSelector } from "react-redux";
import "react-profile/themes/dark.min.css";
import ReactProfile from "react-profile";
import {
  setOpenEditor,
  setProfileImage,
  setTempProfileImage,
} from "./slices/commonSlice";

const App = () => {
  const tempProfileImage = useSelector((state) => state.common.tempProfileImage);
  const openEditor = useSelector((state) => state.common.openEditor);
  const dispatch = useDispatch();
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
