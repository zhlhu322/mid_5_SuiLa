import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = { iconname : "cards-heart-outline" , favoriteItem : [] };

const likeSlice = createSlice({
   name: 'like',
   initialState,
   reducers: {
      toggleLike: (state) => {
         state.iconname = state.iconname === "cards-heart-outline" ? "cards-heart" : "cards-heart-outline"
      },
      setLike:(state,action)=>{
         state.iconname = action.payload;
      },
      addToFavorite(state, {payload}) {
         //id is the unique id of the item
         const {id} = payload;
   
         const find = state.find(item => item.id === id);
         if (find) {
           return state.map(item =>
             item.id === id
               ? {
                   ...item,
                   quantity: item.quantity + 1,
                 }
               : item,
           );
         } else {
           state.push({
             ...payload,
             quantity: 1,
           });
         }
      },
      removeItem: (state, action) => {
         //   console.log(state);
         //   console.log(state);
         //   console.log(action);
         const itemId = action.payload;
         return state.filter(item => item.id !== itemId);
       },
   },
});

// export state to global
export const selectLike = (state) => state.like.iconname;

// export actions to global
export const { toggleLike, setLike, addToFavorite, removeItem } = likeSlice.actions;

// export reducer to global
const likeReducer = likeSlice.reducer;
export default likeReducer;