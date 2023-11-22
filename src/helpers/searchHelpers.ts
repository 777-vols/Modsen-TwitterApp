import { collection, getDocs, query, where } from 'firebase/firestore';

import { FirebaseCollections } from '@/api/firebase/constants';
import { db } from '@/api/firebase/firebase';
import { IProps as ITweetItem } from '@/components/SearchTwitter/TweetItem/types';
import { IProps as IUserItem } from '@/components/SearchTwitter/UserItem/types';
import { IUser } from '@/pages/Profile/types';
import { ITweet } from '@/store/slices/tweetsSlice/types';

const { USERS_COLLECTION, TWEETS_COLLECTION } = FirebaseCollections;

export const comparePathHelper = (path1: string, path2: string) => path1 === path2;

export const searchTweetHelper = async (searchValue: string): Promise<ITweetItem[]> => {
  const q = query(
    collection(db, TWEETS_COLLECTION),
    where('text', '>=', searchValue),
    where('text', '<=', `${searchValue}\uf8ff`)
  );

  const querySnapshot = await getDocs(q);

  const tweetsArray = querySnapshot.docs.map((doc) => {
    const { id, text, date, author, image, likes } = doc.data() as ITweet;
    return {
      id,
      text,
      date,
      author,
      image,
      likes
    };
  });

  return tweetsArray;
};

export const searchUserHelper = async (searchValue: string): Promise<IUserItem[]> => {
  const q = query(
    collection(db, USERS_COLLECTION),
    where('name', '>=', searchValue),
    where('name', '<=', `${searchValue}\uf8ff`)
  );

  const querySnapshot = await getDocs(q);

  const usersArray = querySnapshot.docs.map((doc) => {
    const { id, name, email, photo } = doc.data() as IUser;
    return {
      id,
      name,
      email,
      photo
    };
  });

  return usersArray;
};
