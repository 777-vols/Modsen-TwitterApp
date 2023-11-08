import { signInWithPopup } from 'firebase/auth';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { auth, provider } from '@/api/firebase/firebase';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { TypeDispatch } from '@/store';
import { actionCreators } from '@/store/slices/actionCreators';

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

const { SIGN_UP, LOG_IN } = Urls;

const { banner, logoImg, googleIcon } = allImages;

const { authenticateUser } = actionCreators;

const Home: FC = () => {
  const dispatch = useDispatch<TypeDispatch>();

  const handleGoogleSignUp = () => {
    try {
      const result = signInWithPopup(auth, provider).then((data) => {
        dispatch(authenticateUser());
        const { user } = data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Main>
        <Banner alt="bagckgoundImage" src={banner} />
        <Panel>
          <Content>
            <Logo alt="logoImg" src={logoImg} />
            <MainHeader>{mainHeader}</MainHeader>
            <SubHeader>{subHeader}</SubHeader>
            <GoogleButton onClick={handleGoogleSignUp}>
              <img alt="googleIcon" src={googleIcon} />
              {googleSignUp}
            </GoogleButton>
            <EmailButton to={SIGN_UP}>{emailSignUp}</EmailButton>
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
              <TextLink to={LOG_IN}>{haveAccountLink}</TextLink>
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
};

export default Home;
