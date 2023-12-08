import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

import { UserEmail } from '@/components/LeftMenu/styled';
import { UserAvatarWrapper } from '@/components/Tweet/styled';
import { allImages } from '@/constants';

import { config } from './config';
import { Button, UserData, UserInfo, UserName, Wrapper } from './styled';
import { IProps } from './types';

const { defaultUserPhoto } = allImages;

const { userButtonName, tweetButtonName } = config;

const SearchResultItem: FC<IProps> = ({ tweetId, author, isUserSearch }) => {
  const { id, name, photo, email } = author;

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (isUserSearch) {
      navigate(`/profile/${id}`);
    } else {
      navigate(`/feed/${tweetId}`);
    }
  };

  return (
    <Wrapper>
      <UserInfo>
        <UserAvatarWrapper>
          <LazyLoadImage
            src={photo || defaultUserPhoto}
            effect="blur"
            alt="tweet avatar"
            width="100%"
            style={{ borderRadius: '100px', maxHeight: '100%' }}
          />
        </UserAvatarWrapper>
        <UserData>
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
        </UserData>
      </UserInfo>
      <Button onClick={handleNavigate}>{isUserSearch ? userButtonName : tweetButtonName}</Button>
    </Wrapper>
  );
};

export default SearchResultItem;
