import { TypeState } from '@/store/index';

export const tweetsSelector = (state: TypeState) => state.tweets.tweetsArray;
