import axios from "../../api/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFriends = createAsyncThunk(
  "get/friends",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/friends");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
