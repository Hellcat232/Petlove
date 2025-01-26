import { createSlice } from "@reduxjs/toolkit";

import {
  register,
  login,
  logout,
  currentUser,
  currentUserFullInfo,
  editUsers,
  addPets,
  deletePets,
} from "./operations";

const initialState = {
  user: { _id: null, name: null, email: null, avatar: null, phone: null },
  noticesViewed: [],
  noticesFavorites: [],
  pets: [],
  token: null,
  error: null,
  loading: false,
  isLogged: false,
  isRefreshing: false,
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
        state.isLogged = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.error = action.error.message;
        state.loading = false;
        state.isLogged = false;
      })
      .addCase(login.pending, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.loading = true;
        state.error = false;
        state.isLogged = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
        state.isLogged = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
      })
      .addCase(currentUser.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.isLogged = false;
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user._id = action.payload._id;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        // state.noticesFavorites = action.payload.noticesFavorites;
        state.loading = false;
        state.error = false;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.user._id = null;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.noticesFavorites = null;
        state.loading = false;
        state.error = action.error.message;
        state.isLogged = false;
        state.isRefreshing = false;
      })
      .addCase(currentUserFullInfo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUserFullInfo.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.isLogged = true;
        // state.user._id = action.payload._id;
        // state.user.name = action.payload.name;
        // state.user.email = action.payload.email;
        state.noticesFavorites = action.payload.noticesFavorites;
        state.noticesViewed = action.payload.noticesViewed;
        state.pets = action.payload.pets;
        state.user.avatar = action.payload.avatar;
        state.user.phone = action.payload.phone;
      })
      .addCase(currentUserFullInfo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.isLogged = false;
        state.noticesFavorites = null;
        state.noticesViewed = null;
        state.pets = null;
        state.user.avatar = null;
        state.user.phone = null;
      })
      .addCase(editUsers.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(editUsers.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.user._id = action.payload._id;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatar;
        state.user.phone = action.payload.phone;
        state.noticesFavorites = action.payload.noticesFavorites;
        state.noticesViewed = action.payload.noticesViewed;
        state.pets = action.payload.pets;
        // state.token = action.payload.token;
      })
      .addCase(editUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;

        state.user = { ...state.user };
        state.noticesFavorites = [...state.noticesFavorites];
        state.noticesViewed = [...state.noticesViewed];
        state.pets = [...state.pets];
        // state.token = action.payload.token;
      })
      .addCase(addPets.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addPets.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.pets = [...state.pets, action.payload.pets];
      })
      .addCase(addPets.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.pets = [...state.pets];
      })
      .addCase(deletePets.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deletePets.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.pets = state.pets.filter((_id) => action.payload._id !== _id);
      })
      .addCase(deletePets.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.isLogged = false;
        state.isRefreshing = false;
        state.token = null;
        state.noticesFavorites = [];
        state.noticesViewed = [];
        state.pets = [];
        state.user = initialState.user;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
