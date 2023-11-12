import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from './firebase';
import { IDocumentProps } from './types';

export const getFirebaseDoc = async (collection: string, prop: string) => {
  const docData = await getDoc(doc(db, collection, prop));

  if (docData.exists()) {
    return docData.data();
  }
  return false;
};

export const setFirebaseDoc = async (options: IDocumentProps) => {
  const { collectionName, id, document } = options;
  await setDoc(doc(db, collectionName, id), document);
};
