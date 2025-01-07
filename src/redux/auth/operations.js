import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
  console.log("React app is not defined");
}
// console.log(API_URL);

axios.defaults.baseURL = API_URL;

export const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    const res = await axios.post("/users/signin", data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  "user/current",
  async (data, thunkAPI) => {}
);

export const currentUserFullInfo = createAsyncThunk(
  "user/current/full",
  async (data, thunkAPI) => {}
);

export const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {}
);
