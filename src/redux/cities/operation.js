import axios from "../../api/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchCities = createAsyncThunk(
  "search/city",
  async (word, thunkAPI) => {
    try {
      const res = await axios.get(`/cities/?keyword=${word}`);
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllLocations = createAsyncThunk(
  "city/location",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/cities/locations");
      // console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
