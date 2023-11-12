import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { FieldErrors } from 'react-hook-form';

import { FirebaseCollections } from '@/api/firebase/constants';
import { auth, provider } from '@/api/firebase/firebase';
import { getFirebaseDoc, setFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import { ISighUpWithGoogleUser } from '@/pages/Home/types';
import { IFormProps } from '@/pages/LogIn/types';
import { ISighUpWithEmailUser, IUserFormData } from '@/pages/SignUp/types';
import { TypeSetIsNotificationActive } from '@/store/slices/errorSlice';
import { TypeAuthenticateUser } from '@/store/slices/userSlice';

const { usersCollection } = FirebaseCollections;

export const signUpWithGoogleHelper = async (
  authenticateUser: TypeAuthenticateUser,
  setIsNotificationActive: TypeSetIsNotificationActive
) => {
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
        photo: photoURL || '',
        email
      };

      await setFirebaseDoc({
        collectionName: usersCollection,
        document: newUser,
        id
      });
      authenticateUser(newUser);
    }
  } catch (error) {
    setIsNotificationActive({
      isActive: true,
      message: (error as Error).message
    });
  }
};

export const signUpWithEmailHelper = async (
  formUserData: ISighUpWithEmailUser,
  isValid: boolean,
  reset: () => void,
  errors: FieldErrors<IUserFormData>,
  setIsNotificationActive: TypeSetIsNotificationActive
) => {
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
    }
    if (isValid) {
      reset();
    }
  } catch (error) {
    setIsNotificationActive({
      isActive: true,
      message: errors.email?.message || errors.password?.message || (error as Error).message
    });
  }
};

export const logInHelper = async (
  formData: IFormProps,
  authenticateUser: TypeAuthenticateUser,
  setIsNotificationActive: TypeSetIsNotificationActive,
  errors: FieldErrors<IFormProps>
) => {
  const { email, password } = formData;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid: id } = user;

    const existedUser = (await getFirebaseDoc(usersCollection, id)) as ISighUpWithEmailUser | false;

    if (existedUser) {
      authenticateUser(existedUser);
    }
  } catch (error) {
    setIsNotificationActive({
      isActive: true,
      message: errors.email?.message || errors.password?.message || (error as Error).message
    });
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
