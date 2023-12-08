import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  where
} from 'firebase/firestore';
import { useLayoutEffect } from 'react';

import { db, FirebaseCollections } from '@/api/firebase';
import { ITweet } from '@/store/slices/tweetsSlice/types';

import { useAction } from './useAction';

const { TWEETS_COLLECTION } = FirebaseCollections;

const numberOfTweetsInOneChunk = 3;

export const useGetUserTweets = (
  currentUserId: string,
  changeNoMoreTweets: (newValue: boolean) => void,
  changeNumberOfUserTweets: (newValue: number) => void
) => {
  const { setErrorNotification, setIsLoading, addLastDocumentInChunk, addAllTweets } = useAction();
  useLayoutEffect(() => {
    const fetchData = async () => {
      const coll = collection(db, TWEETS_COLLECTION);
      const snapshot = await getCountFromServer(
        query(coll, where('author.id', '==', currentUserId))
      );
      const resultArray: ITweet[] = [];
      setIsLoading(true);
      const allTweetsCount = snapshot.data().count;
      changeNumberOfUserTweets(allTweetsCount);

      const chunk = query(
        collection(db, TWEETS_COLLECTION),
        orderBy('author.id', 'asc'),
        where('author.id', '==', currentUserId),
        limit(numberOfTweetsInOneChunk)
      );

      if (chunk) {
        const documentSnapshots = await getDocs(chunk);
        if (documentSnapshots.size <= allTweetsCount) {
          documentSnapshots.forEach((item) => {
            resultArray.push(item.data() as ITweet);
          });
          const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
          addAllTweets(resultArray);
          addLastDocumentInChunk(lastVisible);
        }

        if (documentSnapshots.size >= allTweetsCount) {
          changeNoMoreTweets(true);
        }
      }

      setIsLoading(false);
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
    return () => {
      addAllTweets([]);
    };
  }, [currentUserId]);
};
