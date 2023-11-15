import { FC } from 'react';

import { allImages } from '@/constants/allImages';

import { config } from './config';
import { Image, Logo, NavItem, StyledLink, TweetButton, Wrapper } from './styled';

const { logoImg } = allImages;

const { buttonName, menuItems } = config;

const LeftMenu: FC = () => (
  <Wrapper>
    <Logo src={logoImg} alt="leftMenulogo" />
    <nav>
      {menuItems.map(({ name, image, path }) => (
        <NavItem key={path}>
          <Image src={image} alt={name} />
          <StyledLink to={path}>{name}</StyledLink>
        </NavItem>
      ))}
    </nav>
    <TweetButton>{buttonName}</TweetButton>
  </Wrapper>
);

export default LeftMenu;
