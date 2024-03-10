import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Articles from "../pages/Articles";
import Books from "../pages/Books";
import Clubs from "../pages/Clubs";
import Gaming from "../pages/Gaming";
import TechFrenzy from "../pages/TechFrenzy";
import Podcasts from "../pages/Podcasts";
import Workshops from "../pages/Workshops";
import Jobs from "../pages/Jobs";
import PageNotFound from "../pages/PageNotFound";
import PodcastLanding from "../pages/PodcastLanding";
import { navigation } from "../constants/navigation";

const AppWrapper = () => {
  return (
    <>
      <div className="flex w-full h-full pt-4 pb-2">
        <div className="flex h-full sm:w-[20%] md:w-[15%] lg:w-[10%] xl:w-[8%] 2xl:w-[7%] max-sm:px-0 max-sm:hidden">
          <Navigation navigation={navigation} />
        </div>

        <div className="flex h-full w-full max-sm:px-0">
          {/* Everything will render/change here */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/books" element={<Books />} />
            <Route exact path="/gaming" element={<Gaming />} />
            <Route exact path="/tech-frenzy" element={<TechFrenzy />} />
            <Route
              exact
              path="/podcasts/landing"
              element={<PodcastLanding />}
            />
            <Route exact path="/podcasts" element={<Podcasts />} />
            <Route exact path="/workshops" element={<Workshops />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/clubs" element={<Clubs />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
