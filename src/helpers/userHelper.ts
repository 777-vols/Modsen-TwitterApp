import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { FieldErrors } from 'react-hook-form';

import { FirebaseCollections } from '@/api/firebase/constants';
import { auth, db, provider } from '@/api/firebase/firebase';
import { getFirebaseDoc, setFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import { IEditUserFormData } from '@/components/EditProfileModal/types';
import { ILoginFormData } from '@/pages/LogIn/types';
import { ISighUpWithGoogleUser } from '@/pages/Root/types';
import { ISighUpWithEmailUser, IUserFormData } from '@/pages/SignUp/types';
import { TypeSetErrorNotification } from '@/store/slices/notificationSlice';
import { TypeAuthenticateUser } from '@/store/slices/userSlice';

const { USERS_COLLECTION } = FirebaseCollections;

export const signUpWithGoogleHelper = async (
  authenticateUser: TypeAuthenticateUser,
  setErrorNotification: TypeSetErrorNotification
) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    const { uid: id, displayName, photoURL, email } = user;

    const registeredUser = (await getFirebaseDoc(USERS_COLLECTION, id)) as
      | ISighUpWithGoogleUser
      | false;

    if (registeredUser) {
      authenticateUser(registeredUser);
    } else {
      const newUser = {
        id,
        name: displayName,
        photo: photoURL || '',
        email
      };

      await setFirebaseDoc({
        collectionName: USERS_COLLECTION,
        document: newUser,
        id
      });
      authenticateUser(newUser as ISighUpWithGoogleUser);
    }
  } catch (error) {
    setErrorNotification({
      message: (error as Error).message
    });
  }
};

export const signUpWithEmailHelper = async (
  formUserData: ISighUpWithEmailUser,
  errors: FieldErrors<IUserFormData>,
  setErrorNotification: TypeSetErrorNotification
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
        collectionName: USERS_COLLECTION,
        document: newUser,
        id
      });
    }
  } catch (error) {
    setErrorNotification({
      message: errors.email?.message || errors.password?.message || (error as Error).message
    });
  }
};

export const logInHelper = async (
  formData: ILoginFormData,
  authenticateUser: TypeAuthenticateUser,
  setErrorNotification: TypeSetErrorNotification,
  errors: FieldErrors<ILoginFormData>
) => {
  const { email, password } = formData;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid: id } = user;

    const existedUser = (await getFirebaseDoc(USERS_COLLECTION, id)) as
      | ISighUpWithEmailUser
      | false;

    if (existedUser) {
      authenticateUser(existedUser);
    }
  } catch (error) {
    setErrorNotification({
      message: errors.email?.message || errors.password?.message || (error as Error).message
    });
  }
};

export const updateUserDataHelper = async (
  { password, ...otherProps }: IEditUserFormData,
  id: string
) => {
  const docRef = doc(db, USERS_COLLECTION, id);

  const user = auth.currentUser;
  const newUserData = { ...otherProps };

  await updateDoc(docRef, newUserData);
  if (password && user) {
    await updatePassword(user, password);
    await updateDoc(docRef, { password });
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
