import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  mileage: {
    min: 0,
    max: 100000,
  },
  filterApplied: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSearchFilter(state, { payload }) {
      const { brand, price, mileage } = payload;
      state.brand = brand;
      state.price = price;
      state.mileage.min = mileage.min;
      state.mileage.max = mileage.max;
      state.filterApplied = true;
    },
    clearSearchFilter() {
      return initialState;
    },
  },
});

export const { changeSearchFilter, clearSearchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
