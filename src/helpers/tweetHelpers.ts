import { v4 } from 'uuid';

import { FirebaseCollections } from '@/api/firebase/constants';
import { setFirebaseDoc } from '@/api/firebase/firebaseHelpers';

interface IOptions {
  tweetText: string;
  userId: string;
  userPhoto: string;
  userName: string;
  userEmail: string;
}

export const createNewTweetHelper = async (options: IOptions) => {
  const { tweetText, userId, userPhoto, userName, userEmail } = options;
  const newTweet = {
    tweetId: v4(),
    author: { userId, userName, userEmail, userPhoto },
    text: tweetText,
    date: Date.now(),
    image: '',
    likes: []
  };

  await setFirebaseDoc({
    collectionName: FirebaseCollections.TWEETS_COLLECTION,
    id: newTweet.tweetId,
    document: newTweet
  });
  return newTweet;
};
