import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    nickname: '',
    height: '秘密',
    weight: '秘密',
    birthday: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, action) => { state.name = action.payload; },
        setNickname: (state, action) => { state.nickname = action.payload; },
        setHeight: (state, action) => { state.height = action.payload; },
        setWeight: (state, action) => { state.weight = action.payload; },
        setBirthday: (state, action) => { state.birthday = action.payload; },
    },
});

export const { setName, setNickname, setHeight, setWeight, setBirthday } = profileSlice.actions;
export default profileSlice.reducer;
