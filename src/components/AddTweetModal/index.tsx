import { FC, memo } from 'react';

import CreateTweet from '@/components/CreateTweet';

import { Background, CloseButton, PanelWrapper, Window } from './styled';
import { IProps } from './types';

const AddTweetModal: FC<IProps> = ({ handleCloseModal }) => (
  <Background>
    <Window>
      <CloseButton onClick={handleCloseModal}>X</CloseButton>
      <PanelWrapper>
        <CreateTweet />
      </PanelWrapper>
    </Window>
  </Background>
);

export default memo(AddTweetModal);
