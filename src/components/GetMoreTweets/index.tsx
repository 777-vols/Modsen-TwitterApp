import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import NoTweets from '@/components/NoTweets';
import { getTweetIdFromUrl } from '@/helpers/urlHelpers';

import { config } from './config';
import { MoreTweetsButton, Wrapper } from './styled';
import { IProps } from './types';

const { moreTweetsButton } = config;

const GetMoreTweets: FC<IProps> = ({ noMoreTweets, nextChunkHandler }) => {
  const { pathname } = useLocation();
  const pathTweetId = getTweetIdFromUrl(pathname);

  return (
    <Wrapper>
      {noMoreTweets || pathTweetId ? (
        <NoTweets />
      ) : (
        <MoreTweetsButton type="button" onClick={nextChunkHandler}>
          {moreTweetsButton}
        </MoreTweetsButton>
      )}
    </Wrapper>
  );
};

export default GetMoreTweets;
