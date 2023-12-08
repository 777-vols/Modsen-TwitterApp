import { TypeState } from '@/store/index';

export const allTweetsSelector = (state: TypeState) => state.tweets.tweetsArray;
export const lastDocSelector = (state: TypeState) => state.tweets.lastDocument;
