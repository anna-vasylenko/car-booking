import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: "",
  rentalPrice: "",
  mileage: {
    min: 0,
    max: 100000,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      const { make, rentalPrice, mileage } = action.payload;
      state.make = make;
      state.rentalPrice = rentalPrice;
      state.mileage = mileage;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
