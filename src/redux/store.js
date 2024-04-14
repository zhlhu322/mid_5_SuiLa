import { configureStore } from "@reduxjs/toolkit";
import likeReducer from './likeSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
    reducer:{
        like:likeReducer,
        favorites: favoritesReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;