import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter
} from 'firebase/firestore';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { FirebaseCollections } from '@/api/firebase/constants';
import { db } from '@/api/firebase/firebase';
import { getFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import { Text } from '@/components/NoTweets/styled';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { searchUserHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { useGetAllTweets } from '@/hooks/useGetAllTweets';
import { IUser } from '@/pages/Profile/types';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';
import { allTweetsSelector, lastDocSelector } from '@/store/slices/tweetsSlice/selectors';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  AllTweetsWrapper,
  CreateTweetWrapper,
  GetMoreTweets,
  LeftSideBar,
  Main,
  MainWrapper,
  MoreTweetsButton,
  RigthSideBar,
  Wrapper
} from './styled';

const numberOfTweetsInOneChunk = 3;
const pathUserIdIndex = 2;

const { TWEETS_COLLECTION } = FirebaseCollections;

const { searchPlaceholder, searchError, pageName, moreTweetsButton, noMoreTweetsText } = config;

const Home: FC = () => {
  const [currentTweet, setCurrentTweet] = useState<ITweet>();
  const [noMoreTweets, setNoMoreTweets] = useState<boolean>(false);

  const tweetsArray = useSelector(allTweetsSelector);
  const authorizedUser = useSelector(userSelector) as IUser;
  const lastDocument = useSelector(lastDocSelector);
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const { pathname } = useLocation();
  const { setErrorNotification, setIsLoading, addChunkTweets, addLastDocumentInChunk } =
    useAction();

  const pathTweetId = pathname.split('/')[pathUserIdIndex];

  const { id: authorizedUserId } = authorizedUser;

  const changeNoMoreTweets = useCallback((newValue: boolean) => {
    setNoMoreTweets(newValue);
  }, []);

  useGetAllTweets(changeNoMoreTweets);

  const arrayOfTweetComponents = useMemo(
    () =>
      [...tweetsArray].map((tweet: ITweet) => (
        <Tweet key={tweet.id} tweetData={tweet} currentUserId={authorizedUserId} />
      )),
    [authorizedUserId, tweetsArray]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (pathTweetId) {
        const tweet = (await getFirebaseDoc(TWEETS_COLLECTION, pathTweetId)) as ITweet;
        if (tweet) {
          setCurrentTweet(tweet);
        }
      }
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
  }, [pathTweetId]);

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
        orderBy('id', 'asc'),
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
      if (documentSnapshots.size + tweetsArray.length >= allTweetsCount) {
        changeNoMoreTweets(true);
      }
    }

    setIsLoading(false);
  };

  return (
    <Wrapper>
      <LeftSideBar>
        <LeftMenu />
      </LeftSideBar>

      <MainWrapper>
        <Header pageName={pageName} />

        <Main>
          <AllTweetsWrapper>
            {!pathTweetId && (
              <CreateTweetWrapper>
                <CreateTweet />
              </CreateTweetWrapper>
            )}

            {pathTweetId && currentTweet ? (
              <Tweet
                key={currentTweet.id}
                tweetData={currentTweet}
                currentUserId={authorizedUserId}
              />
            ) : (
              arrayOfTweetComponents
            )}

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
          searchData={searchUserHelper}
          errorText={searchError}
        />
      </RigthSideBar>
    </Wrapper>
  );
};

export default memo(Home);
