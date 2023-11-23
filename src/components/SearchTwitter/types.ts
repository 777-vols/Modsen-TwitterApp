import { Dispatch, SetStateAction } from 'react';

import { IProps as IUserItem } from '@/components/SearchTwitter/SearchItem/types';
import { ITweet } from '@/store/slices/tweetsSlice/types';

export interface IProps {
  placeholder: string;
  searchData: (searchValue: string) => Promise<ITweet[] | IUserItem[]>;
  errorText: string;
}

export type SetState<T> = Dispatch<SetStateAction<T>>;
