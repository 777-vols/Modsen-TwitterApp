import { ITweet } from '@/store/slices/tweetsSlice/types';

export interface IProps {
  handleCloseModal: () => void;
  tweetData: ITweet;
}
