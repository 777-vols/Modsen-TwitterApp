import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false
  },
  reducers: {
    authenticateUser(state) {
      state.isAuth = true;
    },
    deauthenticateUser(state) {
      state.isAuth = false;
    }
  }
});

export const { authenticateUser, deauthenticateUser } = userSlice.actions;
export default userSlice.reducer;
