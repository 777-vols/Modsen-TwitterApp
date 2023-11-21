import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import notificationSlice from './slices/notificationSlice';
import tweetsSlice from './slices/tweetsSlice';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['notification']
};

const rootReducer = combineReducers({
  user: userSlice,
  notification: notificationSlice,
  tweets: tweetsSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);

export type TypeState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
