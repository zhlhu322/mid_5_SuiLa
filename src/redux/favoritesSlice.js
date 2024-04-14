import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: []
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.some(item => item.title === action.payload.title);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.title !== action.payload.title);
    }
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = state => state.favorites.items;

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
