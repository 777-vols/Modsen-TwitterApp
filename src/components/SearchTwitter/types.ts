import { Dispatch, SetStateAction } from 'react';

import { IProps as ITweetItem } from '@/components/SearchTwitter/TweetItem/types';
import { IProps as IUserItem } from '@/components/SearchTwitter/UserItem/types';

export interface IProps {
  placeholder: string;
  searchData: (searchValue: string) => Promise<ITweetItem[] | IUserItem[]>;
  errorText: string;
}

export type SetState<T> = Dispatch<SetStateAction<T>>;
