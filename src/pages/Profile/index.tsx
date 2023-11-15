import { signOut } from 'firebase/auth';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { auth } from '@/api/firebase/firebase';
import defaultUserPhoto from '@/assets/defaultUserPhoto.svg';
import LeftMenu from '@/components/LeftMenu';
import SearchTwitter from '@/components/SearchTwitter';
import { useAction } from '@/hooks/useAction';
import { userSelector } from '@/store/slices/userSlice/selectors';

import {
  CardEmail,
  CardImage,
  CardInfo,
  CardName,
  LogOutButton,
  Main,
  RightPart,
  SideBar,
  UserCard,
  Wrapper
} from './styled';
import { IUser } from './types';

const Profile: FC = () => {
  const currentUser = useSelector(userSelector) as IUser;
  const { deauthenticateUser } = useAction();
  const { photo, name, email } = currentUser;

  const handleLogOut = async () => {
    await signOut(auth);
    deauthenticateUser();
  };

  return (
    <Wrapper>
      <SideBar>
        <LeftMenu />
        <UserCard>
          <CardImage src={photo || defaultUserPhoto} />
          <CardInfo>
            <CardName>{name}</CardName>
            <CardEmail>{email}</CardEmail>
          </CardInfo>
        </UserCard>
        <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>
      </SideBar>

      <Main>main</Main>

      <RightPart>
        <SearchTwitter />
      </RightPart>
    </Wrapper>
  );
};

export default Profile;
