import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { FirebaseCollections } from '@/api/firebase/constants';
import { db } from '@/api/firebase/firebase';
import { IUser } from '@/pages/Profile/types';
import { ITweet } from '@/store/slices/tweetsSlice/types';

const numberOfUsersInOneChunk = 5;

const { USERS_COLLECTION, TWEETS_COLLECTION } = FirebaseCollections;

export const comparePathHelper = (path1: string, path2: string) => path1 === path2;

export const searchTweetHelper = async (searchValue: string): Promise<ITweet[]> => {
  const data = query(
    collection(db, TWEETS_COLLECTION),
    where('text', '>=', searchValue),
    where('text', '<=', `${searchValue}\uf8ff`)
  );

  const querySnapshot = await getDocs(data);

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

export const searchUserHelper = async (searchValue: string): Promise<IUser[]> => {
  const data = query(
    collection(db, USERS_COLLECTION),
    where('name', '>=', searchValue),
    where('name', '<=', `${searchValue}\uf8ff`)
  );

  const querySnapshot = await getDocs(data);

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

export const searchRecommemdedUsersHelper = async (currentUserId: string): Promise<IUser[]> => {
  const data = query(collection(db, USERS_COLLECTION), limit(numberOfUsersInOneChunk));

  const querySnapshot = await getDocs(data);
  const usersArray: IUser[] = [];

  querySnapshot.docs.forEach((doc) => {
    const { id, name, email, photo } = doc.data() as IUser;
    if (id !== currentUserId) {
      usersArray.push({
        id,
        name,
        email,
        photo
      });
    }
  });

  return usersArray;
};
