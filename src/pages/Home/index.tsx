import { FC } from 'react';

import banner from '@/assets/backTwitter.png';
import googleIcon from '@/assets/googleIcon.svg';
import logoImg from '@/assets/twitterLogo.svg';
import { Urls } from '@/constants/urls';

import { config } from './config';
import {
  AgreeRule,
  Banner,
  Content,
  EmailButton,
  Footer,
  FooterLink,
  GoogleButton,
  HaveAccount,
  Logo,
  Main,
  MainHeader,
  NavItem,
  NavList,
  Panel,
  StyledSpan,
  SubHeader,
  TextLink,
  Wrapper
} from './styled';

const {
  footerLinks,
  company,
  mainHeader,
  subHeader,
  googleSignUp,
  emailSignUp,
  agreeText,
  agreeLinks,
  haveAccountText,
  haveAccountLink
} = config;

const Home: FC = () => (
  <Wrapper>
    <Main>
      <Banner alt="bagckgoundImage" src={banner} />
      <Panel>
        <Content>
          <Logo alt="logoImg" src={logoImg} />
          <MainHeader>{mainHeader}</MainHeader>
          <SubHeader>{subHeader}</SubHeader>
          <GoogleButton>
            <img alt="googleIcon" src={googleIcon} />
            {googleSignUp}
          </GoogleButton>
          <EmailButton to={Urls.SIGN_UP}>{emailSignUp}</EmailButton>
          <AgreeRule>
            {agreeText[0]}
            <TextLink to={agreeLinks[0].path}>{agreeLinks[0].name}</TextLink>
            {agreeText[1]}
            <TextLink to={agreeLinks[1].path}>{agreeLinks[1].name}</TextLink>
            {agreeText[2]}
            <TextLink to={agreeLinks[2].path}>{agreeLinks[2].name}</TextLink>
            {agreeText[3]}
          </AgreeRule>
          <HaveAccount>
            {haveAccountText}
            <TextLink to={Urls.LOG_IN}>{haveAccountLink}</TextLink>
          </HaveAccount>
        </Content>
      </Panel>
    </Main>
    <Footer>
      <nav>
        <NavList>
          {footerLinks.map(({ name, path }) => (
            <NavItem key={name}>
              <FooterLink to={path}>{name}</FooterLink>
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
