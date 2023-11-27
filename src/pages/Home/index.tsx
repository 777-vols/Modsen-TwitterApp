import { FC, memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { FirebaseCollections } from '@/api/firebase/constants';
import { getAllFirebaseDocs, getFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import Checkbox from '@/components/Checkbox';
import CreateTweet from '@/components/CreateTweet';
import LeftMenu from '@/components/LeftMenu';
import { Loader } from '@/components/Loader';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
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
  BackButton,
  BackWrapper,
  BurgerMenuButton,
  CreateTweetWrapper,
  Header,
  HeaderContent,
  LeftSideBar,
  Main,
  MainWrapper,
  PageName,
  RigthSideBar,
  StyledBar,
  Wrapper
} from './styled';

const { HOME } = Urls;
const { TWEETS_COLLECTION } = FirebaseCollections;
const { arrowBack } = allImages;

const { header, searchPlaceholder, searchError } = config;

const Home: FC = () => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);
  const [currentTweet, setCurrentTweet] = useState<ITweet>();
  const tweetsArray = useSelector(allTweetsSelector);
  const currentUser = useSelector(userSelector) as IUser;
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const { pathname } = useLocation();
  const { setErrorNotification, addAllTweets, setIsLoading } = useAction();
  const navigate = useNavigate();

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

  const handleBackToHomePage = () => {
    navigate(HOME);
  };

  const burgerButtonHandler = () => {
    setBurgerMenuIsOpen((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <LeftSideBar>
        <LeftMenu />
      </LeftSideBar>

      <MainWrapper>
        <Header>
          <BurgerMenuButton
            className={burgerMenuIsOpen ? 'active' : ''}
            onClick={burgerButtonHandler}>
            <StyledBar />
            <StyledBar />
            <StyledBar />
          </BurgerMenuButton>

          <HeaderContent>
            <BackWrapper>
              {pathTweetId && (
                <BackButton onClick={handleBackToHomePage}>
                  <img src={arrowBack} alt="arrow back" />
                </BackButton>
              )}
              <PageName>{header}</PageName>
            </BackWrapper>
            <Checkbox />
          </HeaderContent>
        </Header>

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
    </Wrapper>
  );
};

export default memo(Home);
