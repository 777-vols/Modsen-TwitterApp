import { Dispatch, SetStateAction } from 'react';

import { IUser } from '@/pages/Profile/types';
import { ITweet } from '@/store/slices/tweetsSlice/types';

export interface IProps {
  placeholder: string;
  searchData: (searchValue: string) => Promise<ITweet[] | IUser[]>;
  errorText: string;
  currentUserId?: string;
}

export type SetState<T> = Dispatch<SetStateAction<T>>;
