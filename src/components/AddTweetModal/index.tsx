import { FC, memo, useRef } from 'react';

import CreateTweet from '@/components/CreateTweet';
import { Background } from '@/components/EditProfileModal/styled';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { CloseButton, CreateTweetWrapper, Window } from './styled';
import { IProps } from './types';

const AddTweetModal: FC<IProps> = ({ handleCloseModal }) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    handleCloseModal();
  });

  return (
    <Background>
      <Window ref={modalRef}>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <CreateTweetWrapper>
          <CreateTweet />
        </CreateTweetWrapper>
      </Window>
    </Background>
  );
};

export default memo(AddTweetModal);
