import { FC, memo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Background } from '@/components/EditProfileModal/styled';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';

import { config } from './config';
import { Button, ButtonsWrapper, CloseButton, Content, Title, Window } from './styled';
import { IProps } from './types';

const { title, yesButton, noButton } = config;

const DeleteTweetModal: FC<IProps> = ({ handleCloseModal, handleDeleteTweet }) => {
  const modalRef = useRef(null);
  const isLoading = useSelector(isLoadingSelector) as boolean;

  useOnClickOutside(modalRef, () => {
    handleCloseModal();
  });

  return (
    <Background>
      {isLoading ? (
        <Loader />
      ) : (
        <Window ref={modalRef}>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
          <Content>
            <Title>{title}</Title>
            <ButtonsWrapper>
              <Button onClick={handleDeleteTweet}>{yesButton}</Button>
              <Button onClick={handleCloseModal}>{noButton}</Button>
            </ButtonsWrapper>
          </Content>
        </Window>
      )}
      <Notification />
    </Background>
  );
};

export default memo(DeleteTweetModal);
