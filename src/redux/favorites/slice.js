import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
