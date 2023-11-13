import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessageObject } from './types';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    isActive: false,
    message: ''
  },
  reducers: {
    setIsNotificationActive(state, action: PayloadAction<IMessageObject>) {
      const { isActive, message } = action.payload;
      state.isActive = isActive;
      state.message = message;
    },
    setIsNotificationInactive(state) {
      state.isActive = false;
      state.message = '';
    }
  }
});

export const { setIsNotificationActive, setIsNotificationInactive } = errorSlice.actions;
export type TypeSetIsNotificationActive = typeof setIsNotificationActive;
export default errorSlice.reducer;
