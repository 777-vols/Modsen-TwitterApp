import { collection, getCountFromServer, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useLayoutEffect } from 'react';

import { db, FirebaseCollections } from '@/api/firebase';
import { ITweet } from '@/store/slices/tweetsSlice/types';

import { useAction } from './useAction';

const { TWEETS_COLLECTION } = FirebaseCollections;

const numberOfTweetsInOneChunk = 3;

export const useGetAllTweets = (changeNoMoreTweets: (newValue: boolean) => void) => {
  const { setErrorNotification, setIsLoading, addLastDocumentInChunk, addAllTweets } = useAction();
  useLayoutEffect(() => {
    const fetchData = async () => {
      const coll = collection(db, TWEETS_COLLECTION);
      const snapshot = await getCountFromServer(coll);
      const resultArray: ITweet[] = [];
      setIsLoading(true);
      const allTweetsCount = snapshot.data().count;

      const chunk = query(
        collection(db, TWEETS_COLLECTION),
        orderBy('id', 'asc'),
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
  }, []);
};
