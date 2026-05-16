import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productGet = createAsyncThunk("product/get", async () => {
  const request = await axios.get("http://localhost:3000/products");
  return request?.data;
});
export const productDelete = createAsyncThunk("product/delete", async (id) => {
  const request = await axios.delete(`http://localhost:3000/products/${id}`);
  return request?.data;
});
const Product = createSlice({
  name: "productSlice",
  initialState: {
    isLoading: false,
    isError: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productGet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.data = action.payload;
    });
    builder.addCase(productGet.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
      state.data = [];
    });
    builder.addCase(productGet.rejected, (state) => {
      state.isLoading = false;
      state.isError = "xato yuzaga keldi";
      state.data = [];
    });
  },
});
export default Product.reducer;
