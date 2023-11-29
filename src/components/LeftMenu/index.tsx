import { signOut } from 'firebase/auth';
import { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
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
  Logo,
  LogOutButton,
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

const { logoImg } = allImages;

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
            <NavItem key={path}>
              <Image src={image} alt={itemName.toLowerCase()} />
              <StyledLink to={`/profile/${id}`}>{itemName}</StyledLink>
            </NavItem>
          );
        }
        return (
          <NavItem key={path}>
            <Image src={image} alt={itemName} />
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
        <Logo src={logoImg} alt="logo" />

        <nav>{itemsArray}</nav>

        <TweetButton onClick={closeOpenModal}>{tweetButton}</TweetButton>

        <UserCard>
          <SmallAvatarImg src={photo} alt="menu avatar" />
          <CardInfo>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
          </CardInfo>
        </UserCard>

        <LogOutButton onClick={handleLogOut}>{logOutButton}</LogOutButton>
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
