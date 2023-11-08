import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type TypeState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
