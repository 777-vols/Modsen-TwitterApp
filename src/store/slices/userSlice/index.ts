import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IEditUserFormData } from '@/components/EditProfileModal/types';
import { ISighUpWithGoogleUser } from '@/pages/Root/types';
import { ISighUpWithEmailUser } from '@/pages/SignUp/types';

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
      state.currentUser = { ...payload };
    },
    updateUserData(state, { payload }: PayloadAction<IEditUserFormData>) {
      state.currentUser = { ...state.currentUser, ...payload };
    },
    deauthenticateUser(state) {
      state.isAuth = false;
      state.currentUser = {};
    }
  }
});

export const { authenticateUser, deauthenticateUser, updateUserData } = userSlice.actions;

export default userSlice.reducer;

export type TypeAuthenticateUser = typeof authenticateUser;
