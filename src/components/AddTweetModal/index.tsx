import { FC, memo } from 'react';

import CreateTweet from '@/components/CreateTweet';

import { Background, CloseButton, CreateTweetWrapper, Window } from './styled';
import { IProps } from './types';

const AddTweetModal: FC<IProps> = ({ handleCloseModal }) => (
  <Background>
    <Window>
      <CloseButton onClick={handleCloseModal}>X</CloseButton>
      <CreateTweetWrapper>
        <CreateTweet />
      </CreateTweetWrapper>
    </Window>
  </Background>
);

export default memo(AddTweetModal);
