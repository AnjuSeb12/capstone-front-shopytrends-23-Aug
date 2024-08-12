import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // Add the cart data received from the backend to the Redux store
    addToCart: (state, action) => {
      console.log(action.payload.cartItems)
      const { cartItems } = action.payload;  // Expecting cartItems array from backend
      cartItems.forEach(item => {
        const existingItem = state.items.find((i) => i.product._id === item.product._id);
        if (existingItem) {
          existingItem.quantity += item.quantity;
          existingItem.totalPrice = existingItem.quantity * item.product.price;
        } else {
          state.items.push({
            ...item,
            totalPrice: item.quantity * item.product.price,
          });
        }
      });
    },

    // Update the quantity of an item in the cart
    updateCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.items.find((item) => item.product._id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
        cartItem.totalPrice = quantity * cartItem.product.price;
      }
    },

    // Remove an item from the cart
    removeFromCart: (state, action) => {
      const cartItemId = action.payload; // Change to cartItemId if necessary
      state.items = state.items.filter((item) => item._id !== cartItemId);
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
    setCart: (state, action) => {
      state.items = action.payload.cartItems || [];
    },

    // Set additional details for a cart item (e.g., updating product details)
    setItemDetails: (state, action) => {
      const { productId, details } = action.payload;
      const cartItem = state.items.find((item) => item.product._id === productId);
      if (cartItem) {
        cartItem.product = { ...cartItem.product, ...details };
      }
    },

  },
});

export const { addToCart, updateCart, removeFromCart, clearCart, setItemDetails ,setCart} = cartSlice.actions;
export default cartSlice.reducer;
