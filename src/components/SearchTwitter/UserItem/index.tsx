import { FC } from 'react';

import { UserEmail } from '@/components/LeftMenu/styled';
import { Avatar } from '@/components/Tweet/styled';

import { Button, UserData, UserName, Wrapper } from './styled';
import { IProps } from './types';

const UserItem: FC<IProps> = (props) => {
  const { name, photo, email } = props;

  return (
    <Wrapper>
      <Avatar src={photo} />
      <UserData>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </UserData>
      <Button>Follow</Button>
    </Wrapper>
  );
};

export default UserItem;
