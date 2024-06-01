import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateCartItemSize:(state, action) =>{
      const { id, size } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.size = size;
      }
    }
  },
});

export const { addToCart, removeFromCart, updateCartItemSize } = cartSlice.actions;

export default cartSlice.reducer;
