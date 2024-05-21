// all slices related to podcast will come here
import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/images/img1.jpg";
import despacito from "../assets/songs/despacito.mp3";

const initialState = {
  nowPlaying: {
    title: "Spiritual Awakening",
    artist: "Dr. Erin Fall Haskell",
    thumbnail: img1,
    duration: 50, //in minutes
    audio: despacito,
    category: "Exclusive",
    views: 787866,
    likes: 9882198,
    type: "playlist",
    tags: [
      "business",
      "knowledge",
      "experience",
      "business",
      "knowledge",
      "experience",
      "business",
      "business",
    ],
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis illum cum est explicabo voluptatem! Fuga facilis, hic sapiente suscipit praesentium architecto quo error, voluptate ducimus deserunt similique dolore iste expedita.",
    lyrics:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure animi possimus! Harum dolorum delectus cupiditate culpa maxime ut reprehenderit ab iusto, excepturi sequi quasi maiores, consequatur similique, quae eius.",
  },
  playbackState: {
    currentTime: 0,
    isPlaying: false,
  },
};

const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    setPlaybackState: (state, action) => {
      state.playbackState = { ...state.playbackState, ...action.payload };
      console.log(state.playbackState)
    },
  },
});

export const { setNowPlaying,setPlaybackState } = podcastSlice.actions;
export default podcastSlice.reducer;
