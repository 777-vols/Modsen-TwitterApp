import 'react-lazy-load-image-component/src/effects/blur.css';

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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';

import { db, FirebaseCollections, getFirebaseDoc } from '@/api/firebase';
import CreateTweet from '@/components/CreateTweet';
import EditProfileModal from '@/components/EditProfileModal';
import GetMoreTweets from '@/components/GetMoreTweets';
import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants';
import { getUserIdFromUrl, searchTweetHelper } from '@/helpers';
import { useAction } from '@/hooks/useAction';
import { useGetUserTweets } from '@/hooks/useGetUserTweets';
import {
  AllTweetsWrapper,
  LeftSideBar,
  Main,
  MainWrapper,
  RigthSideBar,
  Section,
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
  AvatarWrapper,
  CreateTweetWrapper,
  Description,
  EditProfileButton,
  Following,
  FollowingInfo,
  InfoEmail,
  InfoName,
  ProfileInfo,
  TweetsBlockHeader,
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
  searchError
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
  const {
    id: authorizedUserId,
    name: authorizedUserName,
    email: authorizedUserEmail
  } = authorizedUser;

  const { pathname } = useLocation();

  const pathUserId = getUserIdFromUrl(pathname);

  const changeNumberOfUserTweets = useCallback((newValue: number) => {
    setNumberOfUserTweets(newValue);
  }, []);

  const changeNoMoreTweets = useCallback((newValue: boolean) => {
    setNoMoreTweets(newValue);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let userFoundInSearch;
      if (pathUserId) {
        userFoundInSearch = (await getFirebaseDoc(USERS_COLLECTION, pathUserId)) as IUser;
      }
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

  const nextChunkHandler = useCallback(async () => {
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
  }, [currentUserId, lastDocument, numberOfUserTweets, tweetsArray.length]);

  const arrayOfTweetComponents = useMemo(
    () =>
      tweetsArray.map((tweet: ITweet) => (
        <Tweet
          key={v4()}
          tweetData={tweet}
          currentUserId={authorizedUser.id}
          isUserAuth={authorizedUserId === currentUserId}
        />
      )),
    [authorizedUserId, currentUserId, tweetsArray, currentUserId]
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
          userName={currentUserId === authorizedUserId ? authorizedUserName : name}
          tweetsCount={numberOfUserTweets}
          isAuthorizedUser={authorizedUser.id !== user.id}
        />

        <Main>
          <Section>
            <LazyLoadImage
              src={profileBackground}
              effect="blur"
              alt="profile banner"
              width="100%"
            />

            <ProfileInfo>
              <AvatarWrapper>
                <LazyLoadImage
                  src={photo || defaultUserPhoto}
                  effect="blur"
                  alt="profile avatar"
                  width="100%"
                  style={{ borderRadius: '100px', maxHeight: '100%' }}
                />
              </AvatarWrapper>
              <UserInfo>
                <InfoName>
                  {currentUserId === authorizedUserId ? authorizedUserName : name}
                </InfoName>
                <InfoEmail>
                  {currentUserId === authorizedUserId ? authorizedUserEmail : email}
                </InfoEmail>
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
                <EditProfileButton data-cy="editProfile" onClick={closeOpenModal}>
                  {editProfile}
                </EditProfileButton>
              )}
            </ProfileInfo>

            {authorizedUser.id === user.id && (
              <CreateTweetWrapper>
                <CreateTweet />
              </CreateTweetWrapper>
            )}

            <TweetsBlockHeader>{tweets}</TweetsBlockHeader>

            <AllTweetsWrapper>
              {arrayOfTweetComponents.length > 0 && arrayOfTweetComponents}
              {isLoading ? (
                <Loader />
              ) : (
                <GetMoreTweets noMoreTweets={noMoreTweets} nextChunkHandler={nextChunkHandler} />
              )}
            </AllTweetsWrapper>
          </Section>
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
