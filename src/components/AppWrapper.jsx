import { Routes, Route, useLocation,matchPath } from "react-router-dom";
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
import Settings from "../pages/Settings";
import Header from "./Header";
import { useSelector } from "react-redux";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Podcast from "../pages/Podcast";
import Profile from "../pages/Profile";
import Article from "../pages/Article";
import Test from "../pages/Test";
import { useRef, useState } from "react";
import GlobalAudioPlayer from "./Podcast/GlobalAudioPlayer";
import UserPodcasts from "../pages/UserPodcasts";
import UserArticles from "../pages/UserArticles";
import PodcastPlaylist from "../pages/PodcastPlaylist";

const AppWrapper = () => {
  const mode = useSelector((state) => state.common.mode);
  const location = useLocation();
  const player = useRef(null);
  return (
    <>
      {mode ? (
        <style>
          {`
          /*  pc styles here */
          @media (min-width: 650px) {
          *::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            /* Width of the scrollbar */
          }
        
          *::-webkit-scrollbar-track {
            background: transparent;
            /* Background color of the track */
            
          }
        
          *::-webkit-scrollbar-thumb {
            background: #444;
            /* Color of the scrollbar thumb */
            border-radius: 0px;
            /* Rounded corners for the thumb */
          }
        
          *::-webkit-scrollbar-thumb:hover {
            background: #666;
            /* Color of the thumb on hover */
          }
        }
    `}
        </style>
      ) : (
        <style>
          {`
          /*  pc styles here */
          @media (min-width: 650px) {
          *::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            /* Width of the scrollbar */
          }
        
          *::-webkit-scrollbar-track {
            background: transparent;
            /* Background color of the track */
            
          }
        
          *::-webkit-scrollbar-thumb {
            background: #E5E4E2;
            /* Color of the scrollbar thumb */
            border-radius: 0px;
            /* Rounded corners for the thumb */
          }
        
          *::-webkit-scrollbar-thumb:hover {
            background: #C0C0C0;
            /* Color of the thumb on hover */
          }
        }
    `}
        </style>
      )}
      <div
        className={`flex w-full h-full overflow-y-auto pt-4 pb-2 ${
          mode ? "bg-[#0B0D10]" : "bg-white"
        } transition-all duration-500`}
      >
        <div className="flex h-full sm:w-[20%] md:w-[15%] lg:w-[10%] xl:w-[8%] 2xl:w-[7%] max-sm:px-0 max-sm:hidden">
          <Navigation navigation={navigation} />
        </div>

        <div className="flex h-full w-full max-sm:px-0">
          {/* Everything will render/change here */}
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home Header={Header} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route
              exact
              path="/articles"
              element={<Articles Header={Header} />}
            />
            <Route
              exact
              path="/article/:id"
              element={<Article Header={Header} />}
            />
            <Route exact path="/books" element={<Books Header={Header} />} />
            <Route exact path="/gaming" element={<Gaming Header={Header} />} />
            <Route
              exact
              path="/techFrenzy"
              element={<TechFrenzy Header={Header} />}
            />
            <Route
              exact
              path="/podcasts/landing"
              element={<PodcastLanding Header={Header} />}
            />
            <Route
              exact
              path="/podcasts"
              element={<Podcasts Header={Header} player={player} />}
            />
            <Route
              exact
              path="/podcast/:id"
              element={<Podcast Header={Header} player={player} />}
            />
            <Route
              exact
              path="/podcastplaylist/:id"
              element={<PodcastPlaylist Header={Header}/>}
            />
            <Route
              exact
              path="/workshops"
              element={<Workshops Header={Header} />}
            />
            <Route exact path="/jobs" element={<Jobs Header={Header} />} />
            <Route exact path="/clubs" element={<Clubs Header={Header} />} />
            <Route
              exact
              path="/resetpassword/:id/:token"
              element={<ResetPassword />}
            />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              exact
              path="/settings"
              element={<Settings Header={Header} />}
            />
            <Route
              exact
              path="/profile"
              element={<Profile Header={Header} />}
            />
            <Route
              exact
              path="/:id/podcasts"
              element={<UserPodcasts Header={Header} />}
            />
            <Route
              exact
              path="/:id/articles"
              element={<UserArticles Header={Header} />}
            />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
      {(location.pathname === "/podcasts" || matchPath("/podcast/:id", location.pathname)) && (
        <GlobalAudioPlayer audioRef={player} />
      )}
    </>
  );
};

export default AppWrapper;
