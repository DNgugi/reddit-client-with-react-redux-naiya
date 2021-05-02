import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    console.log(json);
    //return json;
  }
);

// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     categories: [],
//     isLoadingCategories: false,
//     failedToLoadCategories: false,
//   },
//   extraReducers: {
//     ["loadCategories.pending"]: (state, action) => {
//       state.isLoadingCategories = true;
//       state.failedToLoadCategories = false;
//     },
//     ["loadCategories.fulfilled"]: (state, action) => {},

//     ["loadCategories.rejected"]: (state, action) => {
//       state.isLoadingCategories = false;
//       state.failedToLoadCategories = true;
//     },
//   },
// });
