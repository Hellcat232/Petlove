import axios from "../../api/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk("get/news", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/news");

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
