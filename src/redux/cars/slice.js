import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, fetchCars } from "./operations";
import axios from "axios";
import { handleFulFilled, handlePending, handleRejected } from "../handlers";

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
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLastPage = true;
      })
      .addCase(fetchCars.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      })
      .addMatcher(({ type }) => type.endsWith("fulfilled"), handleFulFilled)
      .addMatcher(({ type }) => type.endsWith("pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("rejected"), handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
export const { setCurrentCar, setPage } = carsSlice.actions;
