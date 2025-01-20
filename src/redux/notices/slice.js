import { createSlice } from "@reduxjs/toolkit";

import {
  notices,
  noticesCategories,
  noticesSex,
  noticesSpecies,
  noticesById,
  noticesFavoriteAddById,
  noticesFavoriteRemoveById,
} from "./operation";

const items = {
  pages: { page: null, perPage: null, totalPages: null },
  pagination: {},
  results: [],
  categories: [],
  sex: [],
  species: [],
  error: null,
  loading: false,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState: items,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(notices.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(notices.fulfilled, (state, action) => {
        console.log(action);

        state.pages.page = action.payload.page;
        state.pages.perPage = action.payload.perPage;
        state.pages.totalPages = action.payload.totalPages;
        state.results = action.payload.results;
        state.pagination = action.meta?.arg || {};
        state.error = null;
        state.loading = false;
      })
      .addCase(notices.rejected, (state, action) => {
        state.pages.page = null;
        state.pages.perPage = null;
        state.pages.totalPages = null;
        state.results = [];
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(noticesCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(noticesCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(noticesCategories.rejected, (state, action) => {
        state.categories = [];
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(noticesSex.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(noticesSex.fulfilled, (state, action) => {
        state.sex = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(noticesSex.rejected, (state, action) => {
        state.sex = [];
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(noticesSpecies.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(noticesSpecies.fulfilled, (state, action) => {
        state.species = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(noticesSpecies.rejected, (state, action) => {
        state.species = [];
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(noticesById.pending, (state, action) => {})
      .addCase(noticesById.fulfilled, (state, action) => {})
      .addCase(noticesById.rejected, (state, action) => {})
      .addCase(noticesFavoriteAddById.pending, (state, action) => {})
      .addCase(noticesFavoriteAddById.fulfilled, (state, action) => {})
      .addCase(noticesFavoriteAddById.rejected, (state, action) => {})
      .addCase(noticesFavoriteRemoveById.pending, (state, action) => {})
      .addCase(noticesFavoriteRemoveById.fulfilled, (state, action) => {})
      .addCase(noticesFavoriteRemoveById.rejected, (state, action) => {});
  },
});

const noticesReducer = noticesSlice.reducer;

export default noticesReducer;
