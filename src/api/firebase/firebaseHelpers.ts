import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  WithFieldValue
} from 'firebase/firestore';

import { ITweet } from '@/store/slices/tweetsSlice/types';

import { db } from './firebase';
import { IDocumentProps } from './types';

interface IUpdateProps {
  collection: string;
  id: string;
  newDoc: WithFieldValue<DocumentData>;
}

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

export const deleteFirebaseDoc = async (collectionName: string, prop: string) => {
  await deleteDoc(doc(db, collectionName, prop));
};

export const updateFirebaseDoc = async (options: IUpdateProps) => {
  const { collection: collectionName, newDoc, id } = options;
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, newDoc);
};

export const updateLikesInFirebaseDoc = async (
  collectionName: string,
  prop: string,
  newValue: string[]
) => {
  await updateDoc(doc(db, collectionName, prop), { likes: newValue });
};
