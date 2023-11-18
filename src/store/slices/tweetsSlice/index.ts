import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IinitialState, ITweet } from './types';

const initialState: IinitialState = {
  tweetsArray: []
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addAllTweets(state, { payload }: PayloadAction<ITweet[]>) {
      state.tweetsArray = [...payload];
    },
    addTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray.push(payload);
    },
    deleteTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray = state.tweetsArray.filter((tweet) => tweet.id !== payload.id);
    }
  }
});

export const { addTweet, addAllTweets, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
