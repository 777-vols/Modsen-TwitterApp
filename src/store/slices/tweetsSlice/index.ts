import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

import { IinitialState, ITweet, LikeActionProps } from './types';

const initialState: IinitialState = {
  tweetsArray: [],
  lastDocument: undefined
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addAllTweets(state, { payload }: PayloadAction<ITweet[]>) {
      state.tweetsArray = payload;
    },
    addLastDocumentInChunk(
      state,
      { payload }: PayloadAction<QueryDocumentSnapshot<DocumentData> | undefined>
    ) {
      state.lastDocument = payload;
    },
    addChunkTweets(state, { payload }: PayloadAction<ITweet[]>) {
      state.tweetsArray = [...state.tweetsArray, ...payload];
    },
    addTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray.push(payload);
    },
    deleteTweet(state, { payload }: PayloadAction<ITweet>) {
      state.tweetsArray = state.tweetsArray.filter((tweet) => tweet.id !== payload.id);
    },
    likeTweet(state, { payload }: PayloadAction<LikeActionProps>) {
      const { tweetData, userId } = payload;
      const tweetItem = state.tweetsArray.find((item) => item.id === tweetData.id);
      if (tweetItem) {
        if (tweetItem.likes.includes(userId)) {
          tweetItem.likes = tweetItem.likes.filter((id) => id !== userId);
        } else {
          tweetItem.likes.push(userId);
        }
      }
    }
  }
});

export const {
  addTweet,
  addAllTweets,
  addChunkTweets,
  addLastDocumentInChunk,
  deleteTweet,
  likeTweet
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
