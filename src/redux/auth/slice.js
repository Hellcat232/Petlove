import { createSlice } from "@reduxjs/toolkit";

import { register, login } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.error = null;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.error = null;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(login.pending, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
