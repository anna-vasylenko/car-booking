import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import axios from "axios";

const initialState = {
  items: [],
  page: 1,
  isLoading: false,
  isError: null,
  isLastPage: true,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCurrentCar(state, { payload }) {
      state.currentCar = payload;
    },
    setPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.items = payload;
      if (payload.length < axios.defaults.params.limit) {
        state.isLastPage = true;
      } else {
        state.isLastPage = false;
      }
    });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setCurrentCar, setPage } = carsSlice.actions;
