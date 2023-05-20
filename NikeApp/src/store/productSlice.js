import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
import { useSelector } from "react-redux";

const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setselectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(p => p.id === productId)
    },
  },
});
