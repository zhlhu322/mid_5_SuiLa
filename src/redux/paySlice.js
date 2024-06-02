import { createSlice } from '@reduxjs/toolkit';

export const paySlice = createSlice({
  name: 'pay',
  initialState: {
    selecteditems: []
  },
  reducers: {
    setSelectedItems: (state, action) => {
      state.selecteditems = action.payload;
    },
  },
});

export const { setSelectedItems } = paySlice.actions;

export const selectitems = state => state.pay.selecteditems;

const payReducer = paySlice.reducer;
export default payReducer;