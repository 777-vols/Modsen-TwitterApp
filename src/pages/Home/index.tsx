import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter
} from 'firebase/firestore';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';

import { FirebaseCollections } from '@/api/firebase/constants';
import { db } from '@/api/firebase/firebase';
import CreateTweet from '@/components/CreateTweet';
import GetMoreTweets from '@/components/GetMoreTweets';
import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { searchUserHelper } from '@/helpers/searchHelpers';
import { getTweetIdFromUrl } from '@/helpers/urlHelpers';
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
  LeftSideBar,
  Main,
  MainWrapper,
  RigthSideBar,
  Section,
  Wrapper
} from './styled';

const numberOfTweetsInOneChunk = 3;

const { TWEETS_COLLECTION } = FirebaseCollections;

const { searchPlaceholder, searchError, pageName } = config;

const Home: FC = () => {
  const [noMoreTweets, setNoMoreTweets] = useState<boolean>(false);

  const tweetsArray = useSelector(allTweetsSelector);
  const authorizedUser = useSelector(userSelector) as IUser;
  const lastDocument = useSelector(lastDocSelector);
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const { pathname } = useLocation();
  const { setIsLoading, addChunkTweets, addLastDocumentInChunk } = useAction();

  const pathTweetId = getTweetIdFromUrl(pathname);

  const { id: authorizedUserId } = authorizedUser;

  const changeNoMoreTweets = useCallback((newValue: boolean) => {
    setNoMoreTweets(newValue);
  }, []);

  useGetAllTweets(changeNoMoreTweets);

  const arrayOfTweetComponents = useMemo(
    () =>
      [...tweetsArray].map((tweet: ITweet) => (
        <Tweet key={v4()} tweetData={tweet} currentUserId={authorizedUserId} />
      )),
    [authorizedUserId, tweetsArray]
  );

  const currentTweet = useMemo(
    () => tweetsArray.find((tweet) => tweet.id === pathTweetId),
    [pathTweetId, tweetsArray]
  );

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
  }, [lastDocument, setIsLoading, tweetsArray.length]);

  return (
    <Wrapper>
      <LeftSideBar>
        <LeftMenu />
      </LeftSideBar>

      <MainWrapper>
        <Header pageName={pageName} />

        <Main>
          <Section>
            <AllTweetsWrapper>
              {!pathTweetId && (
                <CreateTweetWrapper>
                  <CreateTweet />
                </CreateTweetWrapper>
              )}

              {pathTweetId && currentTweet ? (
                <Tweet tweetData={currentTweet} currentUserId={authorizedUserId} />
              ) : (
                arrayOfTweetComponents
              )}

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
          searchData={searchUserHelper}
          errorText={searchError}
        />
      </RigthSideBar>
    </Wrapper>
  );
};

export default memo(Home);
