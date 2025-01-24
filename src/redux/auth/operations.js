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
    // console.log(auth);

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
  "user/fullinfo",
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    try {
      const res = await axios.get("/users/current/full", {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUsers = createAsyncThunk(
  "user/edit",
  async (data, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    console.log(data, "from editUser");

    try {
      const res = await axios.patch("/users/current/edit", data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPets = createAsyncThunk(
  "user/add/pets",
  async (data, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    try {
      const res = await axios.post("/users/current/pets/add", data, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePets = createAsyncThunk(
  "user/delete/pets",
  async (id, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    try {
      const res = await axios.delete(`/users/current/pets/remove/${id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  const { auth } = thunkAPI.getState();
  try {
    await axios.post("/users/signout", _, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
