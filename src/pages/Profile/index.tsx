import { signOut } from 'firebase/auth';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { auth } from '@/api/firebase/firebase';
import LeftMenu from '@/components/LeftMenu';
import { SmallAvatarImg, UserEmail } from '@/components/LeftMenu/styled';
import SearchTwitter from '@/components/SearchTwitter';
import { allImages } from '@/constants/allImages';
import { useAction } from '@/hooks/useAction';
import { TextLink } from '@/pages/Root/styled';
import { userSelector } from '@/store/slices/userSlice/selectors';

import {
  Banner,
  CreateTweet,
  Description,
  EditProfileButton,
  Following,
  FollowingInfo,
  Header,
  HeaderName,
  InputPanel,
  LogOutButton,
  Main,
  PanelImage,
  ProfileInfo,
  RightPart,
  SideBar,
  TweetInput,
  TweetsNumber,
  UserAvatar,
  UserInfo,
  UserName,
  WhatsHappening,
  Wrapper
} from './styled';
import { IUser } from './types';

const { profileBackground, addImg } = allImages;

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
        <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>
      </SideBar>

      <Main>
        <Header>
          <HeaderName>{name}</HeaderName>
          <TweetsNumber>1,070 Tweets</TweetsNumber>
        </Header>

        <Banner src={profileBackground} alt="profileBackground" />

        <ProfileInfo>
          <UserAvatar src={photo} alt="userAvatar" />
          <UserInfo>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
            <Description>
              UX&UI designer at <TextLink to="#">@abutechuz</TextLink>
            </Description>
          </UserInfo>
          <FollowingInfo>
            <Following>
              <b>67</b> Following
            </Following>
            <Following>
              <b>47</b> Followers
            </Following>
          </FollowingInfo>
          <EditProfileButton>Edit profile</EditProfileButton>
        </ProfileInfo>

        <WhatsHappening>
          <SmallAvatarImg src={photo} alt="userAvatar" />
          <InputPanel>
            <TweetInput placeholder="What's Happening" />
            <CreateTweet>Tweet</CreateTweet>
            <PanelImage src={addImg} alt="addImg" />
          </InputPanel>
        </WhatsHappening>
      </Main>

      <RightPart>
        <SearchTwitter />
      </RightPart>
    </Wrapper>
  );
};

export default Profile;
