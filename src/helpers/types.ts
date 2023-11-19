import { FirebaseCollections } from '@/api/firebase/constants';

type TImage = Blob | Uint8Array | ArrayBuffer;

export interface UploadFileProps {
  file: TImage;
  id: string;
  collection: FirebaseCollections;
}

export interface IOptions {
  tweetText: string;
  userId: string;
  userPhoto: string;
  userName: string;
  userEmail: string;
  image?: File;
}
