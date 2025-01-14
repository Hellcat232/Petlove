import { createSlice } from "@reduxjs/toolkit";

import { getNews } from "./operation";

const items = {
  pages: { page: null, perPage: null, totalPages: null },
  results: [],
  keyword: "",
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState: items,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.pages.page = action.payload.page;
        state.pages.perPage = action.payload.perPage;
        state.pages.totalPages = action.payload.totalPages;
        state.results = action.payload.results;
        state.keyword = action.meta.arg.keyword || "pets";
        state.loading = false;
        state.error = null;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.pages.page = null;
        state.pages.perPage = null;
        state.pages.totalPages = null;
        state.results = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const newsReducer = newsSlice.reducer;

export default newsReducer;
