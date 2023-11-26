import { DocumentData, WithFieldValue } from 'firebase/firestore';

export interface IDocumentProps {
  collectionName: string;
  id: string;
  document: WithFieldValue<DocumentData>;
}

export interface IUpdateProps {
  collection: string;
  id: string;
  newDoc: WithFieldValue<DocumentData>;
}
