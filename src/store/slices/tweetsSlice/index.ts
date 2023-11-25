import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IinitialState, ITweet } from './types';

interface LikeActionProps {
  userId: string;
  tweetData: ITweet;
}

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
    likeTweet(state, { payload }: PayloadAction<LikeActionProps>) {
      const { tweetData, userId } = payload;
      state.tweetsArray.forEach((tweetItem) => {
        if (tweetItem.id === tweetData.id) {
          if (tweetItem.likes.includes(userId)) {
            tweetItem.likes = tweetItem.likes.filter((id) => id !== userId);
          } else {
            tweetItem.likes.push(userId);
          }
        }
      });
    }
  }
});

export const { addTweet, addAllTweets, deleteTweet, likeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
