import { signOut } from 'firebase/auth';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';

import { FirebaseCollections } from '@/api/firebase/constants';
import { auth } from '@/api/firebase/firebase';
import { getAllFirebaseDocs } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import EditProfileModal from '@/components/EditProfileModal';
import LeftMenu from '@/components/LeftMenu';
import { UserEmail } from '@/components/LeftMenu/styled';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants/allImages';
import { useAction } from '@/hooks/useAction';
import { TextLink } from '@/pages/Root/styled';
import { allTweetsSelector } from '@/store/slices/tweetsSlice/selectors';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  Banner,
  CreateTweetWrapper,
  Description,
  EditProfileButton,
  Following,
  FollowingInfo,
  Header,
  HeaderContent,
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

const {
  logOut,
  tweets,
  following,
  followers,
  editProfile,
  defaultCount,
  defaultDescriptionText,
  defaultDescriptionLink
} = config;

const Profile: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentUser = useSelector(userSelector) as IUser;
  const tweetsArray = useSelector(allTweetsSelector);
  const { deauthenticateUser, addAllTweets, setErrorNotification } = useAction();

  const { id: currentUserId, photo, name, email } = currentUser;

  useEffect(() => {
    const fetchData = async () => {
      const allTweets: ITweet[] = await getAllFirebaseDocs(TWEETS_COLLECTION);
      addAllTweets(allTweets);
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
  }, []);

  const arrayOfTweetComponents = useMemo(
    () =>
      tweetsArray
        .filter(({ author }) => author.id === currentUserId)
        .sort((tweet1, tweet2) => tweet2.date - tweet1.date)
        .map((tweet: ITweet) => (
          <Tweet key={tweet.id} tweetData={tweet} currentUserId={currentUserId} />
        )),
    [currentUserId, tweetsArray]
  );

  const handleLogOut = async () => {
    await signOut(auth);
    deauthenticateUser();
  };

  const closeOpenModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  return (
    <Wrapper>
      <SideBar>
        <LeftMenu />
        <LogOutButton onClick={handleLogOut}>{logOut}</LogOutButton>
      </SideBar>

      <Main>
        <Header>
          <HeaderContent>
            <UserName>{name}</UserName>
            <TweetsNumber>
              {arrayOfTweetComponents.length} {tweets}
            </TweetsNumber>
          </HeaderContent>
        </Header>

        <Banner src={profileBackground} alt="profile banner" />

        <ProfileInfo>
          <UserAvatar src={photo} alt="user avatar" />
          <UserInfo>
            <Name>{name}</Name>
            <UserEmail>{email}</UserEmail>
            <Description>
              {defaultDescriptionText} <TextLink to="#">{defaultDescriptionLink}</TextLink>
            </Description>
          </UserInfo>
          <FollowingInfo>
            <Following>
              <b>{defaultCount}</b> {following}
            </Following>
            <Following>
              <b>{defaultCount}</b> {followers}
            </Following>
          </FollowingInfo>
          <EditProfileButton onClick={closeOpenModal}>{editProfile}</EditProfileButton>
        </ProfileInfo>

        <CreateTweetWrapper>
          <CreateTweet />
        </CreateTweetWrapper>

        <TweetsBlockHeader>{tweets}</TweetsBlockHeader>

        {arrayOfTweetComponents}
      </Main>

      <RightPart>
        <SearchTwitter />
      </RightPart>

      {isModalOpen && (
        <Portal>
          <EditProfileModal handleCloseModal={closeOpenModal} />
        </Portal>
      )}
    </Wrapper>
  );
};

export default memo(Profile);
