import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { FirebaseCollections } from '@/api/firebase/constants';
import { defaultUser } from '@/api/firebase/defaultDocuments';
import { auth, provider } from '@/api/firebase/firebase';
import { getFirebaseDoc, setFirebaseDoc } from '@/api/firebase/firebaseData';
import { ISighUpWithGoogleUser } from '@/pages/Home/types';
import { ISighUpWithEmailUser, IUserFormData } from '@/pages/SignUp/types';
import { TypeAuthenticateUser } from '@/store/slices/userSlice';

const { defaultPhotoUrl } = defaultUser;

export const signUpWithGoogleHelper = async (authenticateUser: TypeAuthenticateUser) => {
  const usersCollection = FirebaseCollections.users;

  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    const { uid: id, displayName, photoURL, email } = user;

    const registeredUser = (await getFirebaseDoc(usersCollection, id)) as
      | ISighUpWithGoogleUser
      | false;

    if (registeredUser) {
      authenticateUser(registeredUser);
    } else {
      const newUser: ISighUpWithGoogleUser = {
        id,
        name: displayName,
        photo: photoURL || defaultPhotoUrl,
        email
      };

      await setFirebaseDoc({
        collectionName: usersCollection,
        document: newUser,
        id
      });
      authenticateUser(newUser);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signUpWithEmailHelper = async (
  formUserData: ISighUpWithEmailUser,
  isValid: boolean,
  reset: () => void
) => {
  const usersCollection = FirebaseCollections.users;
  const { name, email, password, phoneNumber, birthDate } = formUserData;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      formUserData.email,
      formUserData.password
    );
    const id = user.uid;

    if (user) {
      const newUser: ISighUpWithEmailUser = {
        id,
        name,
        password,
        phoneNumber,
        email,
        birthDate
      };

      await setFirebaseDoc({
        collectionName: usersCollection,
        document: newUser,
        id
      });

      // authenticateUser(newUser);
    }
    if (isValid) {
      reset();
    }
  } catch (err) {
    console.log(err);
  }
};

export const convertBirthDate = (userFormData: IUserFormData): ISighUpWithEmailUser => {
  const { id, name, password, phoneNumber, email, year, month, day } = userFormData;
  return {
    id,
    name,
    password,
    phoneNumber,
    email,
    birthDate: new Date(Number(year), Number(month), Number(day))
  };
};
