// all reducers will be declared here
import { configureStore } from "@reduxjs/toolkit";
// adding all reducers from their slices
import commonReducer from "../slices/commonSlice";
import podcastReducer from "../slices/podcastSlice";
import articleReducer from "../slices/articleSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    podcast : podcastReducer,
    article : articleReducer,
  },
});
