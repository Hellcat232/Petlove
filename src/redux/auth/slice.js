import { createSlice } from "@reduxjs/toolkit";

import { register, login } from "./operations";

const initialState = {
  user: { name: null, email: null, password: null, token: null },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.user = initialState.user;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = initialState.user;
      })
      .addCase(login.pending, (state, action) => {
        state.user = initialState.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = initialState.user;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
