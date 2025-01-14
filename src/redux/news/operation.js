import axios from "../../api/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk("get/news", async (data, thunkAPI) => {
  let { keyword = "pets", page = 1, perPage = 6 } = data || {};
  keyword = keyword || "pets";
  page = page || 1;
  perPage = perPage || 6;

  try {
    const res = await axios.get(
      `/news?keyword=${keyword}&page=${page}&limit=${perPage}`
    );

    if (!res || !res.data) {
      throw new Error("Invalid response from the server");
    }

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
