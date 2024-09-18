import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorites.unshift(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
