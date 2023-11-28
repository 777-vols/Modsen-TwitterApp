import { FC, memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { FirebaseCollections } from '@/api/firebase/constants';
import { getAllFirebaseDocs, getFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import Header from '@/components/Header';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { searchUserHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { IUser } from '@/pages/Profile/types';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';
import { allTweetsSelector } from '@/store/slices/tweetsSlice/selectors';
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
  Wrapper
} from './styled';

const { TWEETS_COLLECTION } = FirebaseCollections;

const { searchPlaceholder, searchError } = config;

const Home: FC = () => {
  const [currentTweet, setCurrentTweet] = useState<ITweet>();
  const tweetsArray = useSelector(allTweetsSelector);
  const currentUser = useSelector(userSelector) as IUser;
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const { pathname } = useLocation();
  const { setErrorNotification, addAllTweets, setIsLoading } = useAction();

  const pathUserIdIndex = 2;
  const pathTweetId = pathname.split('/')[pathUserIdIndex];

  const { id: currentUserId } = currentUser;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const allTweets: ITweet[] = await getAllFirebaseDocs(TWEETS_COLLECTION);
      addAllTweets(allTweets);
      setIsLoading(false);
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
  }, []);

  const arrayOfTweetComponents = useMemo(
    () =>
      [...tweetsArray]
        .sort((tweet1, tweet2) => tweet2.date - tweet1.date)
        .map((tweet: ITweet) => (
          <Tweet key={tweet.id} tweetData={tweet} currentUserId={currentUserId} />
        )),
    [currentUserId, tweetsArray]
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

  return (
    <Wrapper>
      <LeftSideBar>
        <LeftMenu />
      </LeftSideBar>

      <MainWrapper>
        <Header />

        <Main>
          {isLoading ? (
            <Loader />
          ) : (
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
                  currentUserId={currentUserId}
                />
              ) : (
                arrayOfTweetComponents
              )}
            </AllTweetsWrapper>
          )}
        </Main>
      </MainWrapper>

      <RigthSideBar>
        <SearchTwitter
          placeholder={searchPlaceholder}
          searchData={searchUserHelper}
          errorText={searchError}
        />
      </RigthSideBar>
      <Notification />
    </Wrapper>
  );
};

export default memo(Home);
