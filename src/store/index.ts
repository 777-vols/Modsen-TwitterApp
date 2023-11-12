import { configureStore } from '@reduxjs/toolkit';

import errorSlice from './slices/errorSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    error: errorSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type TypeState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
