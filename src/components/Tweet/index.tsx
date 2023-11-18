import { FC } from 'react';

import { allImages } from '@/constants/allImages';
import { UserName } from '@/pages/Profile/styled';

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
  UserAvatarWrapper,
  Wrapper
} from './styled';
import { IProps } from './types';

const { likeImg, deleteImg } = allImages;

const Tweet: FC<IProps> = ({ tweetData }) => {
  const { author, text, date, likes } = tweetData;
  const { name, email, photo } = author;

  return (
    <Wrapper>
      <DeleteButton>
        <Image src={deleteImg} alt="delete icon" />
      </DeleteButton>{' '}
      <UserAvatarWrapper>
        <Avatar src={photo} alt="user avatar" />
      </UserAvatarWrapper>
      <Content>
        <Info>
          <UserName>{name}</UserName>
          <Email>{`${email} ·`}</Email>
          <DateInfo>
            {new Date(date).getDate()} {new Date(date).getMonth()} {new Date(date).getFullYear()}
          </DateInfo>
        </Info>
        <Message>{text}</Message>
        <Likes>
          <LikesButton>
            <Image src={likeImg} alt="like icon" />
          </LikesButton>
          <LikesCount>{likes ? likes.length : '0'}</LikesCount>
        </Likes>
      </Content>
    </Wrapper>
  );
};

export default Tweet;
