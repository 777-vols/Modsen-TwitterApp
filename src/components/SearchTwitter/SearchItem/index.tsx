import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserEmail } from '@/components/LeftMenu/styled';
import { Avatar } from '@/components/Tweet/styled';
import { allImages } from '@/constants/allImages';

import { config } from './config';
import { Button, UserData, UserName, Wrapper } from './styled';
import { IProps } from './types';

const { defaultUserPhoto } = allImages;

const { userButtonName, tweetButtonName } = config;

const SearchItem: FC<IProps> = (props) => {
  const { id, name, photo, email, isUserSearch } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (isUserSearch) {
      navigate(`/profile/${id}`);
    } else {
      navigate(`/feed/${id}`);
    }
  };

  return (
    <Wrapper>
      <Avatar src={photo || defaultUserPhoto} />
      <UserData>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </UserData>
      <Button onClick={handleNavigate}>{isUserSearch ? userButtonName : tweetButtonName}</Button>
    </Wrapper>
  );
};

export default SearchItem;
