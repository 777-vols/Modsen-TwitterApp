import { IUser } from '@/pages/Profile/types';

export interface ITweet {
  id: string;
  author: IUser;
  text: string;
  date: number;
  image: string;
  likes: IUser[];
}

export interface IinitialState {
  tweetsArray: ITweet[];
}
