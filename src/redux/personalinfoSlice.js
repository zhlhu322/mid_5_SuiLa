import { createSlice } from '@reduxjs/toolkit';

const personalinfoSlice = createSlice({
  name: 'personalinfo',
  initialState: {
    name: '',
    nickname: '',
    height: '秘密',
    weight: '秘密',
    birthday: '',
  },
  reducers: {
    setPersonalinfo: (state, action) => {
      const { name, nickname, height, weight, birthday } = action.payload;
      state.name = name;
      state.nickname = nickname;
      state.height = height;
      state.weight = weight;
      state.birthday = birthday;
    },
  },
});

export const { setPersonalinfo, selectPersonalinfo } = personalinfoSlice.actions;
export default personalinfoSlice.reducer;
