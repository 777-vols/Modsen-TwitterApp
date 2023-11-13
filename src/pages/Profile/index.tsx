import { signOut } from 'firebase/auth';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { auth } from '@/api/firebase/firebase';
import { useAction } from '@/hooks/useAction';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { LogOutButton, Wrapper } from './styled';

const Profile: FC = () => {
  const currentUser = useSelector(userSelector);
  const { deauthenticateUser } = useAction();

  const handleLogOut = async () => {
    await signOut(auth);
    deauthenticateUser();
  };

  return (
    <Wrapper>
      <h1> {JSON.stringify(currentUser)}</h1>
      <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>
    </Wrapper>
  );
};

export default Profile;
