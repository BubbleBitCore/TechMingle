import { AnimatePresence } from "framer-motion";
import AppWrapper from "./components/AppWrapper";
import ResetScroll from "./components/ResetScroll";
import SnackBar from "./components/SnackBar";

const App = () => {
  return (
    <>
    <AnimatePresence mode="wait">
      <AppWrapper />
      {/* Reset Scroll On Route Change so that if user has scroll on other page it is  reset on route change */}
      <ResetScroll />
      {/* SnackBar */}
      <SnackBar/>
      {/* to create toast messages/snackbar  */}
      {/* dispatch(changeSnackBarState({ message: "Hello guys,I'm back",icon:"remix/FontAwesome icon class",visible:true })); */}
      </AnimatePresence>
    </>
  );
};

export default App;
