import { FC, memo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { FirebaseCollections } from '@/api/firebase/constants';
import { Background } from '@/components/EditProfileModal/styled';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import { deleteTweetHelper } from '@/helpers/tweetHelpers';
import { useAction } from '@/hooks/useAction';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';

import { config } from './config';
import { Button, ButtonsWrapper, CloseButton, Content, Title, Window } from './styled';
import { IProps } from './types';

const { TWEETS_COLLECTION } = FirebaseCollections;

const { title, yesButton, noButton, successNotification, errorNotification } = config;

const DeleteTweetModal: FC<IProps> = ({ tweetData, handleCloseModal }) => {
  const { id: tweetId, image } = tweetData;

  const modalRef = useRef(null);
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const { deleteTweet, setSuccessNotification, setErrorNotification, setIsLoading } = useAction();

  useOnClickOutside(modalRef, () => {
    handleCloseModal();
  });

  const handleDeleteTweet = async () => {
    try {
      setIsLoading(true);
      await deleteTweetHelper(TWEETS_COLLECTION, tweetId, image);
      setIsLoading(false);
      setSuccessNotification({ message: successNotification });
    } catch (error) {
      setErrorNotification({ message: errorNotification });
    }
    deleteTweet(tweetData);
  };

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
              <Button data-testid="deleteTweet" onClick={handleDeleteTweet}>
                {yesButton}
              </Button>
              <Button data-testid="closeModal" onClick={handleCloseModal}>
                {noButton}
              </Button>
            </ButtonsWrapper>
          </Content>
        </Window>
      )}
      <Notification />
    </Background>
  );
};

export default memo(DeleteTweetModal);
