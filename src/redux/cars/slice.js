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
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        const existingId = state.items.map((item) => item.id);
        const newItems = payload.filter(
          (item) => !existingId.includes(item.id)
        );
        state.items.push(...newItems);

        if (payload.length < axios.defaults.params.limit) {
          state.isLastPage = true;
        } else {
          state.isLastPage = false;
        }
        state.isLoading = false;
      })
      .addCase(fetchCars.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setCurrentCar, setPage } = carsSlice.actions;
