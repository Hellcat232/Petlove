import { createSlice } from "@reduxjs/toolkit";
import { searchCities, getAllLocations } from "./operation";

const initialState = {
  city: [],
  locations: [],
  error: null,
  loading: false,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchCities.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(searchCities.fulfilled, (state, action) => {
        // console.log(action);
        state.city = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(searchCities.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getAllLocations.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllLocations.fulfilled, (state, action) => {
        console.log(action);

        state.locations = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getAllLocations.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

const citiesReducer = citiesSlice.reducer;

export default citiesReducer;
