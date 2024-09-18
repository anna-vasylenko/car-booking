import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  mileage: {
    min: 0,
    max: 100000,
  },
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
    },
  },
});

export const { changeSearchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
