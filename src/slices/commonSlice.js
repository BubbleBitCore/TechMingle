import { createSlice } from "@reduxjs/toolkit";

// This slice contain all app related slices which are coomonn to whole app
const checkSystemMode = () => {
  if (localStorage.getItem("mode") === null) {
    localStorage.setItem(
      "mode",
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  if (localStorage.getItem("mode") === "true") {
    return true;
  } else {
    return false;
  }
};

const initialState = {
  mode: checkSystemMode(), // false means Light mode , true means Dark Mode
  snackBar: {
    message: "",
    icon: "",
    visible: false,
  },
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeMode: (state, action) => {
      localStorage.setItem("mode", action.payload);
      state.mode = action.payload;
    },
    changeSnackBarState: (state, action) => {
      state.snackBar = action.payload;
    },
  },
});

export const { changeMode, changeSnackBarState } = commonSlice.actions;

export default commonSlice.reducer;
