import { FC, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Checkbox from '@/components/Checkbox';
import CreateTweet from '@/components/CreateTweet';
import LeftMenu from '@/components/LeftMenu';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { searchUserHelper } from '@/helpers/searchHelpers';
import { Header, Main, RightPart, SideBar, Wrapper } from '@/pages/Profile/styled';
import { IUser } from '@/pages/Profile/types';
import { allTweetsSelector } from '@/store/slices/tweetsSlice/selectors';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import { CreateTweetWrapper, HeaderContent, PageName } from './styled';

const { header, searchPlaceholder, searchError } = config;

const Home: FC = () => {
  const tweetsArray = useSelector(allTweetsSelector);
  const currentUser = useSelector(userSelector) as IUser;

  const { id: currentUserId } = currentUser;

  const arrayOfTweetComponents = useMemo(
    () =>
      [...tweetsArray]
        .sort((tweet1, tweet2) => tweet2.date - tweet1.date)
        .map((tweet: ITweet) => (
          <Tweet key={tweet.id} tweetData={tweet} currentUserId={currentUserId} />
        )),
    [currentUserId, tweetsArray]
  );

  return (
    <Wrapper>
      <SideBar>
        <LeftMenu />
      </SideBar>

      <Main>
        <Header>
          <HeaderContent>
            <PageName>{header}</PageName>
            <Checkbox />
          </HeaderContent>
        </Header>
        <CreateTweetWrapper>
          <CreateTweet />
        </CreateTweetWrapper>
        {arrayOfTweetComponents}
      </Main>

      <RightPart>
        <SearchTwitter
          placeholder={searchPlaceholder}
          searchData={searchUserHelper}
          errorText={searchError}
        />
      </RightPart>
    </Wrapper>
  );
};

export default memo(Home);
