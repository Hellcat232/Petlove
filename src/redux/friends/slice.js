import { createSlice } from "@reduxjs/toolkit";

import { getFriends } from "./operation";

const item = {
  results: [],
  loading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState: item,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.results = [];
      });
  },
});

const friendsReducer = friendsSlice.reducer;

export default friendsReducer;
