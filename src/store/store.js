import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/productSlice";
import productReducer from "../redux/productSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
