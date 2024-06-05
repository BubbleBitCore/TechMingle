// all slices related to podcast will come here
import { createSlice } from "@reduxjs/toolkit";
import { nowPlaying, contextList } from "../constants/podcastdata";
import AddToPlaylistModel from "../components/Podcast/AddToPlaylistModel";

const initialState = {
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  isRepeating: false,
  volume: 0.5,
  bufferedTime: 0,
  contextList: contextList,
  nowPlaying: nowPlaying,
  currentIdx: 0,
  addToPlayListVisibility: false,
  editPodcastVisibility: false,
  podcastToEdit : [],
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
    setBufferedTime: (state, action) => {
      state.bufferedTime = action.payload;
    },
    setAddToPlaylistVisibility: (state, action) => {
      state.addToPlayListVisibility = action.payload;
    },
    setEditPodcastVisibility: (state, action) => {
      state.editPodcastVisibility = action.payload;
    },
    setPodcastToEdit:(state,action)=>{
      state.podcastToEdit = action.payload;
    }
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
  setCurrentIdx,
  setBufferedTime,
  setAddToPlaylistVisibility,
  setEditPodcastVisibility,
  setPodcastToEdit,
} = podcastSlice.actions;
export default podcastSlice.reducer;
