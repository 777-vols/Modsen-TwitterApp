import { FC } from 'react';
import { useSelector } from 'react-redux';

import { allImages } from '@/constants/allImages';
import { IUser } from '@/pages/Profile/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  CardInfo,
  Image,
  Logo,
  NavItem,
  SmallAvatarImg,
  StyledLink,
  TweetButton,
  UserCard,
  UserEmail,
  UserName,
  Wrapper
} from './styled';

const { logoImg } = allImages;

const { buttonName, menuItems } = config;

const LeftMenu: FC = () => {
  const currentUser = useSelector(userSelector) as IUser;
  const { photo, name, email } = currentUser;

  return (
    <Wrapper>
      <Logo src={logoImg} alt="leftMenulogo" />
      <nav>
        {menuItems.map(({ name: itemName, image, path }) => (
          <NavItem key={path}>
            <Image src={image} alt={itemName} />
            <StyledLink to={path}>{itemName}</StyledLink>
          </NavItem>
        ))}
      </nav>
      <TweetButton>{buttonName}</TweetButton>
      <UserCard>
        <SmallAvatarImg src={photo} alt="userPhoto" />
        <CardInfo>
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
        </CardInfo>
      </UserCard>
    </Wrapper>
  );
};

export default LeftMenu;
