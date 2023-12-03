import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where
} from 'firebase/firestore';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { FirebaseCollections } from '@/api/firebase/constants';
import { db } from '@/api/firebase/firebase';
import { getFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import EditProfileModal from '@/components/EditProfileModal';
import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import NoTweets from '@/components/NoTweets';
import { Text } from '@/components/NoTweets/styled';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants/allImages';
import { searchTweetHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { useGetUserTweets } from '@/hooks/useGetUserTweets';
import {
  AllTweetsWrapper,
  GetMoreTweets,
  LeftSideBar,
  Main,
  MainWrapper,
  MoreTweetsButton,
  RigthSideBar,
  Wrapper
} from '@/pages/Home/styled';
import { TextLink } from '@/pages/Root/styled';
import { setIsLoading } from '@/store/slices/notificationSlice';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';
import { allTweetsSelector, lastDocSelector } from '@/store/slices/tweetsSlice/selectors';
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

const numberOfTweetsInOneChunk = 3;

const { USERS_COLLECTION, TWEETS_COLLECTION } = FirebaseCollections;

const {
  tweets,
  following,
  followers,
  editProfile,
  defaultCount,
  defaultDescriptionText,
  defaultDescriptionLink,
  searchPlaceholder,
  searchError,
  moreTweetsButton,
  noMoreTweetsText
} = config;

const Profile: FC = () => {
  const [noMoreTweets, setNoMoreTweets] = useState<boolean>(false);
  const [numberOfUserTweets, setNumberOfUserTweets] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const authorizedUser = useSelector(userSelector) as IUser;
  const [user, setUser] = useState(useSelector(userSelector) as IUser);
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const tweetsArray = useSelector(allTweetsSelector);
  const lastDocument = useSelector(lastDocSelector);

  const { setErrorNotification, addChunkTweets, addLastDocumentInChunk } = useAction();

  const { id: currentUserId, photo, name, email } = user;

  const { pathname } = useLocation();
  const pathUserIdIndex = 2;
  const pathUserId = pathname.split('/')[pathUserIdIndex];

  const changeNumberOfUserTweets = useCallback((newValue: number) => {
    setNumberOfUserTweets(newValue);
  }, []);

  const changeNoMoreTweets = useCallback((newValue: boolean) => {
    setNoMoreTweets(newValue);
  }, []);

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

  const nextChunkHandler = async () => {
    const coll = collection(db, TWEETS_COLLECTION);
    const snapshot = await getCountFromServer(coll);
    const resultArray: ITweet[] = [];
    setIsLoading(true);
    const allTweetsCount = snapshot.data().count;

    let chunk;

    if (lastDocument) {
      chunk = query(
        collection(db, TWEETS_COLLECTION),
        orderBy('author.id', 'asc'),
        where('author.id', '==', currentUserId),
        startAfter(lastDocument),
        limit(numberOfTweetsInOneChunk)
      );
    }

    if (chunk) {
      const documentSnapshots = await getDocs(chunk);
      if (documentSnapshots.size + tweetsArray.length <= allTweetsCount) {
        documentSnapshots.forEach((item) => {
          resultArray.push(item.data() as ITweet);
        });

        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        addChunkTweets(resultArray);
        addLastDocumentInChunk(lastVisible);
      }

      if (documentSnapshots.size + tweetsArray.length >= numberOfUserTweets) {
        changeNoMoreTweets(true);
      }
    }

    setIsLoading(false);
  };

  const arrayOfTweetComponents = useMemo(
    () =>
      tweetsArray.map((tweet: ITweet) => (
        <Tweet
          key={tweet.id}
          tweetData={tweet}
          currentUserId={authorizedUser.id}
          isUserAuth={authorizedUser.id === user.id}
        />
      )),
    [authorizedUser.id, currentUserId, tweetsArray, user.id]
  );

  useGetUserTweets(currentUserId, changeNoMoreTweets, changeNumberOfUserTweets);

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
          tweetsCount={numberOfUserTweets}
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

          <AllTweetsWrapper>
            {arrayOfTweetComponents.length > 0 ? arrayOfTweetComponents : <NoTweets />}
            {isLoading ? (
              <Loader />
            ) : (
              <GetMoreTweets>
                {noMoreTweets ? (
                  <Text>{noMoreTweetsText}</Text>
                ) : (
                  <MoreTweetsButton type="button" onClick={nextChunkHandler}>
                    {moreTweetsButton}
                  </MoreTweetsButton>
                )}
              </GetMoreTweets>
            )}
          </AllTweetsWrapper>
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
