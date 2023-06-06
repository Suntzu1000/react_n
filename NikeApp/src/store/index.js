import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productSlice";
import { cartSlice } from "./cartSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    cart: cartSlice.reducer,
    api: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});
