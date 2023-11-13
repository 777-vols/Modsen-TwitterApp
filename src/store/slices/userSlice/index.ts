import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISighUpWithGoogleUser } from '@/pages/Home/types';
import { ISighUpWithEmailUser } from '@/pages/SignUp/types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    currentUser: {}
  },
  reducers: {
    authenticateUser(state, action: PayloadAction<ISighUpWithEmailUser | ISighUpWithGoogleUser>) {
      state.isAuth = true;
      state.currentUser = action.payload;
    },
    deauthenticateUser(state) {
      state.isAuth = false;
      state.currentUser = {};
    }
  }
});

export const { authenticateUser, deauthenticateUser } = userSlice.actions;
export default userSlice.reducer;

export type TypeAuthenticateUser = typeof authenticateUser;
