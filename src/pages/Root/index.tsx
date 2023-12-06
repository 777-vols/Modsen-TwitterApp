import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { Background } from '@/components/EditProfileModal/styled';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { signUpWithGoogleHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';

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
  MainHeader,
  NavItem,
  NavList,
  Panel,
  Section,
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
  haveAccountLink,
  errorNotificationText
} = config;

const { SIGN_UP, LOG_IN } = Urls;
const { banner, logoImg, googleIcon } = allImages;

const Root: FC = () => {
  const { authenticateUser, setErrorNotification, setIsLoading } = useAction();
  const isLoading = useSelector(isLoadingSelector) as boolean;

  const handleSignUpWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signUpWithGoogleHelper(authenticateUser);
    } catch (error) {
      setErrorNotification({
        message: errorNotificationText
      });
    }
  };

  return isLoading ? (
    <Background>
      <Loader />
    </Background>
  ) : (
    <Wrapper>
      <main>
        <Section>
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
              <EmailButton data-cy="emailRegistration" to={SIGN_UP}>
                {emailSignUp}
              </EmailButton>
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
                <TextLink data-cy="logInLink" to={LOG_IN}>
                  {haveAccountLink}
                </TextLink>
              </HaveAccount>
            </Content>
          </Panel>
        </Section>
      </main>

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
