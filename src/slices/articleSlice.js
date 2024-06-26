// all slices related to article will come here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editArticleVisibility: false,
  articleToEdit : [],
  createArticleVisibility: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setEditArticleVisibility: (state, action) => {
      state.editArticleVisibility = action.payload;
    },
    setArticleToEdit:(state,action)=>{
      state.articleToEdit = action.payload;
    },
    setCreateArticleVisibility:(state,action)=>{
      state.createArticleVisibility = action.payload;
    }
  },
});

export const {
  setEditArticleVisibility,
  setArticleToEdit,
  setCreateArticleVisibility,
} = articleSlice.actions;
export default articleSlice.reducer;
