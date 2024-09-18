import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66c76e61732bf1b79fa683e9.mockapi.io";
axios.defaults.params = { limit: 12 };

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { params: { page } });
      return data;
    } catch (error) {
      toast.error("Unable to load cars at the moment. Please try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
