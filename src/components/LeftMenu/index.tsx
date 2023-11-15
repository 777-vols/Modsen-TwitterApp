import { FC } from 'react';

import { allImages } from '@/constants/allImages';

import { config } from './config';
import { Button, Image, Logo, NavItem, StyledLink, Wrapper } from './styled';

const { logoImg } = allImages;

const { menuItems } = config;

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
    <Button>Tweet</Button>
  </Wrapper>
);

export default LeftMenu;
