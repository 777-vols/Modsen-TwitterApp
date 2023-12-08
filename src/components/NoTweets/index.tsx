import { FC } from 'react';

import { config } from './config';
import { Text, Wrapper } from './styled';

const { text } = config;

const NoTweets: FC = () => (
  <Wrapper>
    <Text>{text}</Text>
  </Wrapper>
);

export default NoTweets;
