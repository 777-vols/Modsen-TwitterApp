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
      state.tweetsArray = payload;
    },
    addTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray.push(payload);
    },
    deleteTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray = state.tweetsArray.filter((tweet) => tweet.id !== payload.id);
    },
    likeTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray.forEach((tweet) => {
        if (tweet.id === payload.id) {
          if (tweet.likes.includes(payload.author.id)) {
            tweet.likes = tweet.likes.filter((id) => id !== payload.author.id);
          } else {
            tweet.likes.push(payload.author.id);
          }
        }
      });
    }
  }
});

export const { addTweet, addAllTweets, deleteTweet, likeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
