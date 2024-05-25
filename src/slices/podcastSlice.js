// all slices related to podcast will come here
import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import song from "../assets/songs/random.mp3";
import despacito from "../assets/songs/despacito.mp3";

const initialState = {
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  isRepeating: false,
  volume: 0.5,
  contextList: [
    {
      id:1,
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
    {
      id:2,
      title: "Good Life project abcdefg",
      artist: "Elizabeth",
      thumbnail: img2,
      duration: 50, //in minutes
      audio: song,
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
  ],
  nowPlaying: {
    id:1,
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
  currentIdx: 0,
};

const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIsRepeating: (state, action) => {
      state.isRepeating = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setContextList: (state, action) => {
      state.contextList = action.payload;
    },
    setCurrentIdx: (state, action) => {
      state.currentIdx = action.payload;
    },
  },
});

export const {
  setNowPlaying,
  setCurrentTime,
  setDuration,
  setIsPlaying,
  setIsRepeating,
  setVolume,
  setContextList,
  setCurrentIdx
} = podcastSlice.actions;
export default podcastSlice.reducer;
