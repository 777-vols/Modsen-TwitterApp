import { signOut } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FirebaseCollections } from '@/api/firebase/constants';
import { auth } from '@/api/firebase/firebase';
import { getAllFirebaseDocs } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import LeftMenu from '@/components/LeftMenu';
import { UserEmail } from '@/components/LeftMenu/styled';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants/allImages';
import { useAction } from '@/hooks/useAction';
import { TextLink } from '@/pages/Root/styled';
import { tweetsSelector } from '@/store/slices/tweetsSlice/selectors';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  Banner,
  Description,
  EditProfileButton,
  Following,
  FollowingInfo,
  Header,
  LogOutButton,
  Main,
  Name,
  ProfileInfo,
  RightPart,
  SideBar,
  TweetsBlockHeader,
  TweetsNumber,
  UserAvatar,
  UserInfo,
  UserName,
  Wrapper
} from './styled';
import { IUser } from './types';

const { profileBackground } = allImages;

const { TWEETS_COLLECTION } = FirebaseCollections;

const Profile: FC = () => {
  const currentUser = useSelector(userSelector) as IUser;
  const tweetsArray = useSelector(tweetsSelector);
  const { deauthenticateUser, addAllTweets, setIsNotificationActive } = useAction();

  useEffect(() => {
    const fetchData = async () => {
      const allTweets: ITweet[] = await getAllFirebaseDocs(TWEETS_COLLECTION);
      addAllTweets(allTweets);
    };
    fetchData().catch((error: Error) => {
      setIsNotificationActive({
        isActive: true,
        message: error.message
      });
    });
  }, []);

  const handleLogOut = async () => {
    await signOut(auth);
    deauthenticateUser();
  };

  const { id: currentUserId, photo, name, email } = currentUser;

  const { logOut, tweets, following, followers, editProfile } = config;

  return (
    <Wrapper>
      <SideBar>
        <LeftMenu />
        <LogOutButton onClick={handleLogOut}>{logOut}</LogOutButton>
      </SideBar>

      <Main>
        <Header>
          <UserName>{name}</UserName>
          <TweetsNumber>
            {tweetsArray.length} {tweets}
          </TweetsNumber>
        </Header>

        <Banner src={profileBackground} alt="profile banner" />

        <ProfileInfo>
          <UserAvatar src={photo} alt="user avatar" />
          <UserInfo>
            <Name>{name}</Name>
            <UserEmail>{email}</UserEmail>
            <Description>
              UX&UI designer at <TextLink to="#">@abutechuz</TextLink>
            </Description>
          </UserInfo>
          <FollowingInfo>
            <Following>
              <b>67</b> {following}
            </Following>
            <Following>
              <b>47</b> {followers}
            </Following>
          </FollowingInfo>
          <EditProfileButton>{editProfile}</EditProfileButton>
        </ProfileInfo>

        <CreateTweet user={currentUser} />

        <TweetsBlockHeader>{tweets}</TweetsBlockHeader>

        {tweetsArray.map((item) => (
          <Tweet key={item.id} tweetData={item} currentUserId={currentUserId} />
        ))}
      </Main>

      <RightPart>
        <SearchTwitter />
      </RightPart>
    </Wrapper>
  );
};

export default Profile;
