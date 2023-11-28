import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Checkbox from '@/components/Checkbox';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { UserName } from '@/pages/Profile/styled';

import { config } from './config';
import {
  BackButton,
  BackImage,
  BackWrapper,
  BurgerMenuButton,
  HeaderInfo,
  HomeHeader,
  PageName,
  ProfileHeader,
  StyledBar,
  TweetsNumber,
  Wrapper
} from './styled';
import { IProps } from './types';

const { HOME } = Urls;
const { arrowBack } = allImages;
const { homePageName, tweets } = config;

const Header: FC<IProps> = ({ userName, tweetsCount, isAuthorizedUser }) => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathUserIdIndex = 2;
  const pathTweetId = pathname.split('/')[pathUserIdIndex];
  const isHomePage = pathname.split('/').includes(HOME.split('/')[1]);

  const handleBackToHomePage = () => {
    navigate(HOME);
  };

  const burgerButtonHandler = () => {
    setBurgerMenuIsOpen((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <BurgerMenuButton className={burgerMenuIsOpen ? 'active' : ''} onClick={burgerButtonHandler}>
        <StyledBar />
        <StyledBar />
        <StyledBar />
      </BurgerMenuButton>

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
