import { ChangeEvent, FC, memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';

import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { searchRecommemdedUsersHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { IUser } from '@/pages/Profile/types';
import { config as rootConfig } from '@/pages/Root/config';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import SearchResultItem from './SearchResultItem';
import {
  Button,
  Content,
  Image,
  Input,
  LodaderWrapper,
  NavItem,
  NavList,
  SearchForm,
  SearchResult,
  Signature,
  StyledLink,
  TextLink,
  Title,
  Wrapper
} from './styled';
import { IProps, SetState } from './types';

const { PROFILE } = Urls;

const { searchIcon } = allImages;

const { mainTitle, showMore, errorNotificationText } = config;
const { footerLinks, company } = rootConfig;

const SearchTwitter: FC<IProps> = (props) => {
  const { placeholder, searchData, errorText, currentUserId } = props;

  const [inputValue, setInputValue] = useState<string>('');
  const [usersArray, setUsersArray] = useState<IUser[]>([]);
  const [tweetsArray, setTweetsArray] = useState<ITweet[]>([]);
  const { setErrorNotification } = useAction();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authorizedUser = useSelector(userSelector) as IUser;
  const { pathname } = useLocation();

  const isProfilePage = pathname.split('/').includes(PROFILE.split('/')[1]);

  const searchResultArray = useMemo(() => {
    if (inputValue !== '' && isProfilePage) {
      return tweetsArray
        .filter((tweet) => tweet.author.id === currentUserId)
        .map(({ id, author }) => <SearchResultItem key={id} tweetId={id} author={author} />);
    }
    return usersArray.map((author) => <SearchResultItem key={v4()} author={author} isUserSearch />);
  }, [currentUserId, inputValue, isProfilePage, tweetsArray, usersArray]);

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue === '') {
        setIsLoading(true);
        const users = await searchRecommemdedUsersHelper(authorizedUser.id);
        setUsersArray(users);
      }
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
    setIsLoading(false);
  }, [authorizedUser.id, inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const setResultItemsArray = async <T,>(stateSetter: SetState<T[]>) => {
    if (inputValue) {
      setIsLoading(true);
      const data = (await searchData(inputValue)) as T[];
      setIsLoading(false);

      if (data.length === 0) {
        setErrorNotification({
          message: errorText
        });
      }

      stateSetter(data);
    }
  };

  const handleSubmitForm = async () => {
    try {
      if (isProfilePage) {
        await setResultItemsArray(setTweetsArray);
      } else {
        await setResultItemsArray(setUsersArray);
      }
    } catch (error) {
      setErrorNotification({
        message: errorNotificationText
      });
    }
  };

  useEffect(() => {
    const timerId = setTimeout(handleSubmitForm, 700);
    return () => clearTimeout(timerId);
  }, [inputValue]);

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmitForm}>
        <Button type="submit">
          <Image src={searchIcon} alt="search" />
        </Button>
        <Input placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
      </SearchForm>
      <Content>
        <Title>{mainTitle}</Title>
        <SearchResult>
          {isLoading ? (
            <LodaderWrapper>
              <Loader size={50} />
            </LodaderWrapper>
          ) : (
            searchResultArray
          )}
        </SearchResult>
        <TextLink to="#">{showMore}</TextLink>
      </Content>
      <NavList>
        {footerLinks.map(({ name, path }) => (
          <NavItem key={name}>
            <StyledLink to={path}>{name}</StyledLink>
          </NavItem>
        ))}
        <NavItem>
          <Signature>{company}</Signature>
        </NavItem>
      </NavList>
      <Notification />
    </Wrapper>
  );
};

export default memo(SearchTwitter);
