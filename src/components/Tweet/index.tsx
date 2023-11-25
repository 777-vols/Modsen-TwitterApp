import { FC, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FirebaseCollections } from '@/api/firebase/constants';
import { updateLikesInFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import { allImages } from '@/constants/allImages';
import { deleteTweetHelper } from '@/helpers/tweetHelpers';
import { useAction } from '@/hooks/useAction';
import { UserName } from '@/pages/Profile/styled';
import { IUser } from '@/pages/Profile/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import {
  Avatar,
  Content,
  DateInfo,
  DeleteButton,
  Email,
  Image,
  Info,
  Likes,
  LikesButton,
  LikesCount,
  Message,
  MessageWrapper,
  TweetImage,
  UserAvatarWrapper,
  Wrapper
} from './styled';
import { IProps } from './types';

const { TWEETS_COLLECTION } = FirebaseCollections;

const { likeImg, likeFill, deleteImg } = allImages;

const Tweet: FC<IProps> = ({ tweetData, currentUserId, isUserAuth }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const authorizedUser = useSelector(userSelector) as IUser;
  const { deleteTweet, likeTweet } = useAction();

  useEffect(() => {
    if (tweetData.likes.includes(currentUserId)) {
      setIsLiked(true);
    }
  }, []);

  const { id: tweetId, author, text, date, likes, image } = tweetData;
  const { id: tweetAuthorId, name, email, photo } = author;
  const tweetDate = new Date(date);

  const deleteButtonHandler = async () => {
    await deleteTweetHelper(TWEETS_COLLECTION, tweetId, image);
    deleteTweet(tweetData);
  };

  const likeButtonHandler = async () => {
    likeTweet({ tweetData, userId: authorizedUser.id });
    setIsLiked((prevState) => !prevState);

    if (!isLiked && !tweetData.likes.includes(currentUserId)) {
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
        <DeleteButton onClick={deleteButtonHandler}>
          <Image src={deleteImg} alt="delete icon" />
        </DeleteButton>
      )}
      <UserAvatarWrapper>
        <Avatar src={photo} alt="tweet avatar" />
      </UserAvatarWrapper>
      <Content>
        <Info>
          <UserName>{name}</UserName>
          <Email>{`${email} ·`}</Email>
          <DateInfo>
            {tweetDate.getDate()}.{tweetDate.getMonth()}.{tweetDate.getFullYear()}{' '}
            {tweetDate.getHours()}:{tweetDate.getMinutes()}
          </DateInfo>
        </Info>
        <MessageWrapper>
          <Message>{text}</Message>
          {image && <TweetImage src={image} alt="tweet" />}
        </MessageWrapper>
        <Likes>
          <LikesButton onClick={likeButtonHandler}>
            <Image src={isLiked ? likeFill : likeImg} alt="like" />
          </LikesButton>
          <LikesCount>{likes ? likes.length : '0'}</LikesCount>
        </Likes>
      </Content>
    </Wrapper>
  );
};

export default memo(Tweet);
