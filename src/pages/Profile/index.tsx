import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { FirebaseCollections } from '@/api/firebase/constants';
import { getFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import EditProfileModal from '@/components/EditProfileModal';
import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import NoTweets from '@/components/NoTweets';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants/allImages';
import { searchTweetHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import {
  AllTweetsWrapper,
  LeftSideBar,
  Main,
  MainWrapper,
  RigthSideBar,
  Wrapper
} from '@/pages/Home/styled';
import { TextLink } from '@/pages/Root/styled';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';
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
  InfoEmail,
  InfoName,
  ProfileInfo,
  TweetsBlockHeader,
  UserAvatar,
  UserInfo
} from './styled';
import { IUser } from './types';

const { profileBackground, defaultUserPhoto } = allImages;

const { USERS_COLLECTION } = FirebaseCollections;

const {
  tweets,
  following,
  followers,
  editProfile,
  defaultCount,
  defaultDescriptionText,
  defaultDescriptionLink,
  searchPlaceholder,
  searchError
} = config;

const Profile: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const authorizedUser = useSelector(userSelector) as IUser;
  const [user, setUser] = useState(useSelector(userSelector) as IUser);
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const tweetsArray = useSelector(allTweetsSelector);
  const { setErrorNotification } = useAction();

  const { id: currentUserId, photo, name, email } = user;

  const { pathname } = useLocation();
  const pathUserIdIndex = 2;
  const pathUserId = pathname.split('/')[pathUserIdIndex];

  useEffect(() => {
    const fetchData = async () => {
      const userFoundInSearch = (await getFirebaseDoc(USERS_COLLECTION, pathUserId)) as IUser;

      if (userFoundInSearch) {
        setUser(userFoundInSearch);
      }
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
  }, [currentUserId, pathUserId]);

  const arrayOfTweetComponents = useMemo(
    () =>
      tweetsArray
        .filter((tweet: ITweet) => tweet.author.id === user.id)
        .sort((tweet1, tweet2) => tweet2.date - tweet1.date)
        .map((tweet: ITweet) => (
          <Tweet
            key={tweet.id}
            tweetData={tweet}
            currentUserId={authorizedUser.id}
            isUserAuth={authorizedUser.id === user.id}
          />
        )),
    [authorizedUser.id, currentUserId, tweetsArray, user.id]
  );

  const closeOpenModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  return (
    <Wrapper>
      <LeftSideBar>
        <LeftMenu />
      </LeftSideBar>

      <MainWrapper>
        <Header
          userName={name}
          tweetsCount={arrayOfTweetComponents.length}
          isAuthorizedUser={authorizedUser.id !== user.id}
        />

        <Main>
          <Banner src={profileBackground} alt="profile banner" />

          <ProfileInfo>
            <UserAvatar src={photo || defaultUserPhoto} alt="profile avatar" />
            <UserInfo>
              <InfoName>{name}</InfoName>
              <InfoEmail>{email}</InfoEmail>
              <Description>
                {defaultDescriptionText} <TextLink to="#">{defaultDescriptionLink}</TextLink>
              </Description>
            </UserInfo>
            <FollowingInfo>
              <b>{defaultCount}</b>
              <Following> {following}</Following>
              <b>{defaultCount}</b>
              <Following> {followers}</Following>
            </FollowingInfo>
            {authorizedUser.id === user.id && (
              <EditProfileButton onClick={closeOpenModal}>{editProfile}</EditProfileButton>
            )}
          </ProfileInfo>

          {authorizedUser.id === user.id && (
            <CreateTweetWrapper>
              <CreateTweet />
            </CreateTweetWrapper>
          )}

          <TweetsBlockHeader>{tweets}</TweetsBlockHeader>

          {isLoading ? (
            <Loader />
          ) : (
            <AllTweetsWrapper>
              {arrayOfTweetComponents.length > 0 ? arrayOfTweetComponents : <NoTweets />}
            </AllTweetsWrapper>
          )}
        </Main>
      </MainWrapper>

      <RigthSideBar>
        <SearchTwitter
          placeholder={searchPlaceholder}
          searchData={searchTweetHelper}
          errorText={searchError}
          currentUserId={currentUserId}
        />
      </RigthSideBar>

      {isModalOpen && (
        <Portal>
          <EditProfileModal handleCloseModal={closeOpenModal} />
        </Portal>
      )}
      <Notification />
    </Wrapper>
  );
};

export default memo(Profile);
