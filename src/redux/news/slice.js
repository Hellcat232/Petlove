import { createSlice } from "@reduxjs/toolkit";

import { getNews } from "./operation";

const items = { page: null, perPage: null, totalPages: null, results: null };

const newsSlice = createSlice({
  name: "news",
  initialState: items,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.page = null;
        state.perPage = null;
        state.totalPages = null;
        state.results = null;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.results = action.payload.results;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.page = null;
        state.perPage = null;
        state.totalPages = null;
        state.results = null;
      });
  },
});

const newsReducer = newsSlice.reducer;

export default newsReducer;
