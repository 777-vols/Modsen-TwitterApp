import { FC, memo } from 'react';

import Notification from '@/components/Notification';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { signUpWithGoogleHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';

import { config } from './config';
import {
  AgreeRule,
  Banner,
  Content,
  EmailButton,
  Footer,
  FooterLink,
  GoogleButton,
  GoogleButtonImg,
  HaveAccount,
  Logo,
  Main,
  MainHeader,
  NavItem,
  NavList,
  Panel,
  Signature,
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

const Root: FC = () => {
  const { authenticateUser, setErrorNotification } = useAction();

  const handleSignUpWithGoogle = async () => {
    await signUpWithGoogleHelper(authenticateUser, setErrorNotification);
  };

  return (
    <Wrapper>
      <Main>
        <Banner alt="banner" src={banner} />
        <Panel>
          <Content>
            <Logo alt="logo" src={logoImg} />
            <MainHeader>{mainHeader}</MainHeader>
            <SubHeader>{subHeader}</SubHeader>
            <GoogleButton onClick={handleSignUpWithGoogle}>
              <GoogleButtonImg alt="google icon" src={googleIcon} />
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
              <Signature>{company}</Signature>
            </NavItem>
          </NavList>
        </nav>
      </Footer>
      <Notification />
    </Wrapper>
  );
};

export default memo(Root);
