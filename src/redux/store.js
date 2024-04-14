import { configureStore } from "@reduxjs/toolkit";
import likeReducer from './likeSlice';
import favoritesReducer from './favoritesSlice';

//persist
import { persistStore,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key:'root',
    storage:AsyncStorage
};

const store = configureStore({
    reducer:{
        like:persistReducer(persistConfig,likeReducer),
        favorites: persistReducer(persistConfig,favoritesReducer)
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware:(getDefaultMiddleware)=> 
    getDefaultMiddleware({
        serializableCheck:false,
    }),
});

persistStore(store);

export default store;