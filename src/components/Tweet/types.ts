import { ITweet } from '@/store/slices/tweetsSlice/types';

export interface IProps {
  tweetData: ITweet;
  currentUserId: string;
  isUserAuth?: boolean;
}
