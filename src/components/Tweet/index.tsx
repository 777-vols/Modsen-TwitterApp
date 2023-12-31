import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC, memo, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';

import { FirebaseCollections, updateLikesInFirebaseDoc } from '@/api/firebase';
import DeleteTweetModal from '@/components/DeleteTweetModal';
import Notification from '@/components/Notification';
import { allImages } from '@/constants';
import { useAction } from '@/hooks/useAction';
import { UserName } from '@/pages/Profile/styled';
import { IUser } from '@/pages/Profile/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import {
  Content,
  DateInfo,
  DeleteButton,
  Email,
  Image,
  Info,
  LikeButton,
  Likes,
  LikesCount,
  Message,
  MessageWrapper,
  TweetImageWrapper,
  UserAvatarWrapper,
  Wrapper
} from './styled';
import { IProps } from './types';

const { TWEETS_COLLECTION } = FirebaseCollections;

const { likeImg, likeFill, deleteImg, defaultUserPhoto } = allImages;

const Tweet: FC<IProps> = ({ tweetData, currentUserId, isUserAuth }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const authorizedUser = useSelector(userSelector) as IUser;
  const { likeTweet } = useAction();

  useEffect(() => {
    if (tweetData.likes.includes(currentUserId)) {
      setIsLiked(true);
    }
  }, []);

  const { id: tweetId, author, text, date, likes, image } = tweetData;
  const { id: tweetAuthorId, name, email, photo } = author;
  const tweetDate = new Date(date);

  const closeOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const likeButtonHandler = async () => {
    likeTweet({ tweetData, userId: authorizedUser.id });
    setIsLiked((prevState) => !prevState);

    if (!(isLiked && tweetData.likes.includes(currentUserId))) {
      await updateLikesInFirebaseDoc(TWEETS_COLLECTION, tweetId, [
        ...tweetData.likes,
        currentUserId
      ]);
    } else {
      await updateLikesInFirebaseDoc(TWEETS_COLLECTION, tweetId, [
        ...tweetData.likes.filter((id) => id !== currentUserId)
      ]);
    }
  };

  return (
    <Wrapper>
      {currentUserId === tweetAuthorId && isUserAuth && (
        <DeleteButton data-testid="deleteTweet" onClick={closeOpenModal}>
          <Image src={deleteImg} alt="delete icon" />
        </DeleteButton>
      )}
      <UserAvatarWrapper>
        <LazyLoadImage
          src={photo || defaultUserPhoto}
          effect="blur"
          alt="tweet avatar"
          width="100%"
          style={{ borderRadius: '100px', maxHeight: '100%' }}
        />
      </UserAvatarWrapper>
      <Content>
        <Info>
          <UserName>{name}</UserName>
          <Email>{`${email} ·`}</Email>
          <DateInfo data-testid="tweetDate">
            {tweetDate.getDate()}.{tweetDate.getMonth()}.{tweetDate.getFullYear()}{' '}
            {String(tweetDate.getHours()).padStart(2, '0')}:
            {String(tweetDate.getMinutes()).padStart(2, '0')}
          </DateInfo>
        </Info>
        <MessageWrapper>
          <Message data-cy="tweetText">{text}</Message>
          {image && (
            <TweetImageWrapper>
              <LazyLoadImage
                src={image}
                effect="blur"
                alt="tweet image"
                width="100%"
                style={{ borderRadius: '15px', height: '100%' }}
              />
            </TweetImageWrapper>
          )}
        </MessageWrapper>
        <Likes>
          <LikeButton data-testid="likeTweet" onClick={likeButtonHandler}>
            <Image src={isLiked ? likeFill : likeImg} alt="like" />
          </LikeButton>
          <LikesCount>{likes ? likes.length : '0'}</LikesCount>
        </Likes>
      </Content>
      {isModalOpen && <DeleteTweetModal tweetData={tweetData} handleCloseModal={closeOpenModal} />}
      <Notification />
    </Wrapper>
  );
};

export default memo(Tweet);
