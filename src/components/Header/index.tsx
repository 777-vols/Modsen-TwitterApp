import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ToogleTheme from '@/components/ToogleTheme';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { checkIsProfilePage, getTweetIdFromUrl } from '@/helpers/urlHelpers';
import { UserName } from '@/pages/Profile/styled';

import LeftMenu from '../LeftMenu';
import { config } from './config';
import {
  BackButton,
  BackImage,
  BackWrapper,
  HeaderInfo,
  HomeHeader,
  MenuWrapper,
  PageName,
  ProfileHeader,
  TweetsNumber,
  Wrapper
} from './styled';
import { IProps } from './types';

const { HOME } = Urls;
const { arrowBack } = allImages;
const { tweets } = config;

const Header: FC<IProps> = (props) => {
  const { userName, tweetsCount, isAuthorizedUser, pageName } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathTweetId = getTweetIdFromUrl(pathname);
  const isProfilePage = checkIsProfilePage(pathname);

  const handleBackToHomePage = () => {
    navigate(HOME);
  };

  return (
    <Wrapper data-cy="header">
      <MenuWrapper>
        <LeftMenu />
      </MenuWrapper>

      {isProfilePage ? (
        <ProfileHeader>
          {isAuthorizedUser && (
            <BackButton onClick={handleBackToHomePage}>
              <BackImage src={arrowBack} alt="arrow back" />
            </BackButton>
          )}
          <HeaderInfo>
            <UserName data-cy="headerUserName">{userName}</UserName>
            <TweetsNumber>
              {tweetsCount} {tweets}
            </TweetsNumber>
          </HeaderInfo>
        </ProfileHeader>
      ) : (
        <HomeHeader>
          <BackWrapper>
            {pathTweetId && (
              <BackButton onClick={handleBackToHomePage}>
                <img src={arrowBack} alt="arrow back" />
              </BackButton>
            )}
            <PageName data-cy="headerTitle">{pageName}</PageName>
          </BackWrapper>
          <ToogleTheme />
        </HomeHeader>
      )}
    </Wrapper>
  );
};

export default Header;
