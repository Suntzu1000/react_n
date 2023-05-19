import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productSlice";

export const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
  },
});
