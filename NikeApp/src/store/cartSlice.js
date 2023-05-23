import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFree: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        // @ts-ignore
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        // @ts-ignore
        cartItem.quantity += 1;
      } else {
        // @ts-ignore
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      // @ts-ignore
      const { productId, amount } = action.payload;
      const cartItem = state.items.find(
        // @ts-ignore
        (item) => item.product.id === prodcutId
      );
      if (cartItem) {
        // @ts-ignore
        cartItem.quantity += amount;
      }

      // @ts-ignore
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item != cartItem);
      }
    },
  },
});

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );
