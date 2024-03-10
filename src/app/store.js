// all reducers will be declared here
import { configureStore } from "@reduxjs/toolkit";
// adding all reducers from their slices
import commonReducer from "../slices/commonSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});
