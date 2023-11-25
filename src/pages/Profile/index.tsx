import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { FirebaseCollections } from '@/api/firebase/constants';
import { getFirebaseDoc } from '@/api/firebase/firebaseHelpers';
import CreateTweet from '@/components/CreateTweet';
import EditProfileModal from '@/components/EditProfileModal';
import LeftMenu from '@/components/LeftMenu';
import { UserEmail } from '@/components/LeftMenu/styled';
import NoTweets from '@/components/NoTweets';
import SearchTwitter from '@/components/SearchTwitter';
import Tweet from '@/components/Tweet';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { searchTweetHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { TextLink } from '@/pages/Root/styled';
import { allTweetsSelector } from '@/store/slices/tweetsSlice/selectors';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  BackButton,
  Banner,
  CreateTweetWrapper,
  Description,
  EditProfileButton,
  Following,
  FollowingInfo,
  Header,
  HeaderContent,
  Info,
  Main,
  Name,
  ProfileInfo,
  RightPart,
  SideBar,
  TweetsBlockHeader,
  TweetsNumber,
  UserAvatar,
  UserInfo,
  UserName,
  Wrapper
} from './styled';
import { IUser } from './types';

const { HOME } = Urls;

const { profileBackground, arrowBack, defaultUserPhoto } = allImages;

const { USERS_COLLECTION } = FirebaseCollections;

const {
  tweets,
  following,
  followers,
  editProfile,
  defaultCount,
  defaultDescriptionText,
  defaultDescriptionLink,
  searchPlaceholder,
  searchError
} = config;

const Profile: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState(useSelector(userSelector) as IUser);
  const authorizedUser = useSelector(userSelector) as IUser;
  const tweetsArray = useSelector(allTweetsSelector);
  const navigate = useNavigate();
  const { setErrorNotification } = useAction();

  const { id: currentUserId, photo, name, email } = user;

  const { pathname } = useLocation();
  const pathUserIdIndex = 2;
  const pathUserId = pathname.split('/')[pathUserIdIndex];

  useEffect(() => {
    const fetchData = async () => {
      const userFoundInSearch = (await getFirebaseDoc(USERS_COLLECTION, pathUserId)) as IUser;

      if (userFoundInSearch) {
        setUser(userFoundInSearch);
      }
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
  }, [currentUserId, pathUserId]);

  const arrayOfTweetComponents = useMemo(
    () =>
      tweetsArray
        .filter((tweet: ITweet) => tweet.author.id === user.id)
        .sort((tweet1, tweet2) => tweet2.date - tweet1.date)
        .map((tweet: ITweet) => (
          <Tweet
            key={tweet.id}
            tweetData={tweet}
            currentUserId={currentUserId}
            isUserAuth={authorizedUser.id === user.id}
          />
        )),
    [authorizedUser.id, currentUserId, tweetsArray, user.id]
  );

  const handleBackToHomePage = () => {
    navigate(HOME);
  };

  const closeOpenModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  return (
    <Wrapper>
      <SideBar>
        <LeftMenu />
      </SideBar>

      <Main>
        <Header>
          <HeaderContent>
            {authorizedUser.id !== user.id && (
              <BackButton onClick={handleBackToHomePage}>
                <img src={arrowBack} alt="arrow back" />
              </BackButton>
            )}
            <Info>
              <UserName>{name}</UserName>
              <TweetsNumber>
                {arrayOfTweetComponents.length} {tweets}
              </TweetsNumber>
            </Info>
          </HeaderContent>
        </Header>

        <Banner src={profileBackground} alt="profile banner" />

        <ProfileInfo>
          <UserAvatar src={photo || defaultUserPhoto} alt="profile avatar" />
          <UserInfo>
            <Name>{name}</Name>
            <UserEmail>{email}</UserEmail>
            <Description>
              {defaultDescriptionText} <TextLink to="#">{defaultDescriptionLink}</TextLink>
            </Description>
          </UserInfo>
          <FollowingInfo>
            <Following>
              <b>{defaultCount}</b> {following}
            </Following>
            <Following>
              <b>{defaultCount}</b> {followers}
            </Following>
          </FollowingInfo>
          {authorizedUser.id === user.id && (
            <EditProfileButton onClick={closeOpenModal}>{editProfile}</EditProfileButton>
          )}
        </ProfileInfo>

        {authorizedUser.id === user.id && (
          <CreateTweetWrapper>
            <CreateTweet />
          </CreateTweetWrapper>
        )}

        <TweetsBlockHeader>{tweets}</TweetsBlockHeader>

        {arrayOfTweetComponents.length > 0 ? arrayOfTweetComponents : <NoTweets />}
      </Main>

      <RightPart>
        <SearchTwitter
          placeholder={searchPlaceholder}
          searchData={searchTweetHelper}
          errorText={searchError}
        />
      </RightPart>

      {isModalOpen && (
        <Portal>
          <EditProfileModal handleCloseModal={closeOpenModal} />
        </Portal>
      )}
    </Wrapper>
  );
};

export default memo(Profile);
