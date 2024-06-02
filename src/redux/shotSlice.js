import { createSlice } from '@reduxjs/toolkit';

const shotSlice = createSlice({
  name: 'shot',
  initialState: {
    uri: null,
  },
  reducers: {
    setImageUri: (state, action) => {
      state.uri = action.payload;
    },
    removeImageUri: (state) => {
      state.uri = null;
    },
  },
});

export const { setImageUri, removeImageUri } = shotSlice.actions;
export default shotSlice.reducer;
