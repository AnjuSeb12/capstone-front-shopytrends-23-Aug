import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {


    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.product._id === item.product._id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.product.price;
      } else {
        state.items.push({
          ...item,
          totalPrice: item.quantity * item.product.price,
        });
      }
    },


    updateCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.items.find((item) => item.product._id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
        cartItem.totalPrice = quantity * cartItem.product.price;
      }
    },


    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.product._id !== productId);
    },


    clearCart: (state) => {
      state.items = [];
    },


    setItemDetails: (state, action) => {
      const { productId, details } = action.payload;
      const cartItem = state.items.find((item) => item.product._id === productId);
      if (cartItem) {
        cartItem.product = { ...cartItem.product, ...details };
      }
  },

}
});

export const { addToCart, updateCart, removeFromCart, clearCart,setItemDetails } = cartSlice.actions;
export default cartSlice.reducer;
