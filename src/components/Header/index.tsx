import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Checkbox from '@/components/Checkbox';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
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
const { homePageName, tweets } = config;

const Header: FC<IProps> = ({ userName, tweetsCount, isAuthorizedUser }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathUserIdIndex = 2;
  const pathTweetId = pathname.split('/')[pathUserIdIndex];
  const isHomePage = pathname.split('/').includes(HOME.split('/')[1]);

  const handleBackToHomePage = () => {
    navigate(HOME);
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <LeftMenu />
      </MenuWrapper>

      {isHomePage ? (
        <HomeHeader>
          <BackWrapper>
            {pathTweetId && (
              <BackButton onClick={handleBackToHomePage}>
                <img src={arrowBack} alt="arrow back" />
              </BackButton>
            )}
            <PageName>{homePageName}</PageName>
          </BackWrapper>
          <Checkbox />
        </HomeHeader>
      ) : (
        <ProfileHeader>
          {isAuthorizedUser && (
            <BackButton onClick={handleBackToHomePage}>
              <BackImage src={arrowBack} alt="arrow back" />
            </BackButton>
          )}
          <HeaderInfo>
            <UserName>{userName}</UserName>
            <TweetsNumber>
              {tweetsCount} {tweets}
            </TweetsNumber>
          </HeaderInfo>
        </ProfileHeader>
      )}
    </Wrapper>
  );
};

export default Header;
