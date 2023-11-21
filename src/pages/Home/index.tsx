import { FC, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Checkbox from '@/components/Checkbox';
import CreateTweet from '@/components/CreateTweet';
import LeftMenu from '@/components/LeftMenu';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { Header, Main, RightPart, SideBar, Wrapper } from '@/pages/Profile/styled';
import { IUser } from '@/pages/Profile/types';
import { allTweetsSelector } from '@/store/slices/tweetsSlice/selectors';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { CreateTweetWrapper, HeaderContent, PageName } from './styled';

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
            <PageName>Home</PageName>
            <Checkbox />
          </HeaderContent>
        </Header>
        <CreateTweetWrapper>
          <CreateTweet />
        </CreateTweetWrapper>
        {arrayOfTweetComponents}
      </Main>

      <RightPart>
        <SearchTwitter />
      </RightPart>
    </Wrapper>
  );
};

export default memo(Home);
