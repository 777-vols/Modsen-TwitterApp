import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { ITweet } from '@/store/slices/tweetsSlice/types';

import { db } from './firebase';
import { IDocumentProps } from './types';

export const getFirebaseDoc = async (collectionName: string, prop: string) => {
  const docData = await getDoc(doc(db, collectionName, prop));

  if (docData.exists()) {
    return docData.data();
  }
  return false;
};

export const getAllFirebaseDocs = async (collectionName: string) => {
  const docData = await getDocs(collection(db, collectionName));

  const result: ITweet[] = [];

  docData.forEach((item) => {
    result.push(item.data() as ITweet);
  });

  return result;
};

export const setFirebaseDoc = async (options: IDocumentProps) => {
  const { collectionName, id, document } = options;
  await setDoc(doc(db, collectionName, id), document);
};
