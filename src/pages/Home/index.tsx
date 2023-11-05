import { FC } from 'react';

import bagckgoundImage from '@/assets/backTwitter.png';

import { config } from './config';
import {
  BagckgoundImage,
  Footer,
  Main,
  NavItem,
  NavList,
  StyledNavLink,
  StyledSpan,
  Wrapper
} from './styled';

const { footerLinks, company } = config;

const Home: FC = () => (
  <Wrapper>
    <Main>
      <BagckgoundImage alt="bagckgoundImage" src={bagckgoundImage} />
    </Main>
    <Footer>
      <nav>
        <NavList>
          {footerLinks.map(({ name, path }) => (
            <NavItem key={name}>
              <StyledNavLink to={path}>{name}</StyledNavLink>
            </NavItem>
          ))}
          <NavItem>
            <StyledSpan>{company}</StyledSpan>
          </NavItem>
        </NavList>
      </nav>
    </Footer>
  </Wrapper>
);

export default Home;
