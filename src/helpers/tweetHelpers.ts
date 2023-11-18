import { v4 } from 'uuid';

import { FirebaseCollections } from '@/api/firebase/constants';
import { setFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import { ITweet } from '@/store/slices/tweetsSlice/types';

interface IOptions {
  tweetText: string;
  userId: string;
  userPhoto: string;
  userName: string;
  userEmail: string;
}

export const createNewTweetHelper = async (options: IOptions): Promise<ITweet> => {
  const { tweetText, userId, userPhoto, userName, userEmail } = options;
  const newTweet = {
    id: v4(),
    author: { id: userId, name: userName, email: userEmail, photo: userPhoto },
    text: tweetText,
    date: Date.now(),
    image: '',
    likes: []
  };

  await setFirebaseDoc({
    collectionName: FirebaseCollections.TWEETS_COLLECTION,
    id: newTweet.id,
    document: newTweet
  });

  return newTweet;
};
