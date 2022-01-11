import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeAll: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    // removeProduct: (state, action) => {
    //   state.quantity -= 1;
    //   state.products = this.products.filter(action.payload);
    //   state.total -= action.payload.price * action.payload.quantity;
    // },

    ///
    removeProduct(state, action) {
      state.products.map((cartItem) => {
        if (cartItem._id === action.payload.id) {
          const nextCartItems = state.products.filter(
            (item) => item._id !== cartItem._id
          );
          state.quantity -= cartItem.quantity;
          state.products = nextCartItems;
        }
        return state;
      });
    },
    ///
  },
});

export const { addProduct, removeProduct, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
