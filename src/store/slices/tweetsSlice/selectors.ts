import { TypeState } from '@/store/index';

export const allTweetsSelector = (state: TypeState) => state.tweets.tweetsArray;
