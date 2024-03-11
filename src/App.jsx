import { AnimatePresence } from "framer-motion";
import AppWrapper from "./components/AppWrapper";
import ResetScroll from "./components/ResetScroll";
import SnackBar from "./components/SnackBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeMode } from "./slices/commonSlice";

const App = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <AppWrapper key={12} />
        {/* Reset Scroll On Route Change so that if user has scroll on other page it is  reset on route change */}
        <ResetScroll key={2} />
        {/* SnackBar */}
        <SnackBar key={3} />
        {/* to create toast messages/snackbar  */}
        {/* dispatch(changeSnackBarState({ message: "Hello guys,I'm back",icon:"remix/FontAwesome icon class",visible:true })); */}
      </AnimatePresence>
    </>
  );
};

export default App;
