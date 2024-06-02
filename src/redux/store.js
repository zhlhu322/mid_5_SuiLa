import { configureStore } from "@reduxjs/toolkit";
import likeReducer from './likeSlice';
import cartReducer from "./cartSlice";
import favoritesReducer from './favoritesSlice';
import profileReducer from './profileSlice';
import personalinfoReducer from './personalinfoSlice';
import shotReducer from "./shotSlice";

//persist
import { persistStore,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import payReducer from "./paySlice";

const persistConfig = {
    key:'root',
    storage:AsyncStorage
};

const store = configureStore({
    reducer:{
        like:persistReducer(persistConfig,likeReducer),
        favorites: persistReducer(persistConfig,favoritesReducer),
        cart: persistReducer(persistConfig,cartReducer),
        profile: persistReducer(persistConfig,profileReducer),
        pay: persistReducer(persistConfig,payReducer),
        personalinfo: persistReducer(persistConfig,personalinfoReducer),
        shot:persistReducer(persistConfig,shotReducer),
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware:(getDefaultMiddleware)=> 
    getDefaultMiddleware({
        serializableCheck:false,
    }),
});

persistStore(store);

export default store;