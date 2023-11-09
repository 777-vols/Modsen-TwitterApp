import { signInWithPopup } from 'firebase/auth';

import { FirebaseCollections } from '@/api/firebase/constants';
import { defaultUser } from '@/api/firebase/defaultDocuments';
import { auth, provider } from '@/api/firebase/firebase';
import { getFirebaseDoc, setFirebaseDoc } from '@/api/firebase/firebaseData';
import { IUser } from '@/pages/Home/types';
import { TypeAuthenticateUser } from '@/store/slices/userSlice';

const {
  defaultName,
  defaultSurname,
  defaultPhotoUrl,
  defaultPassword,
  defaultEmail,
  defaultPhoneNumber,
  defaultTelegram,
  defaultGender,
  defaultBirthDate
} = defaultUser;

export const getNewUserHelper = async (authenticateUser: TypeAuthenticateUser) => {
  const usersCollection = FirebaseCollections.users;

  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;

    const registeredUser = (await getFirebaseDoc(usersCollection, user.uid)) as IUser | false;

    const displayName = user.displayName?.split(' ');

    const id = user.uid;
    const name = displayName?.[0] || defaultName;
    const nameLowerCase = name.toLowerCase();
    const surname = displayName?.[1] || defaultSurname;
    const photo = user.photoURL || defaultPhotoUrl;
    const password = defaultPassword;
    const email = user.email ? user.email : defaultEmail;
    const phoneNumber = defaultPhoneNumber;
    const telegram = defaultTelegram;
    const gender = defaultGender;
    const birthDate = defaultBirthDate;

    const newUser: IUser = {
      id,
      name,
      nameLowerCase,
      surname,
      photo,
      password,
      email,
      phoneNumber,
      telegram,
      gender,
      birthDate
    };

    if (registeredUser) {
      authenticateUser(registeredUser);
    } else {
      await setFirebaseDoc({
        collectionName: 'users',
        document: newUser,
        id
      });
      authenticateUser(newUser);
    }
  } catch (err) {
    console.log(err);
  }
};
