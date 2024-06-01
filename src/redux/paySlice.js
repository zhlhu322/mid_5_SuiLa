import { createSlice } from '@reduxjs/toolkit';

export const paySlice = createSlice({
  name: 'pay',
  initialState: {
    items: []
  },
  reducers: {
    checktoPay: (state, action) => {
      const exists = state.items.some(item => item.title === action.payload.title);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removePay: (state, action) => {
      state.items = state.items.filter(item => item.title !== action.payload.title);
    }
  },
});

export const { checktoPay, removePay } = paySlice.actions;

export const selecttoPay = state => state.pay.items;

const payReducer = paySlice.reducer;
export default payReducer;