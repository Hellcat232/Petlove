import axios from "../../api/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const notices = createAsyncThunk(
  "get/notices",
  async (data, thunkAPI) => {
    const queryParams = {
      keyword: data.keyword,
      category: data.category,
      species: data.species,
      locationId: data.locationId,
      byDate: data.byDate,
      byPrice: data.byPrice,
      byPopularity: data.byPopularity,
      page: data.page || 1,
      limit: data.limit || 6,
      sex: data.sex,
    };

    try {
      const res = await axios.get("/notices", { params: queryParams });
      //   console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesCategories = createAsyncThunk(
  "notices/categories",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/notices/categories");
      //   console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesSex = createAsyncThunk(
  "notices/sex",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/notices/sex");
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesSpecies = createAsyncThunk(
  "notices/species",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/notices/species");
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesById = createAsyncThunk(
  "notices/id",
  async (id, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    try {
      const res = await axios.get(`/notices/${id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesFavoriteAddById = createAsyncThunk(
  "notices/favorites/add",
  async (id, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    try {
      const res = await axios.post(`/notices/favorites/add/${id}`, _, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesFavoriteRemoveById = createAsyncThunk(
  "notices/favorites/remove",
  async (id, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    try {
      const res = await axios.delete(`/notices/favorites/remove/${id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
