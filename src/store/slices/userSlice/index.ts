import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { allImages } from '@/constants/allImages';
import { ISighUpWithGoogleUser } from '@/pages/Root/types';
import { ISighUpWithEmailUser } from '@/pages/SignUp/types';

const { defaultUserPhoto } = allImages;

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    currentUser: {}
  },
  reducers: {
    authenticateUser(
      state,
      { payload }: PayloadAction<ISighUpWithEmailUser | ISighUpWithGoogleUser>
    ) {
      state.isAuth = true;
      state.currentUser = { ...payload, photo: payload.photo || defaultUserPhoto };
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
