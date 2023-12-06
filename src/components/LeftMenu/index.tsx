import 'react-lazy-load-image-component/src/effects/blur.css';

import { signOut } from 'firebase/auth';
import { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';

import { auth } from '@/api/firebase/firebase';
import AddTweetModal from '@/components/AddTweetModal';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { useAction } from '@/hooks/useAction';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { IUser } from '@/pages/Profile/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  BurgerMenuButton,
  CardInfo,
  Image,
  LogOutButton,
  LogoWrapper,
  Menu,
  NavItem,
  SmallAvatarImg,
  StyledBar,
  StyledLink,
  TweetButton,
  UserCard,
  UserEmail,
  UserName,
  Wrapper
} from './styled';

const { logoImg, defaultUserPhoto } = allImages;

const { tweetButton, logOutButton, menuItems } = config;
const { PROFILE } = Urls;

const LeftMenu: FC = () => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentUser = useSelector(userSelector) as IUser;
  const { deauthenticateUser } = useAction();
  const menuRef = useRef(null);

  const { id, photo, name, email } = currentUser;

  const itemsArray = useMemo(
    () =>
      menuItems.map(({ name: itemName, image, path }) => {
        if (path === PROFILE) {
          return (
            <NavItem data-testid="menuItem" key={path}>
              <Image src={image} alt={itemName.toLowerCase()} />
              <StyledLink to={`/profile/${id}`}>{itemName}</StyledLink>
            </NavItem>
          );
        }
        return (
          <NavItem data-testid="menuItem" key={path}>
            <Image src={image} alt={itemName.toLowerCase()} />
            <StyledLink to={path}>{itemName}</StyledLink>
          </NavItem>
        );
      }),
    [id]
  );

  const burgerButtonHandler = useCallback(() => {
    setBurgerMenuIsOpen((prevState) => !prevState);
  }, []);

  useOnClickOutside(menuRef, () => {
    if (burgerMenuIsOpen) {
      burgerButtonHandler();
    }
  });

  const closeOpenModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  const handleLogOut = async () => {
    await signOut(auth);
    deauthenticateUser();
  };

  return (
    <Wrapper ref={menuRef}>
      <BurgerMenuButton className={burgerMenuIsOpen ? 'active' : ''} onClick={burgerButtonHandler}>
        <StyledBar />
        <StyledBar />
        <StyledBar />
      </BurgerMenuButton>

      <Menu open={burgerMenuIsOpen}>
        <LogoWrapper>
          <LazyLoadImage
            src={logoImg}
            alt="logo"
            effect="blur"
            width="100%"
            style={{ maxHeight: '100%' }}
          />
        </LogoWrapper>

        <nav>{itemsArray}</nav>

        <TweetButton data-cy="leftMenuAddTweet" onClick={closeOpenModal}>
          {tweetButton}
        </TweetButton>

        <UserCard>
          <SmallAvatarImg src={photo || defaultUserPhoto} alt="menu avatar" />
          <CardInfo>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
          </CardInfo>
        </UserCard>

        <LogOutButton data-cy="logOutButton" onClick={handleLogOut}>
          {logOutButton}
        </LogOutButton>
      </Menu>

      {isModalOpen && (
        <Portal>
          <AddTweetModal handleCloseModal={closeOpenModal} />
        </Portal>
      )}
    </Wrapper>
  );
};

export default memo(LeftMenu);
