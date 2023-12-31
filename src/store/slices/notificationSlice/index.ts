import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessageObject } from './types';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isErrorActive: false,
    isSuccessActive: false,
    message: '',
    isLoading: false
  },
  reducers: {
    setErrorNotification(state, action: PayloadAction<IMessageObject>) {
      const { message } = action.payload;
      state.isSuccessActive = false;
      state.isErrorActive = true;
      state.message = message;
    },
    setSuccessNotification(state, action: PayloadAction<IMessageObject>) {
      const { message } = action.payload;
      state.isErrorActive = false;
      state.isSuccessActive = true;
      state.message = message;
    },
    setNotificationInactive(state) {
      state.isErrorActive = false;
      state.isSuccessActive = false;
      state.message = '';
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    }
  }
});

export const {
  setErrorNotification,
  setSuccessNotification,
  setNotificationInactive,
  setIsLoading
} = notificationSlice.actions;

export default notificationSlice.reducer;

export type TypeSetErrorNotification = typeof setErrorNotification;
export type TypeSetSuccessNotification = typeof setSuccessNotification;
