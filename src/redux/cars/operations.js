import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66c76e61732bf1b79fa683e9.mockapi.io";
axios.defaults.params = { limit: 12 };

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { params: { page } });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
