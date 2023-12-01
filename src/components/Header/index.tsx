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

const { HOME, PROFILE } = Urls;
const { arrowBack } = allImages;
const { tweets } = config;

const Header: FC<IProps> = (props) => {
  const { userName, tweetsCount, isAuthorizedUser, pageName } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathUserIdIndex = 2;
  const pathTweetId = pathname.split('/')[pathUserIdIndex];
  const isProfilePage = pathname.split('/').includes(PROFILE.split('/')[1]);

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
            <UserName>{userName}</UserName>
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
          <Checkbox />
        </HomeHeader>
      )}
    </Wrapper>
  );
};

export default Header;
