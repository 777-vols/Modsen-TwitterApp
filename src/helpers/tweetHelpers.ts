import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';

import { FirebaseCollections } from '@/api/firebase/constants';
import { db, storage } from '@/api/firebase/firebase';
import { setFirebaseDoc, updateFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import { ITweet } from '@/store/slices/tweetsSlice/types';

import { IOptions, UploadFileOptions } from './types';

const { TWEETS_COLLECTION } = FirebaseCollections;

const uploadImage = (options: UploadFileOptions) => {
  const { collection, file, id } = options;
  const storageRef = ref(storage, id);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', null, null, async () => {
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    await updateFirebaseDoc({
      collectionName: collection,
      id,
      document: { image: downloadURL }
    });
  });
};

export const createNewTweetHelper = async (options: IOptions): Promise<ITweet> => {
  const { tweetText, userId, userPhoto, userName, userEmail, image } = options;
  const newTweet = {
    id: v4(),
    author: { id: userId, name: userName, email: userEmail, photo: userPhoto },
    text: tweetText,
    date: Date.now(),
    image: '',
    likes: []
  };

  if (image) {
    uploadImage({
      collection: TWEETS_COLLECTION,
      id: newTweet.id,
      file: image
    });

    const url = URL.createObjectURL(image);

    newTweet.image = url;
  }

  await setFirebaseDoc({
    collectionName: TWEETS_COLLECTION,
    id: newTweet.id,
    document: newTweet
  });

  return newTweet;
};

export const deleteTweetHelper = async (collectionName: string, prop: string, image: string) => {
  const desertRef = ref(storage, prop);

  await deleteDoc(doc(db, collectionName, prop));
  if (image) {
    await deleteObject(desertRef);
  }
};
