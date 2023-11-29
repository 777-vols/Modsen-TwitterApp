import { IUser } from '@/pages/Profile/types';

export interface IProps {
  author: IUser;
  tweetId?: string;
  isUserSearch?: boolean;
}
