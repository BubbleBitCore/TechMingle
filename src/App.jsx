import AppWrapper from "./components/AppWrapper";
import ResetScroll from "./components/ResetScroll";

const App = () => {
  return (
    <>
      <AppWrapper />
      {/* Reset Scroll On Route Change so that if user has scroll on other page it is  reset on route change */}
      <ResetScroll />
    </>
  );
};

export default App;
