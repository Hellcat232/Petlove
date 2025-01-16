import axios from "../../api/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", data);
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    const res = await axios.post("/users/signin", data);
    console.log(res);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    console.log(auth);

    try {
      const res = await axios.get("/users/current", {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUserFullInfo = createAsyncThunk(
  "user/current/full",
  async (data, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
