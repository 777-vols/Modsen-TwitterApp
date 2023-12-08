import { DocumentData, WithFieldValue } from 'firebase/firestore';

export interface IOptions {
  collectionName: string;
  id: string;
  document: WithFieldValue<DocumentData>;
}
